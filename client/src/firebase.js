// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-mern-470ab.firebaseapp.com",
  projectId: "real-estate-mern-470ab",
  storageBucket: "real-estate-mern-470ab.appspot.com",
  messagingSenderId: "475549390199",
  appId: "1:475549390199:web:7bd324eff85da45fdf7d72"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);