import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCyC7i4Pxi8qkNZY4lqeDDOU3G_CwB5Jr0",
    authDomain: "withbloom-app.firebaseapp.com",
    projectId: "withbloom-app",
    storageBucket: "withbloom-app.appspot.com",
    messagingSenderId: "512746527582",
    appId: "1:512746527582:web:6952ad6dada02f1f498dcf",
    measurementId: "G-2P4TX40KN4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    auth,
}