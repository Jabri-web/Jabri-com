// =============================================
//  init-page-en.js - Initialize English page
// =============================================

(function() {
  'use strict';
  
  console.log('🌍 [EN] Initializing English page...');
  
  function ensureEnglish() {
    const html = document.documentElement;
    if (html.lang !== 'en') {
      html.lang = 'en';
      html.dir = 'ltr';
    }
  }
  
  function updateCounter() {
    const display = document.getElementById('visitorCount');
    const textEl = document.getElementById('visitorText');
    if (display) {
      const count = parseInt(localStorage.getItem('jabri_visitor_count') || '0', 10);
      display.innerText = count.toLocaleString('en-US');
    }
    if (textEl) textEl.innerText = 'Visitors';
  }
  
  function updateLangBtn() {
    const btn = document.getElementById('langBtn');
    if (btn) btn.textContent = '🇬🇧 English';
  }
  
  function initMusic() {
    const music = document.getElementById('bgMusic');
    const btn = document.getElementById('musicBtn');
    if (!music || !btn) return;
    music.volume = 0.3;
    if (localStorage.getItem('jabri_music_state') === 'playing') {
      music.play().then(() => { btn.innerHTML = '🔇'; btn.classList.add('playing'); }).catch(() => {});
    }
    btn.addEventListener('click', function() {
      if (this.classList.contains('playing')) {
        music.pause();
        this.innerHTML = '🎵';
        this.classList.remove('playing');
        localStorage.setItem('jabri_music_state', 'paused');
      } else {
        music.play().then(() => {
          this.innerHTML = '🔇';
          this.classList.add('playing');
          localStorage.setItem('jabri_music_state', 'playing');
        }).catch(() => {});
      }
    });
  }
  
  function init() {
    ensureEnglish();
    setTimeout(() => { updateCounter(); updateLangBtn(); initMusic(); }, 300);
    document.addEventListener('headerLoaded', function() {
      setTimeout(() => { updateCounter(); updateLangBtn(); initMusic(); }, 200);
    });
    console.log('✅ [EN] Initialization complete');
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
