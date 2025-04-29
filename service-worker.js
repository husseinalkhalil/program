self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('pwa-cache').then((cache) => {
      return cache.addAll([
        // الصفحة الرئيسية وملفات أساسية
        '/index.html',
        '/manifest.json',
        '/service-worker.js',

        // تطبيق الحوالات
        '/hawalat/index.html',
        '/hawalat/view.html',
        '/hawalat/script.js',
        '/hawalat/style.css',
        '/hawalat/fonts/Amiri-Regular.ttf',
        '/hawalat/icons/logo.png',
        '/hawalat/icons/real.png',

        // تطبيق التوصيل
        '/tawsil/index.html',
        '/tawsil/view.html',
        '/tawsil/manifest.json',
        '/tawsil/sw.js',
        '/tawsil/fonts/Amiri-Regular.ttf',
        '/tawsil/icons/app-icon.png',
        '/tawsil/icons/real.png',
        '/tawsil/icons/trash-icon.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
