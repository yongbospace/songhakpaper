'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "25642d35c017de8c0b5d06516266a135",
"index.html": "66648238f41bc1f7b674b7a3ccc03a8f",
"/": "66648238f41bc1f7b674b7a3ccc03a8f",
"main.dart.js": "47e4974393b3af90f6b0289fd78cf4f4",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1765b53cc1500b6d5bbac2878b046a39",
".git/config": "a42a8316c63da99f67074a5cc1715a60",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/9b/2fb5f072366106a92074c650c55f611a66e637": "761c8dd5cd18da7c43ed5f7e5a010e0c",
".git/objects/9e/488d0bee362cbd4f654b836a836e68f29e4692": "e2008bb6689e989833c9a7747f802a42",
".git/objects/3d/c778ffd0e8e8a97bf15f6213fb59ef032d817c": "3b1c52c7a982f021f955809958208507",
".git/objects/94/cd83fca48114d2e2598b27323e777358594732": "84be6c23e518e1262a1501674ec00183",
".git/objects/0e/80387cadc839231bd4dbcffd2651e5ae7a9c6e": "9555d65913f87665cc0dd72e7299bfe0",
".git/objects/02/a65132c4b97f75f5335c83d6cece067d8c144a": "350f4d1e85fe1ac0f29939b813d20b9a",
".git/objects/df/c7e2fc59dfbfaf577dc2777f6bb910a6d04d1f": "1a3069e2a129bcd83854f2d53efd65b2",
".git/objects/a2/f782d8b2ee9adb7c2257bca15a4209a81418d8": "5aaa9b9000e26d7063e9d848d649fa08",
".git/objects/d1/a44e81d7bde8ea4467cea5f4099e477b1e3e41": "08eae294703bf4f3a4257f5e1c2077fd",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/94d809067a45c6a617526b8a88abbfd3d6b0df": "531c1b4e43dc66e6ec019daaf7e7cb83",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/8f6c4694c809002b3e10e8ac28709ea62de3bd": "aa6b0a0b1e94278a711d31afd939eac8",
".git/objects/fc/d42b4d4b855e2f80e84614823d3d4c25428922": "8f1f5b5fc8bd35b70bddaf635e0283ee",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/18/8af0d6e16d4a414362ec2927bcaf842d78e06d": "5245682971b3423835c7ba3d39af79f7",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/7b/bed1f446b6b35b2884ed4ff9e8ba87b0a4e3b3": "052e9d1391ac37effc01d67b768738fb",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/a88596df2d54993d6c8d4423952707006b4354": "de6e13c473ab59b52278d3db2c243014",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/7a3cc7172a1d95debfdff0b169aa379c9045ff": "22d5536ee2014444395133b2b450e987",
".git/objects/31/84906f6c45d960fe8f36666ea2a6744f20a8af": "ea95b4516d6dd58f46c96d5c956f9668",
".git/objects/54/81b014aafb7ab658b3856eda2bfc519259957e": "096a7f8b131de28140f53b6d7a4738e0",
".git/objects/6d/1d92301929d40a506fae2650bcfd42b1ebad5d": "32b76c0b60e641bcf6ae34470b161572",
".git/objects/06/c2be5a859fda45fcbe221797b3e0629b612cb5": "1dbc9fb36469b004c203c9eb88848303",
".git/objects/97/f75c146d5ff42c6089d58a13c676a5cd02d9ba": "7b827226ee2a01116045cfb9e166a038",
".git/objects/d3/6c1d191886ce8c09fee893236ad80dfeb3d7c9": "e9d5fec44a37d1a4ccfc7325061063f0",
".git/objects/d2/d3acebbe955b85f42a0a9861d32d53be3a88b2": "f4bcf78e5854f902226df4ef55d90cb1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/ddc83415f34cb2ca66704126323cca45d43981": "b656859c40b233f704bed382b7882445",
".git/objects/cc/83be547dda8b0d507cf8eb5fa36ed6e39bc29f": "b5b43f60b839ee8da6c9582a4f22900d",
".git/objects/f7/2b20141f72f8a5388aa848729cbe3f7854f7b6": "e23e0e13ac43999a1dd81f3ab13aa1eb",
".git/objects/c5/dfdb7679899c895750b30e858988c4e194970f": "3fb85d43ae8865a371ac8485e2715610",
".git/objects/c2/f9f611a7b6beafa9b88662bb4ab2b39fd5b014": "59ce373a7cc0f618cb45ddd05d0a0558",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/79/993f52497c6a5920d16a5ae23023196ae5a9b3": "0e1b3870c29f92af797de84dfdfb74c1",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/1e/48ccef1ae97974f022a07aa52f2c04d0524815": "68450fcf07340b222875eea0e0acfb66",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/47/4d74dc920ac16153e4744f56b7bf239f9f2166": "dda39a9576bf5d0048ce33386459fae4",
".git/objects/14/6e1810ea1f6f4b1b7810a46c7e49f7739de44f": "83827676ad5b655fc5998c13a9eade5d",
".git/objects/14/12b769831c8d91e92d65e06909381620ffd6ae": "a869e80580480331f0f214a46ee0756c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4676fa7ede956a91b0f0ce5beba3aedf",
".git/logs/refs/heads/master": "4676fa7ede956a91b0f0ce5beba3aedf",
".git/logs/refs/remotes/origin/master": "e5a91bc959d53df2d07dfddf1d0889bf",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "04458139e63fbb724fb7da0db24631d6",
".git/refs/remotes/origin/master": "04458139e63fbb724fb7da0db24631d6",
".git/index": "a9c3b44c32ce96d549d957d6c7cb80c6",
".git/COMMIT_EDITMSG": "377ad60d660aa7d316534a8bd57399ee",
"assets/images/grocery_bag.jpeg": "f90201dc0c843890e7270713d37f2c1c",
"assets/images/business.jpeg": "65463ef0ceb927a5ef93e69d3cb6129f",
"assets/images/world.jpeg": "38746410cef114d4928eb33d520a8c0d",
"assets/images/papersack.jpeg": "a07fedda297db693948ce7c5920d6116",
"assets/images/carton_box.jpg": "5d9e5bee0a7baf04d4141fb76c8071ad",
"assets/images/painting.jpeg": "eefe96567b36984e2b5ad9fa58e75a5b",
"assets/images/logo.svg": "a9ad6c763839e9fc3b1652604a64e25c",
"assets/AssetManifest.json": "4beeadf0ea36cd3a3c580a5bf7e0bb19",
"assets/NOTICES": "0d4cedffa03ebc04d089259641a93e79",
"assets/FontManifest.json": "ecb140bf708f31c9b7854001736251e3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/Montserrat-Medium.ttf": "b3ba703c591edd4aad57f8f4561a287b",
"assets/fonts/Montserrat-Light.ttf": "e65ae7ed560da1a63db603bd8584cfdb",
"assets/fonts/Montserrat-Bold.ttf": "1f023b349af1d79a72740f4cc881a310",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
