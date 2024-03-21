import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAy372pgfQIpWF7eLQE2xs-NQ1shyutYMk",
  authDomain: "resoluteai-91587.firebaseapp.com",
  projectId: "resoluteai-91587",
  storageBucket: "resoluteai-91587.appspot.com",
  messagingSenderId: "310852663781",
  appId: "1:310852663781:web:fd5013eba38c3c13cad70c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;