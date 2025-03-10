import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBqbhbAgseBpXm9lA_6fIKA8qjczClIBtk",
  authDomain: "sindo-ip.firebaseapp.com",
  databaseURL: "https://sindo-ip-default-rtdb.firebaseio.com",
  projectId: "sindo-ip",
  storageBucket: "sindo-ip.firebasestorage.app",
  messagingSenderId: "254146823351",
  appId: "1:254146823351:web:6dc66a675cc09b80ab7932",
  measurementId: "G-46K54MWFNM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db , storage};
