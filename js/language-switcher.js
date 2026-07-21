// js/language-switcher.js
// Master language control for the entire site

(function() {
  'use strict';
  
  // Language state
  let currentLang = 'ar'; // 'ar' or 'en'
  
  // DOM elements to update
  const elements = {
    html: document.documentElement,
    body: document.body,
    title: document.querySelector('title'),
    metaDesc: document.querySelector('.meta-desc'),
    ogTitle: document.querySelector('.og-title'),
    ogDesc: document.querySelector('.og-desc'),
    twTitle: document.querySelector('.tw-title'),
    twDesc: document.querySelector('.tw-desc'),
    footer: document.getElementById('site-footer'),
    searchTitle: document.getElementById('searchTitle'),
    copyright: document.getElementById('copyright'),
    footerTexts: () => document.querySelectorAll('#site-footer .txt'),
    langAr: document.getElementById('lang-ar'),
    langEn: document.getElementById('lang-en'),
    langToggle: document.getElementById('lang-toggle')
  };
  
  // Update HTML direction and language attributes
  function updateDocumentAttributes(lang) {
    const isEnglish = lang === 'en';
    elements.html.lang = lang;
    elements.html.dir = isEnglish ? 'ltr' : 'rtl';
    elements.body.classList.remove('ar', 'en');
    elements.body.classList.add(lang);
  }
  
  // Update HEAD meta tags
  function updateHeadContent(lang) {
    const isEnglish = lang === 'en';
    
    // Update title
    if (elements.title) {
      const newTitle = isEnglish ?
        elements.title.getAttribute('data-en') :
        elements.title.getAttribute('data-ar');
      if (newTitle) elements.title.textContent = newTitle;
    }
    
    // Update meta descriptions
    const metaElements = [
      elements.metaDesc,
      elements.ogTitle,
      elements.ogDesc,
      elements.twTitle,
      elements.twDesc
    ];
    
    metaElements.forEach(el => {
      if (!el) return;
      const newContent = isEnglish ?
        el.getAttribute('data-en') :
        el.getAttribute('data-ar');
      if (newContent) el.setAttribute('content', newContent);
    });
  }
  
  // Update FOOTER content
  function updateFooterContent(lang) {
    const isEnglish = lang === 'en';
    
    // Update footer direction
    if (elements.footer) {
      elements.footer.dir = isEnglish ? 'ltr' : 'rtl';
    }
    
    // Update search title
    if (elements.searchTitle) {
      elements.searchTitle.innerHTML = isEnglish ?
        '<strong>🔍 Search for Researcher:</strong>' :
        '<strong>🔍 البحث عن الباحث:</strong>';
    }
    
    // Update copyright
    if (elements.copyright) {
      elements.copyright.innerHTML = isEnglish ?
        '© 2026 Eng. Abdulla Mohammed Nasser Al-Jabri - All Rights Reserved' :
        '© 2026 م/ عبدالله محمد ناصر الجبري - جميع الحقوق محفوظة';
    }
    
    // Update all text elements with data attributes
    elements.footerTexts().forEach(el => {
      const newText = isEnglish ?
        el.getAttribute('data-en') :
        el.getAttribute('data-ar');
      if (newText) el.textContent = newText;
    });
  }
  
  // Update language switch button states
  function updateButtonStates(lang) {
    const isEnglish = lang === 'en';
    
    // Update active states
    if (elements.langAr) {
      elements.langAr.classList.toggle('active', !isEnglish);
    }
    if (elements.langEn) {
      elements.langEn.classList.toggle('active', isEnglish);
    }
    
    // Update toggle button text
    if (elements.langToggle) {
      elements.langToggle.textContent = isEnglish ? '🇸🇦 عربي' : '🇬🇧 English';
    }
  }
  
  // Main language switch function
  function switchLanguage(lang) {
    if (!lang || lang === currentLang) return;
    
    currentLang = lang;
    
    // Update everything
    updateDocumentAttributes(lang);
    updateHeadContent(lang);
    updateFooterContent(lang);
    updateButtonStates(lang);
    
    // Store preference
    try {
      localStorage.setItem('preferred-language', lang);
    } catch (e) {
      // Ignore localStorage errors
    }
    
    console.log(`🌐 Language switched to: ${lang}`);
    
    // Dispatch custom event for any other components
    document.dispatchEvent(new CustomEvent('languageChanged', {
      detail: { language: lang }
    }));
  }
  
  // Load saved language preference
  function loadSavedLanguage() {
    try {
      const saved = localStorage.getItem('preferred-language');
      if (saved === 'en' || saved === 'ar') {
        return saved;
      }
    } catch (e) {
      // Ignore
    }
    // Default: Arabic
    return 'ar';
  }
  
  // Initialize language
  function initLanguage() {
    const savedLang = loadSavedLanguage();
    
    // Set language
    currentLang = savedLang;
    updateDocumentAttributes(savedLang);
    updateHeadContent(savedLang);
    updateButtonStates(savedLang);
    
    // Footer might not be loaded yet, will be updated when loaded
    // We'll handle this with a mutation observer or after footer loads
    
    // Re-apply after DOM is fully ready
    if (document.readyState === 'complete') {
      updateFooterContent(savedLang);
    } else {
      document.addEventListener('DOMContentLoaded', function() {
        updateFooterContent(savedLang);
      });
    }
    
    console.log(`🌐 Language initialized: ${savedLang}`);
  }
  
  // Expose functions globally
  window.switchLanguage = switchLanguage;
  window.getCurrentLanguage = function() { return currentLang; };
  window.updateHeadLang = function() { updateHeadContent(currentLang); };
  window.updateFooterLang = function() { updateFooterContent(currentLang); };
  window.toggleLang = function() {
    switchLanguage(currentLang === 'ar' ? 'en' : 'ar');
  };
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguage);
  } else {
    initLanguage();
  }
  
  // Also re-run when footer is dynamically loaded
  document.addEventListener('footerLoaded', function() {
    updateFooterContent(currentLang);
  });
  
})();
