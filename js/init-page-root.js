// ================================================================
//  init-page-root.js - الإصدار النهائي (الدرع المطلق + اللغة + 404 + تنظيف الكاش)
//  التاريخ: 2026-08-13
// ================================================================

(function() {
  'use strict';
  console.log('🛡️ [init] تفعيل الدرع المطلق (v5.0.0)...');

  let splashHidden = false;
  let currentLang = 'ar'; // 'ar' or 'en'

  // ===== شاشة الترحيب =====
  function createSplash() {
    if (document.getElementById('splashScreen')) return;
    const html = `
      <div id="splashScreen">
        <div class="splash-title">واحة الجبري</div>
        <div class="splash-sub">تراث اليمن العريق · نظرية السندباد الموحدة</div>
        <div class="spinner"></div>
        <style>
          #splashScreen { position: fixed; top:0; left:0; width:100%; height:100%; background:#0a0a0f; display:flex; flex-direction:column; align-items:center; justify-content:center; z-index:999999; transition: opacity 0.6s ease; font-family: 'Cairo', sans-serif; }
          #splashScreen.hidden { opacity:0; pointer-events:none; }
          .splash-title { color:#6ae3ff; font-size:2.5rem; font-weight:900; }
          .splash-sub { color:#888; font-size:1.1rem; margin-top:8px; }
          .spinner { width:40px; height:40px; margin-top:30px; border:3px solid rgba(106,227,255,0.1); border-top:3px solid #6ae3ff; border-radius:50%; animation: spin 1s linear infinite; }
          @keyframes spin { 0% { transform:rotate(0deg); } 100% { transform:rotate(360deg); } }
          @media (max-width:600px) { .splash-title { font-size:1.8rem; } .splash-sub { font-size:0.95rem; } }
        </style>
      </div>
    `;
    const div = document.createElement('div');
    div.innerHTML = html;
    document.body.prepend(div.firstElementChild);
  }

  function hideSplash() {
    if (splashHidden) return;
    const el = document.getElementById('splashScreen');
    if (el) el.classList.add('hidden');
    splashHidden = true;
    setTimeout(() => { if (el) el.remove(); }, 800);
  }

  function bustCache(url) {
    const sep = url.includes('?') ? '&' : '?';
    return url + sep + '_t=' + Date.now();
  }

  function safelyExecuteScripts(container) {
    const scripts = container.querySelectorAll('script');
    scripts.forEach(oldScript => {
      try {
        const src = oldScript.src || '';
        const content = oldScript.textContent || '';
        if (src) {
          const existing = document.querySelector(`script[src="${src}"]`);
          if (!existing) {
            const newScript = document.createElement('script');
            newScript.src = src;
            newScript.async = false;
            document.head.appendChild(newScript);
          }
        } else if (content.trim()) {
          const newScript = document.createElement('script');
          newScript.textContent = content;
          document.head.appendChild(newScript);
        }
      } catch (e) {
        console.warn('⚠️ [init] تخطي سكربت:', e.message);
      }
    });
  }

  // ===== تحميل الهيدر والفوتر =====
  function loadHeader() {
    const placeholder = document.getElementById('header-placeholder');
    if (!placeholder) {
      console.warn('⚠️ [header] placeholder غير موجود');
      setTimeout(hideSplash, 500);
      return;
    }
    if (placeholder.dataset.loaded === 'true') {
      setTimeout(hideSplash, 500);
      return;
    }
    console.log('📄 [header] جاري التحميل...');
    fetch(bustCache('header.html'))
      .then(res => {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        return res.text();
      })
      .then(html => {
        placeholder.innerHTML = html;
        placeholder.dataset.loaded = 'true';
        safelyExecuteScripts(placeholder);
        console.log('✅ [header] تم التحميل');
        document.dispatchEvent(new CustomEvent('headerLoaded'));
        setTimeout(hideSplash, 300);
      })
      .catch(err => {
        console.error('❌ [header] فشل:', err);
        placeholder.innerHTML = `<div style="color:#ff6a6a;padding:20px;text-align:center;">⚠️ فشل تحميل الهيدر</div>`;
        setTimeout(hideSplash, 500);
      });
  }

  function loadFooter() {
    const placeholder = document.getElementById('footer-placeholder');
    if (!placeholder) return;
    if (placeholder.dataset.loaded === 'true') return;
    console.log('📄 [footer] جاري التحميل...');
    fetch(bustCache('footer.html'))
      .then(res => {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        return res.text();
      })
      .then(html => {
        placeholder.innerHTML = html;
        placeholder.dataset.loaded = 'true';
        safelyExecuteScripts(placeholder);
        console.log('✅ [footer] تم التحميل');
        document.dispatchEvent(new CustomEvent('footerLoaded'));
      })
      .catch(err => {
        console.error('❌ [footer] فشل:', err);
        placeholder.innerHTML = `<div style="color:#ff6a6a;padding:10px;text-align:center;">⚠️ فشل الفوتر</div>`;
      });
  }

  // ===== الروابط الديناميكية (prev/next/up) =====
  function addDynamicLinks() {
    const currentPath = window.location.pathname;
    const pageLinks = {
      '/Page1.html': { prev: null, next: '/Page2.html', up: '/research.html' },
      '/Page2.html': { prev: '/Page1.html', next: '/Page3.html', up: '/research.html' },
      '/Page3.html': { prev: '/Page2.html', next: '/Page4.html', up: '/research.html' },
      '/Page4.html': { prev: '/Page3.html', next: '/Page5.html', up: '/research.html' },
      '/Page5.html': { prev: '/Page4.html', next: '/Page6.html', up: '/research.html' },
      '/Page6.html': { prev: '/Page5.html', next: '/Page7.html', up: '/research.html' },
      '/Page7.html': { prev: '/Page6.html', next: '/Page8.html', up: '/research.html' },
      '/Page8.html': { prev: '/Page7.html', next: '/Page9.html', up: '/research.html' },
      '/Page9.html': { prev: '/Page8.html', next: '/Page10.html', up: '/research.html' },
      '/Page10.html': { prev: '/Page9.html', next: '/Page11.html', up: '/research.html' },
      '/Page11.html': { prev: '/Page10.html', next: '/Page12.html', up: '/research.html' },
      '/Page12.html': { prev: '/Page11.html', next: null, up: '/research.html' },
      '/Sanaa.html': { prev: null, next: '/Shibam.html', up: '/yemen-photo.html' },
      '/Shibam.html': { prev: '/Sanaa.html', next: '/Soqatra.html', up: '/yemen-photo.html' },
      '/Soqatra.html': { prev: '/Shibam.html', next: null, up: '/yemen-photo.html' }
    };
    const links = pageLinks[currentPath];
    if (!links) return;
    const head = document.head;
    if (links.prev) {
      let link = document.querySelector('link[rel="prev"]');
      if (!link) { link = document.createElement('link'); link.rel = 'prev'; head.appendChild(link); }
      link.href = 'https://jabri-com.vercel.app' + links.prev;
    }
    if (links.next) {
      let link = document.querySelector('link[rel="next"]');
      if (!link) { link = document.createElement('link'); link.rel = 'next'; head.appendChild(link); }
      link.href = 'https://jabri-com.vercel.app' + links.next;
    }
    if (links.up) {
      let link = document.querySelector('link[rel="up"]');
      if (!link) { link = document.createElement('link'); link.rel = 'up'; head.appendChild(link); }
      link.href = 'https://jabri-com.vercel.app' + links.up;
    }
    console.log('🔗 روابط ديناميكية مضافة لـ ' + currentPath);
  }

  // ===== ضبط Canonical تلقائياً =====
  function setDynamicCanonical() {
    const currentUrl = window.location.href.split('?')[0].split('#')[0];
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = currentUrl;
    console.log('🔗 Canonical مضبوط على: ' + currentUrl);
  }

  // ================================================================
  //  🚨 كاشف 404 التلقائي + معالجته
  // ================================================================
  function detect404AndHandle() {
    const is404 = document.title.includes('404') || document.body.innerHTML.includes('404');
    let status404 = false;
    if (window.performance && window.performance.getEntries) {
      const entries = window.performance.getEntries();
      for (let entry of entries) {
        if (entry.name === window.location.href && entry.responseStatus === 404) {
          status404 = true;
          break;
        }
      }
    }
    if (is404 || status404) {
      console.warn('🚨 [404] تم كشف خطأ 404');
      handle404Error();
    }
  }

  function handle404Error() {
    if (sessionStorage.getItem('jabri404Handled')) return;
    sessionStorage.setItem('jabri404Handled', 'true');
    hideSplash();
    try {
      const audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
      audio.volume = 0.15;
      audio.loop = true;
      audio.play().catch(() => {});
    } catch(e) {}
    let count = localStorage.getItem('jabriVisitorCount');
    if (count === null) count = Math.floor(Math.random() * 80) + 20;
    else count = Number(count);
    const div = document.createElement('div');
    div.id = 'jabri-404-overlay';
    div.style.cssText = `
      position: fixed; top: 20px; left: 50%; transform: translateX(-50%);
      background: #0b1a2e; color: #f0e6d3; padding: 20px 30px;
      border-radius: 40px; border: 1px solid #b48b5a;
      font-size: 20px; z-index: 999999;
      box-shadow: 0 15px 40px rgba(0,0,0,0.8);
      text-align: center; font-family: 'Cairo', sans-serif;
      backdrop-filter: blur(12px); direction: rtl;
      max-width: 90%;
    `;
    div.innerHTML = `
      🏝️ عذرًا، هذا الدرب غير موجود في واحة الجبري.<br>
      🌊 سيتم تحويلك إلى <strong>الواحة الرئيسية</strong> بعد 7 ثوانٍ<br>
      👥 عدد الزوار: <strong>${count}</strong>
      <div style="margin-top:12px; font-size:14px; color:#bbaa88;">🎵 نغمات السندباد تعزف لك...</div>
    `;
    document.body.prepend(div);
    setTimeout(() => {
      window.location.href = '/';
    }, 7000);
  }

  // ================================================================
  //  🧹 تنظيف الكاش ومنع اختناق الشاشة (bfcache)
  // ================================================================
  function setupCacheCleaner() {
    console.log('🧹 [init] تفعيل أداة تنظيف الكاش...');

    window.addEventListener('pageshow', function(event) {
      if (event.persisted) {
        console.warn('⚠️ [init] تم استرجاع الصفحة من bfcache، إعادة تحميل...');
        window.location.reload(true);
      }
    });

    (function clearAllIntervals() {
      var highestIntervalId = setInterval(function() {}, 0);
      clearInterval(highestIntervalId);
      for (var i = 1; i < highestIntervalId; i++) {
        clearInterval(i);
        clearTimeout(i);
      }
      console.log('✅ [init] تم تنظيف المؤقتات العالقة');
    })();

    if (!document.querySelector('meta[http-equiv="Cache-Control"][content*="no-cache"]')) {
      var meta = document.createElement('meta');
      meta.httpEquiv = 'Cache-Control';
      meta.content = 'no-cache, no-store, must-revalidate';
      document.head.appendChild(meta);
      var metaPragma = document.createElement('meta');
      metaPragma.httpEquiv = 'Pragma';
      metaPragma.content = 'no-cache';
      document.head.appendChild(metaPragma);
      var metaExpires = document.createElement('meta');
      metaExpires.httpEquiv = 'Expires';
      metaExpires.content = '0';
      document.head.appendChild(metaExpires);
    }

    window.addEventListener('beforeunload', function() {
      var music = document.getElementById('oasisMusic');
      if (music) {
        music.pause();
        music.currentTime = 0;
      }
    });

    console.log('✅ [init] أداة تنظيف الكاش جاهزة');
  }

  // ================================================================
  //  🌍 نظام اللغة (العربية / الإنجليزية)
  // ================================================================
  function detectLanguage() {
    const saved = localStorage.getItem('jabri_lang');
    if (saved === 'en' || saved === 'ar') return saved;
    // كشف من متصفح المستخدم
    const browserLang = navigator.language || navigator.languages?.[0] || 'ar';
    return browserLang.startsWith('en') ? 'en' : 'ar';
  }

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('jabri_lang', lang);
    
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.classList.toggle('en', lang === 'en');

    // تحديث زر اللغة
    const langBtn = document.getElementById('langBtn');
    if (langBtn) {
      langBtn.textContent = lang === 'ar' ? '🇸🇦 عربي' : '🇬🇧 English';
    }

    // تحديث عداد الزوار
    updateCounterDisplay();

    // تحديث الفوتر
    updateFooterLang();

    // تحديث نصوص الصفحة التي تحمل class="ar" / class="en"
    document.querySelectorAll('.ar, .en').forEach(el => {
      if (lang === 'ar') {
        el.style.display = el.classList.contains('ar') ? '' : 'none';
      } else {
        el.style.display = el.classList.contains('en') ? '' : 'none';
      }
    });

    console.log(`🌍 [init] اللغة: ${lang === 'ar' ? 'العربية' : 'English'}`);
  }

  function toggleLang() {
    const newLang = currentLang === 'ar' ? 'en' : 'ar';
    applyLanguage(newLang);
  }

  function updateCounterDisplay() {
    const display = document.getElementById('visitorCountDisplay');
    if (!display) return;
    try {
      let count = localStorage.getItem('jabri_visitor_count_root');
      if (count === null) count = 0;
      else count = parseInt(count, 10);
      display.innerText = count.toLocaleString(currentLang === 'ar' ? 'ar-EG' : 'en-US');
    } catch (e) {
      display.innerText = '⚠️';
    }
  }

  function updateFooterLang() {
    const isEnglish = currentLang === 'en';
    const searchTitle = document.getElementById('searchTitle');
    if (searchTitle) {
      searchTitle.innerHTML = isEnglish ?
        "<strong>🔍 Search for Researcher:</strong>" :
        "<strong>🔍 البحث عن الباحث:</strong>";
    }
    const copyright = document.getElementById('copyright');
    if (copyright) {
      copyright.textContent = isEnglish ?
        "© 2026 Eng. Abdulla Mohammed Nasser Al-Jabri - All Rights Reserved" :
        "© 2026 م/ عبدالله محمد ناصر الجبري - جميع الحقوق محفوظة";
    }
    document.querySelectorAll('#site-footer .txt').forEach(el => {
      const newText = isEnglish ? el.getAttribute('data-en') : el.getAttribute('data-ar');
      if (newText) el.textContent = newText;
    });
  }

  // ================================================================
  //  🎵 نظام الموسيقى
  // ================================================================
  function initMusic() {
    const music = document.getElementById('oasisMusic');
    const musicBtn = document.getElementById('musicToggle');
    if (!music || !musicBtn) return;
    
    let isPlaying = false;
    music.volume = 0.4;

    function startMusicOnce() {
      if (!isPlaying) {
        music.play().then(() => {
          isPlaying = true;
          musicBtn.innerHTML = '🔊';
          musicBtn.classList.add('playing');
        }).catch(e => console.log(e));
      }
      document.removeEventListener('touchstart', startMusicOnce);
      document.removeEventListener('click', startMusicOnce);
    }
    
    document.addEventListener('touchstart', startMusicOnce);
    document.addEventListener('click', startMusicOnce);

    musicBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      if (isPlaying) {
        music.pause();
        musicBtn.innerHTML = '🎵';
        musicBtn.classList.remove('playing');
        isPlaying = false;
        localStorage.setItem('jabri_music_state', 'paused');
      } else {
        music.play().then(() => {
          musicBtn.innerHTML = '🔊';
          musicBtn.classList.add('playing');
          isPlaying = true;
          localStorage.setItem('jabri_music_state', 'playing');
        }).catch(() => {});
      }
    });

    // استرجاع الحالة من localStorage
    if (localStorage.getItem('jabri_music_state') === 'playing') {
      music.play().then(() => {
        musicBtn.innerHTML = '🔊';
        musicBtn.classList.add('playing');
        isPlaying = true;
      }).catch(() => {});
    }
  }

  // ================================================================
  //  🧩 دوال الموقع (login/logout/openFile/toggleChat)
  // ================================================================
  function login() {
    const visitorSection = document.getElementById('visitor-section');
    const userSection = document.getElementById('user-section');
    if (visitorSection) visitorSection.classList.add('hidden');
    if (userSection) userSection.classList.remove('hidden');
    const username = document.getElementById('username');
    if (username) username.textContent = 'الزائر';
  }

  function logout() {
    const visitorSection = document.getElementById('visitor-section');
    const userSection = document.getElementById('user-section');
    if (visitorSection) visitorSection.classList.remove('hidden');
    if (userSection) userSection.classList.add('hidden');
  }

  function openFile() {
    const file = document.getElementById('file-input');
    if (file && file.value) window.open(file.value, '_blank');
  }

  function toggleChat() {
    const box = document.getElementById('chatBox');
    if (box) box.style.display = box.style.display === 'block' ? 'none' : 'block';
  }

  // ================================================================
  //  🏁 دالة init الرئيسية
  // ================================================================
  function init() {
    createSplash();
    detect404AndHandle();
    setupCacheCleaner();

    // تعيين اللغة
    const lang = detectLanguage();
    applyLanguage(lang);

    // تحميل الهيدر والفوتر
    loadHeader();
    loadFooter();

    // تشغيل الموسيقى
    setTimeout(initMusic, 500);

    // ربط زر اللغة بالدالة العامة
    window.toggleLang = toggleLang;

    // ربط دوال الموقع بالـ window
    window.login = login;
    window.logout = logout;
    window.openFile = openFile;
    window.toggleChat = toggleChat;

    // ربط دالة trigger404
    window.trigger404 = function() {
      window.location.href = '/404.html';
    };

    document.addEventListener('headerLoaded', function() {
      setDynamicCanonical();
      addDynamicLinks();
      // إعادة تحديث اللغة بعد تحميل الهيدر
      applyLanguage(currentLang);
    });

    document.addEventListener('footerLoaded', function() {
      // تحديث اللغة بعد تحميل الفوتر
      applyLanguage(currentLang);
    });

    setTimeout(function() {
      if (!splashHidden) {
        console.warn('⏰ انتهاء المهلة، إخفاء الشاشة قسراً');
        hideSplash();
      }
    }, 5000);

    console.log('✅ [init] التهيئة مكتملة بنجاح');
  }

  // ===== تشغيل =====
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  console.log('✅ init-page-root.js جاهز (النسخة النهائية مع اللغة)');
})();