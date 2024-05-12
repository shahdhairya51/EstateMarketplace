// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-5ece7.firebaseapp.com",
  projectId: "mern-estate-5ece7",
  storageBucket: "mern-estate-5ece7.appspot.com",
  messagingSenderId: "717746038692",
  appId: "1:717746038692:web:500b0997332e7a579f4331",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
