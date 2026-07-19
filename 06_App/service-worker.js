const CACHE_NAME = 'regift-ai-studio-v7-5-0-spatial-navigation';
const CORE_FILES = [
    './',
    './index.html',
    './css/main.css',
    './css/tooltip.css',
    './css/office-v2.css',
    './js/main.js',
    './js/tooltip.js',
    './js/office-v2.js',
    './data/office.json',
    './manifest.webmanifest',
    './assets/office-isometric-v3.png',
    './assets/agents/design-agent.png',
    './assets/agents/copywriter-agent.png',
    './assets/agents/marketing-agent.png',
    './assets/agents/photography-agent.png',
    './assets/agents/shipping-agent.png',
    './assets/agents/chat-avatars/design-agent-avatar.png',
    './assets/agents/chat-avatars/copywriter-agent-avatar.png',
    './assets/agents/chat-avatars/marketing-agent-avatar.png',
    './assets/agents/chat-avatars/photography-agent-avatar.png',
    './assets/agents/chat-avatars/shipping-agent-avatar.png',
    './assets/agents/design-agent-sprite.png',
    './assets/agents/copywriter-agent-sprite.png',
    './assets/agents/marketing-agent-sprite.png',
    './assets/agents/photography-agent-sprite.png',
    './assets/agents/shipping-agent-sprite.png',
    './assets/agents/sprite-atlas.json',
    './assets/regift-app-icon.svg',
    './config/app-config.json'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => Promise.all(
            CORE_FILES.map((url) => fetch(url)
                .then((response) => response.ok ? cache.put(url, response) : null)
                .catch(() => null))
        ))
    );
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
            .then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET' || new URL(event.request.url).origin !== self.location.origin) return;
    event.respondWith(
        caches.match(event.request).then((cached) => {
            const network = fetch(event.request)
                .then((response) => {
                    if (response.ok) {
                        const copy = response.clone();
                        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
                    }
                    return response;
                })
                .catch(() => cached || caches.match('./index.html'));
            return cached || network;
        })
    );
});

self.addEventListener('message', (event) => {
    if (event.data === 'SKIP_WAITING') self.skipWaiting();
});
