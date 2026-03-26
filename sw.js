const cacheName = 'rybarsky-dennik-v1';
const assets = [
  './',
  './index.html',
  './manifest.json',
  'https://jozef-puf.github.io'
  // SEM DOPÍŠ CESTY K TVOJIM .css ALEBO .js SÚBOROM, AK ICH MÁŠ OSOBITNE
];

// Inštalácia a uloženie súborov do pamäte (cache)
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Obsluha požiadaviek (načítanie z cache, ak sme offline)
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
