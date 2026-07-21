// js/init-page.js - For Arabic pages

async function initPage() {
  try {
    // Load Arabic header (from root)
    const headerRes = await fetch('../header.html');
    const headerHTML = await headerRes.text();
    const parser = new DOMParser();
    const headerDoc = parser.parseFromString(headerHTML, 'text/html');
    document.head.insertAdjacentHTML('beforeend', headerDoc.head.innerHTML);
    
    // Load Arabic footer (from root)
    const footerRes = await fetch('../footer.html');
    const footerHTML = await footerRes.text();
    const footerDoc = parser.parseFromString(footerHTML, 'text/html');
    document.getElementById('footer-placeholder').outerHTML = footerDoc.body.innerHTML;
    
    console.log('✅ Arabic header/footer loaded');
  } catch (error) {
    console.warn('Error loading:', error);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPage);
} else {
  initPage();
}
