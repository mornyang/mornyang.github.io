/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "273f1fa27c7494d8ce00b6d1b052303f"
  },
  {
    "url": "about/index.html",
    "revision": "5b3c32554bc66020afc5fbe7e566c284"
  },
  {
    "url": "assets/css/0.styles.559343f1.css",
    "revision": "aab2df64dcc02cbddac2cac826c21dc8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.a68dd455.js",
    "revision": "6204369811a20bc0ad152cdea41e0496"
  },
  {
    "url": "assets/js/3.2820c1a6.js",
    "revision": "3f96f7ee834e2fc2109e34ba8d4051e7"
  },
  {
    "url": "assets/js/4.5db0b1a2.js",
    "revision": "5a1fe1e411fc845fced856a43ad17af0"
  },
  {
    "url": "assets/js/5.4e2d8b59.js",
    "revision": "7b2cdf61506a9e1e3b6ecd53dec68d1c"
  },
  {
    "url": "assets/js/6.82bb8614.js",
    "revision": "7d4a31e8a706e519b9da8924d393858e"
  },
  {
    "url": "assets/js/7.8b0e4873.js",
    "revision": "5f749548c91e5e2f08d65d5bb91bc3d3"
  },
  {
    "url": "assets/js/8.41e79da7.js",
    "revision": "75a864670292124cfb56ca862ed123b8"
  },
  {
    "url": "assets/js/app.cfd9f6ac.js",
    "revision": "6a0a0e15972d5436dd0b1f838b22bad2"
  },
  {
    "url": "blog/hello.html",
    "revision": "a88d043a8ae9f9ea425da39a7bbc611f"
  },
  {
    "url": "blog/test.html",
    "revision": "3bf2620ad474907fcf6e28319c3d773a"
  },
  {
    "url": "img/avatar.jpg",
    "revision": "731c879d520d64819b19617737356248"
  },
  {
    "url": "img/brand.jpg",
    "revision": "6285e20c35c902b4514f80134ecec543"
  },
  {
    "url": "img/logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "index.html",
    "revision": "d6e6332957b70d767f0de8000f53689c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
