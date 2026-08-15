// ============================================
//   menu.js - قائمة ذكية متعددة اللغات
//   الزر: ذهبي، في أعلى الشاشة
//   تم التحديث: زيادة z-index و !important
// ============================================

(function() {
  // --- تحديد مسار اللغة الحالي ---
  const currentPath = window.location.pathname;
  let langDir = '';
  let isArabic = true;
  
  if (currentPath.startsWith('/ar/')) {
    langDir = '/ar';
    isArabic = true;
  } else if (currentPath.startsWith('/en/')) {
    langDir = '/en';
    isArabic = false;
  } else {
    langDir = '';
    isArabic = true;
  }
  
  // --- 1. إنشاء زر القائمة ---
  const menuContainer = document.createElement('div');
  menuContainer.id = 'hamburger-menu';
  menuContainer.style.cssText = `
        position: fixed !important;
        top: 50px !important;
        right: 250px !important;
        z-index: 9999999 !important;
        cursor: pointer !important;
        background: linear-gradient(135deg, #ffd700, #f0a500) !important;
        color: #0a0a0f !important;
        border: none !important;
        padding: 8px 14px !important;
        border-radius: 10px !important;
        font-size: 14px !important;
        font-weight: bold !important;
        box-shadow: 0 0 15px rgba(255, 215, 0, 0.4) !important;
        transition: 0.3s !important;
        display: inline-flex !important;
        align-items: center !important;
        gap: 6px !important;
        backdrop-filter: blur(6px) !important;
    `;
  
  menuContainer.innerHTML = `
        <div style="display:flex;flex-direction:column;gap:4px;width:22px;height:18px;justify-content:center;">
            <span style="display:block;height:3px;background:#0a0a0f;border-radius:4px;transition:0.3s;"></span>
            <span style="display:block;height:3px;background:#0a0a0f;border-radius:4px;transition:0.3s;"></span>
            <span style="display:block;height:3px;background:#0a0a0f;border-radius:4px;transition:0.3s;"></span>
        </div>
        <span style="font-size:12px;color:#0a0a0f;font-weight:bold;">${isArabic ? 'قائمة' : 'Menu'}</span>
    `;
  
  menuContainer.addEventListener('mouseenter', () => {
    menuContainer.style.transform = 'scale(1.08)';
    menuContainer.style.boxShadow = '0 0 25px rgba(255, 215, 0, 0.7)';
  });
  menuContainer.addEventListener('mouseleave', () => {
    menuContainer.style.transform = 'scale(1)';
    menuContainer.style.boxShadow = '0 0 15px rgba(255, 215, 0, 0.4)';
  });
  
  // --- 2. القائمة المنسدلة ---
  const dropdown = document.createElement('div');
  dropdown.id = 'menu-dropdown';
  dropdown.style.cssText = `
        display: none !important;
        position: fixed !important;
        top: 70px !important;
        right: 20px !important;
        background: rgba(26, 26, 46, 0.95) !important;
        backdrop-filter: blur(12px) !important;
        border: 2px solid #ffd700 !important;
        border-radius: 16px !important;
        padding: 18px 22px !important;
        min-width: 250px !important;
        max-height: 70vh !important;
        overflow-y: auto !important;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.7) !important;
        z-index: 9999998 !important;
        flex-direction: column !important;
        gap: 4px !important;
        transition: 0.3s !important;
    `;
  
  // --- 3. المحتوى مع الروابط الذكية ---
  const staticContent = `
        <div style="display:flex; gap:10px; justify-content:center; padding-bottom:10px; border-bottom:1px solid rgba(255,215,0,0.2); margin-bottom:10px;">
            <a href="/ar/author-history.html" style="color:${isArabic ? '#ffd700' : '#aaa'}; padding:5px 15px; border:1px solid ${isArabic ? '#ffd700' : '#555'}; border-radius:8px; text-decoration:none; font-weight:bold; background:${isArabic ? 'rgba(255,215,0,0.1)' : 'transparent'};">🇾🇪 عربي</a>
            <a href="/en/author-history.html" style="color:${!isArabic ? '#ffd700' : '#aaa'}; padding:5px 15px; border:1px solid ${!isArabic ? '#ffd700' : '#555'}; border-radius:8px; text-decoration:none; font-weight:bold; background:${!isArabic ? 'rgba(255,215,0,0.1)' : 'transparent'};">🇬🇧 English</a>
        </div>

        <a href="${langDir}/" style="color:#fff;padding:10px 14px;border-radius:8px;text-decoration:none;display:flex;align-items:center;gap:12px;transition:0.3s;border-bottom:1px solid rgba(255,215,0,0.08);">
            <span style="font-size:1.3rem;">🏠</span> ${isArabic ? 'الرئيسية' : 'Home'}
        </a>
        <a href="${langDir}/Sanaa.html" style="color:#fff;padding:10px 14px;border-radius:8px;text-decoration:none;display:flex;align-items:center;gap:12px;transition:0.3s;border-bottom:1px solid rgba(255,215,0,0.08);">
            <span style="font-size:1.3rem;">🏙️</span> ${isArabic ? 'صنعاء' : 'Sanaa'}
        </a>
        <a href="${langDir}/Shibam.html" style="color:#fff;padding:10px 14px;border-radius:8px;text-decoration:none;display:flex;align-items:center;gap:12px;transition:0.3s;border-bottom:1px solid rgba(255,215,0,0.08);">
            <span style="font-size:1.3rem;">🏘️</span> ${isArabic ? 'شبام' : 'Shibam'}
        </a>
        <a href="${langDir}/Soqatra.html" style="color:#fff;padding:10px 14px;border-radius:8px;text-decoration:none;display:flex;align-items:center;gap:12px;transition:0.3s;border-bottom:1px solid rgba(255,215,0,0.08);">
            <span style="font-size:1.3rem;">🌴</span> ${isArabic ? 'سقطرى' : 'Soqatra'}
        </a>
        
        <!-- 📰 رسالة قوقل -->
        <a href="${langDir}/journal.html" style="color:#fff;padding:10px 14px;border-radius:8px;text-decoration:none;display:flex;align-items:center;gap:12px;transition:0.3s;border-bottom:1px solid rgba(255,215,0,0.08);">
            <span style="font-size:1.3rem;">📰</span> ${isArabic ? 'رسالة قوقل' : 'Google Message'}
        </a>
        
        <a href="${langDir}/research.html" style="color:#fff;padding:10px 14px;border-radius:8px;text-decoration:none;display:flex;align-items:center;gap:12px;transition:0.3s;border-bottom:1px solid rgba(255,215,0,0.08);">
            <span style="font-size:1.3rem;">🔬</span> ${isArabic ? 'البحوث' : 'Research'}
        </a>
        <a href="${langDir}/Office.html" style="color:#fff;padding:10px 14px;border-radius:8px;text-decoration:none;display:flex;align-items:center;gap:12px;transition:0.3s;border-bottom:1px solid rgba(255,215,0,0.08);">
            <span style="font-size:1.3rem;">📫</span> ${isArabic ? 'المكتبة' : 'Library'}
        </a>
        
        <!-- 🧑‍💼 السيرة الذاتية -->
        <a href="${langDir}/Author-cv.html" style="color:#fff;padding:10px 14px;border-radius:8px;text-decoration:none;display:flex;align-items:center;gap:12px;transition:0.3s;border-bottom:1px solid rgba(255,215,0,0.08);">
            <span style="font-size:1.3rem;">🧑‍💼</span> ${isArabic ? 'السيرة الذاتية' : 'CV'}
        </a>
        
        <a href="${langDir}/about.html" style="color:#fff;padding:10px 14px;border-radius:8px;text-decoration:none;display:flex;align-items:center;gap:12px;transition:0.3s;border-bottom:1px solid rgba(255,215,0,0.08);">
            <span style="font-size:1.3rem;">ℹ️</span> ${isArabic ? 'عن الواحة' : 'About'}
        </a>
        <a href="${langDir}/author-history.html" style="color:#fff;padding:10px 14px;border-radius:8px;text-decoration:none;display:flex;align-items:center;gap:12px;transition:0.3s;border-bottom:1px solid rgba(255,215,0,0.08);">
            <span style="font-size:1.3rem;">📜</span> ${isArabic ? 'قصة الباحث' : 'Author History'}
        </a>
        
        <a href="https://en.wikipedia.org/wiki/User:Jabri2026" target="_blank" style="color:#fff;padding:10px 14px;border-radius:8px;text-decoration:none;display:flex;align-items:center;gap:12px;transition:0.3s;border-bottom:1px solid rgba(255,215,0,0.08);">
            <span style="font-size:1.3rem;">🌐</span> Wikipedia
        </a>
        <a href="https://github.com/jabri-web" target="_blank" style="color:#fff;padding:10px 14px;border-radius:8px;text-decoration:none;display:flex;align-items:center;gap:12px;transition:0.3s;border-bottom:1px solid rgba(255,215,0,0.08);">
            <span style="font-size:1.3rem;">🐙</span> GitHub
        </a>
        
        <div style="border-bottom:2px solid rgba(255,215,0,0.2);margin:8px 0;"></div>
        <div style="color:#6ae3ff;padding:6px 14px;font-size:0.9rem;font-weight:bold;">
            💬 ${isArabic ? 'المحادثات الأخيرة:' : 'Recent Chats:'}
        </div>
    `;
  
  const dynamicContainer = document.createElement('div');
  dynamicContainer.id = 'dynamic-chats';
  dynamicContainer.style.cssText = `display:flex;flex-direction:column;gap:4px;margin:4px 0;`;
  
  const clearButton = `
        <div style="border-top:2px solid rgba(255,215,0,0.2);margin:8px 0;"></div>
        <button id="clear-chats-btn" style="background: rgba(255, 0, 0, 0.15); color: #ff6b6b; border: 1px solid #ff6b6b; border-radius: 8px; padding: 8px 14px; cursor: pointer; font-weight: bold; transition: 0.3s; width: 100%; text-align: center;">
            🗑️ ${isArabic ? 'مسح المحادثات' : 'Clear Chats'}
        </button>
    `;
  
  dropdown.innerHTML = staticContent;
  dropdown.appendChild(dynamicContainer);
  dropdown.insertAdjacentHTML('beforeend', clearButton);
  
  document.body.appendChild(menuContainer);
  document.body.appendChild(dropdown);
  
  // --- 4. تحديث المحادثات ---
  function updateChats() {
    let chats = JSON.parse(localStorage.getItem('jabri_chats')) || [];
    if (chats.length === 0) {
      chats = [
        { text: isArabic ? 'نقاش حول نظرية السندباد' : 'Discussion about Sinbad', time: isArabic ? 'منذ 5 دقائق' : '5 min ago' },
        { text: isArabic ? 'سؤال عن صهاريج عدن' : 'Question about Aden tanks', time: isArabic ? 'منذ ساعة' : '1 hour ago' }
      ];
      localStorage.setItem('jabri_chats', JSON.stringify(chats));
    }
    const recentChats = chats.slice(-5).reverse();
    dynamicContainer.innerHTML = recentChats.map(chat => `
            <div style="padding:8px 14px; background: rgba(255,215,0,0.04); border-radius:8px; color:#ccc; font-size:0.9rem; border-right:3px solid #ffd700; transition:0.3s; cursor:pointer;">
                💬 ${chat.text}
                <span style="display:block;font-size:0.7rem;color:#666;margin-top:2px;">${chat.time}</span>
            </div>
        `).join('') || `<div style="color:#666;padding:8px 14px;">${isArabic ? 'لا توجد محادثات' : 'No chats'}</div>`;
  }
  
  updateChats();
  
  // --- 5. الوظائف الإضافية ---
  window.addChat = function(text) {
    const chats = JSON.parse(localStorage.getItem('jabri_chats')) || [];
    chats.push({
      text: text,
      time: new Date().toLocaleTimeString(isArabic ? 'ar-EG' : 'en-US', { hour: '2-digit', minute: '2-digit' })
    });
    localStorage.setItem('jabri_chats', JSON.stringify(chats));
    updateChats();
  };
  
  document.addEventListener('click', function(e) {
    if (e.target.id === 'clear-chats-btn') {
      if (confirm(isArabic ? 'هل تريد مسح جميع المحادثات؟' : 'Clear all chats?')) {
        localStorage.removeItem('jabri_chats');
        updateChats();
      }
    }
  });
  
  dropdown.querySelectorAll('a').forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.style.background = 'rgba(255, 215, 0, 0.12)';
      link.style.color = '#ffd700';
      link.style.transform = 'translateX(-4px)';
    });
    link.addEventListener('mouseleave', () => {
      link.style.background = 'transparent';
      link.style.color = '#fff';
      link.style.transform = 'translateX(0)';
    });
  });
  
  // --- 6. التحكم في الفتح/الإغلاق ---
  let isOpen = false;
  let closeTimer;
  
  menuContainer.addEventListener('click', function(e) {
    e.stopPropagation();
    if (isOpen) {
      dropdown.style.display = 'none';
      isOpen = false;
      clearTimeout(closeTimer);
    } else {
      updateChats();
      dropdown.style.display = 'flex';
      isOpen = true;
      clearTimeout(closeTimer);
      closeTimer = setTimeout(() => {
        dropdown.style.display = 'none';
        isOpen = false;
      }, 8000);
    }
  });
  
  document.addEventListener('click', function(e) {
    if (!menuContainer.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.style.display = 'none';
      isOpen = false;
      clearTimeout(closeTimer);
    }
  });
  
  dropdown.querySelectorAll('a, #clear-chats-btn').forEach(el => {
    el.addEventListener('click', function() {
      if (this.id !== 'clear-chats-btn') {
        dropdown.style.display = 'none';
        isOpen = false;
        clearTimeout(closeTimer);
      }
    });
  });
  
})();