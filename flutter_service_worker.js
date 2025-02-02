'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "f9cfe02ef1a4af9074c730b51fa1c54c",
"assets/assets/images/ab_crunches.webp": "33a9a6b057eff61fd52153dc02e7eb20",
"assets/assets/images/ab_crunchs.jpg": "e278e1d8c36ad9ab78a6b83530f36832",
"assets/assets/images/adho_mukha_shvanasana.jpg": "da8b345be54a99d56392eb1d93c1529b",
"assets/assets/images/adho_mukha_svana_asana.jpg": "fba1962447ad984d6cce985a91054f4e",
"assets/assets/images/anjaney_asana.jpg": "a6d4388c3e0574af08adc6b92572da70",
"assets/assets/images/ardha_matsyendra_asana.webp": "4710c2a9dea8fe4e74941e810215caf6",
"assets/assets/images/arm_raise_situps.webp": "02393c302607da76f909a89cc2fefecf",
"assets/assets/images/ashtanga_namaskara.jpg": "9ec0c6a5f96febd2640765f41cd01990",
"assets/assets/images/ashtanga_namaskara1.jpg": "b6427c548e4c84c4e568da3653909f85",
"assets/assets/images/ashwa_sanchalana_asana.jpg": "a2b8fd83186b29e90d70ed3f8b477564",
"assets/assets/images/bear_hug.jpg": "be6148f7e28f8d3aeec903a35299db1e",
"assets/assets/images/bhujanga_asana.jpg": "92ea6db50b55b3519a5cc858305582d1",
"assets/assets/images/bodyweight_squat.jpg": "75485436d0b7fce8352e2c77517788db",
"assets/assets/images/burpees.webp": "3168328f669956a0426c80d71dfef63b",
"assets/assets/images/butterfly_asana.jpg": "e9fb358285dbd19174cef077fa092e2e",
"assets/assets/images/chair_dips.webp": "6cc7f1180d3c163e63701d7129bc438a",
"assets/assets/images/chakra_asana.png": "420a1e885d9f2aee91df6664c838fb25",
"assets/assets/images/child_pose.png": "da1c9c4790fe47448bd0a01c9c48efe8",
"assets/assets/images/danda_asana.jpg": "36b77191ac9aba078b729139b7637d01",
"assets/assets/images/exercise_abcrunch.xml": "e571f6d04cb01855af6194f64502c296",
"assets/assets/images/exercise_highknees.xml": "dfd586abc0d4c147baeb7627f85a8e77",
"assets/assets/images/exercise_jumpingjacks.xml": "56c61477b9a1acb925026787da989eb3",
"assets/assets/images/exercise_lunge.xml": "80e66ee8852355d460280ccff846d20e",
"assets/assets/images/exercise_plank.xml": "31a3962cee2d14f74b037d6ea25a34e7",
"assets/assets/images/exercise_pushup.xml": "1dd58237a956f3496e60741fb6848f74",
"assets/assets/images/exercise_pushuprotation.xml": "e3955fc09b3bcb7aff7f75f869032839",
"assets/assets/images/exercise_sideplank.xml": "67a1addc237eaeb428e0168f209174c6",
"assets/assets/images/exercise_squat.xml": "0ccc33972b984a4a1ba806d39fd6887b",
"assets/assets/images/exercise_stepup.xml": "639b45b9282e7a35870062c33198eebd",
"assets/assets/images/exercise_tricepsdip.xml": "ee700c5ae95f6dbe6f9c1a5be46def3a",
"assets/assets/images/exercise_wallsit.xml": "caec69c71316cca4fdfad1e7b02de830",
"assets/assets/images/garuda_asana.jpg": "e154cc541e8ac7fcb277463a13d8d728",
"assets/assets/images/hala_asana.jpg": "93ecddf54686379bf2d2f6e7b87787da",
"assets/assets/images/hastapada_asana.jpg": "f1f02c1a08916df8e48a1fd80f58e8f0",
"assets/assets/images/hastauttana_asana.jpg": "f1d9e16cbf23366861ff7ec60942f0c9",
"assets/assets/images/hasta_uttana_asana.jpg": "eae398c53e434a59ee939f1116386b5d",
"assets/assets/images/high_jumps.webp": "d4646236a083694be1460197da57ffe5",
"assets/assets/images/high_kicks.webp": "ca6cd93a95c71cf2b54c835209a620f7",
"assets/assets/images/high_knees.gif": "1ca6ff674a9f0ddea8b467e908e70fe8",
"assets/assets/images/hip_thrust.jpg": "3b5f4dc7dd0ae825d397a91dff2315fc",
"assets/assets/images/incline_push_up.jpg": "04dd6931f078932f25b1756a4110f14a",
"assets/assets/images/jumping_jacks.gif": "73aded119d1356b1206d0a34a5a79b67",
"assets/assets/images/kneeling_lat_stretch.jpg": "f87380308d30492d30bc6b2b53b1c6a4",
"assets/assets/images/knee_to_chest.gif": "8bac5f51ed4c7078d05259f078c94728",
"assets/assets/images/legs_up_the_wall_pose.png": "4c90cf02cf67f855e753ee013c0bfd94",
"assets/assets/images/lower_back_twist.jpg": "036fa09a2501d6b852aa0e401b210645",
"assets/assets/images/low_lunge.png": "6bba07689b72b2d99e81ef31301c708d",
"assets/assets/images/naga_asana.jpg": "6ad2eaa672a28e0a123b0440d48a8eca",
"assets/assets/images/neck_stretch.jpg": "cf35d9278f2782109afb523a1051341b",
"assets/assets/images/pascimottana_asana.png": "e6cc1f655cecd1d1a730b0027849e2aa",
"assets/assets/images/pranama_asana.jpg": "afac3c2bed04078c2f6860b5bb523fb4",
"assets/assets/images/pranam_asana.jpg": "2ffafd1ffa1177b7806ab7ee6e756da4",
"assets/assets/images/push_ups.webp": "fa63c2ec0ff2fd9424368e929473a86a",
"assets/assets/images/reclining_bound_angle_pose.jpg": "7b0b24c59532112f0fb676773d439538",
"assets/assets/images/rotate_head.jpg": "8eb7ab3ef0d56debaeb8994772357528",
"assets/assets/images/rotate_shoulders.jpg": "d493e43a9aca68d6a10b1c43dfc7c897",
"assets/assets/images/rotate_wrist.jpg": "d5a668198180c605dca4eceef1135515",
"assets/assets/images/seated_forward_bend.jpg": "f43b2933c39c30b99b7c25e295340571",
"assets/assets/images/sleep_time_stretches.jpg": "6e3eff3f81a68781988ae14e0787e1d6",
"assets/assets/images/thigh_strecth.gif": "aa8bd83d1c98fb1004eae6090fb5026a",
"assets/assets/images/urdhva_mukha_shvanasana.jpg": "93c8aaca4380e7e48417d545559a82b5",
"assets/assets/images/uttana_asana.jpg": "32b9f463c6a9e10402a3ed94b820f4fa",
"assets/assets/images/walking_lunges.png": "02509bce45e6ba7c9fbbdf5b1f5b0226",
"assets/assets/workouts.json": "9df55785872a67a94b7fbc855fb8caa1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "67fe4527cd87679a08dbe5690d11fdc6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "12befd548199ae90c02513c9c8c507a0",
"/": "12befd548199ae90c02513c9c8c507a0",
"main.dart.js": "7aa36ebef6bcb5b7e363d1fc415802ad",
"manifest.json": "5d5f4635ec993d8cf9c2ab30a7daa959",
"version.json": "7194fe0c8f13037a5afc46a6e8eb8b14"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
