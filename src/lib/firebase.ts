
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4vE7h0MxgCE_Ely5qYHGwm9Qj-9XSzIw",
  authDomain: "after-school-program-selection.firebaseapp.com",
  projectId: "after-school-program-selection",
  storageBucket: "after-school-program-selection.appspot.com",
  messagingSenderId: "762174311891",
  appId: "1:762174311891:web:db1def01c4fae93aa7eeb1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
