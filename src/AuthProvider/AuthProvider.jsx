import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ routes }) => {
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider);
  };

  const handleRegister = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };

  const hanleLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };

  const handleLogout = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscrie = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);

      return () => {
        unsubscrie();
      };
    });
  }, []);

  const authInfo = {
    user,
    setUser,
    handleGoogleLogin,
    hanleLogin,
    handleRegister,
    handleLogout,
  };

  return (
    <div>
      <AuthContext.Provider>{routes}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
