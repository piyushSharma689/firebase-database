import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAq0gkdWqbvFws-VDF6ubl2ruBKVL9u9YE",
  authDomain: "fire-database-app-fdf74.firebaseapp.com",
  projectId: "fire-database-app-fdf74",
  storageBucket: "fire-database-app-fdf74.appspot.com",
  messagingSenderId: "244436958130",
  appId: "1:244436958130:web:931833ead91a0704e802ab",
  databaseURL : "https://fire-database-app-fdf74-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth= getAuth(app);
export const db = getFirestore(app);



