// ================================================================
//  init-page-root.js - الإصدار العالمي النهائي
//  - يعزل سكربتات الهيدر عن سكربتات الصفحة
//  - يتجاوز الكاش نهائياً
//  - يتعامل مع أي خطأ بصمت
//  - متوافق مع Vercel + GitHub + أي استضافة
// ================================================================

(function() {
  'use strict';

  console.log('🛡️ [init] تفعيل الدرع المطلق (الإصدار العالمي)...');

  let splashHidden = false;

  // ===== إنشاء شاشة التحميل =====
  function createSplash() {
    if (document.getElementById('splashScreen')) return;
    const html = `
      <div id="splashScreen">
        <div class="splash-title">واحة الجبري</div>
        <div class="splash-sub">تراث اليمن العريق · نظرية السندباد الموحدة</div>
        <div class="spinner"></div>
        <style>
          #splashScreen {
            position: fixed; top:0; left:0; width:100%; height:100%;
            background:#0a0a0f; display:flex; flex-direction:column;
            align-items:center; justify-content:center; z-index:999999;
            transition: opacity 0.6s ease; font-family: 'Cairo', sans-serif;
          }
          #splashScreen.hidden { opacity:0; pointer-events:none; }
          .splash-title { color:#6ae3ff; font-size:2.5rem; font-weight:900; }
          .splash-sub { color:#888; font-size:1.1rem; margin-top:8px; }
          .spinner {
            width:40px; height:40px; margin-top:30px;
            border:3px solid rgba(106,227,255,0.1);
            border-top:3px solid #6ae3ff;
            border-radius:50%;
            animation: spin 1s linear infinite;
          }
          @keyframes spin { 0% { transform:rotate(0deg); } 100% { transform:rotate(360deg); } }
          @media (max-width:600px) {
            .splash-title { font-size:1.8rem; }
            .splash-sub { font-size:0.95rem; }
          }
        </style>
      </div>
    `;
    const div = document.createElement('div');
    div.innerHTML = html;
    document.body.prepend(div.firstElementChild);
  }

  function hideSplash() {
    if (splashHidden) return;
    const el = document.getElementById('splashScreen');
    if (el) el.classList.add('hidden');
    splashHidden = true;
    setTimeout(() => { if (el) el.remove(); }, 800);
  }

  // ===== توليد رابط متجدد (لكسر الكاش) =====
  function bustCache(url) {
    const sep = url.includes('?') ? '&' : '?';
    return url + sep + '_t=' + Date.now();
  }

  // ===== تنفيذ السكربتات بأمان (في الـ head) =====
  function safelyExecuteScripts(container) {
    const scripts = container.querySelectorAll('script');
    scripts.forEach(oldScript => {
      try {
        const src = oldScript.src || '';
        const content = oldScript.textContent || '';

        if (src) {
          // السكربتات الخارجية (مثل مكتبات CDN)
          const existing = document.querySelector(`script[src="${src}"]`);
          if (!existing) {
            const newScript = document.createElement('script');
            newScript.src = src;
            newScript.async = false;
            document.head.appendChild(newScript);
          }
        } else if (content.trim()) {
          // السكربتات الداخلية (مثل تشغيل الموسيقى، العداد، اللغة)
          const newScript = document.createElement('script');
          newScript.textContent = content;
          document.head.appendChild(newScript);
        }
      } catch (e) {
        // نتجاهل أي خطأ في السكربت عشان ما يأثر على الصفحة
        console.warn('⚠️ [init] تخطي سكربت بسبب:', e.message);
      }
    });
  }

  // ===== تحميل الهيدر =====
  function loadHeader() {
    const placeholder = document.getElementById('header-placeholder');
    if (!placeholder) {
      console.warn('⚠️ [header] placeholder غير موجود');
      setTimeout(hideSplash, 500);
      return;
    }
    if (placeholder.dataset.loaded === 'true') {
      setTimeout(hideSplash, 500);
      return;
    }

    console.log('📄 [header] جاري التحميل (بكسر الكاش)...');

    fetch(bustCache('header.html'))
      .then(res => {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        return res.text();
      })
      .then(html => {
        placeholder.innerHTML = html;
        placeholder.dataset.loaded = 'true';

        // تنفيذ السكربتات في بيئة معزولة
        safelyExecuteScripts(placeholder);

        console.log('✅ [header] تم التحميل والتنفيذ');
        document.dispatchEvent(new CustomEvent('headerLoaded'));
        setTimeout(hideSplash, 300);
      })
      .catch(err => {
        console.error('❌ [header] فشل التحميل:', err);
        placeholder.innerHTML = `<div style="color:#ff6a6a;padding:20px;text-align:center;">⚠️ فشل تحميل الهيدر</div>`;
        setTimeout(hideSplash, 500);
      });
  }

  // ===== تحميل الفوتر =====
  function loadFooter() {
    const placeholder = document.getElementById('footer-placeholder');
    if (!placeholder) return;
    if (placeholder.dataset.loaded === 'true') return;

    console.log('📄 [footer] جاري التحميل...');

    fetch(bustCache('footer.html'))
      .then(res => {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        return res.text();
      })
      .then(html => {
        placeholder.innerHTML = html;
        placeholder.dataset.loaded = 'true';
        safelyExecuteScripts(placeholder);
        console.log('✅ [footer] تم التحميل');
        document.dispatchEvent(new CustomEvent('footerLoaded'));
      })
      .catch(err => {
        console.error('❌ [footer] فشل:', err);
        placeholder.innerHTML = `<div style="color:#ff6a6a;padding:10px;text-align:center;">⚠️ فشل الفوتر</div>`;
      });
  }

  // ===== التشغيل =====
  function init() {
    createSplash();
    loadHeader();
    loadFooter();

    // طوارئ: إخفاء الشاشة بعد 5 ثواني لو حصل مشكلة
    setTimeout(() => {
      if (!splashHidden) {
        console.warn('⏰ [init] انتهاء المهلة، إخفاء الشاشة قسراً');
        hideSplash();
      }
    }, 5000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  console.log('✅ [init] الدرع المطلق جاهز (الإصدار العالمي النهائي)');
})();
