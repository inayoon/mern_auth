// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-a-6dee4.firebaseapp.com",
  projectId: "mern-a-6dee4",
  storageBucket: "mern-a-6dee4.appspot.com",
  messagingSenderId: "481994492029",
  appId: "1:481994492029:web:5f7054e0504a2a11d48914",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
