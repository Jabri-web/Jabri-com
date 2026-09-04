// ================================================================
//  init-page-root.js - الإصدار النهائي v9.0 (الحقن المباشر بدون 404)
// ================================================================

(function() {
  'use strict';
  console.log('🛡️ [init] تفعيل الدرع المطلق (v9.0)...');

  // ===== تنظيف الكاش =====
  function bustCache(url) {
    const sep = url.includes('?') ? '&' : '?';
    return url + sep + '_t=' + Date.now();
  }

  // ===== ===== ===== ===== ===== ===== ===== ===== ===== =====
  //  دالة الحقن المباشر (بدون البحث عن أي placeholder)
  // ===== ===== ===== ===== ===== ===== ===== ===== ===== =====
  function injectAfterHead(html) {
    // هذا هو السطر السحري: إضافة الهيدر بعد وسم </head> مباشرة
    document.head.insertAdjacentHTML('afterend', html);
    
    // إعادة تشغيل الدوال العامة بعد الحقن
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
      })
      .catch(err => {
        console.error('❌ [header] فشل:', err);
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
        console.log('✅ [footer] تم التحميل بنجاح');
        document.dispatchEvent(new CustomEvent('footerLoaded'));
      })
      .catch(err => {
        console.error('❌ [footer] فشل:', err);
      });
  }

  // ===== ===== ===== ===== ===== ===== ===== ===== ===== =====
  //  الدوال العامة (التي تعمل بعد تحميل الهيدر)
  // ===== ===== ===== ===== ===== ===== ===== ===== ===== =====
  function initGlobalFunctions() {
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

    // ===== نظام تسجيل الدخول =====
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
    const loginBtn = document.getElementById('loginBtn');
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

    // ===== دوال الواجهة العامة =====
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

    window.toggleChat = function() {
      alert('💬 المحادثة قيد التطوير... قريباً بإذن الله!\n\n📧 للتواصل: jabri62018@gmail.com');
    };

    window.toggleLang = function() {
      const next = document.documentElement.lang === 'ar' ? 'en' : 'ar';
      document.documentElement.dir = next === 'en' ? 'ltr' : 'rtl';
      document.documentElement.lang = next;
      localStorage.setItem('lang', next);

      document.querySelectorAll('.top-btn.lang, .bottom-btn.lang').forEach(btn => {
        btn.innerHTML = next === 'en' ? '<span class="ar">🇾🇪 عربي</span><span class="en">🇬🇧 EN</span>' : '<span class="ar">🇾🇪 عربي</span><span class="en">🇬🇧 EN</span>';
      });
    };
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
  }

  // ===== تشغيل التهيئة =====
  function init() {
    loadHeader();
    loadFooter();

    document.addEventListener('headerLoaded', function() {
      setDynamicCanonical();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  console.log('✅ init-page-root.js جاهز (النسخة النهائية v9.0)');
})();