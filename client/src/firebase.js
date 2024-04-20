// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-rentx.firebaseapp.com",
  projectId: "mern-rentx",
  storageBucket: "mern-rentx.appspot.com",
  messagingSenderId: "995128544269",
  appId: "1:995128544269:web:407e4ceb320b6627529944"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);