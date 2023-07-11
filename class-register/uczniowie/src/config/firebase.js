// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASMbvSSC_Ohf-PJhOReQtkcMhaA5VopIQ",
  authDomain: "homework-06-9ef36.firebaseapp.com",
  projectId: "homework-06-9ef36",
  storageBucket: "homework-06-9ef36.appspot.com",
  messagingSenderId: "302813650916",
  appId: "1:302813650916:web:602b978b189f790a94f1f1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
