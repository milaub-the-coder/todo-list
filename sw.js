// A simple "Passive" Service Worker to allow Android Installation
self.addEventListener("install", (e) => {
  self.skipWaiting(); // Activate immediately
});

self.addEventListener("activate", (e) => {
  return self.clients.claim(); // Take control immediately
});

// We deliberately DO NOT listen for "fetch" events.
// This allows the app to talk to Firebase directly without interference.
