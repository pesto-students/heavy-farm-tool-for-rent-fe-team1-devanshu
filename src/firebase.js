// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// import firebase from 'firebase/compat/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkTWTxlqXf9JOq4crEY-URmDW0ME_-qkA",
  authDomain: "heftr-14dea.firebaseapp.com",
  projectId: "heftr-14dea",
  storageBucket: "heftr-14dea.appspot.com",
  messagingSenderId: "527542522695",
  appId: "1:527542522695:web:44a3d98296000f2dd0b262",
  measurementId: "G-805ZTXMBNN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);

export default app;