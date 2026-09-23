// ============================================================
//   menu.js - v6.5 (Web-Only + Bot-Proof + XSS-Safe)
//   Heaven Al-Jabri | واحة الجبري
//   ─────────────────────────────────────────────────────────
//   🆕 v6.5 (تنظيف شامل):
//     • ❌ حُذف كل ما يخص APK (IS_WV, IS_FILE, APP_ROOT, IS_APK)
//     • ❌ حُذف downloadWaha (نُقلت إلى /about-waha.html)
//     • ❌ حُذف قسم "تنزيل الواحة" من القائمتين
//     • ✅ أُبقي IS_BOT لحماية GSC
//     • ✅ أُبقي esc() و buildUrl() المبسّط
//     • ✅ كل إصلاحات v6.4 محفوظة (ما عدا APK)
// ============================================================

(function() {
    'use strict';

    // ============================================================
    //   🌍 كشف البيئة
    // ============================================================
    const UA = navigator.userAgent || '';

    // 🛡️ كشف الروبوتات — لا نعرض لهم محادثات أو prompt
    const IS_BOT = /googlebot|bingbot|slurp|duckduckbot|yandexbot|baiduspider|facebookexternalhit|twitterbot|linkedinbot|whatsapp|telegrambot|applebot|semrushbot|ahrefsbot|mj12bot|dotbot|petalbot/i.test(UA);

    console.log('🌍 [menu.js] الوضع: Web' + (IS_BOT ? ' | 🤖 BOT' : ' | 👤 Human'));

    // ✅ النطاق الرسمي
    const SITE_URL = 'https://jabri-com.vercel.app';

    // ✅ اكتشاف اللغة من المسار
    const currentPath = location.pathname;
    let langDir = '';
    let isArabic = true;

    if (currentPath.indexOf('/ar/') === 0) {
        langDir = '/ar';
        isArabic = true;
    } else if (currentPath.indexOf('/en/') === 0) {
        langDir = '/en';
        isArabic = false;
    }

    // ============================================================
    //   🔗 بناء الروابط (نسخة ويب مبسّطة)
    // ============================================================
    function buildUrl(path) {
        return SITE_URL + langDir + (path || '/');
    }

    // ============================================================
    //   🛡️ تهريب HTML
    // ============================================================
    function esc(str) {
        if (str == null) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    // ============================================================
    //   📋 القوائم الثابتة
    // ============================================================
    const MENU_TOP = [
        { name: 'الرئيسية', nameEn: 'Home', path: '/', icon: '🏠' },
        { name: 'رسالة جامعة KFUPM', nameEn: 'KFUPM Alumni Letter', path: '/kfupm-msg.html', icon: '🎓' },
        { name: 'صنعاء', nameEn: "Sana'a", path: '/Sanaa.html', icon: '🏛️' },
        { name: 'شبام', nameEn: 'Shibam', path: '/Shibam.html', icon: '🏗️' },
        { name: 'سقطرى', nameEn: 'Socotra', path: '/Soqatra.html', icon: '🌴' },
        { name: 'هندسة اعداد', nameEn: 'Number Engineering', path: '/handsa.html', icon: '🧮' },
        { name: 'المجلة', nameEn: 'Journal', path: '/journal.html', icon: '📰' },
        { name: 'تجربتي مع الـ AI', nameEn: 'My AI Experience', path: '/journal2.html', icon: '🤖' },
        { name: 'فهرس مشاريع الجبري', nameEn: 'Jabri Projects Index', path: '/jabri-projects.html', icon: '📦' },
        { name: 'الفاحص', nameEn: 'Diagnose', path: '/diagnose.html', icon: '🔍' },
        { name: 'واتساب الواحة', nameEn: 'Waha WhatsApp', path: '/publish/publish.html', icon: '💬' },
        { name: 'مستكشف الواحة', nameEn: 'Explore', path: '/explore.html', icon: '🗂️' },
        { name: 'رسالة من صنعاء', nameEn: 'Message from Sanaa', path: '/journal3.html', icon: '✉️' },
        { name: 'مختبر Z(x)', nameEn: 'Z(x) Lab', path: '/Pages-Researches.html', icon: '🧮' },
        { name: 'معرض صنعاء', nameEn: 'Sanaa Gallery', path: '/gallery.html', icon: '🖼️' },
        { name: '🎮 مركز الألعاب', nameEn: '🎮 Games Hub', path: '/game/game-auto.html', icon: '🎮' }
    ];

    const MENU_MIDDLE = [
        { name: 'البحوث', nameEn: 'Research', path: '/research.html', icon: '🔬' },
        { name: 'الدالة الأم Z(x)', nameEn: 'Mother Function Z(x)', path: '/theory-ar.html', icon: '📐' },
        { name: 'نظرية السندباد الموحدة', nameEn: 'Sinbad Unified Theory', path: '/Sindbad-theory.html', icon: '🌌' },
        { name: 'المكتبة', nameEn: 'Library', path: '/Office.html', icon: '📚' }
    ];

    const GAMES = [
        { name: '♟️ الشطرنج', nameEn: '♟️ Chess', path: '/game/chess.html', icon: '♟️' },
        { name: '❌⭕ تيك تاك تو', nameEn: '❌⭕ Tic Tac Toe', path: '/game/tic-tac-toe.html', icon: '❌' },
        { name: '🧠 لعبة الذاكرة', nameEn: '🧠 Memory Game', path: '/game/memory.html', icon: '🧠' },
        { name: '🧩 سودوكو', nameEn: '🧩 Sudoku', path: '/game/sudoku.html', icon: '🧩' },
        { name: '🎯 ألغاز الصور', nameEn: '🎯 Picture Puzzle', path: '/game/puzzle.html', icon: '🎯' },
        { name: '🪢 الرجل المشنوق', nameEn: '🪢 Hangman', path: '/game/hangman.html', icon: '🪢' }
    ];

    let MENU_BOTTOM = [];

    // ============================================================
    //   💬 سجل المحادثات
    // ============================================================
    function getChatHistory() {
        try {
            const raw = localStorage.getItem('jabri_chat_history');
            if (!raw) return [];
            const chats = JSON.parse(raw);
            if (!Array.isArray(chats)) return [];
            return chats.slice(0, 10).filter(function(c) {
                return c && typeof c === 'object';
            });
        } catch (e) {
            return [];
        }
    }

    window.saveChatMessage = function(message, sender) {
        if (typeof message !== 'string') return;
        message = message.trim();
        if (!message) return;
        if (message.length > 500) message = message.slice(0, 500);
        if (!sender || typeof sender !== 'string') {
            sender = isArabic ? 'زائر' : 'Visitor';
        }

        try {
            const chats = JSON.parse(localStorage.getItem('jabri_chat_history') || '[]');
            const safeChats = Array.isArray(chats) ? chats : [];
            const now = new Date();
            const time = now.toLocaleTimeString(isArabic ? 'ar-EG' : 'en-US',
                                                { hour: '2-digit', minute: '2-digit' });
            const date = now.toLocaleDateString(isArabic ? 'ar-EG' : 'en-US');
            safeChats.push({
                sender: sender,
                message: message,
                time: time,
                date: date,
                timestamp: now.getTime()
            });
            if (safeChats.length > 50) safeChats.shift();
            localStorage.setItem('jabri_chat_history', JSON.stringify(safeChats));
            updateBottomMenu();
        } catch (e) {
            console.warn('⚠️ Save chat failed:', e);
        }
    };

    function updateBottomMenu() {
        try {
            const chatHistory = getChatHistory();
            MENU_BOTTOM = chatHistory.map(function(chat) {
                const msg = String(chat.message || '');
                const summary = msg.length > 30 ? msg.substring(0, 30) + '...' : msg;
                return {
                    name: '💬 ' + summary,
                    nameEn: '💬 ' + summary,
                    href: '#',
                    icon: '💬',
                    isChat: true,
                    chatData: chat
                };
            });

            if (MENU_BOTTOM.length === 0) {
                MENU_BOTTOM = [{
                    name: '💬 اضغط هنا لبدء المحادثة',
                    nameEn: '💬 Click here to start chatting',
                    href: '#',
                    icon: '💬',
                    isChat: true
                }];
            }
            buildDropdownMenu();
            buildMainMenu();
        } catch (e) {
            console.warn('⚠️ [menu] فشل تحديث القائمة:', e);
        }
    }

    // ============================================================
    //   🧱 بناء عنصر قائمة
    // ============================================================
    function buildMenuItem(item) {
        const finalHref = item.href || buildUrl(item.path || '/');
        const isActive = finalHref !== '#' &&
                         location.pathname.indexOf(finalHref.split('/').pop()) !== -1;
        const activeStyle = isActive
            ? 'background:rgba(255,215,0,0.08);border-right:3px solid #ffd700;'
            : '';

        const isChatItem = item.isChat === true;
        const isWikiItem = item.isWiki === true;

        const onClick = isChatItem
            ? ' onclick="window.openChatPrompt(); return false;"'
            : isWikiItem
            ? ' onclick="window.openWiki(); return false;"'
            : '';

        const cursor = (isChatItem || isWikiItem) ? 'cursor:pointer;' : '';
        const target = item.external ? ' target="_blank" rel="noopener noreferrer"' : '';
        const label  = esc(isArabic ? item.name : item.nameEn);
        const icon   = esc(item.icon || '📄');
        const hrefAttr = finalHref === '#' ? '#' : finalHref;

        return '<a href="' + hrefAttr + '"' + target + onClick +
               ' style="color:#fff;padding:6px 12px;border-radius:6px;text-decoration:none;' +
               'display:flex;align-items:center;gap:8px;transition:0.3s;' +
               'border-bottom:1px solid rgba(255,215,0,0.03);font-size:0.85rem;' +
               activeStyle + cursor + '">' +
               '<span style="font-size:1rem;">' + icon + '</span> ' + label +
               '</a>';
    }

    // ============================================================
    //   📋 القائمة الرئيسية
    // ============================================================
    function buildMainMenu() {
        const nav = document.querySelector('#main-menu');
        if (!nav) return;

        let html = '';

        html += '<div class="menu-section" style="border-bottom:2px solid rgba(255,215,0,0.2);' +
                ' padding-bottom:8px; margin-bottom:10px;">' +
                '<div style="color:#ffd700; font-size:0.7rem; font-weight:bold;' +
                ' letter-spacing:1px; margin-bottom:4px;">📌 ' +
                (isArabic ? 'الأساسيات' : 'Essentials') + '</div>';
        MENU_TOP.forEach(function(item) { html += buildMenuItem(item); });
        html += '</div>';

        html += '<div class="menu-section" style="border-bottom:2px solid rgba(0,255,128,0.2);' +
                ' padding-bottom:8px; margin-bottom:10px;">' +
                '<div style="color:#00ff88; font-size:0.7rem; font-weight:bold;' +
                ' letter-spacing:1px; margin-bottom:4px;">🎮 ' +
                (isArabic ? 'مركز الألعاب' : 'Games Hub') + '</div>';
        GAMES.forEach(function(item) { html += buildMenuItem(item); });
        html += '</div>';

        html += '<div class="menu-section" style="border-bottom:2px solid rgba(106,227,255,0.2);' +
                ' padding-bottom:8px; margin-bottom:10px;">' +
                '<div style="color:#6ae3ff; font-size:0.7rem; font-weight:bold;' +
                ' letter-spacing:1px; margin-bottom:4px;">🧠 ' +
                (isArabic ? 'النظرية' : 'Theory') + '</div>';
        MENU_MIDDLE.forEach(function(item) { html += buildMenuItem(item); });
        html += '</div>';

        html += '<div class="menu-section" style="border-bottom:2px solid rgba(106,227,255,0.2);' +
                ' padding-bottom:8px; margin-bottom:10px;">' +
                '<div style="color:#6ae3ff; font-size:0.7rem; font-weight:bold;' +
                ' letter-spacing:1px; margin-bottom:4px;">📖 ' +
                (isArabic ? 'ويكيبيديا' : 'Wikipedia') + '</div>';
        html += buildMenuItem({
            name: '📖 عربي - ويكيبيديا',
            nameEn: '📖 English - Wikipedia',
            href: 'https://wikibin.org/articles/abdulla-mohammed-nasser-al-jabri.html',
            icon: '📖',
            isWiki: true,
            external: true
        });
        html += '</div>';

        html += '<div class="menu-section" style="border-bottom:2px solid rgba(255,106,106,0.2);' +
                ' padding-bottom:8px; margin-bottom:10px;">' +
                '<div style="color:#ff6a6a; font-size:0.7rem; font-weight:bold;' +
                ' letter-spacing:1px; margin-bottom:4px;">💬 ' +
                (isArabic ? 'آخر المحادثات' : 'Recent Chats') +
                ' <span style="font-size:0.6rem; opacity:0.6;">(' + MENU_BOTTOM.length + ')</span>' +
                '</div>';
        MENU_BOTTOM.forEach(function(item) { html += buildMenuItem(item); });
        html += '</div>';

        const today = new Date();
        const dateStr = today.toLocaleDateString(isArabic ? 'ar-EG' : 'en-US', {
            year: 'numeric', month: 'long', day: 'numeric'
        });

        html +=
            '<div style="border-top:2px solid #ffd700; margin:12px 0 8px 0; padding-top:10px;">' +
                '<div style="color:#ffd700; font-size:0.7rem; font-weight:bold;' +
                ' text-align:center; letter-spacing:1px; margin-bottom:6px;">' +
                    '⭐ ' + (isArabic ? 'إنجازات اليوم - ' : "Today's Achievements — ") + esc(dateStr) +
                '</div>' +
                '<div style="display:flex; flex-direction:column; gap:4px;' +
                ' font-size:0.78rem; color:#ccc; padding:0 4px;">' +
                    '<div style="display:flex; align-items:center; gap:8px;' +
                    ' background:rgba(255,215,0,0.04); padding:5px 10px;' +
                    ' border-radius:6px; border-right:3px solid #ffd700;">' +
                        '<span>🧮</span> <span>' +
                        (isArabic ? 'الدالة الأم - اشتقاق ثابت الجاذبية'
                                  : 'Mother Function — Gravitational Constant') +
                        '</span></div>' +
                    '<div style="display:flex; align-items:center; gap:8px;' +
                    ' background:rgba(255,215,0,0.04); padding:5px 10px;' +
                    ' border-radius:6px; border-right:3px solid #ffd700;">' +
                        '<span>🌌</span> <span>' +
                        (isArabic ? 'النظرية الموحدة Zx = Z + C + A'
                                  : 'Unified Theory Zx = Z + C + A') +
                        '</span></div>' +
                    '<div style="display:flex; align-items:center; gap:8px;' +
                    ' background:rgba(0,255,128,0.04); padding:5px 10px;' +
                    ' border-radius:6px; border-right:3px solid #00ff88;">' +
                        '<span>🎮</span> <span>' +
                        (isArabic ? 'مركز الألعاب - 3 ألعاب جديدة'
                                  : 'Games Hub - 3 new games') +
                        '</span></div>' +
                '</div>' +
            '</div>';

        html +=
            '<div style="border-top:1px solid rgba(255,215,0,0.08); margin:6px 0 4px 0;' +
            ' padding-top:6px;"></div>' +
            '<a href="https://en.wikipedia.org/wiki/User:Jabri2026" target="_blank"' +
            ' rel="noopener noreferrer" style="color:#fff;padding:8px 12px;border-radius:8px;' +
            ' text-decoration:none;display:flex;align-items:center;gap:10px;' +
            ' border-bottom:1px solid rgba(255,215,0,0.04);font-size:0.9rem;">' +
            '<span style="font-size:1.1rem;">🌐</span> Wikipedia</a>' +
            '<a href="https://github.com/jabri-com" target="_blank"' +
            ' rel="noopener noreferrer" style="color:#fff;padding:8px 12px;border-radius:8px;' +
            ' text-decoration:none;display:flex;align-items:center;gap:10px;' +
            ' border-bottom:1px solid rgba(255,215,0,0.04);font-size:0.9rem;">' +
            '<span style="font-size:1.1rem;">🐙</span> GitHub</a>' +
            '<a href="https://orcid.org/0009-0003-3319-3822" target="_blank"' +
            ' rel="noopener noreferrer" style="color:#fff;padding:8px 12px;border-radius:8px;' +
            ' text-decoration:none;display:flex;align-items:center;gap:10px;font-size:0.9rem;">' +
            '<span style="font-size:1.1rem;">🆔</span> ORCID</a>';

        nav.innerHTML = html;
        highlightActiveLink();
    }

    // ============================================================
    //   📋 القائمة المنسدلة
    // ============================================================
    function buildDropdownMenu() {
        const dropdown = document.getElementById('menu-dropdown');
        if (!dropdown) return;

        const arHref = '/ar/';
        const enHref = '/en/';

        let html =
            '<div style="display:flex; gap:8px; justify-content:center; padding-bottom:12px;' +
            ' border-bottom:2px solid rgba(255,215,0,0.12); margin-bottom:10px; flex-wrap:wrap;">' +
                '<a href="' + esc(arHref) + '" style="color:' +
                (isArabic ? '#ffd700' : '#888') + '; padding:4px 14px; border:1px solid ' +
                (isArabic ? '#ffd700' : '#444') + '; border-radius:8px; text-decoration:none;' +
                ' font-weight:bold; background:' +
                (isArabic ? 'rgba(255,215,0,0.12)' : 'transparent') +
                '; font-size:0.85rem;">🇾🇪 عربي</a>' +
                '<a href="' + esc(enHref) + '" style="color:' +
                (!isArabic ? '#ffd700' : '#888') + '; padding:4px 14px; border:1px solid ' +
                (!isArabic ? '#ffd700' : '#444') + '; border-radius:8px; text-decoration:none;' +
                ' font-weight:bold; background:' +
                (!isArabic ? 'rgba(255,215,0,0.12)' : 'transparent') +
                '; font-size:0.85rem;">🇬🇧 English</a>' +
            '</div>';

        html += '<div style="border-bottom:2px solid rgba(255,215,0,0.15);' +
                ' padding-bottom:6px; margin-bottom:8px;">' +
                '<div style="color:#ffd700; font-size:0.65rem; font-weight:bold;' +
                ' letter-spacing:1px; margin-bottom:4px;">📌 ' +
                (isArabic ? 'الأساسيات' : 'Essentials') + '</div>';
        MENU_TOP.forEach(function(item) {
            html += '<a href="' + esc(buildUrl(item.path)) + '"' +
                    ' style="color:#fff;padding:5px 10px;border-radius:6px;' +
                    ' text-decoration:none;display:flex;align-items:center;gap:8px;' +
                    ' border-bottom:1px solid rgba(255,215,0,0.03);font-size:0.82rem;">' +
                    '<span style="font-size:0.9rem;">' + esc(item.icon) + '</span> ' +
                    esc(isArabic ? item.name : item.nameEn) + '</a>';
        });
        html += '</div>';

        html += '<div style="border-bottom:2px solid rgba(0,255,128,0.15);' +
                ' padding-bottom:6px; margin-bottom:8px;">' +
                '<div style="color:#00ff88; font-size:0.65rem; font-weight:bold;' +
                ' letter-spacing:1px; margin-bottom:4px;">🎮 ' +
                (isArabic ? 'مركز الألعاب' : 'Games Hub') + '</div>';
        GAMES.forEach(function(item) {
            html += '<a href="' + esc(buildUrl(item.path)) + '"' +
                    ' style="color:#fff;padding:5px 10px;border-radius:6px;' +
                    ' text-decoration:none;display:flex;align-items:center;gap:8px;' +
                    ' border-bottom:1px solid rgba(0,255,128,0.03);font-size:0.82rem;">' +
                    '<span style="font-size:0.9rem;">' + esc(item.icon) + '</span> ' +
                    esc(isArabic ? item.name : item.nameEn) + '</a>';
        });
        html += '</div>';

        html += '<div style="border-bottom:2px solid rgba(106,227,255,0.15);' +
                ' padding-bottom:6px; margin-bottom:8px;">' +
                '<div style="color:#6ae3ff; font-size:0.65rem; font-weight:bold;' +
                ' letter-spacing:1px; margin-bottom:4px;">🧠 ' +
                (isArabic ? 'النظرية' : 'Theory') + '</div>';
        MENU_MIDDLE.forEach(function(item) {
            html += '<a href="' + esc(buildUrl(item.path)) + '"' +
                    ' style="color:#fff;padding:5px 10px;border-radius:6px;' +
                    ' text-decoration:none;display:flex;align-items:center;gap:8px;' +
                    ' border-bottom:1px solid rgba(106,227,255,0.03);font-size:0.82rem;">' +
                    '<span style="font-size:0.9rem;">' + esc(item.icon) + '</span> ' +
                    esc(isArabic ? item.name : item.nameEn) + '</a>';
        });
        html += '</div>';

        html += '<div style="border-bottom:2px solid rgba(106,227,255,0.15);' +
                ' padding-bottom:6px; margin-bottom:8px;">' +
                '<div style="color:#6ae3ff; font-size:0.65rem; font-weight:bold;' +
                ' letter-spacing:1px; margin-bottom:4px;">📖 ' +
                (isArabic ? 'ويكيبيديا' : 'Wikipedia') + '</div>' +
                '<a href="https://wikibin.org/articles/abdulla-mohammed-nasser-al-jabri.html"' +
                ' target="_blank" rel="noopener noreferrer" style="color:#6ae3ff;' +
                ' padding:5px 10px;border-radius:6px;text-decoration:none;display:flex;' +
                ' align-items:center;gap:8px;font-size:0.82rem;' +
                ' border-bottom:1px solid rgba(106,227,255,0.03);">' +
                '<span>📖</span> ' +
                (isArabic ? 'عربي - ويكيبيديا' : 'English - Wikipedia') + '</a>' +
                '</div>';

        html += '<div style="border-bottom:2px solid rgba(255,106,106,0.15);' +
                ' padding-bottom:6px; margin-bottom:8px;">' +
                '<div style="color:#ff6a6a; font-size:0.65rem; font-weight:bold;' +
                ' letter-spacing:1px; margin-bottom:4px;">💬 ' +
                (isArabic ? 'آخر المحادثات' : 'Recent Chats') +
                ' <span style="font-size:0.6rem; opacity:0.6;">(' + MENU_BOTTOM.length + ')</span>' +
                '</div>';

        if (MENU_BOTTOM.length === 0) {
            html += '<div onclick="window.openChatPrompt()" style="padding:4px 10px;' +
                    ' border-radius:6px; font-size:0.75rem; color:#ff6a6a; cursor:pointer;' +
                    ' text-align:center;">💬 ' +
                    (isArabic ? 'اضغط هنا لبدء المحادثة' : 'Click here to start chatting') +
                    '</div>';
        } else {
            MENU_BOTTOM.forEach(function(item) {
                const chat = item.chatData || {};
                const msgText = String(chat.message || '');
                const timeText = String(chat.time || '');
                html += '<div onclick="window.openChatPrompt()" style="padding:4px 10px;' +
                        ' border-radius:6px; font-size:0.75rem; color:#ccc; display:flex;' +
                        ' justify-content:space-between; cursor:pointer;' +
                        ' border-bottom:1px solid rgba(255,106,106,0.03);">' +
                        '<span style="flex:1; overflow:hidden; text-overflow:ellipsis;' +
                        ' white-space:nowrap;">💬 ' + esc(msgText) + '</span>' +
                        '<span style="font-size:0.6rem; color:#666; margin-inline-start:6px;">' +
                        esc(timeText) + '</span></div>';
            });
        }
        html += '</div>';

        html +=
            '<div style="border-top:1px solid rgba(255,215,0,0.08); margin:6px 0 4px 0;' +
            ' padding-top:6px;"></div>' +
            '<a href="https://en.wikipedia.org/wiki/User:Jabri2026" target="_blank"' +
            ' rel="noopener noreferrer" style="color:#fff;padding:6px 10px;border-radius:6px;' +
            ' text-decoration:none;display:flex;align-items:center;gap:8px;' +
            ' border-bottom:1px solid rgba(255,215,0,0.03);font-size:0.82rem;">' +
            '<span style="font-size:0.9rem;">🌐</span> Wikipedia</a>' +
            '<a href="https://github.com/jabri-com" target="_blank"' +
            ' rel="noopener noreferrer" style="color:#fff;padding:6px 10px;border-radius:6px;' +
            ' text-decoration:none;display:flex;align-items:center;gap:8px;' +
            ' border-bottom:1px solid rgba(255,215,0,0.03);font-size:0.82rem;">' +
            '<span style="font-size:0.9rem;">🐙</span> GitHub</a>' +
            '<a href="https://orcid.org/0009-0003-3319-3822" target="_blank"' +
            ' rel="noopener noreferrer" style="color:#fff;padding:6px 10px;border-radius:6px;' +
            ' text-decoration:none;display:flex;align-items:center;gap:8px;font-size:0.82rem;">' +
            '<span style="font-size:0.9rem;">🆔</span> ORCID</a>';

        dropdown.innerHTML = html;
    }

    // ============================================================
    //   ☰ قائمة الهامبرغر
    // ============================================================
    function buildHamburgerMenu() {
        const oldDropdown = document.getElementById('menu-dropdown');
        if (oldDropdown) oldDropdown.remove();
        const oldYellowBtn = document.getElementById('hamburger-menu');
        if (oldYellowBtn) oldYellowBtn.remove();

        const dropdown = document.createElement('div');
        dropdown.id = 'menu-dropdown';
        dropdown.style.cssText =
            'display: none !important;' +
            'position: fixed !important;' +
            'top: 75px !important;' +
            (isArabic ? 'right: 20px' : 'left: 20px') + ' !important;' +
            'background: rgba(10, 10, 20, 0.97) !important;' +
            'border: 2px solid #ffd700 !important;' +
            'border-radius: 16px !important;' +
            'padding: 18px 16px !important;' +
            'min-width: 300px !important;' +
            'max-width: 90vw !important;' +
            'max-height: 70vh !important;' +
            'overflow-y: auto !important;' +
            'z-index: 9998 !important;' +
            'flex-direction: column !important;' +
            'direction: ' + (isArabic ? 'rtl' : 'ltr') + ' !important;' +
            "font-family: 'Cairo', 'Tahoma', sans-serif !important;" +
            'backdrop-filter: blur(16px) !important;' +
            'box-shadow: 0 15px 50px rgba(0, 0, 0, 0.9) !important;';

        document.body.appendChild(dropdown);
        buildDropdownMenu();

        let isOpen = false;

        function toggleDropdown(e) {
            if (e) {
                e.stopPropagation();
                e.preventDefault();
            }
            isOpen = !isOpen;
            dropdown.style.display = isOpen ? 'flex' : 'none';
        }

        function closeDropdown() {
            isOpen = false;
            dropdown.style.display = 'none';
        }

        function bindHeaderMenuBtn() {
            const headerBtn = document.querySelector('.top-btn.menu');
            if (!headerBtn) return false;
            if (headerBtn.dataset.wahaBound === '1') return true;

            headerBtn.removeAttribute('onclick');
            headerBtn.dataset.wahaBound = '1';
            headerBtn.addEventListener('click', toggleDropdown);

            console.log('✅ [menu] زر ☰ مربوط بنجاح');
            return true;
        }

        if (!bindHeaderMenuBtn()) {
            document.addEventListener('headerLoaded', bindHeaderMenuBtn);
            setTimeout(bindHeaderMenuBtn, 500);
            setTimeout(bindHeaderMenuBtn, 1500);
            setTimeout(bindHeaderMenuBtn, 3000);
        }

        window.toggleMenu = toggleDropdown;

        document.addEventListener('click', function(e) {
            if (!dropdown.contains(e.target) && !e.target.closest('.top-btn.menu')) {
                closeDropdown();
            }
        });

        console.log('🌴 [menu] buildHamburgerMenu v6.5');
    }

    // ============================================================
    //   🔧 دوال مساعدة
    // ============================================================
    function highlightActiveLink() {
        const links = document.querySelectorAll('#main-menu a');
        const current = location.pathname.split('/').pop() || 'index.html';
        links.forEach(function(link) {
            const hrefAttr = link.getAttribute('href');
            if (!hrefAttr) return;
            const href = hrefAttr.split('/').pop();
            if (href === current || (current === '' && href === 'index.html')) {
                link.style.background = 'rgba(255, 215, 0, 0.08)';
                link.style.borderRight = '3px solid #ffd700';
                link.style.color = '#ffd700';
            }
        });
    }

    // ============================================================
    //   🌐 دوال عامة
    // ============================================================
    window.openChatPrompt = function() {
        if (IS_BOT) return;
        const message = prompt(isArabic ? '💬 اكتب رسالتك:' : '💬 Write your message:');
        if (message && message.trim()) {
            window.saveChatMessage(message.trim());
            alert(isArabic ? '✅ تم إرسال رسالتك بنجاح!' : '✅ Message sent successfully!');
        }
    };

    window.openWiki = function() {
        window.open(
            'https://wikibin.org/articles/abdulla-mohammed-nasser-al-jabri.html',
            '_blank',
            'noopener,noreferrer'
        );
    };

    // ============================================================
    //   🚀 التهيئة
    // ============================================================
    function init() {
        try {
            updateBottomMenu();
            buildMainMenu();
            buildHamburgerMenu();
            console.log('🌴 menu.js v6.5 — Web Only' +
                        (IS_BOT ? ' | 🤖 BOT detected' : ''));
        } catch (e) {
            console.error('❌ [menu] خطأ في التشغيل:', e);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // تصدير عام
    window.updateChatMenu = updateBottomMenu;
    window.saveChat = window.saveChatMessage;

})();