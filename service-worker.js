importScripts("/poker/precache-manifest.3b654e2ecd4a7b71e8bc8957ac10a50d.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.setCacheNameDetails({prefix: 'planning-poker'})
self.__precacheManifest = [].concat(self.__precacheManifest || [])
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

self.addEventListener('install', function(e) {
	self.skipWaiting()
})
