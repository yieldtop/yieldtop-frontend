// Files to cache
let cacheName = 'pwa-calculator';
let appShellFiles = [
//Файлы надо заменить на свои, это просто для примера что там может быть,
// что нужно и скрипты и другие файлы прописать
  '/index.html',
  '/view.js',
  '/view.css',

  '/icons/android-icon-36x36.png',
  '/icons/android-icon-48x48.png',
  '/icons/android-icon-72x72.png',
  '/icons/android-icon-96x96.png',
  '/icons/android-icon-144x144.png',
  '/icons/android-icon-192x192.png',

  '/fonts/lato/latoregular.woff2',
  '/fonts/lato/latoregular.woff',
  '/fonts/lato/latoregular.ttf',
  '/fonts/roboto/Robotolight.woff2',
  '/fonts/roboto/Robotolight.woff',
  '/fonts/roboto/Robotolight.ttf', 
  '/fonts/roboto/Roboto.woff2',
  '/fonts/roboto/Roboto.woff',
  '/fonts/roboto/Roboto.ttf',
  '/fonts/roboto/Robotomedium.woff2',
  '/fonts/roboto/Robotomedium.woff',
  '/fonts/roboto/Robotomedium.ttf',
  '/fonts/roboto/Robotobold.woff2',
  '/fonts/roboto/Robotobold.woff',
  '/fonts/roboto/Robotobold.ttf',
];

let contentToCache = appShellFiles;

// Installing Service Worker
self.addEventListener('install', function(e) {
  console.log('[Service Worker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[Service Worker] Caching all: app shell and content');
      return cache.addAll(contentToCache);
    })
  );
});

// Fetching content using Service Worker
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(r) {
      console.log('[Service Worker] Fetching resource: '+e.request.url);
      return r || fetch(e.request).then(function(response) {
        return caches.open(cacheName).then(function(cache) {
          console.log('[Service Worker] Caching new resource: '+e.request.url);
          cache.put(e.request, response.clone());
          return response;
        });
      });
    })
  );
});