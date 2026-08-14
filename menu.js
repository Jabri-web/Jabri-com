// ============================================
//   menu.js - قائمة هجينة (ثابتة + ديناميكية)
//   الزر: ذهبي مثل زر الموسيقى، في أعلى الشاشة
// ============================================

(function() {
  // --- 1. إنشاء زر القائمة (ذهبي مثل زر الموسيقى) ---
  const menuContainer = document.createElement('div');
  menuContainer.id = 'hamburger-menu';
  menuContainer.style.cssText = `
        position: fixed;
        top: 50px;
        right: 250px;
        z-index: 999999;
        cursor: pointer;
        background: linear-gradient(135deg, #ffd700, #f0a500);
        color: #0a0a0f;
        border: none;
        padding: 8px 14px;
        border-radius: 10px;
        font-size: 14px;
        font-weight: bold;
        box-shadow: 0 0 15px rgba(255, 215, 0, 0.4);
        transition: 0.3s;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        backdrop-filter: blur(6px);
    `;
  
  // --- 2. محتوى الزر (الثلاث خطوط + نص "قائمة") ---
  menuContainer.innerHTML = `
        <div style="display:flex;flex-direction:column;gap:4px;width:22px;height:18px;justify-content:center;">
            <span style="display:block;height:3px;background:#0a0a0f;border-radius:4px;transition:0.3s;"></span>
            <span style="display:block;height:3px;background:#0a0a0f;border-radius:4px;transition:0.3s;"></span>
            <span style="display:block;height:3px;background:#0a0a0f;border-radius:4px;transition:0.3s;"></span>
        </div>
        <span style="font-size:12px;color:#0a0a0f;font-weight:bold;">قائمة</span>
    `;
  
  // --- 3. تأثير hover ---
  menuContainer.addEventListener('mouseenter', () => {
    menuContainer.style.transform = 'scale(1.08)';
    menuContainer.style.boxShadow = '0 0 25px rgba(255, 215, 0, 0.7)';
  });
  menuContainer.addEventListener('mouseleave', () => {
    menuContainer.style.transform = 'scale(1)';
    menuContainer.style.boxShadow = '0 0 15px rgba(255, 215, 0, 0.4)';
  });
  
  // --- 4. القائمة المنسدلة (تظهر عند النقر) ---
  const dropdown = document.createElement('div');
  dropdown.id = 'menu-dropdown';
  dropdown.style.cssText = `
        display: none;
        position: fixed;
        top: 70px;
        right: 20px;
        background: rgba(26, 26, 46, 0.95);
        backdrop-filter: blur(12px);
        border: 2px solid #ffd700;
        border-radius: 16px;
        padding: 18px 22px;
        min-width: 250px;
        max-height: 70vh;
        overflow-y: auto;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.7);
        z-index: 999998;
        flex-direction: column;
        gap: 4px;
        transition: 0.3s;
    `;
  
  // --- 5. المحتوى الثابت (أعلى القائمة) ---
  const staticContent = `
        <a href="/" style="color:#fff;padding:10px 14px;border-radius:8px;text-decoration:none;display:flex;align-items:center;gap:12px;transition:0.3s;border-bottom:1px solid rgba(255,215,0,0.08);">
            <span style="font-size:1.3rem;">🏠</span> الرئيسية
        </a>
        <a href="/Sanaa.html" style="color:#fff;padding:10px 14px;border-radius:8px;text-decoration:none;display:flex;align-items:center;gap:12px;transition:0.3s;border-bottom:1px solid rgba(255,215,0,0.08);">
            <span style="font-size:1.3rem;">🏙️</span> صنعاء
        </a>
        <a href="/Shibam.html" style="color:#fff;padding:10px 14px;border-radius:8px;text-decoration:none;display:flex;align-items:center;gap:12px;transition:0.3s;border-bottom:1px solid rgba(255,215,0,0.08);">
            <span style="font-size:1.3rem;">🏘️</span> شبام
        </a>
        <a href="/Soqatra.html" style="color:#fff;padding:10px 14px;border-radius:8px;text-decoration:none;display:flex;align-items:center;gap:12px;transition:0.3s;border-bottom:1px solid rgba(255,215,0,0.08);">
            <span style="font-size:1.3rem;">🌴</span> سقطرى
        </a>
        <a href="/research.html" style="color:#fff;padding:10px 14px;border-radius:8px;text-decoration:none;display:flex;align-items:center;gap:12px;transition:0.3s;border-bottom:1px solid rgba(255,215,0,0.08);">
            <span style="font-size:1.3rem;">🔬</span> الأبحاث
        </a>
        <a href="/Office.html" style="color:#fff;padding:10px 14px;border-radius:8px;text-decoration:none;display:flex;align-items:center;gap:12px;transition:0.3s;border-bottom:1px solid rgba(255,215,0,0.08);">
            <span style="font-size:1.3rem;">📫</span> المكتبة
        </a>
        <a href="/Author-cv.html" style="color:#fff;padding:10px 14px;border-radius:8px;text-decoration:none;display:flex;align-items:center;gap:12px;transition:0.3s;border-bottom:1px solid rgba(255,215,0,0.08);">
            <span style="font-size:1.3rem;">🧑‍💼</span> السيرة الذاتية
        </a>
        <a href="/about.html" style="color:#fff;padding:10px 14px;border-radius:8px;text-decoration:none;display:flex;align-items:center;gap:12px;transition:0.3s;border-bottom:1px solid rgba(255,215,0,0.08);">
            <span style="font-size:1.3rem;">ℹ️</span> عن الواحة
        </a>
        <a href="https://en.wikipedia.org/wiki/User:Jabri2026" target="_blank" style="color:#fff;padding:10px 14px;border-radius:8px;text-decoration:none;display:flex;align-items:center;gap:12px;transition:0.3s;border-bottom:1px solid rgba(255,215,0,0.08);">
            <span style="font-size:1.3rem;">🌐</span> ويكيبيديا
        </a>
        <a href="https://github.com/jabri-web" target="_blank" style="color:#fff;padding:10px 14px;border-radius:8px;text-decoration:none;display:flex;align-items:center;gap:12px;transition:0.3s;border-bottom:1px solid rgba(255,215,0,0.08);">
            <span style="font-size:1.3rem;">🐙</span> GitHub
        </a>
        <div style="border-bottom:2px solid rgba(255,215,0,0.2);margin:8px 0;"></div>
        <div style="color:#6ae3ff;padding:6px 14px;font-size:0.9rem;font-weight:bold;">
            💬 المحادثات الأخيرة:
        </div>
    `;
  
  // --- 6. الحاوية الديناميكية ---
  const dynamicContainer = document.createElement('div');
  dynamicContainer.id = 'dynamic-chats';
  dynamicContainer.style.cssText = `
        display:flex;
        flex-direction:column;
        gap:4px;
        margin:4px 0;
    `;
  
  // --- 7. زر مسح المحادثات ---
  const clearButton = `
        <div style="border-top:2px solid rgba(255,215,0,0.2);margin:8px 0;"></div>
        <button id="clear-chats-btn" style="
            background: rgba(255, 0, 0, 0.15);
            color: #ff6b6b;
            border: 1px solid #ff6b6b;
            border-radius: 8px;
            padding: 8px 14px;
            cursor: pointer;
            font-weight: bold;
            transition: 0.3s;
            width: 100%;
            text-align: center;
        ">🗑️ مسح المحادثات</button>
    `;
  
  // --- 8. تجميع القائمة ---
  dropdown.innerHTML = staticContent;
  dropdown.appendChild(dynamicContainer);
  dropdown.insertAdjacentHTML('beforeend', clearButton);
  
  // --- 9. إضافة العناصر إلى الصفحة ---
  document.body.appendChild(menuContainer);
  document.body.appendChild(dropdown);
  
  // --- 10. تحديث المحادثات ---
  function updateChats() {
    let chats = JSON.parse(localStorage.getItem('jabri_chats')) || [];
    if (chats.length === 0) {
      chats = [
        { text: 'نقاش حول نظرية السندباد', time: 'منذ 5 دقائق' },
        { text: 'سؤال عن صهاريج عدن', time: 'منذ ساعة' },
        { text: 'طلب فيلم وثائقي عن الواحة', time: 'منذ يوم' }
      ];
      localStorage.setItem('jabri_chats', JSON.stringify(chats));
    }
    const recentChats = chats.slice(-5).reverse();
    dynamicContainer.innerHTML = recentChats.map(chat => `
            <div style="
                padding:8px 14px;
                background: rgba(255,215,0,0.04);
                border-radius:8px;
                color:#ccc;
                font-size:0.9rem;
                border-right:3px solid #ffd700;
                transition:0.3s;
                cursor:pointer;
            " onmouseenter="this.style.background='rgba(255,215,0,0.12)'" onmouseleave="this.style.background='rgba(255,215,0,0.04)'">
                💬 ${chat.text}
                <span style="display:block;font-size:0.7rem;color:#666;margin-top:2px;">${chat.time}</span>
            </div>
        `).join('') || '<div style="color:#666;padding:8px 14px;">لا توجد محادثات</div>';
  }
  
  updateChats();
  
  // --- 11. إضافة محادثة جديدة ---
  window.addChat = function(text) {
    const chats = JSON.parse(localStorage.getItem('jabri_chats')) || [];
    chats.push({
      text: text,
      time: new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' })
    });
    localStorage.setItem('jabri_chats', JSON.stringify(chats));
    updateChats();
  };
  
  // --- 12. زر مسح المحادثات ---
  document.addEventListener('click', function(e) {
    if (e.target.id === 'clear-chats-btn') {
      if (confirm('هل تريد مسح جميع المحادثات؟')) {
        localStorage.removeItem('jabri_chats');
        updateChats();
      }
    }
  });
  
  // --- 13. تأثيرات hover على الروابط ---
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
  
  // --- 14. التحكم في الفتح والإغلاق ---
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