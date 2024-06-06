// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// const { onRequest } = require("firebase-functions/v2/https");

// exports.sayHello = onRequest(
//   { cors: [/firebase\.com$/] },
//   (req, res) => {
//     res.status(200).send("Hello world!");
//   }
// );

const firebaseConfig = {

  apiKey: "AIzaSyCKc8N9n8YBXY7hPMLZssKvm4T7Rk6Yy78",

  apiKey: "AIzaSyCYRjMhMR9mOHtqSpOlnlfbFfkNMAcUsLs",

  authDomain: "chat-app-backend-fa26d.firebaseapp.com",

  projectId: "chat-app-backend-fa26d",

  storageBucket: "chat-app-backend-fa26d.appspot.com",

  messagingSenderId: "663633326749",

  appId: "1:663633326749:web:6c539379206b8f68cd5a74",

  measurementId: "G-KE2CXV8Z1R"


};



export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();