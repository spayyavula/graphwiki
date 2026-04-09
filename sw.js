const CACHE_VERSION = "graphwiki-static-v2";
const CORE_CACHE = `${CACHE_VERSION}-core`;
const RUNTIME_CACHE = `${CACHE_VERSION}-runtime`;
const STATIC_ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./offline.html",
  "./icons/app-icon.svg",
  "./icons/app-icon-192.png",
  "./icons/app-icon-512.png",
  "./icons/apple-touch-icon.png"
];

const CACHEABLE_DESTINATIONS = new Set(["style", "script", "font", "image"]);

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CORE_CACHE).then(cache => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => ![CORE_CACHE, RUNTIME_CACHE].includes(key))
          .map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

function isCacheableResponse(response) {
  return !!response && (response.ok || response.type === "opaque");
}

async function putInCache(cacheName, request, response) {
  if (!isCacheableResponse(response)) return response;
  const cache = await caches.open(cacheName);
  cache.put(request, response.clone());
  return response;
}

async function staleWhileRevalidate(request, event) {
  const cached = await caches.match(request);
  const networkPromise = fetch(request)
    .then(response => putInCache(RUNTIME_CACHE, request, response))
    .catch(() => null);

  if (cached) {
    event.waitUntil(networkPromise);
    return cached;
  }

  const networkResponse = await networkPromise;
  return networkResponse || caches.match("./offline.html");
}

async function networkFirst(request) {
  try {
    const response = await fetch(request);
    return putInCache(RUNTIME_CACHE, request, response);
  } catch {
    return caches.match(request) || caches.match("./index.html") || caches.match("./offline.html");
  }
}

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;

  const requestUrl = new URL(event.request.url);
  const sameOrigin = requestUrl.origin === self.location.origin;
  const destination = event.request.destination;

  event.respondWith(
    (async () => {
      if (event.request.mode === "navigate") {
        return networkFirst(event.request);
      }

      if (sameOrigin) {
        return staleWhileRevalidate(event.request, event);
      }

      if (CACHEABLE_DESTINATIONS.has(destination)) {
        const cached = await caches.match(event.request);
        if (cached) return cached;

        try {
          const response = await fetch(event.request);
          return putInCache(RUNTIME_CACHE, event.request, response);
        } catch {
          return cached;
        }
      }

      try {
        return await fetch(event.request);
      } catch {
        return caches.match(event.request);
      }
    })()
  );
});