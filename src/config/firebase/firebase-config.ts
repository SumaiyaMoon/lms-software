// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA51n4XPpr_Jjhj5qkBfFvMiZD0k4uj-Es",
  authDomain: "moon-chat-application.firebaseapp.com",
  projectId: "moon-chat-application",
  storageBucket: "moon-chat-application.appspot.com",
  messagingSenderId: "307142918988",
  appId: "1:307142918988:web:e92670ff771d8d280145e9",
  measurementId: "G-SCJXTL3GFQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);