import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAUOSl6G2kv_i3M9O58CEOSE9zcI5-c0dQ",
    authDomain: "crud-d37c5.firebaseapp.com",
    databaseURL: "https://crud-d37c5.firebaseio.com",
    projectId: "crud-d37c5",
    storageBucket: "crud-d37c5.appspot.com",
    messagingSenderId: "616161271271",
    appId: "1:616161271271:web:a7fd735db8c253a0667142",
    measurementId: "G-L2ZD43VZE6"
  };

  // Initialize Firebase
export default firebase.initializeApp(firebaseConfig);