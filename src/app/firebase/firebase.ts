// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, getDocs, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZqHhLMGYdJUxWNheydh9OZg3BhjecvIg",
  authDomain: "acelabview-admin.firebaseapp.com",
  projectId: "acelabview-admin",
  storageBucket: "acelabview-admin.firebasestorage.app",
  messagingSenderId: "556491363676",
  appId: "1:556491363676:web:bd7746b91e4bf949135d99",
  measurementId: "G-KG116W7DC3"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);
