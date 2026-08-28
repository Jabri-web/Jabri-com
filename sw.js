const CACHE = 'aljabri-final';
const FILES = ['/', '/image/Jabri-photo.webp', '/Sindbad-Brdoni.html', '/Nezar.html', '/music.mp3'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))) });
self.addEventListener('fetch', e => { e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))) });