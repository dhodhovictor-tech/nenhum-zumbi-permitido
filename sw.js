// Guarda o jogo no aparelho para funcionar sem internet.
// A página e o manifesto vêm sempre da internet quando possível (assim as atualizações chegam na hora);
// o resto usa o que está guardado e atualiza em segundo plano. Sem internet, tudo vem do que foi guardado.
const VERSION = 'barricada-v4';
const SHELL = ['./', 'index.html', 'app.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const fresh = req.mode === 'navigate' || req.destination === 'manifest';
  e.respondWith(
    caches.open(VERSION).then(async cache => {
      const hit = await cache.match(req, { ignoreSearch: req.mode === 'navigate' });
      // a página e o manifesto ignoram o cache do navegador (o GitHub manda guardar por 10 minutos)
      const net = (fresh ? fetch(req.url, { cache: 'no-cache', credentials: 'same-origin' }) : fetch(req))
        .then(res => { if (res && (res.ok || res.type === 'opaque')) cache.put(req, res.clone()); return res; })
        .catch(() => hit);
      return fresh ? net : (hit || net);
    })
  );
});
