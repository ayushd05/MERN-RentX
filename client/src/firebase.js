// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "rentxweb.firebaseapp.com",
  projectId: "rentxweb",
  storageBucket: "rentxweb.appspot.com",
  messagingSenderId: "619190103229",
  appId: "1:619190103229:web:799fc928be3921059c5bd4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);