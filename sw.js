/* The Impossible Room — service worker (v11)
   Strategy:
   - Navigations (the game itself): network-first so players always get the
     newest build when online; cache fallback keeps it playable offline.
   - Versioned CDN assets (three.js on unpkg): cache-first, they are immutable.
   - Icons / manifest / guide: cache-first.
   Bump VERSION on every deploy to retire old caches. */
const VERSION = 'tir-v24';
const SHELL = 'tir-shell-v19';  // v20: progress panel

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(SHELL).then(c => c.addAll([
      './', './index.html', './HOW-TO-PLAY.html', './manifest.webmanifest',
      './icon-192.png', './icon-512.png', './apple-touch-icon.png'
    ])).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== SHELL).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  /* app shell / navigations — network-first, offline fallback */
  if (req.mode === 'navigate' || (url.origin === location.origin &&
      (url.pathname.endsWith('/') || url.pathname.endsWith('index.html')))) {
    e.respondWith(
      fetch(req).then(res => {
        const copy = res.clone();
        caches.open(SHELL).then(c => c.put(req, copy));
        return res;
      }).catch(() => caches.match(req).then(m => m || caches.match('./index.html')))
    );
    return;
  }

  /* immutable CDN modules — cache-first */
  if (url.origin !== location.origin) {
    e.respondWith(
      caches.match(req).then(m => m || fetch(req).then(res => {
        if (res.ok || res.type === 'opaque') {
          const copy = res.clone();
          caches.open(SHELL).then(c => c.put(req, copy));
        }
        return res;
      }))
    );
    return;
  }

  /* same-origin statics — cache-first with background refresh */
  e.respondWith(
    caches.match(req).then(m => {
      const net = fetch(req).then(res => {
        if (res.ok) {
          const copy = res.clone();
          caches.open(SHELL).then(c => c.put(req, copy));
        }
        return res;
      }).catch(() => m);
      return m || net;
    })
  );
});
