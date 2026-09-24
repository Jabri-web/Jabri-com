// ================================================================
//  init-page-root.js — v6.2 (Stable)
//  Heaven Al-Jabri | واحة الجبري
//  ─────────────────────────────────────────────────────────────
//  ✅ Fix White Screen
//  ✅ Splash آمن مع fail-safe
//  ✅ تحميل هيدر/فوتر بـ fetch
//  ✅ تبديل لغة (switchLanguage)
//  ✅ ضبط lang + dir
//  ✅ body.prepend آمن
// ================================================================
(function() {
  'use strict';
  console.log('🛡️ [init] v6.2 Stable...');
  
  const IS_FILE = location.protocol === 'file:';
  const IS_APK = IS_FILE || navigator.userAgent.includes('wv');
  
  // ─── 1. كشف الوضع (بعد DOM) ───
  function detectPageMode() {
    const scriptTag = document.currentScript;
    const sources = [
      document.body?.dataset?.pageMode,
      document.documentElement?.dataset?.pageMode,
      scriptTag?.dataset?.pageMode
    ];
    for (let m of sources) {
      m = String(m || '').toLowerCase();
      if (['safe', 'minimal', 'full'].includes(m)) return m;
    }
    if (scriptTag?.hasAttribute('data-no-splash')) return 'safe';
    
    const path = location.pathname.toLowerCase();
    if (['/admin', '/test', '/debug', '/temp', '/dev', '/redirect'].some(p => path.startsWith(p))) return 'safe';
    
    return 'full';
  }
  
  let PAGE_MODE = 'full';
  let isFull = true;
  let splashHidden = false;
  
  // ─── 2. إخفاء الـ splash ───
  function hideSplash() {
    if (splashHidden) return;
    splashHidden = true;
    const el = document.getElementById('splashScreen');
    if (el) {
      el.classList.add('hidden');
      setTimeout(() => el.remove(), 800);
    }
  }
  
  // fail-safe: 4 ثواني
  setTimeout(hideSplash, 4000);
  
  // ─── 3. إنشاء الـ splash (آمن) ───
  function createSplash() {
    if (document.getElementById('splashScreen')) return;
    
    const style = document.createElement('style');
    style.id = 'splash-style';
    style.textContent = `
      #splashScreen{position:fixed;inset:0;background:#0a0a0f;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:999999;transition:opacity.6s ease;font-family:"Cairo",sans-serif}
      #splashScreen.hidden{opacity:0;pointer-events:none}
     .splash-logo{width:96px;height:96px;border-radius:50%;border:3px solid #c9a84c;box-shadow:0 0 60px rgba(201,168,76,.5);animation:splashPulse 1.8s infinite}
     .splash-title{color:#6ae3ff;font-size:2rem;font-weight:900;margin-top:18px}
     .splash-sub{color:#888;font-size:1rem;margin-top:6px;min-height:1.5em}
      @keyframes splashPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.06)}}
    `;
    document.head.appendChild(style);
    
    const div = document.createElement('div');
    div.id = 'splashScreen';
    div.innerHTML = `<img src="/icon-192.png" onerror="this.style.display='none'" class="splash-logo"><div class="splash-title">واحة الجبري</div><div class="splash-sub">جاري التحميل...</div>`;
    
    // ✅ إضافة آمنة
    if (document.body) {
      document.body.prepend(div);
    } else {
      document.addEventListener('DOMContentLoaded', () => {
        document.body.prepend(div);
      });
    }
  }
  
  // ─── 4. تحميل ملف HTML ───
  function loadHTMLFile(id, file, onOk) {
    const placeholder = document.getElementById(id);
    if (!placeholder) { onOk?.(); return; }
    if (placeholder.dataset.loaded === 'true') { onOk?.(); return; }
    
    fetch(file + (IS_APK ? '' : '?_t=' + Date.now()))
      .then(r => { if (!r.ok) throw new Error(r.status); return r.text(); })
      .then(html => {
        placeholder.innerHTML = html;
        placeholder.dataset.loaded = 'true';
        
        // تشغيل السكربتات بالترتيب
        const scripts = [...placeholder.querySelectorAll('script')];
        let chain = Promise.resolve();
        scripts.forEach(old => {
          if (old.src && old.src.includes('menu.js')) return;
          chain = chain.then(() => new Promise(res => {
            const s = document.createElement('script');
            [...old.attributes].forEach(a => s.setAttribute(a.name, a.value));
            if (old.src) {
              s.src = old.src;
              s.onload = s.onerror = res;
              old.replaceWith(s);
            } else {
              s.textContent = old.textContent;
              old.replaceWith(s);
              res();
            }
          }));
        });
        return chain;
      })
      .then(() => onOk?.())
      .catch(err => {
        console.warn(`⚠️ [${file}] فشل:`, err.message);
        placeholder.innerHTML = '<div style="height:60px"></div>';
        onOk?.();
      });
  }
  
  // ─── 5. تبديل اللغة ───
  function _getCurrentLang() {
    const p = location.pathname.toLowerCase();
    if (p.startsWith('/en/') || p === '/en') return 'en';
    return 'ar';
  }
  
  function _getCurrentFile() {
    let p = location.pathname;
    p = p.replace(/^\/(ar|en)(\/|$)/i, '/');
    p = p.replace(/\/+$/, '');
    if (p === '' || p === '/') return 'index.html';
    const f = p.split('/').pop();
    if (!f || f.indexOf('.') === -1) return 'index.html';
    return f;
  }
  
  function switchLanguage() {
    const current = _getCurrentLang();
    const target = current === 'ar' ? 'en' : 'ar';
    const file = _getCurrentFile();
    const newUrl = '/' + target + '/' + file;
    console.log('🌐 [lang]', current, '→', target, '|', file, '→', newUrl);
    location.href = newUrl;
  }
  
  window.switchLanguage = switchLanguage;
  window.toggleLang = switchLanguage;
  window.getCurrentLanguage = _getCurrentLang;
  
  // ─── 6. Init ───
  function init() {
    try {
      PAGE_MODE = detectPageMode();
      window.__WAHA_PAGE_MODE = PAGE_MODE;
      isFull = PAGE_MODE === 'full';
      console.log('📋 [mode]', PAGE_MODE);
      
      // ✅ ضبط lang + dir
      const lang = _getCurrentLang();
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
      
      if (isFull) createSplash();
      
      // حمّل الهيدر والفوتر (كل الأوضاع)
      let loaded = 0;
      const checkDone = () => {
        if (++loaded >= 2) setTimeout(hideSplash, 200);
      };
      
      loadHTMLFile('header-placeholder', 'header.html', () => {
        document.dispatchEvent(new CustomEvent('headerLoaded'));
        checkDone();
      });
      
      loadHTMLFile('footer-placeholder', 'footer.html', () => {
        document.dispatchEvent(new CustomEvent('footerLoaded'));
        checkDone();
      });
      
      if (!document.getElementById('header-placeholder')) {
        setTimeout(hideSplash, 300);
      }
      
    } catch (e) {
      console.error('💥 [init] خطأ قاتل:', e);
      hideSplash(); // أهم سطر لمنع الشاشة البيضاء
    }
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();