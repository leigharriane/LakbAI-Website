import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "@firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBuHAHZMTIJcIhfF1KutoF1pnprXx-LPfg",
    authDomain: "lakbai-ca407.firebaseapp.com",
    databaseURL: "https://lakbai-ca407-default-rtdb.firebaseio.com",
    projectId: "lakbai-ca407",
    storageBucket: "lakbai-ca407.appspot.com",
    messagingSenderId: "374383272243",
    appId: "1:374383272243:web:a68f41fe9f7eebf462de46",
    measurementId: "G-2S6E61PMX4"
  };
const app = initializeApp(firebaseConfig)
const db = getFirestore(app);
export {db}