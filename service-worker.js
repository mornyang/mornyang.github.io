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
    "revision": "13c71d177f87cf29db73fe0a98d42802"
  },
  {
    "url": "about/index.html",
    "revision": "cfdec1464d7d0b533d3e7d7f4a4d647e"
  },
  {
    "url": "assets/css/0.styles.63c7b923.css",
    "revision": "9164dff109f38a85bbc9eaa67bce1497"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.3ac43636.js",
    "revision": "6204369811a20bc0ad152cdea41e0496"
  },
  {
    "url": "assets/js/3.359509e3.js",
    "revision": "3f96f7ee834e2fc2109e34ba8d4051e7"
  },
  {
    "url": "assets/js/4.04c4d7cb.js",
    "revision": "5a1fe1e411fc845fced856a43ad17af0"
  },
  {
    "url": "assets/js/5.b61e5833.js",
    "revision": "7b2cdf61506a9e1e3b6ecd53dec68d1c"
  },
  {
    "url": "assets/js/6.077363da.js",
    "revision": "7d4a31e8a706e519b9da8924d393858e"
  },
  {
    "url": "assets/js/7.d6226902.js",
    "revision": "5f749548c91e5e2f08d65d5bb91bc3d3"
  },
  {
    "url": "assets/js/8.41e79da7.js",
    "revision": "75a864670292124cfb56ca862ed123b8"
  },
  {
    "url": "assets/js/app.534c7216.js",
    "revision": "5764ec1888ab1695257588def176ed93"
  },
  {
    "url": "blog/hello.html",
    "revision": "c8862753edc9c05aefb6a3e2cc76ee4d"
  },
  {
    "url": "blog/test.html",
    "revision": "8e60e0f1519cc9d30e8e11bbb573f8cc"
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
    "revision": "0fd164995b6d0fc0876c9c8ffb19aedd"
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
