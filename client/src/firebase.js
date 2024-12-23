// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-website-8e8df.firebaseapp.com",
  projectId: "mern-blog-website-8e8df",
  storageBucket: "mern-blog-website-8e8df.firebasestorage.app",
  messagingSenderId: "825400068769",
  appId: "1:825400068769:web:e17019b7ed16482dbbfee0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
