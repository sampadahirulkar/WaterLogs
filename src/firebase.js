// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
// const { onRequest } = require("firebase-functions/v2/https");

// exports.sayHello = onRequest(
//   { cors: [/firebase\.com$/] },
//   (req, res) => {
//     res.status(200).send("Hello world!");
//   }
// );

// const firebaseConfig = {
//   apiKey: "AIzaSyCYRjMhMR9mOHtqSpOlnlfbFfkNMAcUsLs",
//   authDomain: "chat-app-backend-fa26d.firebaseapp.com",
//   projectId: "chat-app-backend-fa26d",
//   storageBucket: "chat-app-backend-fa26d.appspot.com",
//   messagingSenderId: "663633326749",
//   appId: "1:663633326749:web:6c539379206b8f68cd5a74",
//   measurementId: "G-KE2CXV8Z1R"
// };

const firebaseConfig = {
  apiKey: "AIzaSyAWyHn0FfQ-000kiiQkt7akvcX__uVaRaU",
  authDomain: "waterlogs-d1386.firebaseapp.com",
  projectId: "waterlogs-d1386",
  storageBucket: "waterlogs-d1386.appspot.com",
  messagingSenderId: "586153297196",
  appId: "1:586153297196:web:2f4b1d0c10730f5eb81889",

  databaseURL: "https://waterlogs-d1386-default-rtdb.firebaseio.com/",
};



export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);