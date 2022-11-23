// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcgBzAzoNvGtfr4g-6ITHEeWrPKxBJpp8",
  authDomain: "next-twitter-md.firebaseapp.com",
  databaseURL: "https://next-twitter-md-default-rtdb.firebaseio.com",
  projectId: "next-twitter-md",
  storageBucket: "next-twitter-md.appspot.com",
  messagingSenderId: "234823049557",
  appId: "1:234823049557:web:eea5013d163d7bf6e10fdc",
  measurementId: "G-Y2XHR22R87"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export { app, db, storage };
