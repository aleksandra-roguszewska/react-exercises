// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4EiuECqkXS8uETQFkdRLnN3rYDOhO9nE",
  authDomain: "projekt-dziennik.firebaseapp.com",
  projectId: "projekt-dziennik",
  storageBucket: "projekt-dziennik.appspot.com",
  messagingSenderId: "1079497909435",
  appId: "1:1079497909435:web:39b5f9674b5707ef77759e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
