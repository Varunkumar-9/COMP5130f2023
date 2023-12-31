self.addEventListener('install', event => {
    console.log('Service worker installing...');
    // Add a call to skipWaiting here
});

self.addEventListener('activate', event => {
    console.log('Service worker activating...');
});

// Basic fetch event handler
self.addEventListener('fetch', event => {
    console.log('Fetching:', event.request.url);
});
