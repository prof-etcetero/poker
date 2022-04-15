importScripts("/poker/precache-manifest.7f460ca87a8d513577b38b6d91bd9145.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.setCacheNameDetails({prefix: 'planning-poker'})
self.__precacheManifest = [].concat(self.__precacheManifest || [])
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

self.addEventListener('install', function(e) {
	self.skipWaiting()
})
