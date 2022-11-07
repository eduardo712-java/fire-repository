// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKNicJ6A53D5FG9w-JpOREL2Z36xoCs44",
  authDomain: "projeto-teste-e7566.firebaseapp.com",
  projectId: "projeto-teste-e7566",
  storageBucket: "projeto-teste-e7566.appspot.com",
  messagingSenderId: "138373902594",
  appId: "1:138373902594:web:5a6c600ff187989d76d21b",
  measurementId: "G-WWCX75EDS5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

console.log(app)