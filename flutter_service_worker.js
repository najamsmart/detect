'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "3144e4b96f7fd15227332e23b8537d89",
".git/config": "eb5b52f9d453804bdea962c6daa0484f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "eda344ea06147f8a41dfd9d02edcde5e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "05b8ba27ca01090c2984005b55b72ac6",
".git/logs/refs/heads/master": "85f52567f02adc814eb57c4fe7a4b563",
".git/logs/refs/remotes/origin/master": "d1016722c472b9d9583aac36c8a30c67",
".git/objects/01/7bb5b447a314a9dec9ddf7d8c5b49385a4b5d8": "308643ad79880625704a6ea07d3ed76f",
".git/objects/01/81eea32059eae475056b3394e31eaf0102ce14": "4cb83b0b7c88ee2f4b2abe08923cbf73",
".git/objects/04/1492bd1d194a25da13730bd76a2089ba06c877": "0efaf2c0c90618a107e0402861371777",
".git/objects/08/27321ac520dafe33a237cda7d153ababbb433b": "a3cdbb7cd3d8d80124539893ac314c93",
".git/objects/16/a3bda40f91c40bd03911eeb4fe0f97ae4bf443": "24a6c3d8bbdb1a03fa2cdb1a6a8861af",
".git/objects/20/3f8a97d88b000c3addb0b8c42b33788a00e953": "adf0d820c397f22fe5d86731a1e37fde",
".git/objects/21/52a86c009b9816e4f89e7fe9bd0ee754d18970": "90a289e9d0fc5f9cf6c79bf4e751f697",
".git/objects/29/a7b6d1e1468f672f2657dec5424a168ee7a117": "4e46d82f9e49a48c4fbd7e66af28e28b",
".git/objects/31/292bd369feb65f46b888abbec799c74a211251": "cfacae8e939ab817b2cfb3f99c720f78",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/e3826172ea6185b92a2913755a797709e581c0": "1ef06842d86e55884babae2dab897857",
".git/objects/4f/19276be6dd1e77a67e7f1272d1b66ea674cc7d": "27b19721decdb367cc99d03314a7b1e4",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/5765bd072fb479959646ec9d1f4333406b779a": "f9e4a2a5ce91b92c7cf0f7492e7c3413",
".git/objects/56/20a335abd44b3925fc9fcd77aaedce77abf47d": "831212ac4d1c9135944ac149ed13184a",
".git/objects/5a/711de24575676518e05b96a23f04cb01142aa8": "23ac9f3b6dcbe3d33a3b2bea9498fe07",
".git/objects/5e/f813578376e2cbe953d107d74cbc110e8f3091": "4baed79057bd81826ab211f74514e9e2",
".git/objects/5f/2178450fee1dfe5c6730676871bc5402d38d15": "645f8e6be28ea5e061bb24b33d1004f6",
".git/objects/61/db22429ab8fb2cc75d76c30195e6d9b4bb73f8": "f38fd46e6a85e72fe5c68855ebbe1d0f",
".git/objects/6f/4684e083a018fb2b9b3e3579fa83d88e00357d": "c36a0d2885d9ce067027d762572f1a49",
".git/objects/77/f6e2be2262952059b3dbcb427a5b8cd09c6fed": "299243a9d062b4a9ddda43636f1180d8",
".git/objects/7f/21349a3bfb11719645a55c85d83114f0c424ee": "97eaf4e26529e3b806f67f3ff49170d9",
".git/objects/7f/a80ae0c3344aec8bb86e71a93b5653ddf3fbbe": "aca413aceecd8eb80d89ac311626fa3b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/bc332e2e129d75ec3408078cff9469e6c30c4a": "ff90331e1c92e1cee5d826b663bb83b6",
".git/objects/95/ae4c9802bd909386ee328766eb80a9b5a7624b": "3b890e3c6a7be4464ac30be27b94b932",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/9e/5adc8c22d28ca45494c8ee2a406a3750cf27d5": "aef200c21789f4096d24aba0d6709cd9",
".git/objects/a2/667d45c607977b90a544ef01ca75fed5c53f97": "9965a1a3fb7309b977c828be639b9bf4",
".git/objects/a7/2d56b1cc1851e05390678f6cc6037b6cc1ed11": "ab1ce3d4f84c7bbb24a788d892d1cb5b",
".git/objects/a7/acf82f4dc99ab1d931d106cf5f5987310d665f": "af1d2de6aa0747fd3b7a63a3ed472b13",
".git/objects/a9/725ea887225e4c924c28f89a6b09c407c2f6e5": "28f99d7e05da2efafe5f27774639c494",
".git/objects/a9/9f6066353feb9a7904a5f6c82cdfec0193570d": "6534c11fe50306c928142a8fa8573cac",
".git/objects/ab/b770afbbd632d1e35d49945c5ca5f3208e1564": "4899da8836c388392f3889afb7c9f689",
".git/objects/b2/ef0a3c278a67273a7442ca23865cf3a40fd510": "2f7a0dd13ea7ad754c183e57b59a9c8f",
".git/objects/b3/8cfa33c13886e8b67307bccac346072e8fad16": "a0c787be28ea693289e8d5ec6b7bbba0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/81fa3b5a7937039bce29af29ded3165b171f78": "ff3cd9dbed681f090647786a4f2c291c",
".git/objects/b8/bbfacb7f94d36fba7fd2f04bb3cc5f8aa4ff25": "17cf102f2affc32f6e73ec9032b9218b",
".git/objects/b8/fa23cf9251d5446179e5c64eaa3219b4a2c673": "24e6e984468439e38044182574f06c76",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/775dde9d4edce124c7bfd187f3f2343e6c5909": "219bcd0bac6da002179a964c3f52d34d",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bf/33e669137e5cb68ba3f89565eaedb12f9367e2": "92df69bdebef0977cd0c89a568f7885d",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/c4/27572de306d5e8b4e8ac44b9693ea349fb983c": "fd3bdf306272ca37353ea7ac8252f582",
".git/objects/c6/d29e2101ca3a823157edbf56f210e2ac1911df": "6e08a5141a5d214179d1839b7aded65b",
".git/objects/c7/e08a1cb4255680b42a14f8596d1a1eb265d51c": "89ba73c9d21d96eef9b04f62ce0650a1",
".git/objects/c9/97edae4d4d713f597878660c1b11f5daf96dfa": "5da2daf117b4767a5793d133e8cff2af",
".git/objects/d2/95fd52d0343565abdbc84abec859772aeafc56": "a046665bf06f113d7ccc40ac085ccfa5",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/dd/645ba36360baab04e269bcc968dae0845d6398": "65881b2eabb2938fb9776b72ce75811b",
".git/objects/de/3ab855686227a381fb73928681d17afb5c8ae7": "7b6805791dcde9ba79a0720d72725173",
".git/objects/de/93b111797f0c8a355fc2abc50be27a6d43b377": "5f707ed603f1c7852c7eaf48ff5acc6f",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/606204c9dc83feda079a42ba02857c068bd54e": "e81eb5dbbf39448ecb0eb51e5f8242ca",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/efa4c58f3218a3dcb4456de97987fc6fe8a026": "0a0caeb8199230f8a907cb41ce8465d3",
".git/objects/f0/f8bfbff5d71bf7e5e0a5dd9fd414b8e01b52e4": "638308450a4db2d51cabbd8b475d311e",
".git/objects/f7/d3ba3fe90d2754ba22c61308635a9e0336c141": "a904cd60bf746078c58f8bd0f309323b",
".git/objects/f8/d36d28042f1597fae2494040fb0899f12ede47": "d1dc21045f86721c98b983102f33afcb",
".git/objects/f8/e6045c956fe5c548b0508d2c2cd5eff36f5479": "b0ceb3d04160b57fb7cbfd2945ee3213",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/b4f4a2d68a6faced07a4f225fb98e73c41fbdb": "6545ceb7fb0bb07b5b262282d730f652",
".git/refs/heads/master": "192706cc022666a2da7abb19aa0a8ae7",
".git/refs/remotes/origin/master": "192706cc022666a2da7abb19aa0a8ae7",
"assets/AssetManifest.bin": "efd8f630b77c83d78045afefc7f18145",
"assets/AssetManifest.json": "83808b40bd78b07e87fd9de37394e81e",
"assets/assets/a.jpeg": "1fd3765662b0d88bae4dc4ec0f17483d",
"assets/assets/b.jpeg": "d7a4e702d5a7f3a3ffb521eb396d8ac8",
"assets/assets/c.jpeg": "58308aabc0749d8b6771fc90d43ebbcb",
"assets/assets/d.jpeg": "9a1cb2635c8a9d10b1012f1e707f718b",
"assets/assets/e.jpeg": "a360484e1e4e44a4c2155b3ef807c107",
"assets/assets/f.jpeg": "fbc15b44fa41ead2e2e6c10ff72f8bdb",
"assets/assets/g.jpeg": "d8f22c707d044b8aef5ec4000ce25971",
"assets/assets/h.jpeg": "b59fcdc6d328e6cc6d6cec5e1d253d33",
"assets/assets/pic4.jpeg": "25da96ae70e37a1768a49677884275b7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "85d47c7e7929781065d8dbb751d18e36",
"assets/NOTICES": "ef707bc97afe26db3684ef26c00216e6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"desktop": "e28e5fda874512f7dce78ece8b488b16",
"desktop.pub": "c4c0f57ccc5e68ed5dc9c51bfbf331c9",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "aa686308e90284bfc551c7ccc820c6f1",
"/": "aa686308e90284bfc551c7ccc820c6f1",
"main.dart.js": "a5bf1644364ba3b28a47ca62564cf9da",
"manifest.json": "34d7a93a24a9edfdcbc76b9763f73a11",
"version.json": "11e1a177d57c5da2bc6e3a6acc3010f4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
