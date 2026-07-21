// js/init-page-ar.js
// Loads Arabic header and footer

async function initPage() {
  try {
    console.log('🔄 Loading Arabic header and footer...');
    
    // Load Arabic header
    const headerResponse = await fetch('../ar/header.html');
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
    
    console.log('✅ Arabic header loaded');
    
    // Load Arabic footer
    const footerResponse = await fetch('../ar/footer.html');
    if (!footerResponse.ok) throw new Error(`Footer not found (${footerResponse.status})`);
    const footerHTML = await footerResponse.text();
    const footerDoc = parser.parseFromString(footerHTML, 'text/html');
    
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
      footerPlaceholder.outerHTML = footerDoc.body.innerHTML;
      console.log('✅ Arabic footer loaded');
      // Notify that footer is loaded
      document.dispatchEvent(new Event('footerLoaded'));
    }
    
    // Set Arabic as default (if not set by language switcher)
    if (!document.body.classList.contains('en')) {
      document.body.classList.add('ar');
      document.documentElement.lang = 'ar';
      document.documentElement.dir = 'rtl';
    }
    
    console.log('🎉 Arabic page ready!');
    
  } catch (error) {
    console.error('❌ Error loading Arabic:', error);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPage);
} else {
  initPage();
}
