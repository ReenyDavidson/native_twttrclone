// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABLYOWWi0JL2tZrINLBy4lU5NtoR_YY5g",
  authDomain: "brox-b3225.firebaseapp.com",
  projectId: "brox-b3225",
  storageBucket: "brox-b3225.appspot.com",
  messagingSenderId: "383173694877",
  appId: "1:383173694877:web:e53cda97365e53c3528b74",
  measurementId: "G-FVKTS20BX7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
