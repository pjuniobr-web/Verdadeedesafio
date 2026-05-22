const CACHE_NAME = 'heineken-pro-v1';
const assets = ['index.html','fundo.png','logo.png','garrafa.png','manifest.json'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(assets)))});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
