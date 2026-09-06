const CACHE_NAME = 'heaven-aljabri-v4'; // تم الترقية إلى v4

const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/logo.html',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  '/image/Jabri-photo.webp',
  '/music.mp3',
  '/Sindbad-Brdoni.html',
  '/Nezar.html',
  '/offline.html',
  '/Page1.html',
  '/Page2.html',
  '/Page11.html',
  '/Page12.html',
  '/Yemen-library.html',
  '/Router-all.html',
  '/Dbase.html',
  '/research.html',
  '/Pages-Researches.html',
  '/Office.html',
  '/Check.html',
  '/about.html',
  '/about-ar.html',
  '/about-en.html',
  '/about-waha.html',
  '/Author-cv.html',
  '/cv-2026a.html',
  '/cv-2026e.html',
  '/profile.html',
  '/profile-en.html'
];

// التثبيت: خزن كل شي
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting();
});

// التفعيل: امسح الكاش القديم
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// الجلب: من الكاش اول، لو مافيش نت جيب صفحة 404
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request).catch(() => caches.match('/offline.html'));
    })
  );
});