// Your existing push, notificationclick, message listeners...

/* self.addEventListener('fetch', function (event) {
  // You can leave this empty if you don't need offline support *yet*
  // but it's better to have a basic strategy.
  // For example, a simple network-first strategy:
  // event.respondWith(fetch(event.request));

  // Or, to simply fulfill the requirement if you're not ready for caching:
  // console.log('Fetch event for:', event.request.url);
  // return; // Allowing the browser to handle it normally by not calling event.respondWith()
  // However, to be more robust for installability, actually responding is better.
  event.respondWith(
    fetch(event.request).catch(function() {
      // Optional: Return a custom offline page if fetch fails
      // return caches.match('/offline.html');
    })
  );
});

// It's also good practice to have install and activate listeners
self.addEventListener('install', function() {
  console.log('Service Worker: Install');
  // Optional: Cache essential assets here
  // event.waitUntil(
  //   caches.open('your-cache-name').then(function(cache) {
  //     return cache.addAll([
  //       '/',
  //       '/styles/main.css',
  //       '/script/main.js'
  //     ]);
  //   })
  // );
  self.skipWaiting(); // Forces the waiting service worker to become the active service worker
});

self.addEventListener('activate', function() {
  console.log('Service Worker: Activate');
  // Optional: Clean up old caches here
  // event.waitUntil(
  //   caches.keys().then(function(cacheNames) {
  //     return Promise.all(
  //       cacheNames.map(function(cacheName) {
  //         if (cacheName !== 'your-cache-name') {
  //           return caches.delete(cacheName);
  //         }
  //       })
  //     );
  //   })
  // );
  return self.clients.claim(); // Becomes available to all clients
}); */


self.addEventListener('push', function (event) {
  if (event.data) {
    const data = event.data.json()
    const options = {
      body: data.body,
      icon: data.icon || '/web-app-manifest-192x192.png',
      badge: '/web-app-manifest-192x192.png',
      vibrate: [100, 50, 100],
      requireInteraction: true, // keeps it on screen until the user interacts
      tag: 'general',
      renotify: true,
      data: {
        dateOfArrival: Date.now(),
        primaryKey: '2',
        url: data.url
      },
    }
    event.waitUntil(self.registration.showNotification(data.title, options))
  }
})

let pendingNavigationUrl = null;

self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  const targetPage = event.notification.data?.url || '/';
  pendingNavigationUrl = targetPage;

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if (client.url.startsWith(self.location.origin) && 'focus' in client) {
          return client.focus();
        }
      }
      return clients.openWindow('/');
    })
  );
});

self.addEventListener('message', (event) => {
  if (event.data?.action === 'getPendingNavigation') {
    if (pendingNavigationUrl) {
      event.source.postMessage({ action: 'navigate', url: pendingNavigationUrl });
      pendingNavigationUrl = null; // Clear after sending
    }
  }
});