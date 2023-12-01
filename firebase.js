// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQvJryScHqSaXd91YGEWWAiiAJVeGwBpg",
  authDomain: "mentor-sphere.firebaseapp.com",
  projectId: "mentor-sphere",
  storageBucket: "mentor-sphere.appspot.com",
  messagingSenderId: "761504573858",
  appId: "1:761504573858:web:2f16069887b0b3fa2ceafb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {app, auth, db};