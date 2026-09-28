// ================================================================
//  🛡️ init-page-root.js
//  Version: 6.4.0 — "الدرع المطلق - 404 حقيقي فقط"
//  Build:   2025-01-XX
//  Author:  Jabri-Com
// ================================================================

(function() {
  'use strict';

  const VERSION      = '6.4.0';
  const BUILD_DATE   = '2025-01-XX';
  const BASE_URL     = 'https://jabri-com.vercel.app';
  const VERSION_FILE = '/version.json';

  // ================================================================
  //  ⚙️ CONFIG
  // ================================================================
  const DEFAULT_CONFIG = {
    splash:       true,
    header:       true,
    footer:       true,
    detect404:    true,
    version:      true,
    music:        true,
    autoFixLinks: true,
    autoHideSplashAfter: 5000,
    auto404RedirectAfter: 7000
  };
  const CONFIG = Object.assign({}, DEFAULT_CONFIG, window.JABRI_CONFIG || {});

  console.log(`🛡️ [init] v${VERSION} — config:`, CONFIG);

  let splashHidden = false;

  // ================================================================
  //  🔧 أدوات مساعدة
  // ================================================================

  function bustCache(url) {
    const sep = url.includes('?') ? '&' : '?';
    return url + sep + 'v=' + VERSION + '&_t=' + Date.now();
  }

  function withVersion(url) {
    const sep = url.includes('?') ? '&' : '?';
    return url + sep + 'v=' + VERSION;
  }

  async function fileExists(url) {
    try {
      const res = await fetch(url, {
        method: 'GET',
        cache: 'no-store',
        redirect: 'manual'
      });
      return res.status >= 200 && res.status < 300;
    } catch (e) {
      return false;
    }
  }

  async function resolveFile(rawPath) {
    let clean = (rawPath || '').trim();
    if (!clean) return null;

    if (await fileExists(clean)) {
      console.log('✅ [resolve] found:', clean);
      return clean;
    }

    if (!clean.endsWith('.html')) {
      const withHtml = clean + '.html';
      if (await fileExists(withHtml)) {
        console.log('✅ [resolve] + .html:', withHtml);
        return withHtml;
      }
    }

    const dir = clean.substring(0, clean.lastIndexOf('/') + 1);
    const fallback = dir + 'all-links.html';
    if (await fileExists(fallback)) {
      console.warn('⚠️ [resolve] fallback →', fallback);
      return fallback;
    }

    console.error('❌ [resolve] not found:', rawPath);
    return null;
  }

  // ================================================================
  //  🔧 autoFixLinks
  // ================================================================
  function autoFixLinks() {
    if (!CONFIG.autoFixLinks) return;

    let fixed = 0;
    document.querySelectorAll('a[href]').forEach(a => {
      const original = a.getAttribute('href');
      if (!original) return;

      const trimmed = original.trim();

      if (/^(https?:|\/\/|mailto:|tel:|javascript:|#)/i.test(trimmed)) return;
      if (/\.[a-z0-9]{2,5}([?#]|$)/i.test(trimmed)) return;
      if (trimmed.endsWith('/')) return;

      const pathPart = trimmed.split(/[?#]/)[0];
      if (!pathPart) return;

      const qs = trimmed.substring(pathPart.length);
      const corrected = pathPart + '.html' + qs;

      a.setAttribute('href', corrected);
      fixed++;
      console.log(`🔧 [link] ${original} → ${corrected}`);
    });

    if (fixed > 0) console.log(`✅ [links] fixed ${fixed} link(s)`);
  }

  // ================================================================
  //  🎬 Splash Screen
  // ================================================================

  function createSplash() {
    if (!CONFIG.splash) return;

    if (!document.body) {
      document.addEventListener('DOMContentLoaded', createSplash, { once: true });
      return;
    }
    if (document.getElementById('splashScreen')) return;

    try {
      const html = `
        <div id="splashScreen">
          <div class="splash-title">واحة الجبري</div>
          <div class="splash-sub">تراث اليمن العريق · نظرية السندباد الموحدة</div>
          <div class="spinner"></div>
          <div class="splash-version">v${VERSION}</div>
          <style>
            #splashScreen{position:fixed;inset:0;background:#0a0a0f;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:999999;transition:opacity .6s ease;font-family:'Cairo',sans-serif}
            #splashScreen.hidden{opacity:0;pointer-events:none}
            .splash-title{color:#6ae3ff;font-size:2.5rem;font-weight:900}
            .splash-sub{color:#888;font-size:1.1rem;margin-top:8px}
            .spinner{width:40px;height:40px;margin-top:30px;border:3px solid rgba(106,227,255,.1);border-top:3px solid #6ae3ff;border-radius:50%;animation:spin 1s linear infinite}
            .splash-version{position:absolute;bottom:20px;color:#444;font-size:12px;font-family:monospace}
            @keyframes spin{to{transform:rotate(360deg)}}
            @media(max-width:600px){.splash-title{font-size:1.8rem}.splash-sub{font-size:.95rem}}
          </style>
        </div>`;
      const div = document.createElement('div');
      div.innerHTML = html;
      document.body.prepend(div.firstElementChild);
      setTimeout(hideSplash, CONFIG.autoHideSplashAfter);
    } catch (e) {
      console.error('❌ splash error:', e);
      hideSplash();
    }
  }

  function hideSplash() {
    if (splashHidden) return;
    splashHidden = true;
    const el = document.getElementById('splashScreen');
    if (!el) return;
    el.style.opacity = '0';
    el.style.pointerEvents = 'none';
    el.style.display = 'none';
    setTimeout(() => el.remove(), 300);
  }

  // ================================================================
  //  🚨 404 Handler — يعتمد على HTTP status فقط
  // ================================================================

  function show404Overlay() {
    if (sessionStorage.getItem('jabri404Handled')) return;
    sessionStorage.setItem('jabri404Handled', 'true');

    hideSplash();

    try {
      const audio = new Audio(BASE_URL + '/image/music1.mp3');
      audio.volume = 0.15;
      audio.loop = true;
      audio.play().catch(() => {});
    } catch (e) {}

    let count = localStorage.getItem('jabriVisitorCount');
    if (count === null) count = Math.floor(Math.random() * 80) + 20;

    const div = document.createElement('div');
    div.id = 'jabri-404-overlay';
    div.style.cssText = `
      position:fixed;top:20px;left:50%;transform:translateX(-50%);
      background:#0b1a2e;color:#f0e6d3;padding:20px 30px;
      border-radius:40px;border:1px solid #b48b5a;
      font-size:20px;z-index:999999;
      box-shadow:0 15px 40px rgba(0,0,0,.8);
      text-align:center;font-family:'Cairo',sans-serif;
      backdrop-filter:blur(12px);direction:rtl;max-width:90%`;
    div.innerHTML = `
      🏝️ عذرًا، هذا الدرب غير موجود في واحة الجبري.<br>
      🌊 سيتم تحويلك إلى <strong>الواحة الرئيسية</strong> بعد ${Math.round(CONFIG.auto404RedirectAfter/1000)} ثوانٍ<br>
      👥 عدد الزوار: <strong>${count}</strong>
      <div style="margin-top:12px;font-size:14px;color:#bbaa88">
        🎵 نغمات السندباد تعزف لك... · v${VERSION}
      </div>`;
    document.body.prepend(div);

    if (window.gtag) {
      window.gtag('event', 'page_not_found', {
        page_path: location.pathname,
        page_location: location.href
      });
    }

    setTimeout(() => { window.location.href = '/'; }, CONFIG.auto404RedirectAfter);
  }

  /**
   * 🎯 detect404 — يكتشف 404 من HTTP status الحقيقي فقط
   * لا يبحث عن كلمة "404" في النص (لأنها قد توجد في مكان آخر)
   */
  function detect404() {
    if (!CONFIG.detect404) return;

    let pageStatus = 0;
    let status404 = false;

    // 1) Navigation entry (الأكثر دقة)
    if (window.performance && window.performance.getEntriesByType) {
      const navEntries = window.performance.getEntriesByType('navigation');
      if (navEntries.length > 0) {
        pageStatus = navEntries[0].responseStatus || 0;
        console.log(`📡 [404] nav status: ${pageStatus}`);
        if (pageStatus === 404) status404 = true;
      }
    }

    // 2) Resource entries (احتياطي)
    if (!status404 && window.performance && window.performance.getEntries) {
      for (const e of window.performance.getEntries()) {
        if (e.name === location.href && e.responseStatus === 404) {
          status404 = true;
          console.log(`🚨 [404] found in resource entry`);
          break;
        }
      }
    }

    if (status404) {
      console.warn('🚨 [404] REAL 404 detected → showing overlay');
      show404Overlay();
    } else {
      console.log(`✅ [404] page OK (status: ${pageStatus || 'unknown'})`);
    }
  }

  // ================================================================
  //  🌐 Language Switcher
  // ================================================================

  function getBasePath() {
    const path = location.pathname;
    const m = path.match(/^(.*?)\/(ar|en)(\/|$)/i);
    if (m) return m[1];
    return path.substring(0, path.lastIndexOf('/'));
  }

  function getFileName() {
    const path = location.pathname;
    const base = getBasePath();
    const without = path.substring(base.length);
    const pure = without.replace(/^\/(ar|en)(\/|$)/i, '/').replace(/^\/+/, '');
    return pure || 'all-links.html';
  }

  /**
   * 🌐 toggleLang — ينتقل للغة الأخرى
   * إذا الملف موجود → انتقال مباشر
   * إذا غير موجود → انتقال أيضاً (الصفحة الجديدة ستكتشف 404 وتظهر الشاشة)
   */
  async function toggleLang() {
    const path = location.pathname;
    const qs   = location.search + location.hash;
    const lang = document.documentElement.lang;

    const base = getBasePath();
    const file = getFileName();

    console.log('🌐 [lang] path:', path, '| file:', file, '| lang:', lang);

    const lower = path.toLowerCase();
    let targetLang;
    if (lower.includes('/en/')) targetLang = 'ar';
    else if (lower.includes('/ar/')) targetLang = 'en';
    else targetLang = (lang === 'ar') ? 'en' : 'ar';

    const targetPath = base + '/' + targetLang + '/' + file;
    const fullTarget = location.origin + targetPath + qs;

    console.log('🌐 [lang] redirecting →', fullTarget);

    // 🚀 انتقال مباشر — لا فحص مسبق
    // إذا الملف موجود، يفتح. إذا غير موجود، الصفحة الجديدة سترجع 404
    // والمرعبة على الصفحة الجديدة ستكتشف 404 وتظهر الشاشة تلقائياً
    window.location.href = targetPath + qs;
  }

  // ================================================================
  //  📥 Header / Footer Loader
  // ================================================================

  function safelyExecuteScripts(container) {
    container.querySelectorAll('script').forEach(oldScript => {
      try {
        const src = oldScript.src || '';
        const content = oldScript.textContent || '';
        if (src) {
          const vsrc = withVersion(src);
          if (!document.querySelector(`script[src="${vsrc}"]`)) {
            const s = document.createElement('script');
            s.src = vsrc;
            s.async = false;
            document.head.appendChild(s);
          }
        } else if (content.trim()) {
          const s = document.createElement('script');
          s.textContent = content;
          document.head.appendChild(s);
        }
      } catch (e) {}
    });
  }

  async function loadPartial(id, fileName, evt, isHeader) {
    const el = document.getElementById(id);
    if (!el) return;
    if (el.dataset.loaded === 'true') {
      if (isHeader) setTimeout(hideSplash, 500);
      return;
    }

    const fallbackHTML = el.innerHTML.trim();
    const resolved = await resolveFile(fileName);

    if (!resolved) {
      if (fallbackHTML) {
        console.log(`ℹ️ ${fileName} not found — keeping inline fallback`);
        el.dataset.loaded = 'true';
      } else {
        el.style.display = 'none';
        console.warn(`⚠️ ${fileName} missing → hidden`);
      }
      if (isHeader) setTimeout(hideSplash, 500);
      return;
    }

    console.log(`📄 [${fileName}] loading: ${resolved}`);

    try {
      const res = await fetch(bustCache(resolved), {
        cache: 'no-store',
        headers: { 'Cache-Control': 'no-cache' }
      });
      if (!res.ok) throw new Error('HTTP ' + res.status);

      el.innerHTML = await res.text();
      el.dataset.loaded = 'true';
      el.dataset.version = VERSION;
      safelyExecuteScripts(el);

      if (CONFIG.autoFixLinks) autoFixLinks();

      console.log(`✅ [${fileName}] loaded (v${VERSION})`);
      document.dispatchEvent(new CustomEvent(evt, { detail: { version: VERSION } }));
      if (isHeader) setTimeout(hideSplash, 300);
    } catch (e) {
      console.error(`❌ [${fileName}] failed:`, e);
      if (!fallbackHTML) el.style.display = 'none';
      if (isHeader) setTimeout(hideSplash, 500);
    }
  }

  // ================================================================
  //  🔗 Dynamic Links + Canonical
  // ================================================================

  const PAGE_LINKS = {
    '/Page1.html':  { prev: null,           next: '/Page2.html',  up: '/research.html' },
    '/Page2.html':  { prev: '/Page1.html',  next: '/Page3.html',  up: '/research.html' },
    '/Page3.html':  { prev: '/Page2.html',  next: '/Page4.html',  up: '/research.html' },
    '/Page4.html':  { prev: '/Page3.html',  next: '/Page5.html',  up: '/research.html' },
    '/Page5.html':  { prev: '/Page4.html',  next: '/Page6.html',  up: '/research.html' },
    '/Page6.html':  { prev: '/Page5.html',  next: '/Page7.html',  up: '/research.html' },
    '/Page7.html':  { prev: '/Page6.html',  next: '/Page8.html',  up: '/research.html' },
    '/Page8.html':  { prev: '/Page7.html',  next: '/Page9.html',  up: '/research.html' },
    '/Page9.html':  { prev: '/Page8.html',  next: '/Page10.html', up: '/research.html' },
    '/Page10.html': { prev: '/Page9.html',  next: '/Page11.html', up: '/research.html' },
    '/Page11.html': { prev: '/Page10.html', next: '/Page12.html', up: '/research.html' },
    '/Page12.html': { prev: '/Page11.html', next: null,           up: '/research.html' },
    '/Sanaa.html':  { prev: null,           next: '/Shibam.html', up: '/yemen-photo.html' },
    '/Shibam.html': { prev: '/Sanaa.html',  next: '/Soqatra.html',up: '/yemen-photo.html' },
    '/Soqatra.html':{ prev: '/Shibam.html', next: null,           up: '/yemen-photo.html' }
  };

  function addDynamicLinks() {
    const links = PAGE_LINKS[location.pathname];
    if (!links) return;
    ['prev', 'next', 'up'].forEach(rel => {
      const url = links[rel];
      if (!url) return;
      let link = document.querySelector(`link[rel="${rel}"]`);
      if (!link) {
        link = document.createElement('link');
        link.rel = rel;
        document.head.appendChild(link);
      }
      link.href = BASE_URL + withVersion(url);
    });
    console.log('🔗 dynamic links added (v' + VERSION + ')');
  }

  function setCanonical() {
    const url = location.href.split('?')[0].split('#')[0];
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = url;
    console.log('🔗 canonical: ' + url);
  }

  // ================================================================
  //  🎵 Music Player
  // ================================================================

  const MUSIC_FILES = ['music1.mp3', 'music2.mp3', 'music3.mp3', 'music4.mp3', 'music5.mp3'];
  const MUSIC_NAMES = ['🎵 تراث اليمن', '🎵 سندباد', '🎵 صنعاء', '🎵 شبام', '🎵 سقطرى'];
  let musicIndex = 0;
  let isMusicPlaying = false;
  let musicAudio = null;
  let musicBtn = null;
  let musicTrack = null;

  function initMusic() {
    if (!CONFIG.music) return;

    musicAudio = document.getElementById('bgMusic');
    musicBtn   = document.getElementById('musicBtn');
    musicTrack = document.getElementById('trackName');

    if (!musicAudio || !musicBtn) {
      console.log('ℹ️ [music] no player on this page');
      return;
    }

    console.log('🎵 [music] initializing');

    musicAudio.src = '/image/' + MUSIC_FILES[0];
    if (musicTrack) musicTrack.textContent = MUSIC_NAMES[0];

    musicAudio.addEventListener('ended', () => {
      musicIndex = (musicIndex + 1) % MUSIC_FILES.length;
      musicAudio.src = '/image/' + MUSIC_FILES[musicIndex];
      if (musicTrack) musicTrack.textContent = MUSIC_NAMES[musicIndex];
      musicAudio.play().catch(() => {});
    });

    musicAudio.addEventListener('play',  () => {
      musicBtn.textContent = '🔊';
      isMusicPlaying = true;
    });
    musicAudio.addEventListener('pause', () => {
      musicBtn.textContent = '🔇';
      isMusicPlaying = false;
    });

    const startOnInteraction = () => {
      if (isMusicPlaying) return;
      musicAudio.play().catch(() => {});
      document.removeEventListener('click', startOnInteraction);
      document.removeEventListener('touchstart', startOnInteraction);
      document.removeEventListener('keydown', startOnInteraction);
    };
    document.addEventListener('click', startOnInteraction);
    document.addEventListener('touchstart', startOnInteraction);
    document.addEventListener('keydown', startOnInteraction);
  }

  function toggleMusic() {
    if (!musicAudio) musicAudio = document.getElementById('bgMusic');
    if (!musicAudio) return;
    if (isMusicPlaying) {
      musicAudio.pause();
    } else {
      musicAudio.play().catch(err => console.warn('⚠️ audio:', err));
    }
  }

  window.toggleMusic = toggleMusic;

  // ================================================================
  //  🔄 Auto Version Check
  // ================================================================

  async function checkForNewVersion() {
    if (!CONFIG.version) return;
    try {
      const res = await fetch(VERSION_FILE + '?_t=' + Date.now(), { cache: 'no-store' });
      if (!res.ok) return;
      const data = await res.json();
      if (data.version && data.version !== VERSION) {
        console.warn(`🔄 [update] ${VERSION} → ${data.version}`);
        const toast = document.createElement('div');
        toast.style.cssText = `
          position:fixed;bottom:80px;left:50%;transform:translateX(-50%);
          background:#06d6a0;color:#0a0a0f;padding:12px 24px;
          border-radius:30px;font-weight:700;font-size:14px;
          z-index:999999;box-shadow:0 8px 24px rgba(6,214,160,.4);
          font-family:'Cairo',sans-serif;direction:rtl;cursor:pointer`;
        toast.textContent = `🔄 نسخة جديدة (v${data.version}) — اضغط للتحديث`;
        toast.onclick = forceReload;
        document.body.appendChild(toast);
        setTimeout(forceReload, 30000);
      }
    } catch (e) {}
  }

  function forceReload() {
    if ('caches' in window) {
      caches.keys().then(names => names.forEach(n => caches.delete(n)));
    }
    const url = new URL(location.href);
    url.searchParams.set('_v', Date.now());
    location.href = url.toString();
  }

  // ================================================================
  //  🚀 init
  // ================================================================

  function init() {
    console.log('⚙️ [init] running with config:', CONFIG);

    if (CONFIG.splash) createSplash();
    if (CONFIG.detect404) detect404();
    if (CONFIG.music) initMusic();

    if (CONFIG.header) {
      loadPartial('header-placeholder', 'header.html', 'headerLoaded', true);
    } else {
      setTimeout(hideSplash, 300);
    }

    if (CONFIG.footer) {
      loadPartial('footer-placeholder', 'footer.html', 'footerLoaded', false);
    }

    if (CONFIG.version) checkForNewVersion();

    if (CONFIG.autoFixLinks) autoFixLinks();

    document.addEventListener('headerLoaded', () => {
      setCanonical();
      addDynamicLinks();
    });

    window.addEventListener('error', (e) => {
      console.error('🚨 [safety] uncaught:', e.message);
      hideSplash();
    });

    window.addEventListener('load', () => {
      setTimeout(hideSplash, 1000);
    });

    document.addEventListener('click', () => {
      if (!splashHidden) hideSplash();
    }, { once: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // ================================================================
  //  🌍 API عالمي
  // ================================================================
  window.Jabri = {
    version: VERSION,
    buildDate: BUILD_DATE,
    config: CONFIG,
    resolveFile: resolveFile,
    fileExists: fileExists,
    toggleLang: toggleLang,
    toggleMusic: toggleMusic,
    autoFixLinks: autoFixLinks,
    withVersion: withVersion,
    bustCache: bustCache,
    forceReload: forceReload,
    hideSplash: hideSplash,
    detect404: detect404,
    show404Overlay: show404Overlay
  };

  window.switchLanguage = toggleLang;
  window.toggleLanguage = toggleLang;

  console.log(`✅ الدرع المطلق v${VERSION} ready`);
})();