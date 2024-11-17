// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIq-XE9NIZmTP0Y8vn2gd65VSfnhfS53w",
  authDomain: "teeth-wizerd-1a2e7.firebaseapp.com",
  projectId: "teeth-wizerd-1a2e7",
  storageBucket: "teeth-wizerd-1a2e7.firebasestorage.app",
  messagingSenderId: "1033292665861",
  appId: "1:1033292665861:web:d1d5a45cf0860116e2f86c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;