const CACHE_NAME = 'jabri-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png'
  // لو عندك ملفات موسيقى مهمة ضيفها هنا: '/music/song.mp3'
];

// اول ما يتثبت: يخزن كل الملفات
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

// اول ما يتفعل: يمسح الكاش القديم
self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

// اي طلب: جيبه من الكاش اول لو موجود
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});