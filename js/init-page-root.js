// init-page-root.js — v7.3.5 (No White Screen + Safe 404 + Auto .html)
(function(){
  'use strict';

  // ⬇️⬇️⬇️⬇️⬇️ غيّر هذا السطر فقط عند كل تحديث ⬇️⬇️⬇️⬇️⬇️
  const VERSION = 'v7.3.5';
  // ⬆️⬆️⬆️⬆️⬆️ غيّر هذا السطر فقط عند كل تحديث ⬆️⬆️⬆️⬆️⬆️

  console.log(`🛡️ [init] ${VERSION} (المرعبة الكاملة)...`);

  const IS_APK = location.protocol === 'file:' || navigator.userAgent.includes('wv');

  // 🛡️ تنظيف الرابط من أي سلاش مزدوج (//)
  if (location.pathname.includes('//')) {
      const cleanUrl = location.pathname.replace(/\/+/g, '/');
      window.history.replaceState(null, '', cleanUrl + location.search + location.hash);
      console.log('🧹 [المرعبة] تم تنظيف الرابط المزدوج:', cleanUrl);
  }

  function asset(path){
    const clean = path.replace(/^\//,'');
    return IS_APK? clean : '/' + clean;
  }

  function detectPageMode(){
    const s = document.currentScript;
    const m = [document.body?.dataset?.pageMode, document.documentElement?.dataset?.pageMode, s?.dataset?.pageMode]
     .map(v=>String(v||'').toLowerCase()).find(v=>['safe','full','minimal'].includes(v));
    if(m) return m;
    if(s?.hasAttribute('data-no-splash')) return 'safe';
    if(location.pathname.toLowerCase().startsWith('/app/catalog')) return 'safe';
    return 'full'; 
  }

  let PAGE_MODE = detectPageMode();
  window.__WAHA_PAGE_MODE = PAGE_MODE;
  let splashHidden = true;

  // 📱 دالة إظهار النسخة على الشاشة (للهاتف بدون Console)
  function showVersionToast(){
    if (PAGE_MODE === 'safe') return;
    const t = document.createElement('div');
    t.textContent = `✅ ${VERSION}`;
    t.style.cssText = `
      position:fixed; top:10px; left:50%; transform:translateX(-50%);
      background:#0a0a0f; color:#6ae3ff; padding:8px 18px;
      border:2px solid #c9a84c; border-radius:20px;
      font-weight:900; font-size:14px; z-index:9999999;
      font-family:system-ui,sans-serif; box-shadow:0 4px 20px rgba(0,0,0,.5);
      transition:opacity .5s; direction:ltr; pointer-events:none;
    `;
    document.body?.prepend(t);
    setTimeout(()=>{ 
      t.style.opacity='0'; 
      setTimeout(()=>t.remove(), 500); 
    }, 3000);
  }

  function hideSplash(){
    if(splashHidden) return;
    splashHidden = true;
    const el = document.getElementById('splashScreen');
    if(el){ el.classList.add('hidden'); setTimeout(()=>{ el.remove(); document.getElementById('splash-style')?.remove(); },700); }
  }
  
  window.addEventListener('load', ()=> setTimeout(hideSplash, 800));
  setTimeout(hideSplash, 3500);

  function createSplash(){
    if(PAGE_MODE!== 'full' || document.getElementById('splashScreen')) return;
    splashHidden = false;
    const st = document.createElement('style');
    st.id='splash-style';
    st.textContent=`#splashScreen{position:fixed;inset:0;background:#0a0a0f;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:999999;transition:opacity.5s}#splashScreen.hidden{opacity:0;pointer-events:none}`;
    document.head.appendChild(st);
    const d=document.createElement('div');
    d.id='splashScreen';
    d.innerHTML=`
      <img src="${asset('icon-192.png')}" style="width:90px;height:90px;border-radius:50%;border:3px solid #c9a84c">
      <div style="color:#6ae3ff;font-weight:900;margin-top:15px">واحة الجبري</div>
      <div style="color:#c9a84c;font-size:11px;margin-top:8px;font-family:monospace;direction:ltr">${VERSION}</div>
    `;
    document.body.prepend(d);
  }

  function loadHTMLFile(id, file, onOk){
    const ph=document.getElementById(id);
    if(!ph){ onOk?.(); return; }
    const url = asset(file);

    if(!ph.innerHTML.trim()) ph.innerHTML = '<div style="height:60px"></div>';

    fetch(url + (IS_APK?'':'?_t='+Date.now()), {cache:'no-store'})
     .then(r=>{ if(!r.ok) throw new Error(r.status); return r.text(); })
     .then(html=>{
        ph.innerHTML = html;
        ph.dataset.loaded='true';
        const scripts=[...ph.querySelectorAll('script')];
        scripts.forEach(old=>{
          if(old.src && old.src.includes('menu.js')) return;
          const s=document.createElement('script');
          [...old.attributes].forEach(a=>s.setAttribute(a.name,a.value));
          s.textContent = old.textContent;
          if(old.src) s.src = old.src;
          old.replaceWith(s);
        });
        onOk?.();
      })
     .catch(()=>{ onOk?.(); });
  }

  // ✅ إضافة .html تلقائياً (بعد التحقق من وجودها)
  function autoAddHtml(){
    const path = location.pathname;
    if (path.endsWith('.html') || path === '/' || path.endsWith('/')) return;
    if (['/ar','/ar/','/en','/en/'].includes(path)) return;

    const newPath = path + '.html';
    fetch(asset(newPath), {method:'HEAD', cache:'no-store'})
      .then(r => {
        if (r.ok) {
          console.log('🔄 [المرعبة] تحويل تلقائي إلى:', newPath);
          location.replace(newPath + location.search + location.hash);
        }
        // إذا فشل → نترك handle404NonBlocking يتصرف
      })
      .catch(()=>{ /* لا شيء */ });
  }

  // ✅ دالة 404 (المرعبة)
  function handle404NonBlocking(){
    const path = location.pathname;
    
    if (path.endsWith('.html') || ['/', '/ar','/ar/','/en','/en/'].includes(path)) {
      return;
    }

    let clean = path.replace(/^\/(ar|en)(\/|$)/i,'/');
    if(clean==='/' || clean==='') return;
    clean = clean.replace(/\/+/g, '/');

    const key='waha_404_'+path;
    try{ if(sessionStorage.getItem(key)) return; sessionStorage.setItem(key,'1'); }catch(e){}

    let candidates = [];
    
    const addCandidate = (c) => {
        let safe = c.replace(/\/+/g, '/'); 
        if (!safe.startsWith('/')) safe = '/' + safe;
        if (safe !== path) candidates.push(safe);
    };

    addCandidate(clean);
    addCandidate(clean + '.html');
    addCandidate(clean + '/index.html');

    if (!path.startsWith('/ar/') && !path.startsWith('/en/')) {
        addCandidate('/ar' + clean);
        addCandidate('/ar' + clean + '.html');
        addCandidate('/en' + clean);
        addCandidate('/en' + clean + '.html');
    }

    candidates = [...new Set(candidates)]
        .filter(c => !c.includes('//'))
        .slice(0, 8);

    console.log('🔍 [المرعبة] تجرب:', candidates);

    setTimeout(()=>{
      let i=0;
      const tryNext=()=>{
        if(i>=candidates.length) return;
        fetch(asset(candidates[i]), {method:'HEAD', cache:'no-store'})
        .then(r=>{
           if(r.ok){
             console.log('✅ وجدتها:', candidates[i]);
             const finalUrl = candidates[i].replace(/\/+/g, '/');
             location.replace(finalUrl + location.search + location.hash);
           }else{ i++; tryNext(); }
         })
        .catch(()=>{ i++; tryNext(); });
      };
      tryNext();
    }, 700);
  }

  // اللغة - تحافظ على المسار الفرعي
  window.switchLanguage = function(){
    const isEn = location.pathname.toLowerCase().startsWith('/en');
    const target = isEn? 'ar' : 'en';
    let p = location.pathname;
    if(/^\/(ar|en)(\/|$)/i.test(p)){
      p = p.replace(/^\/(ar|en)/i, '/'+target);
    } else {
      p = `/${target}${p.startsWith('/')?p:'/'+p}`;
    }
    location.href = p + location.search + location.hash;
  };
  window.toggleLang = window.switchLanguage;

  // 🔍 فحص سريع من الكونسول (اختياري)
  window.__WAHA_CHECK__ = function(){
    return {
      version: VERSION,
      mode: window.__WAHA_PAGE_MODE,
      apk: IS_APK,
      url: location.href,
      time: new Date().toISOString()
    };
  };

  function init(){
    try{
      document.documentElement.lang = location.pathname.toLowerCase().startsWith('/en')?'en':'ar';
      document.documentElement.dir = document.documentElement.lang==='ar'?'rtl':'ltr';

      if(PAGE_MODE==='full') createSplash();

      // 📱 إظهار النسخة على الشاشة بعد 500ms
      setTimeout(showVersionToast, 500);

      loadHTMLFile('header-placeholder','header.html',()=>{
        document.dispatchEvent(new CustomEvent('headerLoaded'));
        if(PAGE_MODE==='full') setTimeout(hideSplash, 200);
      });
      loadHTMLFile('footer-placeholder','footer.html',()=>{
        if(PAGE_MODE!=='full') hideSplash();
      });

      if(!document.getElementById('header-placeholder')) hideSplash();

      // ✅ ترتيب صحيح: أولاً .html ثم 404
      autoAddHtml();
      setTimeout(handle404NonBlocking, 1000);

    }catch(e){ console.error(e); hideSplash(); }
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();