const CACHE_NAME = 'heaven-aljabri-v3'; // غير الرقم مع كل redeployment v4, v5...
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
  '/offline.html' // صفحة 404 مخصصة
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