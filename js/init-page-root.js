// =============================================
//  init-page-root.js - تحميل الهيدر والفوتر مع شاشة تحميل
// =============================================

(function() {
  'use strict';
  
  console.log('🚀 [init] بدء التحميل...');
  
  let headerLoaded = false;
  let splashHidden = false;
  
  // ===== إنشاء شاشة التحميل =====
  function createSplashScreen() {
    if (document.getElementById('splashScreen')) return;
    
    console.log('🔄 إنشاء شاشة التحميل...');
    
    const splashHTML = `
      <div id="splashScreen">
        <div class="splash-title">واحة الجبري</div>
        <div class="splash-sub">تراث اليمن العريق · نظرية السندباد الموحدة</div>
        
        <div class="splash-buttons">
          <audio id="bgMusic" loop preload="auto" crossorigin="anonymous">
            <source src="image/music.mp3" type="audio/mpeg">
          </audio>
          <button id="musicBtn" class="splash-btn splash-music">🎵</button>
          <a href="visitor.html" id="visitorBtn" class="splash-btn splash-visitor">
            <span id="visitorText">زوار</span>
            <span id="visitorCount" class="splash-visitor-count">1</span>
          </a>
          <button id="langBtn" class="splash-btn splash-lang">🇸🇦 عربي</button>
        </div>
        
        <div class="spinner"></div>
      </div>
    `;
    
    const div = document.createElement('div');
    div.innerHTML = splashHTML;
    document.body.prepend(div.firstElementChild);
    
    // نضيف الـ style
    const style = document.createElement('style');
    style.id = 'splash-style';
    style.textContent = `
      #splashScreen {
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: #0a0a0f; display: flex; flex-direction: column;
        align-items: center; justify-content: center; z-index: 999999;
        transition: opacity 0.8s ease, visibility 0.8s ease;
        font-family: 'Cairo', sans-serif;
      }
      #splashScreen.hidden { opacity: 0; visibility: hidden; pointer-events: none; }
      .splash-title { color: #6ae3ff; font-size: 2.5rem; font-weight: 900; margin-bottom: 8px; }
      .splash-sub { color: #888; font-size: 1.1rem; margin-bottom: 40px; }
      .splash-buttons { display: flex; gap: 20px; flex-wrap: wrap; justify-content: center; align-items: center; }
      .splash-btn {
        height: 60px; border: none; border-radius: 30px; font-weight: 700;
        font-family: 'Cairo', sans-serif; cursor: pointer; text-decoration: none;
        display: flex; align-items: center; justify-content: center; gap: 10px;
        padding: 0 28px; font-size: 18px; transition: all 0.3s ease;
        backdrop-filter: blur(10px); min-width: 140px;
      }
      .splash-btn:hover { transform: scale(1.08); }
      .splash-music {
        background: rgba(106, 227, 255, 0.2); color: #6ae3ff;
        border: 2px solid rgba(106, 227, 255, 0.3); font-size: 22px;
        animation: pulse 2s infinite;
      }
      .splash-music.playing {
        background: rgba(255, 106, 106, 0.25); color: #ff6a6a;
        border-color: rgba(255, 106, 106, 0.4); animation: none;
      }
      .splash-visitor {
        background: rgba(106, 255, 181, 0.15); color: #6affb5;
        border: 2px solid rgba(106, 255, 181, 0.25);
      }
      .splash-visitor-count {
        font-size: 22px; font-weight: 900; color: #6affb5;
        min-width: 35px; text-align: center;
      }
      .splash-lang {
        background: rgba(255, 215, 0, 0.15); color: #ffd700;
        border: 2px solid rgba(255, 215, 0, 0.25);
      }
      @keyframes pulse {
        0% { box-shadow: 0 0 0 0 rgba(106, 227, 255, 0.4); }
        70% { box-shadow: 0 0 0 20px rgba(106, 227, 255, 0); }
        100% { box-shadow: 0 0 0 0 rgba(106, 227, 255, 0); }
      }
      .spinner {
        width: 40px; height: 40px;
        border: 3px solid rgba(106, 227, 255, 0.1);
        border-top: 3px solid #6ae3ff;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin-top: 30px;
      }
      @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
      #mainContent { opacity: 0; transition: opacity 0.8s ease; }
      #mainContent.visible { opacity: 1; }
      @media (max-width: 600px) {
        .splash-title { font-size: 1.8rem; }
        .splash-sub { font-size: 0.95rem; }
        .splash-buttons { gap: 15px; }
        .splash-btn { height: 50px; font-size: 15px; padding: 0 18px; min-width: 110px; }
        .splash-music { font-size: 18px; }
        .splash-visitor-count { font-size: 18px; min-width: 28px; }
      }
      @media (max-width: 400px) {
        .splash-buttons { gap: 10px; flex-direction: column; }
        .splash-btn { height: 46px; font-size: 14px; padding: 0 16px; min-width: 100px; width: 200px; }
      }
    `;
    document.head.appendChild(style);
    
    console.log('✅ تم إنشاء شاشة التحميل');
  }
  
  // ===== إخفاء شاشة التحميل =====
  function hideSplash() {
    if (splashHidden) return;
    
    const splash = document.getElementById('splashScreen');
    const mainContent = document.getElementById('mainContent');
    const splashStyle = document.getElementById('splash-style');
    
    if (splash) {
      splash.classList.add('hidden');
      splashHidden = true;
    }
    if (mainContent) {
      mainContent.classList.add('visible');
    }
    
    // ✅ إطلاق حدث splashHidden عشان الهيدر يعرف يتحدّث
    document.dispatchEvent(new CustomEvent('splashHidden'));
    
    // تنظيف الكاش بعد ثانية
    setTimeout(function() {
      if (splash) { splash.remove(); }
      if (splashStyle) { splashStyle.remove(); }
      console.log('🧹 تم تنظيف الكاش - إزالة شاشة التحميل والـ style');
    }, 1000);
    
    console.log('✅ شاشة التحميل اختفت');
  }
  
  // ===== تنفيذ السكريبتات =====
  function executeScripts(container) {
    const scripts = container.querySelectorAll('script');
    scripts.forEach(oldScript => {
      const src = oldScript.src || '';
      const content = oldScript.textContent || '';
      const existing = document.querySelector(`script[src="${src}"]`);
      if (src && existing) return;
      const newScript = document.createElement('script');
      if (src) {
        newScript.src = src;
        newScript.async = false;
      } else if (content.trim()) {
        newScript.textContent = content;
      }
      const lastScript = document.scripts[document.scripts.length - 1];
      if (lastScript) {
        lastScript.parentNode.insertBefore(newScript, lastScript.nextSibling);
      } else {
        document.head.appendChild(newScript);
      }
    });
  }
  
  // ===== تحميل الهيدر =====
  function loadHeader() {
    const placeholder = document.getElementById('header-placeholder');
    if (!placeholder) {
      console.warn('⚠️ header-placeholder غير موجود');
      headerLoaded = true;
      setTimeout(hideSplash, 2000);
      return;
    }
    if (placeholder.dataset.loaded === 'true') {
      headerLoaded = true;
      setTimeout(hideSplash, 500);
      return;
    }
    
    console.log('📄 جاري تحميل الهيدر...');
    const basePath = window.location.pathname.includes('/ar/') || window.location.pathname.includes('/en/') ? '../' : '';
    
    fetch((basePath || '') + 'header.html')
      .then(response => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.text();
      })
      .then(html => {
        placeholder.innerHTML = html;
        placeholder.dataset.loaded = 'true';
        console.log('✅ تم تحميل الهيدر');
        executeScripts(placeholder);
        headerLoaded = true;
        document.dispatchEvent(new CustomEvent('headerLoaded'));
        setTimeout(hideSplash, 500);
      })
      .catch(error => {
        console.error('❌ فشل تحميل الهيدر:', error);
        placeholder.innerHTML = `<div style="background:#ff6a6a20;color:#ff6a6a;padding:10px;text-align:center;">⚠️ فشل تحميل الهيدر</div>`;
        headerLoaded = true;
        setTimeout(hideSplash, 2000);
      });
  }
  
  // ===== تحميل الفوتر =====
  function loadFooter() {
    const placeholder = document.getElementById('footer-placeholder');
    if (!placeholder) return;
    if (placeholder.dataset.loaded === 'true') return;
    
    console.log('📄 جاري تحميل الفوتر...');
    const basePath = window.location.pathname.includes('/ar/') || window.location.pathname.includes('/en/') ? '../' : '';
    
    fetch((basePath || '') + 'footer.html')
      .then(response => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.text();
      })
      .then(html => {
        placeholder.innerHTML = html;
        placeholder.dataset.loaded = 'true';
        console.log('✅ تم تحميل الفوتر');
        executeScripts(placeholder);
        document.dispatchEvent(new CustomEvent('footerLoaded'));
      })
      .catch(error => {
        console.error('❌ فشل تحميل الفوتر:', error);
        placeholder.innerHTML = `<div style="background:#ff6a6a20;color:#ff6a6a;padding:10px;text-align:center;">⚠️ فشل تحميل الفوتر</div>`;
      });
  }
  
  // ===== التشغيل =====
  function init() {
    createSplashScreen();
    loadHeader();
    loadFooter();
    
    // في حال تأخر التحميل، نخفي الشاشة بعد 4 ثواني كحد أقصى
    setTimeout(function() {
      if (!splashHidden) {
        console.log('⏰ انتهى الوقت المحدد - إخفاء شاشة التحميل');
        hideSplash();
      }
    }, 4000);
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
  console.log('✅ init-page-root.js جاهز مع تنظيف الكاش');
})();
