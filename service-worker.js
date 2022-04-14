importScripts("/poker/precache-manifest.633f429eb8bf39927fc66abfbb68cb0d.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.setCacheNameDetails({prefix: 'planning-poker'})
self.__precacheManifest = [].concat(self.__precacheManifest || [])
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

self.addEventListener('install', function(e) {
	self.skipWaiting()
})
