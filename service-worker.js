const CACHE_NAME = 'daylight-v0.0.6';
const APP_SHELL = [
  './',
  './index.html',
  './styles.css?v=0.0.6',
  './app.js?v=0.0.6',
  './manifest.webmanifest',
  './apple-touch-icon.png?v=2',
  './apple-touch-icon-precomposed.png?v=2',
  './icons/daylight-icon-32.png?v=2',
  './icons/daylight-icon-76.png?v=2',
  './icons/daylight-icon-120.png?v=2',
  './icons/daylight-icon-152.png?v=2',
  './icons/daylight-icon-167.png?v=2',
  './icons/daylight-icon-180.png?v=2',
  './icons/daylight-icon-192.png?v=2',
  './icons/daylight-icon-192-maskable.png?v=2',
  './icons/daylight-icon-512.png?v=2',
  './icons/daylight-icon-512-maskable.png?v=2',
  './icons/daylight-icon-1024.png?v=2'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request).then((response) => {
      if (response.ok && new URL(event.request.url).origin === self.location.origin) {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
      }
      return response;
    }).catch(() => caches.match('./index.html')))
  );
});
