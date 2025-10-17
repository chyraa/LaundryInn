// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCM2Sy7_uo63x1XAiacpBJj_PxsgZuZafA",
  authDomain: "laundryinn-62708.firebaseapp.com",
  projectId: "laundryinn-62708",
  storageBucket: "laundryinn-62708.firebasestorage.app",
  messagingSenderId: "539033913119",
  appId: "1:539033913119:web:d04e3cac972e407b25922a",
  measurementId: "G-7177ZT5XR2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);