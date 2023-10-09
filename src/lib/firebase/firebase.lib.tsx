import _config from "@/config/env/env.config";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

const firebaseConfig = {
    apiKey: _config.FIREBASE_API_KEY,
    authDomain: _config.FIREBASE_AUTH_DOMAIN,
    projectId: _config.FIREBASE_PROJECT_ID,
    storageBucket: _config.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: _config.FIREBASE_MESSAGING_SENDER_ID,
    appId: _config.FIREBASE_APP_ID,
    measurementId: _config.FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
    auth
}