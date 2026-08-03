/* Service worker: permite usar la app sin internet.
   Estrategia "red primero, caché de respaldo": si hay conexión siempre
   recibes la versión más nueva; si no la hay, se sirve la copia guardada. */

const CACHE = "nihongo-v1";
const ASSETS = ["./", "./index.html", "./manifest.json", "./icon.png", "./icon-192.png"];

self.addEventListener("install", ev => {
  ev.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", ev => {
  ev.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", ev => {
  if (ev.request.method !== "GET") return;
  ev.respondWith(
    fetch(ev.request)
      .then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(ev.request, copy)).catch(() => {});
        return res;
      })
      .catch(() => caches.match(ev.request).then(hit => hit || caches.match("./index.html")))
  );
});
