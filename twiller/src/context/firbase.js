// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCym51A-96Y62y-eAy5A5xR8gpgLmwdLsY",
  authDomain: "twiller-32894.firebaseapp.com",
  projectId: "twiller-32894",
  storageBucket: "twiller-32894.appspot.com",
  messagingSenderId: "1017462194790",
  appId: "1:1017462194790:web:8944c4d3817a8fb99f23a7",
  measurementId: "G-5KZR1ZQSLR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export default app
//const analytics = getAnalytics(app);