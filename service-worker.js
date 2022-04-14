importScripts("/poker/precache-manifest.35683f21dddab04975dedf8fbf2ac6a8.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.setCacheNameDetails({prefix: 'planning-poker'})
self.__precacheManifest = [].concat(self.__precacheManifest || [])
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

self.addEventListener('install', function(e) {
	self.skipWaiting()
})
