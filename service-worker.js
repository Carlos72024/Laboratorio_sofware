self.addEventListener('install', function(event) {
    // Forzar la actualización inmediata del Service Worker
    self.skipWaiting();
});

self.addEventListener('activate', function(event) {
    // Controlar todas las páginas inmediatamente
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.open('dynamic-cache').then(function(cache) {
            return cache.match(event.request).then(function(response) {
                if (response) {
                    return response;
                }
                return fetch(event.request).then(function(response) {
                    // Actualizar el caché dinámico con la nueva respuesta
                    cache.put(event.request, response.clone());
                    return response;
                });
            });
        })
    );
});
