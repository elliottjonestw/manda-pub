self.addEventListener('install', () => self.skipWaiting())
self.addEventListener('activate', (event) => event.waitUntil(clients.claim()))
// Satisfy the PWA installability requirement; all fetches pass through to the network
self.addEventListener('fetch', () => {})
