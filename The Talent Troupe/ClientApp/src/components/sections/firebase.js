// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyDWz6Wkv-OMFcNKsDiDgbq1FMfrKPLR0T8",
    authDomain: "thetalenttroupe-d0f5f.firebaseapp.com",
    databaseURL: "https://thetalenttroupe-d0f5f-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "thetalenttroupe-d0f5f",
    storageBucket: "thetalenttroupe-d0f5f.appspot.com",
    messagingSenderId: "1068966840597",
    appId: "1:1068966840597:web:681c284ef8ca9b321b811c",
    measurementId: "G-RZEZ26GR8K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize Firebase Authentication
export const auth =getAuth(app);
export default app;