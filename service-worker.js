/* /service-worker.js */
/* Simple service worker for offline caching */

const CACHE_NAME = 'telechic-v1';
const STATIC_ASSETS = [
  '/ar/',
  '/en/',
  '/assets/css/base.css',
  '/assets/css/theme.css',
  '/assets/js/app.js',
  '/assets/js/validate.js',
  '/assets/img/logo.svg',
  '/manifest.webmanifest'
];

// Install event - cache static assets
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(function() {
        return self.skipWaiting();
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys()
      .then(function(cacheNames) {
        return Promise.all(
          cacheNames.map(function(cacheName) {
            if (cacheName !== CACHE_NAME) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(function() {
        return self.clients.claim();
      })
  );
});

// Fetch event - network first for pages, cache first for assets
self.addEventListener('fetch', function(event) {
  const { request } = event;
  const url = new URL(request.url);

  // Skip cross-origin requests
  if (url.origin !== location.origin) {
    return;
  }

  // Network-first strategy for HTML pages
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then(function(response) {
          // Clone and cache the response
          const responseClone = response.clone();
          caches.open(CACHE_NAME)
            .then(function(cache) {
              cache.put(request, responseClone);
            });
          return response;
        })
        .catch(function() {
          // Fallback to cache if network fails
          return caches.match(request)
            .then(function(response) {
              return response || caches.match('/ar/404.html');
            });
        })
    );
    return;
  }

  // Cache-first strategy for assets (CSS, JS, images)
  event.respondWith(
    caches.match(request)
      .then(function(response) {
        if (response) {
          return response;
        }

        return fetch(request)
          .then(function(response) {
            // Don't cache non-successful responses
            if (!response || response.status !== 200 || response.type === 'error') {
              return response;
            }

            // Clone and cache the response for future use
            const responseClone = response.clone();
            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(request, responseClone);
              });

            return response;
          });
      })
  );
});
