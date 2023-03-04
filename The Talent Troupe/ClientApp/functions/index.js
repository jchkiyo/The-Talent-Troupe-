const functions = require("firebase-functions");
const admin = require('firebase-admin');
const app= require ('express')();

admin.initializeApp();

const config = {
  apiKey: "AIzaSyDWz6Wkv-OMFcNKsDiDgbq1FMfrKPLR0T8",
  authDomain: "thetalenttroupe-d0f5f.firebaseapp.com",
  databaseURL: "https://thetalenttroupe-d0f5f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "thetalenttroupe-d0f5f",
  storageBucket: "thetalenttroupe-d0f5f.appspot.com",
  messagingSenderId: "1068966840597",
  appId: "1:1068966840597:web:681c284ef8ca9b321b811c",
  measurementId: "G-RZEZ26GR8K"
};
const firebase = require('firebase');

firebase.initializeApp(config);
const db = admin.firestore();

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//

