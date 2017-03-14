importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-messaging.js');

var config = {
     apiKey: "AIzaSyDom8vzC-OqNhUgjUH7Pvm2lvElvhaN_NA",
    authDomain: "project0-6ce96.firebaseapp.com",
    databaseURL: "https://project0-6ce96.firebaseio.com",
    storageBucket: "project0-6ce96.appspot.com",
    messagingSenderId: "668216336467"
};
firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
        body: 'Background Message body.',
        icon: '/firebase-logo.png'
    };

  return self.registration.showNotification(notificationTitle,notificationOptions);
});
