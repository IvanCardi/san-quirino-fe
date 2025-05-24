// public/firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/10.1.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.1.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBlbF2VIlZBH3jqERDOwWUGSGFyzEXQ6uc",
  authDomain: "andromeda-d3f92.firebaseapp.com",
  projectId: "andromeda-d3f92",
  storageBucket: "andromeda-d3f92.firebasestorage.app",
  messagingSenderId: "670825384461",
  appId: "1:670825384461:web:88fd8b9c7f016abd33e344",
  measurementId: "G-TQ57M3RPNP"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  self.registration.showNotification(payload.data.title, {
    body: payload.data.body,
    icon: '/web-app-manifest-192x192.png',
  });
});
