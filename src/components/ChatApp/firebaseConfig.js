// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYm9QSuRyo5dUZDy4oCMmFvn_Fp7p5aYk",
  authDomain: "xuanndchatapp.firebaseapp.com",
  projectId: "xuanndchatapp",
  storageBucket: "xuanndchatapp.appspot.com",
  messagingSenderId: "482377528125",
  appId: "1:482377528125:web:e1ffd1ac1a3ba74725cb54",
  measurementId: "G-19P8THRDT8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {db, auth};