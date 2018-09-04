//Create static cache file name
const staticCacheName = 'mws-rest-review-static-v1';

//list of all pages to put into cache
const cacheAssets = [
  '/',
  'index.html',
  'restaurant.html',
  'css/styles.css',
  'js/main.js',
  'js/dbhelper.js',
  'js/restaurant_info.js',
  'data/restaurants.json'
]

//Call install
self.addEventListener('install', (e) => {
  console.log('Service Worker: Installed');
  e.waitUntil(
    caches
    .open(staticCacheName)
    .then(cache => {
      console.log('Service Worker: Caching files');
      return cache.addAll(cacheAssets);
    })
    .then(() => self.skipWaiting())
  );
});

//call activate
self.addEventListener('activate', (e) => {
  console.log('Service Worker: Activated');
  // remove old caches
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if(cache !== staticCacheName) {
            console.log('Service Working: Clearing old Cache');
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

//call fetch event
self.addEventListener('fetch', e => {
  console.log('Service Worker: Fetching');
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request,{ignoreSearch:true})));
});
