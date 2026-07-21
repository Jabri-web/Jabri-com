// js/init-page-en.js
// Loads English header and footer

async function initPage() {
  try {
    console.log('🔄 Loading English header and footer...');
    
    // Load English header
    const headerResponse = await fetch('../en/header.html');
    if (!headerResponse.ok) throw new Error(`Header not found (${headerResponse.status})`);
    const headerHTML = await headerResponse.text();
    
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
    
    // Handle body content
    const headerBodyContent = headerDoc.body.innerHTML;
    if (headerBodyContent.trim()) {
      const container = document.createElement('div');
      container.id = 'header-body-content';
      container.style.display = 'none';
      document.body.prepend(container);
      container.innerHTML = headerBodyContent;
    }
    
    // Execute scripts
    const scripts = document.querySelectorAll('#header-body-content script');
    scripts.forEach(script => {
      const newScript = document.createElement('script');
      if (script.src) {
        newScript.src = script.src;
      } else {
        newScript.textContent = script.textContent;
      }
      document.head.appendChild(newScript);
    });
    
    console.log('✅ English header loaded');
    
    // Load English footer
    const footerResponse = await fetch('../en/footer.html');
    if (!footerResponse.ok) throw new Error(`Footer not found (${footerResponse.status})`);
    const footerHTML = await footerResponse.text();
    const footerDoc = parser.parseFromString(footerHTML, 'text/html');
    
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
      footerPlaceholder.outerHTML = footerDoc.body.innerHTML;
      console.log('✅ English footer loaded');
      document.dispatchEvent(new Event('footerLoaded'));
    }
    
    // Set English as default (if not set by language switcher)
    if (!document.body.classList.contains('ar')) {
      document.body.classList.add('en');
      document.documentElement.lang = 'en';
      document.documentElement.dir = 'ltr';
    }
    
    console.log('🎉 English page ready!');
    
  } catch (error) {
    console.error('❌ Error loading English:', error);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPage);
} else {
  initPage();
}
