// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgpcELomXSDyDx_-hqJEYw3uqo0q7dAP0",
  authDomain: "new-test-project-3e252.firebaseapp.com",
  projectId: "new-test-project-3e252",
  storageBucket: "new-test-project-3e252.appspot.com",
  messagingSenderId: "348355825680",
  appId: "1:348355825680:web:1eec8960c2287c443f7a95",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
