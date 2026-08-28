const CACHE_NAME = 'aljabri-v1';
const urlsToCache = [
  '/',
  '/Sindbad-Brdoni.html',
  '/Nezar.html',
  '/image/Jabri-photo.webp',
  '/image/Yemen2026.png',
  '/music.mp3' // ضفناه
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});