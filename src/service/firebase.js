// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2_Khi51iLAzzHZqj_ktiKhAUI2cQgXUg",
  authDomain: "whatsapp-57dee.firebaseapp.com",
  projectId: "whatsapp-57dee",
  storageBucket: "whatsapp-57dee.appspot.com",
  messagingSenderId: "636350327024",
  appId: "1:636350327024:web:c582164f3e6d56dd17fa35",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);
export default db;
