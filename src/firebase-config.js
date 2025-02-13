// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmJgieFWV60B64mHjxpPulXqYYfz533iE",
  authDomain: "viila-elegant-oasis.firebaseapp.com",
  projectId: "viila-elegant-oasis",
  storageBucket: "viila-elegant-oasis.firebasestorage.app",
  messagingSenderId: "276621680417",
  appId: "1:276621680417:web:7388b8bb4fd244c6da6860"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
