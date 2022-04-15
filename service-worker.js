importScripts("/poker/precache-manifest.cb03e367148c949c86f1a4be2c1aa5d4.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.setCacheNameDetails({prefix: 'planning-poker'})
self.__precacheManifest = [].concat(self.__precacheManifest || [])
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

self.addEventListener('install', function(e) {
	self.skipWaiting()
})
