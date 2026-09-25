// init-page-root.js — v8.0.1 (Smart 404 + Sequential Boot + Tri-Lang Toggle)
(function(){
  'use strict';
  console.log('🛡️ [init] v8.0.1 — locked & loaded...');

  const IS_APK = location.protocol === 'file:' || navigator.userAgent.includes('wv');

  /* ============ 1) أدوات المسار ============ */
  function asset(path){
    const clean = path.replace(/^\//,'');
    return IS_APK ? clean : '/' + clean;
  }

  /* ============ 2) وضع الصفحة ============ */
  function detectPageMode(){
    const s = document.currentScript;
    const m = [document.body?.dataset?.pageMode,
               document.documentElement?.dataset?.pageMode,
               s?.dataset?.pageMode]
      .map(v=>String(v||'').toLowerCase())
      .find(v=>['safe','full','minimal'].includes(v));
    if(m) return m;
    if(s?.hasAttribute('data-no-splash')) return 'safe';
    if(location.pathname.toLowerCase().startsWith('/app/catalog')) return 'safe';
    return 'full';
  }
  let PAGE_MODE = detectPageMode();
  window.__WAHA_PAGE_MODE = PAGE_MODE;

  /* ============ 3) شاشة الانتظار ============ */
  let splashHidden = true;
  function hideSplash(){
    if(splashHidden) return;
    splashHidden = true;
    const el = document.getElementById('splashScreen');
    if(el){
      el.classList.add('hidden');
      setTimeout(()=>{
        el.remove();
        document.getElementById('splash-style')?.remove();
      }, 700);
    }
  }
  // fail-safe: لا شاشة بيضاء أبداً
  window.addEventListener('load', ()=> setTimeout(hideSplash, 1000));
  setTimeout(hideSplash, 5000);

  function createSplash(msg){
    if(PAGE_MODE !== 'full' || document.getElementById('splashScreen')) return;
    splashHidden = false;
    const st = document.createElement('style');
    st.id = 'splash-style';
    st.textContent = `
      #splashScreen{position:fixed;inset:0;background:#0a0a0f;display:flex;flex-direction:column;
        align-items:center;justify-content:center;z-index:999999;transition:opacity .5s}
      #splashScreen.hidden{opacity:0;pointer-events:none}
      #splashScreen .msg{color:#6ae3ff;font-weight:900;margin-top:15px;font-size:15px;min-height:22px}
      #splashScreen .bar{width:180px;height:3px;background:#1a1a25;border-radius:3px;margin-top:14px;overflow:hidden}
      #splashScreen .bar::after{content:'';display:block;height:100%;width:40%;background:#c9a84c;
        animation:sp 1.2s infinite ease-in-out}
      @keyframes sp{0%{transform:translateX(-100%)}100%{transform:translateX(350%)}}
    `;
    document.head.appendChild(st);
    const d = document.createElement('div');
    d.id = 'splashScreen';
    d.innerHTML = `
      <img src="${asset('icon-192.png')}" style="width:90px;height:90px;border-radius:50%;border:3px solid #c9a84c">
      <div class="msg" id="splashMsg">${msg || 'جارٍ التحميل...'}</div>
      <div class="bar"></div>
    `;
    document.body.prepend(d);
  }
  function setSplashMsg(msg){
    const el = document.getElementById('splashMsg');
    if(el) el.textContent = msg;
  }

  /* ============ 4) تحميل HTML مع فلترة menu.js ============ */
  function loadHTMLFile(id, file){
    return new Promise(resolve=>{
      const ph = document.getElementById(id);
      if(!ph){ resolve(false); return; }
      const url = asset(file) + (IS_APK ? '' : '?_t=' + Date.now());

      if(!ph.innerHTML.trim()) ph.innerHTML = '<div style="height:60px"></div>';

      fetch(url, {cache:'no-store'})
        .then(r=>{ if(!r.ok) throw new Error(r.status); return r.text(); })
        .then(html=>{
          ph.innerHTML = html;
          ph.dataset.loaded = 'true';

          // تنفيذ السكربتات — مع تجاهل menu.js (شرط #1)
          const scripts = [...ph.querySelectorAll('script')];
          scripts.forEach(old=>{
            if(old.src && old.src.includes('menu.js')){ old.remove(); return; }
            const s = document.createElement('script');
            [...old.attributes].forEach(a=>s.setAttribute(a.name, a.value));
            s.textContent = old.textContent;
            if(old.src) s.src = old.src;
            old.replaceWith(s);
          });
          resolve(true);
        })
        .catch(()=> resolve(false));
    });
  }

  /* ============ 5) اكتشاف 404 — تسلسل ذكي ============ */
  async function fileExists(url){
    try{
      const r = await fetch(asset(url), {method:'HEAD', cache:'no-store'});
      return r.ok;
    }catch(e){ return false; }
  }

  async function smart404(){
    const path = location.pathname;

    // تجاهل الصفحات الرئيسية
    if(['/','/ar','/ar/','/en','/en/','/index.html'].includes(path)) return;

    // منع التكرار في نفس الجلسة
    const key = 'waha_404_' + path;
    try{
      if(sessionStorage.getItem(key)) return;
      sessionStorage.setItem(key,'1');
    }catch(e){}

    // استخرج الجزء النظيف بدون ar/en
    const clean = path.replace(/^\/(ar|en)(\/|$)/i, '/') || '/';
    if(clean === '/' || clean === '') return;

    /* === التعديل #1: توليد المرشحين مع .html (شرط v7.4 المرحلة 1) === */
    const base = [`/ar${clean}`, `/en${clean}`, clean]
      .filter((c,i,a)=> c !== path && a.indexOf(c) === i);

    const candidates = [];
    base.forEach(c=>{
      candidates.push(c);
      if(!c.toLowerCase().endsWith('.html')) candidates.push(c + '.html');
    });

    /* === الخطوة 1: هل الصفحة الحالية فيها HTML حقيقي؟ === */
    const mainHTML = document.body.innerHTML.trim();
    const hasRealContent = mainHTML.length > 500 &&
                           !mainHTML.includes('404') &&
                           !mainHTML.includes('Not Found');

    if(!hasRealContent){
      setSplashMsg('🔍 جارٍ البحث عن الصفحة...');

      for(const c of candidates){
        if(await fileExists(c)){
          setSplashMsg('✅ وجدناها! جارٍ الفتح...');
          location.replace(c + location.search + location.hash);
          return;
        }
      }

      /* === الخيار الأخير: الأندكس === */
      setSplashMsg('🏠 العودة للرئيسية...');
      setTimeout(()=>{
        const lang = path.toLowerCase().startsWith('/en') ? 'en' : 'ar';
        location.replace(`/${lang}/` + location.search + location.hash);
      }, 600);
    }
  }

  /* ============ 6) toggleLanguage — ثلاثي ar ⇄ en ⇄ / (شرط #2) ============ */
  window.switchLanguage = function(){
    const path = location.pathname;

    /* استخرج المسار النظيف بدون ar/en prefix */
    const clean = path.replace(/^\/(ar|en)(\/|$)/i, '/') || '/';

    let newPath;
    if(/^\/ar(\/|$)/i.test(path)){
      newPath = '/en' + (clean === '/' ? '/' : clean);   // ar → en
    } else if(/^\/en(\/|$)/i.test(path)){
      newPath = clean;                                    // en → / (root)
    } else {
      newPath = '/ar' + (clean === '/' ? '/' : clean);   // / → ar
    }

    location.href = newPath + location.search + location.hash;
  };
  window.toggleLang = window.switchLanguage;
  window.toggleLanguage = window.switchLanguage;

  /* ============ 7) التهيئة — تسلسل صارم (شرط #2) ============ */
  async function init(){
    try{
      const lang = location.pathname.toLowerCase().startsWith('/en') ? 'en' : 'ar';
      document.documentElement.lang = lang;
      document.documentElement.dir  = lang === 'ar' ? 'rtl' : 'ltr';

      if(PAGE_MODE === 'full') createSplash('جارٍ التحميل...');

      /* --- 1) الهيدر أولاً --- */
      setSplashMsg('📥 تحميل الهيدر...');
      const headerOK = await loadHTMLFile('header-placeholder', 'header.html');
      document.dispatchEvent(new CustomEvent('headerLoaded', {detail:{ok:headerOK}}));
      console.log(headerOK ? '✅ الهيدر تحمّل' : '⚠️ فشل تحميل الهيدر');

      /* --- 2) الفوتر بعد الهيدر مباشرة --- */
      setSplashMsg('📥 تحميل الفوتر...');
      const footerOK = await loadHTMLFile('footer-placeholder', 'footer.html');
      console.log(footerOK ? '✅ الفوتر تحمّل' : '⚠️ فشل تحميل الفوتر');

      /* --- 3) إخفاء شاشة الانتظار بعد اكتمال التسلسل --- */
      if(!document.getElementById('header-placeholder') &&
         !document.getElementById('footer-placeholder')){
        hideSplash();
      } else {
        setSplashMsg('✨ جاهز');
        setTimeout(hideSplash, 250);
      }

      /* --- 4) فحص 404 بعد ظهور الصفحة --- */
      await smart404();

    }catch(e){
      console.error('❌ init error:', e);
      hideSplash();
    }
  }

  if(document.readyState === 'loading')
    document.addEventListener('DOMContentLoaded', init);
  else
    init();
})();