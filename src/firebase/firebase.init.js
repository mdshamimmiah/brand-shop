
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBF5xRbL96YbBSMNayHYxSJpNPKlujjQtI",
  authDomain: "brandshop-698ea.firebaseapp.com",
  projectId: "brandshop-698ea",
  storageBucket: "brandshop-698ea.appspot.com",
  messagingSenderId: "696792221642",
  appId: "1:696792221642:web:f77cc0ea591dc9a03d7133"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;