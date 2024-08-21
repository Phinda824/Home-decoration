import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBu1OIpWM6iMdKbhi5Tew5riCkfUj1bnb0",
  authDomain: "home-decoration-2c85b.firebaseapp.com",
  projectId: "home-decoration-2c85b",
  storageBucket: "home-decoration-2c85b.appspot.com",
  messagingSenderId: "968633273941",
  appId: "1:968633273941:web:5cb3ed54f2db1503ec8edc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
