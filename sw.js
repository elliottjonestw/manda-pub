self.addEventListener('install', () => self.skipWaiting())
self.addEventListener('activate', (event) => event.waitUntil(clients.claim()))
// This worker does not cache assets. PWA installation is not an offline guarantee.
// Fetches pass through; keep the install/FAQ copy explicit about connectivity.
self.addEventListener('fetch', () => {})
