import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDTu3tz9_wIXj3uEmCpNMW18At3gV5voso",
  authDomain: "know-your-course.firebaseapp.com",
  projectId: "know-your-course",
  storageBucket: "know-your-course.appspot.com",
  messagingSenderId: "1090350771068",
  appId: "1:1090350771068:web:f5ce5d9b056397130492f9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
