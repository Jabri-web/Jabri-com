/* ═══════════════════════════════════════════════════════════════
   🛡️ jabri-guard.js — v1.0.0
   "الجابري الحارس"
   ─────────────────────────────────────────────────────────────
   📌 الوظيفة:
      - منع الشاشة البيضاء في كل الصفحات
      - إزالة Splash العالق
      - إزالة 404 overlay الكاذب
      - ضمان ظهور body دائماً
      - يعمل في APK + WebView + Chrome + Safari
   ─────────────────────────────────────────────────────────────
   📌 الاستخدام:
      ضعه في نهاية كل صفحة HTML بعد السكربتات الأخرى
   ═══════════════════════════════════════════════════════════════ */

(function() {
  'use strict';
  
  // ✅ منع التشغيل المتكرر
  if (window.__jabriGuardActive) {
    console.log('⏩ [guard] يعمل مسبقاً');
    return;
  }
  window.__jabriGuardActive = true;
  
  var VERSION = '1.0.0';
  var attempts = 0;
  var MAX_ATTEMPTS = 20;
  
  // ═══════════════════════════════════════════════════
  //  🎯 الدالة الرئيسية
  // ═══════════════════════════════════════════════════
  function ensureVisible() {
    try {
      // ─────────────────────────────────────────────
      // 1) Splash العالق
      // ─────────────────────────────────────────────
      var splash = document.getElementById('splashScreen');
      if (splash) {
        var cs = getComputedStyle(splash);
        var opacity = parseFloat(cs.opacity);
        var pointerEvents = cs.pointerEvents;
        
        // إذا ظهر بأي شكل (شفاف أو مرئي)
        if (opacity > 0.01 && pointerEvents !== 'none') {
          console.warn('🛡️ [guard] إزالة Splash العالق');
          splash.style.transition = 'none';
          splash.style.opacity = '0';
          splash.style.pointerEvents = 'none';
          splash.style.display = 'none';
          
          setTimeout(function() {
            try { splash.remove(); } catch (e) {}
          }, 150);
          
          // إذا كانت المرعبة تُعرّف hideSplash
          if (typeof window.hideSplash === 'function') {
            try { window.hideSplash(); } catch (e) {}
          }
        }
      }
      
      // ─────────────────────────────────────────────
      // 2) 404 overlay الكاذب
      // ─────────────────────────────────────────────
      var ov = document.getElementById('jabri-404-overlay');
      if (ov) {
        var title = (document.title || '').toLowerCase();
        var isReal404 =
          /\b404\b|not found|غير موجود/i.test(title) ||
          (document.body && document.body.dataset.waha404 === 'true') ||
          location.pathname.indexOf('404') !== -1;
        
        if (!isReal404) {
          console.warn('🛡️ [guard] إزالة 404 overlay كاذب');
          ov.remove();
        }
      }
      
      // ─────────────────────────────────────────────
      // 3) ضمان ظهور body
      // ─────────────────────────────────────────────
      if (document.body) {
        var bodyCs = getComputedStyle(document.body);
        
        if (bodyCs.visibility === 'hidden') {
          document.body.style.visibility = 'visible';
          console.log('🛡️ [guard] body كان hidden — أُصلح');
        }
        
        if (parseFloat(bodyCs.opacity) < 0.01) {
          document.body.style.opacity = '1';
          console.log('🛡️ [guard] body كان شفافاً — أُصلح');
        }
        
        if (bodyCs.display === 'none') {
          document.body.style.display = '';
          console.log('🛡️ [guard] body كان مخفياً — أُصلح');
        }
      }
      
      // ─────────────────────────────────────────────
      // 4) ضمان ظهور html
      // ─────────────────────────────────────────────
      if (document.documentElement) {
        var htmlCs = getComputedStyle(document.documentElement);
        
        if (htmlCs.visibility === 'hidden') {
          document.documentElement.style.visibility = 'visible';
        }
        
        if (parseFloat(htmlCs.opacity) < 0.01) {
          document.documentElement.style.opacity = '1';
        }
      }
      
      // ─────────────────────────────────────────────
      // 5) net toasts — لا تُكثر
      // ─────────────────────────────────────────────
      var toasts = document.getElementById('jabri-net-toasts');
      if (toasts && toasts.children.length > 5) {
        console.warn('🛡️ [guard] عدد كبير من الإشعارات — تقليص');
        while (toasts.children.length > 2) {
          toasts.firstChild.remove();
        }
      }
      
    } catch (e) {
      console.warn('🛡️ [guard] خطأ داخلي:', e.message);
    }
  }
  
  // ═══════════════════════════════════════════════════
  //  🚀 التشغيل — 6 نقاط
  // ═══════════════════════════════════════════════════
  
  // 1️⃣ فوراً — حتى قبل DOM كامل
  if (document.body) {
    ensureVisible();
  } else {
    // body لم يجهز بعد — انتظر
    var earlyTimer = setInterval(function() {
      if (document.body) {
        ensureVisible();
        clearInterval(earlyTimer);
      }
    }, 50);
    setTimeout(function() { clearInterval(earlyTimer); }, 2000);
  }
  
  // 2️⃣ عند DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ensureVisible);
  }
  
  // 3️⃣ دورياً — 20 محاولة × 350ms = 7 ثوان
  var timer = setInterval(function() {
    ensureVisible();
    attempts++;
    if (attempts >= MAX_ATTEMPTS) {
      clearInterval(timer);
      console.log('🛡️ [guard] انتهى (' + MAX_ATTEMPTS + ' محاولة)');
    }
  }, 350);
  
  // 4️⃣ عند load الكامل
  window.addEventListener('load', function() {
    ensureVisible();
    setTimeout(ensureVisible, 500);
    setTimeout(ensureVisible, 1500);
    setTimeout(ensureVisible, 3500);
    setTimeout(ensureVisible, 6000);
  });
  
  // 5️⃣ عند pageshow (Back/Forward cache + Refresh)
  window.addEventListener('pageshow', function(e) {
    console.log('🛡️ [guard] pageshow — persisted:', e.persisted);
    ensureVisible();
    setTimeout(ensureVisible, 200);
    setTimeout(ensureVisible, 800);
    setTimeout(ensureVisible, 2000);
  });
  
  // 6️⃣ عند visibilitychange (الرجوع للتطبيق من الخلفية)
  document.addEventListener('visibilitychange', function() {
    if (!document.hidden) {
      console.log('🛡️ [guard] visibilitychange — الصفحة ظاهرة');
      ensureVisible();
    }
  });
  
  // 7️⃣ عند bfcache restore
  window.addEventListener('focus', function() {
    ensureVisible();
  });
  
  // 8️⃣ MutationObserver — يراقب إضافة Splash جديد
  if (window.MutationObserver && document.body) {
    try {
      new MutationObserver(function(mutations) {
        for (var i = 0; i < mutations.length; i++) {
          var m = mutations[i];
          if (m.addedNodes && m.addedNodes.length > 0) {
            for (var j = 0; j < m.addedNodes.length; j++) {
              var node = m.addedNodes[j];
              if (node.id === 'splashScreen' ||
                node.id === 'jabri-404-overlay') {
                console.warn('🛡️ [guard] عنصر محجوب ظهر — إزالته:', node.id);
                setTimeout(ensureVisible, 300);
                break;
              }
            }
          }
        }
      }).observe(document.body, {
        childList: true,
        subtree: false
      });
    } catch (e) {}
  }
  
  // ✅ اجعلها متاحة يدوياً
  window.jabriEnsureVisible = ensureVisible;
  
  console.log('🛡️ [jabri-guard v' + VERSION + '] ready');
})();