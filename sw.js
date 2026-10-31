// Reel Ledger service worker: keeps the app and its catalog available offline,
// and caches posters from Wikipedia after the first time they load.
const VERSION = 'rl-v8';
const SHELL = ['./', 'index.html', 'manifest.webmanifest', 'data/catalog.json', 'data/recs.json', 'data/extras.json', 'data/tv.json', 'data/games.json', 'icon-192.png', 'icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION && k !== 'rl-img').map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET') return;
  // Posters: cache first, they never change
  if (url.hostname === 'upload.wikimedia.org' || url.hostname === 'static.tvmaze.com') {
    e.respondWith(caches.open('rl-img').then(async c => {
      const hit = await c.match(e.request);
      if (hit) return hit;
      const res = await fetch(e.request);
      if (res.ok || res.type === 'opaque') c.put(e.request, res.clone());
      return res;
    }));
    return;
  }
  // App files and catalog: network first so updates arrive, cache when offline
  if (url.origin === location.origin) {
    e.respondWith(fetch(e.request).then(res => {
      const copy = res.clone();
      caches.open(VERSION).then(c => c.put(e.request, copy));
      return res;
    }).catch(() => caches.match(e.request, { ignoreSearch: true }).then(r => r || caches.match('index.html'))));
  }
});
