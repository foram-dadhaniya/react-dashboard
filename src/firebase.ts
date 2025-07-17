// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAV_yzfgREGGiUl80Pla6eatBgZJ9dIEI8",
  authDomain: "react-dashboard-db73d.firebaseapp.com",
  projectId: "react-dashboard-db73d",
  storageBucket: "react-dashboard-db73d.firebasestorage.app",
  messagingSenderId: "39589403761",
  appId: "1:39589403761:web:2e5eb01429db810748cfd0",
  measurementId: "G-STS9WZT1WJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);