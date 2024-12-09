// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAUqbzCz4k3Wqwoo8Dz-ozUOYKGDB5P0LY",
    authDomain: "wedding-website-db3b4.firebaseapp.com",
    projectId: "wedding-website-db3b4",
    storageBucket: "wedding-website-db3b4.firebasestorage.app",
    messagingSenderId: "56561074210",
    appId: "1:56561074210:web:23aab956dae8607d9e0a7b",
    measurementId: "G-RVCW6KC3DB"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Storage
const storage = getStorage(app);
const db = getFirestore(app);

// Initialize Firebase Auth
const auth = getAuth(app); 

export { db, storage };

