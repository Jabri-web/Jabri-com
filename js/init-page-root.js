// ================================================================
//  🛡️ init-page-root.js
//  Version: 6.9.0 — "404 Screen + User Options + Real Network Logs"
//  Build:   2025-01-XX
//  Author:  Jabri-Com
// ================================================================

(function() {
  'use strict';

  const VERSION      = '6.9.0';
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
    auto404TryAfter: 3000,
    allLinksPath: '/all-links.html',
    indexPath:    '/index.html',
    wahaPath:     '/Page11.html'
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
  //  🎬 Splash
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
  //  🌐 Helpers
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

  // ================================================================
  //  🚨 show404Overlay — الشاشة الكاملة مع الخيارات
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

    const currentPath = location.pathname;
    const hasHtml = currentPath.toLowerCase().endsWith('.html');

    // حساب Target Path
    let targetPath;
    if (!hasHtml) {
      targetPath = currentPath + '.html';
    } else {
      const file = currentPath.split('/').filter(Boolean).pop();
      targetPath = '/' + file;
    }

    const div = document.createElement('div');
    div.id = 'jabri-404-overlay';
    div.style.cssText = `
      position:fixed;inset:0;
      background: #0a1628;
      color:#e0dcc8;
      z-index:999999;
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:flex-start;
      font-family:'Cairo',sans-serif;
      direction:rtl;
      padding:20px;
      overflow-y:auto;
    `;

    div.innerHTML = `
      <style>
        #jabri-404-overlay .ov-container {
          max-width: 520px;
          width: 100%;
          padding: 20px 0;
          text-align: center;
        }
        #jabri-404-overlay .ov-404-num {
          font-size: 6rem;
          font-weight: 900;
          color: #b48b5a;
          text-shadow: 0 0 60px rgba(180,139,90,0.5);
          line-height: 1;
          margin-bottom: 15px;
        }
        #jabri-404-overlay .ov-title {
          font-size: 1.4rem;
          color: #f0e6d3;
          margin-bottom: 25px;
          line-height: 1.6;
        }
        #jabri-404-overlay .ov-box {
          background: #0b1a2e;
          border: 1px solid #b48b5a;
          border-radius: 16px;
          padding: 14px 20px;
          margin: 10px 0;
          width: 100%;
          text-align: right;
        }
        #jabri-404-overlay .ov-label {
          font-size: 0.75rem;
          color: #b48b5a;
          margin-bottom: 6px;
          font-weight: 700;
        }
        #jabri-404-overlay .ov-value {
          font-family: 'Courier New', monospace;
          font-size: 0.9rem;
          color: #6ae3ff;
          direction: ltr;
          text-align: left;
          word-break: break-all;
          padding: 8px 12px;
          background: rgba(106,227,255,0.05);
          border-radius: 8px;
          border: 1px solid rgba(106,227,255,0.2);
        }
        #jabri-404-overlay .ov-result {
          font-size: 0.95rem;
          color: #ffd166;
          padding: 10px;
          text-align: center;
          font-weight: 700;
          font-family: 'Courier New', monospace;
          direction: ltr;
        }
        #jabri-404-overlay .ov-result .ok   { color: #06d6a0; }
        #jabri-404-overlay .ov-result .err  { color: #ff6b6b; }
        #jabri-404-overlay .ov-result .warn { color: #ffd166; }
        #jabri-404-overlay .ov-visitors {
          background: linear-gradient(135deg, #b48b5a, #8b6a3f);
          color: #0a0a0f;
          padding: 12px 25px;
          border-radius: 40px;
          font-weight: 700;
          font-size: 1.05rem;
          margin: 18px auto;
          display: inline-block;
        }
        #jabri-404-overlay .ov-countdown {
          font-size: 1.1rem;
          color: #6ae3ff;
          margin: 12px 0;
          font-weight: 700;
          font-family: monospace;
        }
        #jabri-404-overlay .ov-options {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-top: 20px;
          width: 100%;
        }
        #jabri-404-overlay .ov-btn {
          padding: 14px 10px;
          border: none;
          border-radius: 14px;
          font-size: 0.85rem;
          font-weight: 900;
          font-family: 'Cairo', sans-serif;
          cursor: pointer;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          transition: transform 0.2s ease;
        }
        #jabri-404-overlay .ov-btn:hover { transform: scale(1.03); }
        #jabri-404-overlay .ov-btn-map  { background: linear-gradient(135deg, #6ae3ff, #3aa0c4); color: #0a0a0f; }
        #jabri-404-overlay .ov-btn-home { background: linear-gradient(135deg, #ffd700, #f0a500); color: #0a0a0f; }
        #jabri-404-overlay .ov-btn-waha { background: linear-gradient(135deg, #06d6a0, #05b98a); color: #0a0a0f; }
        #jabri-404-overlay .ov-btn-exit { background: linear-gradient(135deg, #ff6b6b, #e85555); color: #fff; }
        #jabri-404-overlay .ov-music {
          color: #bbaa88;
          font-size: 0.85rem;
          margin-top: 20px;
        }
        #jabri-404-overlay .ov-version {
          color: #444;
          font-size: 11px;
          font-family: monospace;
          margin-top: 8px;
        }
        @media (max-width: 500px) {
          #jabri-404-overlay .ov-404-num { font-size: 4rem; }
          #jabri-404-overlay .ov-title { font-size: 1.15rem; }
          #jabri-404-overlay .ov-btn { font-size: 0.75rem; padding: 12px 8px; }
        }
      </style>

      <div class="ov-container">
        <div class="ov-404-num">404</div>
        <div class="ov-title">🏝️ عذرًا، هذا الدرب غير موجود</div>

        <div class="ov-box">
          <div class="ov-label">🔍 Current Path</div>
          <div class="ov-value">${currentPath}</div>
        </div>

        <div class="ov-box">
          <div class="ov-label">➡️ Target Path</div>
          <div class="ov-value" id="ovTarget">${targetPath}</div>
        </div>

        <div class="ov-box">
          <div class="ov-label">📊 Result</div>
          <div class="ov-result" id="ovResult">🔍 Searching...</div>
        </div>

        <div class="ov-visitors">👥 عدد الزوار: ${count}</div>

        <div class="ov-countdown" id="ovCountdown">⏱️ 7s</div>

        <div class="ov-options">
          <a href="${CONFIG.allLinksPath}" class="ov-btn ov-btn-map">🗺️ خريطة</a>
          <a href="${CONFIG.indexPath}" class="ov-btn ov-btn-home">🏠 افتتاح</a>
          <a href="${CONFIG.wahaPath}" class="ov-btn ov-btn-waha">🏝️ الواحة</a>
          <button onclick="exitPage()" class="ov-btn ov-btn-exit">🚪 خروج</button>
        </div>

        <div class="ov-music">🎵 نغمات السندباد تعزف لك...</div>
        <div class="ov-version">v${VERSION}</div>
      </div>
    `;
    document.body.prepend(div);

    if (window.gtag) {
      window.gtag('event', 'page_not_found', {
        page_path: location.pathname,
        page_location: location.href
      });
    }

    // ⏰ عدّاد تنازلي
    let seconds = 7;
    const countdownEl = document.getElementById('ovCountdown');
    const countdownInterval = setInterval(() => {
      seconds--;
      if (countdownEl) countdownEl.textContent = `⏱️ ${seconds}s`;
      if (seconds <= 0) clearInterval(countdownInterval);
    }, 1000);

    // ⏰ بعد 3 ثوانٍ → ابدأ المحاولة
    setTimeout(() => {
      handle404Redirect();
    }, CONFIG.auto404TryAfter);
  }

  // ================================================================
  //  🚪 exitPage
  // ================================================================
  function exitPage() {
    console.log('🚪 [exit] quitting...');
    try { window.close(); } catch (e) {}
    setTimeout(() => {
      if (document.getElementById('jabri-404-overlay')) {
        try { window.history.back(); } catch (e) {}
      }
    }, 200);
    setTimeout(() => {
      if (document.getElementById('jabri-404-overlay')) {
        window.location.href = 'about:blank';
      }
    }, 600);
    setTimeout(() => {
      if (document.getElementById('jabri-404-overlay')) {
        window.location.href = '/';
      }
    }, 1200);
  }
  window.exitPage = exitPage;

  // ================================================================
  //  🎯 handle404Redirect — if/else + Real Result
  // ================================================================
  async function handle404Redirect() {
    const currentPath = location.pathname;
    const hasHtml = currentPath.toLowerCase().endsWith('.html');
    const resultEl = document.getElementById('ovResult');
    const targetEl = document.getElementById('ovTarget');

    console.log('🔧 [404] handling:', currentPath);

    const updateResult = (text, cls = '') => {
      if (resultEl) {
        resultEl.innerHTML = text;
        resultEl.className = 'ov-result';
      }
    };

    // ═══════════════════════════════════════════════════════════
    //  IF: بدون .html
    // ═══════════════════════════════════════════════════════════
    if (!hasHtml) {
      const newPath = currentPath + '.html';
      if (targetEl) targetEl.textContent = newPath;
      updateResult(`🔍 GET ${newPath} ...`);

      const exists = await fileExists(newPath);

      if (exists) {
        updateResult(`<span class="ok">✅ 200 OK</span> → Redirecting`);
        setTimeout(() => { window.location.href = newPath; }, 1200);
      } else {
        updateResult(`<span class="err">❌ 404</span> → /all-links.html`);
        setTimeout(() => { window.location.href = CONFIG.allLinksPath; }, 1500);
      }
      return;
    }

    // ═══════════════════════════════════════════════════════════
    //  ELSE: ينتهي بـ .html
    // ═══════════════════════════════════════════════════════════
    const file = currentPath.split('/').filter(Boolean).pop();
    const newPath = '/' + file;
    if (targetEl) targetEl.textContent = newPath;
    updateResult(`🔍 GET ${newPath} ...`);

    const existsInRoot = await fileExists(newPath);

    if (existsInRoot) {
      updateResult(`<span class="ok">✅ 200 OK (root)</span> → Redirecting`);
      setTimeout(() => { window.location.href = newPath; }, 1200);
      return;
    }

    updateResult(`<span class="err">❌ 404 (root)</span> → /all-links.html`);
    setTimeout(() => { window.location.href = CONFIG.allLinksPath; }, 1500);
  }

  // ================================================================
  //  🎯 detect404 — HTTP status فقط
  // ================================================================
  function detect404() {
    if (!CONFIG.detect404) return;

    let pageStatus = 0;
    let status404 = false;

    if (window.performance && window.performance.getEntriesByType) {
      const navEntries = window.performance.getEntriesByType('navigation');
      if (navEntries.length > 0) {
        pageStatus = navEntries[0].responseStatus || 0;
        console.log(`📡 [404] nav status: ${pageStatus}`);
        if (pageStatus === 404) status404 = true;
      }
    }

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
  //  🌐 toggleLang
  // ================================================================
  async function toggleLang() {
    const path = location.pathname;
    const qs   = location.search + location.hash;
    const lang = document.documentElement.lang;
    const base = getBasePath();
    const file = getFileName();

    const lower = path.toLowerCase();
    let targetLang;
    if (lower.includes('/en/')) targetLang = 'ar';
    else if (lower.includes('/ar/')) targetLang = 'en';
    else targetLang = (lang === 'ar') ? 'en' : 'ar';

    window.location.href = base + '/' + targetLang + '/' + file + qs;
  }

  // ================================================================
  //  📥 Load Partial
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
      if (fallbackHTML) el.dataset.loaded = 'true';
      else el.style.display = 'none';
      if (isHeader) setTimeout(hideSplash, 500);
      return;
    }

    try {
      const res = await fetch(bustCache(resolved), {
        cache: 'no-store', headers: { 'Cache-Control': 'no-cache' }
      });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      el.innerHTML = await res.text();
      el.dataset.loaded = 'true';
      el.dataset.version = VERSION;
      safelyExecuteScripts(el);
      if (CONFIG.autoFixLinks) autoFixLinks();
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
  }

  // ================================================================
  //  🎵 Music
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
    if (!musicAudio || !musicBtn) return;

    musicAudio.src = '/image/' + MUSIC_FILES[0];
    if (musicTrack) musicTrack.textContent = MUSIC_NAMES[0];

    musicAudio.addEventListener('ended', () => {
      musicIndex = (musicIndex + 1) % MUSIC_FILES.length;
      musicAudio.src = '/image/' + MUSIC_FILES[musicIndex];
      if (musicTrack) musicTrack.textContent = MUSIC_NAMES[musicIndex];
      musicAudio.play().catch(() => {});
    });
    musicAudio.addEventListener('play',  () => { musicBtn.textContent = '🔊'; isMusicPlaying = true; });
    musicAudio.addEventListener('pause', () => { musicBtn.textContent = '🔇'; isMusicPlaying = false; });

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
    if (isMusicPlaying) musicAudio.pause();
    else musicAudio.play().catch(() => {});
  }
  window.toggleMusic = toggleMusic;

  // ================================================================
  //  🔄 Version Check
  // ================================================================
  async function checkForNewVersion() {
    if (!CONFIG.version) return;
    try {
      const res = await fetch(VERSION_FILE + '?_t=' + Date.now(), { cache: 'no-store' });
      if (!res.ok) return;
      const data = await res.json();
      if (data.version && data.version !== VERSION) {
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
    if ('caches' in window) caches.keys().then(names => names.forEach(n => caches.delete(n)));
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

    if (CONFIG.header) loadPartial('header-placeholder', 'header.html', 'headerLoaded', true);
    else setTimeout(hideSplash, 300);

    if (CONFIG.footer) loadPartial('footer-placeholder', 'footer.html', 'footerLoaded', false);
    if (CONFIG.version) checkForNewVersion();
    if (CONFIG.autoFixLinks) autoFixLinks();

    document.addEventListener('headerLoaded', () => {
      setCanonical();
      addDynamicLinks();
    });

    window.addEventListener('error', (e) => hideSplash());
    window.addEventListener('load', () => setTimeout(hideSplash, 1000));
    document.addEventListener('click', () => { if (!splashHidden) hideSplash(); }, { once: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // ================================================================
  //  🌍 API
  // ================================================================
  window.Jabri = {
    version: VERSION,
    config: CONFIG,
    resolveFile: resolveFile,
    fileExists: fileExists,
    toggleLang: toggleLang,
    toggleMusic: toggleMusic,
    autoFixLinks: autoFixLinks,
    exitPage: exitPage,
    show404Overlay: show404Overlay,
    handle404Redirect: handle404Redirect
  };

  window.switchLanguage = toggleLang;
  window.toggleLanguage = toggleLang;

  console.log(`✅ الدرع المطلق v${VERSION} ready`);
})();