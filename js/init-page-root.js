// js/init-page-root.js
// Loads header and footer from root directory

async function initPage() {
  try {
    console.log('🔄 Loading header and footer from root...');
    
    // 1️⃣ LOAD HEADER
    const headerResponse = await fetch('header.html');
    if (!headerResponse.ok) {
      throw new Error(`Header not found (${headerResponse.status})`);
    }
    const headerHTML = await headerResponse.text();
    console.log('📄 Header HTML loaded, length:', headerHTML.length);
    
    const parser = new DOMParser();
    const headerDoc = parser.parseFromString(headerHTML, 'text/html');
    
    // Extract head content
    let headContent = headerDoc.head.innerHTML;
    
    // Remove duplicate title
    const titleMatch = headContent.match(/<title>.*?<\/title>/);
    if (titleMatch) {
      headContent = headContent.replace(titleMatch[0], '');
    }
    
    // Inject header content
    document.head.insertAdjacentHTML('beforeend', headContent);
    console.log('✅ Header head content injected');
    
    // Handle body content from header
    const headerBodyContent = headerDoc.body.innerHTML;
    if (headerBodyContent.trim()) {
      const container = document.createElement('div');
      container.id = 'header-body-content';
      container.style.display = 'none';
      document.body.prepend(container);
      container.innerHTML = headerBodyContent;
      console.log('✅ Header body content stored');
    }
    
    // Execute scripts from header
    const headerScripts = document.querySelectorAll('#header-body-content script');
    console.log(`📜 Found ${headerScripts.length} scripts in header`);
    headerScripts.forEach((script, index) => {
      const newScript = document.createElement('script');
      if (script.src) {
        newScript.src = script.src;
      } else {
        newScript.textContent = script.textContent;
      }
      document.head.appendChild(newScript);
      console.log(`✅ Script ${index + 1} executed`);
    });
    
    // 2️⃣ LOAD FOOTER
    const footerResponse = await fetch('footer.html');
    if (!footerResponse.ok) {
      throw new Error(`Footer not found (${footerResponse.status})`);
    }
    const footerHTML = await footerResponse.text();
    console.log('📄 Footer HTML loaded, length:', footerHTML.length);
    
    const footerDoc = parser.parseFromString(footerHTML, 'text/html');
    
    // Replace footer placeholder
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
      const footerContent = footerDoc.body.innerHTML;
      footerPlaceholder.outerHTML = footerContent;
      console.log('✅ Footer loaded successfully');
      document.dispatchEvent(new Event('footerLoaded'));
    } else {
      console.warn('⚠️ Footer placeholder not found');
    }
    
    // Inject footer head content
    if (footerDoc.head.innerHTML.trim()) {
      document.head.insertAdjacentHTML('beforeend', footerDoc.head.innerHTML);
    }
    
    // 3️⃣ Initialize language after scripts load
    setTimeout(() => {
      const savedLang = localStorage.getItem('preferred-language') || 'ar';
      console.log('🌐 Setting language to:', savedLang);
      
      document.documentElement.lang = savedLang;
      document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr';
      document.body.classList.add(savedLang);
      
      if (typeof updateHeadLang === 'function') {
        updateHeadLang();
        console.log('✅ updateHeadLang called');
      }
      
      if (typeof updateFooterLang === 'function') {
        updateFooterLang();
        console.log('✅ updateFooterLang called');
      }
      
      // Update button states
      const langAr = document.getElementById('lang-ar');
      const langEn = document.getElementById('lang-en');
      if (langAr) langAr.classList.toggle('active', savedLang === 'ar');
      if (langEn) langEn.classList.toggle('active', savedLang === 'en');
      
      console.log('🎉 Root page initialization complete!');
    }, 200);
    
  } catch (error) {
    console.error('❌ Error:', error);
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
      footerPlaceholder.innerHTML = `
                <div style="background: #1a1a2e; color: #888; padding: 2rem; text-align: center; border-top: 1px solid #333;">
                    <p>⚠️ Footer could not be loaded. Please refresh the page.</p>
                    <p style="font-size: 12px; color: #666;">Error: ${error.message}</p>
                </div>
            `;
    }
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPage);
} else {
  initPage();
}
