// Big Island Cams Service Worker
const CACHE_NAME = 'bigislandcams-v1';

// Cache the app shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json'
      ]);
    })
  );
  self.skipWaiting();
});

// Network-first strategy for live content
self.addEventListener('fetch', (event) => {
  // Don't cache webcam images or iframes - always fetch fresh
  if (event.request.url.includes('.jpg') || 
      event.request.url.includes('.png') ||
      event.request.url.includes('youtube.com') ||
      event.request.url.includes('usgs.gov') ||
      event.request.url.includes('surfline.com')) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Cache successful responses
        if (response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, clone);
          });
        }
        return response;
      })
      .catch(() => {
        // Fall back to cache if offline
        return caches.match(event.request);
      })
  );
});

// Clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME)
            .map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});
