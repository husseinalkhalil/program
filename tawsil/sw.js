const cacheName = 'my-app-cache-v1';
const assetsToCache = [
  '/',
  '/index.html',
  '/view.html',
  '/icons/app-icon.png',
  // أضف أي ملفات CSS أو JS إضافية تستخدمها هنا
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assetsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
