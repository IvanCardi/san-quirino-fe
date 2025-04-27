self.addEventListener('push', function (event) {
  if (event.data) {
    const data = event.data.json()
    const options = {
      body: data.body,
      icon: data.icon || '/icon.png',
      badge: '/badge.png',
      vibrate: [100, 50, 100],
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