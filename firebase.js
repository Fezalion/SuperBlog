// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-408108.firebaseapp.com",
  projectId: "blog-408108",
  storageBucket: "blog-408108.appspot.com",
  messagingSenderId: "487546111408",
  appId: "1:487546111408:web:dcdeb04a7932f2efb18275",
  measurementId: "G-X3V3WR2XT1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);