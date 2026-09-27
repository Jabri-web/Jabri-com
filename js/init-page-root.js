// init-page-root.js — v9.0 "Triple Search + Yemen Mirror + Anti-Loop"
// يحل مشكلة المرعبة 404 - يبحث في /, /ar, /en قبل الذهاب لـ all-links.html
(function(){
  'use strict';
  console.log('👁️ [init] v9.0 — Triple Search + Anti-Loop armed');

  const IS_APK = location.protocol === 'file:' || location.hostname === '' ||!!window.AndroidBridge;

  /* ============ 0) المصفوفة الاحتياطية الكاملة من file-all4.txt ============ */
  const FALLBACK_LIST = [
    "index.html", "logo.html", "catalog.html", "all-links.html", "table-all.html", "monitor.html",
    "Page1.html", "Page2.html", "Page3.html", "Page4.html", "Page5.html", "Page6.html",
    "Page7.html", "Page8.html", "Page9.html", "Page10.html", "Page11.html", "Page12.html",
    "about.html", "about-ar.html", "about-en.html", "about-waha.html",
    "Author-cv.html", "author-history.html", "cv-2026a.html", "cv-2026e.html", "founder.html", "profile.html", "profile-en.html",
    "theory-ar.html", "theory-en.html", "Sindbad-theory.html", "Sindbad-Brdoni.html",
    "research.html", "research-deep.html", "Pages-Researches.html",
    "Sanaa.html", "Shibam.html", "Soqatra.html", "Yemen-library.html", "gallery.html", "yemen-photo.html", "yemen-photo2.html",
    "journal.html", "journal2.html", "journal3.html", "journal4.html", "History-pdf.html",
    "calculator.html", "handsa.html", "char-balance.html", "Check.html", "magic-translator.html", "diagnose.html",
    "Dbase.html", "Dbase-deep.html", "microtik.html", "Office.html", "source.html", "citations.html", "music.html",
    "taraif.html", "Nezar.html", "wonder.html", "heaven-info.html", "visitor.html", "who-we.html", "project.html", "poster.html",
    "contact.html", "FAQPage.html", "FAQPage-en.html", "privacy-policy.html", "404.html",
    "file-structure.html", "Router-all.html", "repos-auto.html", "explore.html",
    "dashboard.html", "dashboard-pro.html", "catalogue.html",
    "ar/index.html", "ar/about.html", "ar/about-waha.html", "ar/contact.html", "ar/journal.html", "ar/profile.html", "ar/project.html", "ar/Router-all.html", "ar/Page4.html", "ar/Page10.html", "ar/Page11.html", "ar/Page12.html", "ar/dashboard.html",
    "en/index.html", "en/about.html", "en/about-waha.html", "en/contact.html", "en/journal.html", "en/profile.html", "en/project.html", "en/Router-all.html", "en/Page4.html", "en/Page10.html", "en/Page11.html", "en/Page12.html", "en/dashboard.html",
    "game/game-auto.html", "publish/publish.html",
    "technical-guide.html", "all-link-doc.html", "update-tracker.html"
  ];

  let FILE_LIST = [];
  let fileListReady = false;

  /* ============ 1) أدوات المسار ============ */
  function asset(path){
    const clean = String(path||'').replace(/^\//,'');
    return IS_APK? clean : '/' + clean;
  }

  /* ============ 2) تحميل قائمة الملفات آلياً - نظام مزدوج ============ */
  async function loadFileList(){
    if(IS_APK){
      FILE_LIST = FALLBACK_LIST;
      fileListReady = true;
      console.log('📁 [APK] المصفوفة:', FILE_LIST.length);
      return;
    }
    try{
      // المحاولة 1: file-all4.txt (الجديد)
      let res = await fetch(asset('file-all4.txt') + '?_t=' + Date.now(), {cache:'no-store'});
      if(!res.ok) res = await fetch(asset('file-all3.txt') + '?_t=' + Date.now(), {cache:'no-store'});
      if(!res.ok) throw new Error('HTTP ' + res.status);
      const text = await res.text();
      const set = new Set();
      const regex = /^\s*\d{1,4}[\.\)\-]\s*([a-z0-9\/\-_]+\.(?:html|txt|json|xml|js|css))\b/gim;
      let m;
      while((m = regex.exec(text))!== null){
        const f = m[1].trim();
        if(!f.includes('dashboard-pro')) set.add(f);
      }
      if(set.size < 10){
        text.split('\n').forEach(line => {
          const t = line.trim();
          if(!t || t.startsWith('#')) return;
          const clean = t.split(/\s+/).pop();
          if(/\.html$/i.test(clean)) set.add(clean);
        });
      }
      FILE_LIST = set.size > 10? [...set] : FALLBACK_LIST;
      console.log(`✅ [FileList] ${FILE_LIST.length} ملف من file-all4.txt`);
    }catch(e){
      console.warn('⚠️ [FileList] fallback:', e.message);
      FILE_LIST = FALLBACK_LIST;
    }
    fileListReady = true;
  }

  /* ============ 3) وضع الصفحة ============ */
  function detectPageMode(){
    const s = document.currentScript;
    const m = [document.body?.dataset?.pageMode, document.documentElement?.dataset?.pageMode, s?.dataset?.pageMode]
    .map(v => String(v||'').toLowerCase()).find(v => ['safe','full','minimal'].includes(v));
    if(m) return m;
    if(s?.hasAttribute('data-no-splash')) return 'safe';
    if(location.pathname.toLowerCase().startsWith('/app/catalog')) return 'safe';
    return 'full';
  }
  const PAGE_MODE = detectPageMode();

  /* ============ 4) شاشة الانتظار ============ */
  let splashEl = null;
  function createSplash(msg){
    if(PAGE_MODE!== 'full' || document.getElementById('splashScreen')) return;
    const style = document.createElement('style');
    style.textContent = `#splashScreen{position:fixed;inset:0;background:#0a0a0f;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:999999;transition:opacity.5s}#splashScreen.hidden{opacity:0;pointer-events:none}#splashScreen.msg{color:#6ae3ff;font-weight:900;margin-top:15px;font-size:15px;text-align:center;padding:0 20px}#splashScreen.bar{width:180px;height:3px;background:#1a1a25;border-radius:3px;margin-top:14px;overflow:hidden}#splashScreen.bar::after{content:'';display:block;height:100%;width:40%;background:#c9a84c;animation:sp 1.2s infinite ease-in-out}@keyframes sp{0%{transform:translateX(-100%)}100%{transform:translateX(350%)}}`;
    document.head.appendChild(style);
    const d = document.createElement('div'); d.id='splashScreen';
    d.innerHTML = `<img src="${asset('icon-192.png')}" style="width:90px;height:90px;border-radius:50%;border:3px solid #c9a84c" onerror="this.remove()"><div class="msg" id="splashMsg">${msg||'جارٍ التحميل...'}</div><div class="bar"></div>`;
    document.body.prepend(d); splashEl = d;
  }
  const setSplashMsg = (m) => { const e = document.getElementById('splashMsg'); if(e) e.textContent = m; };
  const hideSplash = () => { if(!splashEl) return; const el = splashEl; splashEl = null; el.classList.add('hidden'); setTimeout(()=>el.remove(), 700); };
  window.addEventListener('load', () => setTimeout(hideSplash, 800));
  setTimeout(hideSplash, 5000);

  /* ============ 5) تحميل HTML ============ */
  async function loadHTMLFile(id, file){
    const ph = document.getElementById(id);
    if(!ph) return false;
    try{
      const res = await fetch(asset(file) + '?_t=' + Date.now(), {cache:'no-store'});
      if(!res.ok) throw new Error(res.status);
      const html = await res.text();
      ph.innerHTML = html;
      ph.dataset.loaded = 'true';
      ph.querySelectorAll('script').forEach(old => {
        if(old.src && old.src.toLowerCase().includes('menu.js')) return;
        const s = document.createElement('script');
        [...old.attributes].forEach(a => s.setAttribute(a.name, a.value));
        s.textContent = old.textContent;
        if(old.src) s.src = old.src;
        old.replaceWith(s);
      });
      return true;
    }catch{ return false; }
  }

  /* ============ 6) fileExists مع Cache + منع Looping ============ */
  const existsCache = new Map();
  const visitedTargets = new Set();
  async function fileExists(url){
    if(IS_APK) return false;
    const key = url.toLowerCase().split('?')[0];
    if(existsCache.has(key)) return existsCache.get(key);
    try{
      const r = await fetch(asset(url), {method:'HEAD', cache:'no-store'});
      const ok = r.ok;
      existsCache.set(key, ok);
      return ok;
    }catch{
      // fallback HEAD قد يفشل على Vercel، جرب GET
      try{
        const r2 = await fetch(asset(url), {method:'GET', cache:'no-store'});
        existsCache.set(key, r2.ok);
        return r2.ok;
      }catch{
        existsCache.set(key, false);
        return false;
      }
    }
  }

  /* ============ 7) المطابقة الثلاثية - قلب الحل ============ */
  function buildTripleCandidates(requestPath){
    let clean = requestPath.replace(/^\/+/, '').trim();
    let folder = '';
    let name = clean;

    // افصل المجلد عن الاسم
    if(clean.includes('/')){
      const parts = clean.split('/');
      name = parts.pop() || '';
      folder = parts.join('/') + '/';
    }

    // أزل.html لو موجودة للتوحيد
    let baseName = name.replace(/\.html$/i, '').toLowerCase();
    if(!baseName) return [];

    const candidates = [];

    // القاعدة 1 & 2 & 3: ابحث في الثلاثي /, /ar/, /en/
    // إذا كان الرابط الأصلي في /ar/ أو /en/ احتفظ به أولاً
    const isAr = requestPath.toLowerCase().startsWith('/ar/');
    const isEn = requestPath.toLowerCase().startsWith('/en/');

    if(isAr || isEn){
      // نفس المجلد أولاً
      candidates.push(`${folder}${baseName}.html`);
      candidates.push(`${folder}${baseName}`);
    }

    // الثلاثي السحري
    candidates.push(`${baseName}.html`); // /about-waha.html
    candidates.push(`ar/${baseName}.html`); // /ar/about-waha.html
    candidates.push(`en/${baseName}.html`); // /en/about-waha.html
    candidates.push(`${folder}${baseName}.html`); // نفس المجلد +.html

    // بدون مجلد
    if(folder){
      candidates.push(`${baseName}.html`);
    }

    return [...new Set(candidates)]; // إزالة التكرار
  }

  function findInTriple(requestPath){
    if(!fileListReady ||!FILE_LIST.length) return null;
    const cands = buildTripleCandidates(requestPath);
    const lowerList = FILE_LIST.map(f => f.toLowerCase());

    for(const cand of cands){
      const idx = lowerList.indexOf(cand.toLowerCase());
      if(idx!== -1) return FILE_LIST[idx];
      // مطابقة basename فقط (about-waha يطابق ar/about-waha.html)
      const base = cand.split('/').pop();
      const idx2 = lowerList.findIndex(f => f.toLowerCase().split('/').pop() === base.toLowerCase());
      if(idx2!== -1) return FILE_LIST[idx2];
    }
    return null;
  }

  /* ============ 8) Smart 404 v9.0 - حل المرعبة ============ */
  async function smart404(){
    if(IS_APK) return;
    const path = location.pathname;
    const pathClean = path.replace(/\/+$/, '') || '/';
    const lowerPath = pathClean.toLowerCase();

    // استثناءات لا نعالجها
    if(['/','/ar','/en','/index.html','/index','/ar/index','/en/index','/all-links.html','/ar/all-links.html','/en/all-links.html'].includes(lowerPath)) return;
    if(/\.(js|css|png|jpg|jpeg|gif|svg|webp|avif|ico|woff2?|map|json|txt|xml|pdf|mp3|mp4|webm|php)$/i.test(path)) return;
    if(/^\/(image|images|assets|css|js|fonts|uploads|media)\//i.test(pathClean) &&!pathClean.includes('.')) return;
    if(document.getElementById('header-placeholder')?.dataset?.loaded === 'true' && document.querySelector('main')?.children.length >= 2) return;

    // منع Looping القاتل
    const loopKey = 'waha_404_' + lowerPath;
    try{
      if(sessionStorage.getItem(loopKey) || visitedTargets.has(lowerPath)) {
        console.warn('⛔ [Anti-Loop] تمت زيارته من قبل:', lowerPath);
        return;
      }
      sessionStorage.setItem(loopKey, '1');
      visitedTargets.add(lowerPath);
    }catch(e){}

    // لو الصفحة الحالية هي نفسها all-links لا نعيد
    if(lowerPath.includes('all-links')) return;

    if(!splashEl) createSplash('🔍 جارٍ البحث...');
    else document.getElementById('splashScreen')?.classList.remove('hidden');

    const hasHtml = path.toLowerCase().endsWith('.html');
    const candidates = buildTripleCandidates(pathClean);

    console.log('🔍 [v9.0] البحث الثلاثي لـ:', pathClean, '→', candidates);

    // ===== القاعدة 1: رابط ب html =====
    if(hasHtml){
      setSplashMsg('🔍 نبحث في /, /ar, /en...');
      const found = findInTriple(pathClean);
      if(found){
        const target = '/' + found;
        if(target.toLowerCase()!== lowerPath &&!visitedTargets.has(target.toLowerCase()) && await fileExists(target)){
          setSplashMsg('✅ وجدناها! ' + found);
          console.log('✅ [قاعدة 1] رابط ب html →', target);
          location.replace(target + location.search + location.hash);
          return;
        }
      }
      // جرب المرشحين واحد واحد
      for(const cand of candidates){
        const t = '/' + cand;
        if(t.toLowerCase() === lowerPath) continue;
        if(await fileExists(t)){
          setSplashMsg('✅ وجدناها! ' + cand);
          location.replace(t + location.search + location.hash);
          return;
        }
      }
    }

    // ===== القاعدة 2: رابط بدون html =====
    if(!hasHtml){
      setSplashMsg('🔧 نضيف.html ونبحث...');
      // أضف.html وافتح من نفس المجلد أو الثلاثي
      for(const cand of candidates){
        const t = '/' + cand;
        if(t.toLowerCase() === lowerPath) continue;
        if(await fileExists(t)){
          setSplashMsg('✅ وجدناها! ' + cand);
          console.log('✅ [قاعدة 2] بدون html →', t);
          location.replace(t + location.search + location.hash);
          return;
        }
      }
    }

    // ===== القاعدة 3: رابط صح أو فشل البحث → all-links.html =====
    setSplashMsg('🗺️ نبحث في خريطة الموقع...');
    const allLinksCandidates = ['/all-links.html','/ar/all-links.html','/en/all-links.html'];
    // اختر لغة مناسبة
    const lang = lowerPath.startsWith('/en')? 'en' : (lowerPath.startsWith('/ar')? 'ar' : 'ar');
    const orderedAllLinks = [
      `/${lang}/all-links.html`,
      '/all-links.html',
      '/ar/all-links.html',
      '/en/all-links.html'
    ];

    for(const c of orderedAllLinks){
      if(c.toLowerCase() === lowerPath) continue;
      if(await fileExists(c)){
        setSplashMsg('🗺️ فتح خريطة الموقع...');
        console.log('🗺️ [قاعدة 3] →', c);
        location.replace(c + '?from=' + encodeURIComponent(pathClean));
        return;
      }
    }

    // أخيراً: الرئيسية مع الحفاظ على اللغة
    setSplashMsg('🏠 العودة للرئيسية...');
    setTimeout(() => {
      const targetLang = lowerPath.startsWith('/en')? 'en' : 'ar';
      const target = `/${targetLang}/` + location.search + location.hash;
      if(target.toLowerCase()!== lowerPath){
        location.replace(target);
      } else {
        hideSplash();
      }
    }, 700);
  }

  /* ============ 9) تبديل اللغة ============ */
  window.switchLanguage = window.toggleLanguage = function(){
    const path = location.pathname;
    const clean = path.replace(/^\/(ar|en)(\/|$)/i, '/') || '/';
    const isAr = /^\/ar(\/|$)/i.test(path);
    location.href = (isAr? '/en' : '/ar') + (clean === '/'? '/' : clean) + location.search + location.hash;
  };

  /* ============ 10) التهيئة ============ */
  async function init(){
    try{
      const lang = location.pathname.toLowerCase().startsWith('/en')? 'en' : 'ar';
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'ar'? 'rtl' : 'ltr';
      if(PAGE_MODE === 'full') createSplash('جارٍ التحميل...');

      setSplashMsg('📋 تحميل قائمة الملفات...');
      await loadFileList();

      setSplashMsg('📥 تحميل الهيدر...');
      await loadHTMLFile('header-placeholder', 'header.html');
      await loadHTMLFile('footer-placeholder', 'footer.html');

      await smart404();

      setSplashMsg('✨ جاهز');
      setTimeout(hideSplash, 200);
    }catch(e){
      console.error('❌ init error:', e);
      hideSplash();
    }
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();