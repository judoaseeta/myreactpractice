const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
export const fb = firebase.initializeApp({
    apiKey: "AIzaSyBObHwb1stjsTUFysZgm21hMMvtHAOqb04",
    authDomain: "moviefetch2.firebaseapp.com",
    databaseURL: "https://moviefetch2.firebaseio.com",
    projectId: "moviefetch2",
    storageBucket: "moviefetch2.appspot.com",
    messagingSenderId: "245292276858"
  });
export const fs = firebase.firestore();