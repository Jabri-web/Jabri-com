// ================================================================
//  init-page-root.js - النسخة النهائية v12.0 (الدرع المطلق + الحقن المباشر)
// ================================================================

(function() {
  'use strict';
  console.log('🛡️ [init] تفعيل الدرع المطلق (v12.0)...');

  let splashHidden = false;

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

  // ===== [الأهم] الحقن المباشر بعد <head> (بدون Placeholder) =====
  function injectAfterHead(html) {
    document.head.insertAdjacentHTML('afterend', html);
    initGlobalFunctions();
  }

  // ===== تحميل الهيدر =====
  function loadHeader() {
    console.log('📄 [header] جاري التحميل...');
    fetch(bustCache('/header.html'))
      .then(res => {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        return res.text();
      })
      .then(html => {
        injectAfterHead(html);
        console.log('✅ [header] تم التحميل بنجاح');
        document.dispatchEvent(new CustomEvent('headerLoaded'));
        setTimeout(hideSplash, 300);
      })
      .catch(err => {
        console.error('❌ [header] فشل:', err);
        setTimeout(hideSplash, 500);
      });
  }

  // ===== تحميل الفوتر =====
  function loadFooter() {
    console.log('📄 [footer] جاري التحميل...');
    fetch(bustCache('/footer.html'))
      .then(res => {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        return res.text();
      })
      .then(html => {
        document.body.insertAdjacentHTML('beforeend', html);
        console.log('✅ [footer] تم التحميل');
        document.dispatchEvent(new CustomEvent('footerLoaded'));
      })
      .catch(err => {
        console.error('❌ [footer] فشل:', err);
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
    // 1) كشف عبر العنوان أو المحتوى
    const is404 = document.title.includes('404') || document.body.innerHTML.includes('404');

    // 2) كشف عبر أداء الصفحة (performance)
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
    // منع التكرار
    if (sessionStorage.getItem('jabri404Handled')) return;
    sessionStorage.setItem('jabri404Handled', 'true');

    // إخفاء السبلاش لو ظاهر
    hideSplash();

    // تشغيل موسيقى
    try {
      const audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
      audio.volume = 0.15;
      audio.loop = true;
      audio.play().catch(() => {});
    } catch(e) {}

    // جلب عدد الزوار من localStorage
    let count = localStorage.getItem('jabriVisitorCount');
    if (count === null) count = Math.floor(Math.random() * 80) + 20;
    else count = Number(count);

    // عرض رسالة خطأ فوق كل شيء
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

    // التوجيه إلى الواحة بعد 7 ثوانٍ
    setTimeout(() => {
      window.location.href = '/';
    }, 7000);
  }

  // ===== الدوال العامة =====
  function initGlobalFunctions() {
    // ===== تشغيل الصوت عند أول تفاعل =====
    document.addEventListener('click', function firstInteraction() {
      const bgMusic = document.getElementById('bgMusic');
      if (bgMusic) {
        bgMusic.volume = 0.3;
        bgMusic.play().catch(function() {
          console.log('⚠️ المتصفح منع التشغيل التلقائي، اضغط على زر الصوت');
        });
      }
      document.removeEventListener('click', firstInteraction);
    }, { once: true });

    // ===== القائمة الجانبية =====
    const menuBtn = document.getElementById('menuBtn');
    const sideMenu = document.getElementById('sideMenu');
    const menuOverlay = document.getElementById('menuOverlay');

    function toggleMenu() {
      sideMenu.classList.toggle('open');
      menuOverlay.classList.toggle('active');
    }
    function closeMenu() {
      sideMenu.classList.remove('open');
      menuOverlay.classList.remove('active');
    }

    if (menuBtn) menuBtn.addEventListener('click', toggleMenu);
    window.toggleMenu = toggleMenu;
    window.closeMenu = closeMenu;

    // ===== زر الصوت =====
    window.toggleMusic = function() {
      const audio = document.getElementById('bgMusic');
      if (!audio) return;
      const btn = document.getElementById('musicBottomBtn');
      if (audio.paused) {
        audio.play().catch(() => {});
        btn.textContent = '🔊';
        btn.classList.add('playing');
      } else {
        audio.pause();
        btn.textContent = '🎵';
        btn.classList.remove('playing');
      }
    };

    // ===== زر المحادثة =====
    window.toggleChat = function() {
      alert('💬 المحادثة قيد التطوير... قريباً بإذن الله!\n\n📧 للتواصل: jabri62018@gmail.com');
    };

    // ===== تبديل اللغة =====
    window.toggleLang = function() {
      const next = document.documentElement.lang === 'ar' ? 'en' : 'ar';
      document.documentElement.dir = next === 'en' ? 'ltr' : 'rtl';
      document.documentElement.lang = next;
      localStorage.setItem('lang', next);

      document.querySelectorAll('.top-btn.lang, .bottom-btn.lang').forEach(btn => {
        btn.innerHTML = next === 'en' ? '<span class="ar">🇾🇪 عربي</span><span class="en">🇬🇧 EN</span>' : '<span class="ar">🇾🇪 عربي</span><span class="en">🇬🇧 EN</span>';
      });
    };

    // ===== نظام تسجيل الدخول =====
    const loginBtn = document.getElementById('loginBtn');
    const loginModal = document.getElementById('loginModal');
    const localLoginForm = document.getElementById('localLoginForm');
    const localUsername = document.getElementById('localUsername');
    const localPassword = document.getElementById('localPassword');
    const logoutBtn = document.getElementById('logoutBtn');
    const loginOptions = document.getElementById('loginOptions');
    const userStatus = document.getElementById('userStatus');
    const userNameText = document.getElementById('userNameText');
    const userRoleText = document.getElementById('userRoleText');
    const loginTitle = document.getElementById('loginTitle');
    const closeLoginModal = document.getElementById('closeLoginModal');

    const USERS = {
      'admin': { password: '12345', role: 'admin', name: 'المدير' },
      'user': { password: 'user123', role: 'user', name: 'مستخدم' }
    };
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (loginBtn) {
      function openLoginModal() {
        loginModal.classList.add('active');
        updateLoginUI();
      }
      function closeLoginModalFn() {
        loginModal.classList.remove('active');
        localLoginForm.classList.remove('active');
      }

      loginBtn.addEventListener('click', openLoginModal);
      closeLoginModal.addEventListener('click', closeLoginModalFn);
      loginModal.addEventListener('click', function(e) {
        if (e.target === this) closeLoginModalFn();
      });

      function updateLoginUI() {
        if (currentUser) {
          userStatus.style.display = 'block';
          loginOptions.style.display = 'none';
          logoutBtn.style.display = 'block';
          userNameText.textContent = currentUser.name;
          userRoleText.textContent = currentUser.role;
          loginTitle.innerHTML = '👤 مرحباً ' + currentUser.name;
        } else {
          userStatus.style.display = 'none';
          loginOptions.style.display = 'block';
          logoutBtn.style.display = 'none';
          loginTitle.innerHTML = '🔐 تسجيل الدخول';
          localLoginForm.classList.remove('active');
        }
      }

      document.getElementById('googleLoginBtn').addEventListener('click', function() {
        currentUser = { name: 'مستخدم Google', role: 'google', email: 'user@gmail.com' };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateLoginUI();
        setTimeout(closeLoginModalFn, 1500);
      });

      document.getElementById('localLoginToggle').addEventListener('click', function() {
        localLoginForm.classList.toggle('active');
      });

      function localLogin() {
        const username = localUsername.value.trim();
        const password = localPassword.value.trim();
        if (!username || !password) {
          alert('⚠️ الرجاء إدخال اسم المستخدم وكلمة المرور');
          return;
        }
        const user = USERS[username];
        if (user && user.password === password) {
          currentUser = { name: user.name, role: user.role };
          localStorage.setItem('currentUser', JSON.stringify(currentUser));
          closeLoginModalFn();
          alert('✅ تم تسجيل الدخول بنجاح');
        } else {
          alert('❌ اسم المستخدم أو كلمة المرور غير صحيحة');
        }
      }

      document.getElementById('localLoginBtn').addEventListener('click', localLogin);

      function logout() {
        currentUser = null;
        localStorage.removeItem('currentUser');
        updateLoginUI();
      }
      logoutBtn.addEventListener('click', logout);

      window.openLoginModal = openLoginModal;
      window.closeLoginModalFn = closeLoginModalFn;
      window.localLogin = localLogin;
      window.logout = logout;
    }

    // ===== دوال الإعدادات =====
    function openSettings() {
      document.getElementById('settingsOverlay').classList.add('active');
    }
    function closeSettings() {
      document.getElementById('settingsOverlay').classList.remove('active');
    }
    function setMode(mode) {
      document.body.className = mode + ' device-desktop';
      document.getElementById('dayBtn').classList.toggle('active', mode === 'day');
      document.getElementById('nightBtn').classList.toggle('active', mode === 'night');
    }
    function setDevice(device) {
      document.body.className = document.body.className.replace(/device-\w+/, 'device-' + device);
      document.getElementById('desktopBtn').classList.toggle('active', device === 'desktop');
      document.getElementById('phoneBtn').classList.toggle('active', device === 'phone');
    }

    window.openSettings = openSettings;
    window.closeSettings = closeSettings;
    window.setMode = setMode;
    window.setDevice = setDevice;
  }

  // ===== دالة init الرئيسية =====
  function init() {
    createSplash();
    detect404AndHandle();   // كشف 404 فوراً
    loadHeader();
    loadFooter();

    document.addEventListener('headerLoaded', function() {
      setDynamicCanonical();
      addDynamicLinks();
    });

    // مهلة أمان لإخفاء السبلاش
    setTimeout(function() {
      if (!splashHidden) {
        console.warn('⏰ انتهاء المهلة، إخفاء الشاشة قسراً');
        hideSplash();
      }
    }, 5000);
  }

  // ===== تشغيل =====
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  console.log('✅ init-page-root.js جاهز (النسخة النهائية v12.0)');
})();