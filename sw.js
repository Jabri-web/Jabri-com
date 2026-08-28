const CACHE_NAME = 'aljabri-v1';
const urlsToCache = [
  '/',
  '/icon-192.png',
  '/icon-512.png',
  '/Sindbad-Brdoni.html',
  '/Nezar.html',
  '/image/Jabri-photo.webp',
  '/music.mp3'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});