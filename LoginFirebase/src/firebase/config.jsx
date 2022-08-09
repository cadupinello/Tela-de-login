// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBg7e6WzZBjtZudJj23RowmvArENbMHVxU",
  authDomain: "system-login-firebase.firebaseapp.com",
  projectId: "system-login-firebase",
  storageBucket: "system-login-firebase.appspot.com",
  messagingSenderId: "510336687675",
  appId: "1:510336687675:web:fbed0da1f2f97df19c461e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };