import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB7QrquTjF8SH1Ly9HCAnap1YuVm8I6uC0",
  authDomain: "resoluteai-66180.firebaseapp.com",
  projectId: "resoluteai-66180",
  storageBucket: "resoluteai-66180.appspot.com",
  messagingSenderId: "26535694205",
  appId: "1:26535694205:web:6944f1faa018dae93b0614"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;