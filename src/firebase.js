import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREABSE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCQu7gkxDYCAqQlISCT2jC9GcVn07odS04",
//   authDomain: "project-two-bb99e.firebaseapp.com",
//   projectId: "project-two-bb99e",
//   storageBucket: "project-two-bb99e.appspot.com",
//   messagingSenderId: "33506758801",
//   appId: "1:33506758801:web:a3147c36e79475e4552f30",
//   measurementId: "G-LCGS065NM0"
// };


