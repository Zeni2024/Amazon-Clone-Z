import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'// for authentication
import {getFirestore} from 'firebase/firestore'
import "firebase/auth";
const apiKey=import.meta.env.VITE_API_KEY
console.log(apiKey);
// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyBUOxnNhubLq6MC2QeF0I68eQ0hBjPYD3U",
  apiKey: apiKey,
  authDomain: "clone-856f9.firebaseapp.com",
  projectId: "clone-856f9",
  storageBucket: "clone-856f9.appspot.com",
  messagingSenderId: "586390807188",
  appId: "1:586390807188:web:7c8dc3825fa897fb020a81",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


// 1.Importing the necessary Firebase modules.
// 2Defining the Firebase configuration.
// 3Initializing the Firebase app.
// 4Exporting instances of the authentication and Firestore services for use elsewhere in your application.


