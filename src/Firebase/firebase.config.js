// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdDVqDAWry1bIKs8yam08rStLtTxaw4H4",
  authDomain: "knuth-accademy.firebaseapp.com",
  projectId: "knuth-accademy",
  storageBucket: "knuth-accademy.firebasestorage.app",
  messagingSenderId: "733845422870",
  appId: "1:733845422870:web:f0ceb41b897257dba48637"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;