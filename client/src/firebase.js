// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-ca842.firebaseapp.com",
  projectId: "mern-blog-ca842",
  storageBucket: "mern-blog-ca842.appspot.com",
  messagingSenderId: "637139880906",
  appId: "1:637139880906:web:57281796fc3155ed525d33"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);