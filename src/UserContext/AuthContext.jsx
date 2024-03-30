import { createContext, useEffect, useContext, useState } from "react";
import { auth, db } from "../Firebase/Firebase";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setuser] = useState();
  const SignUp = (email, password) => {
     createUserWithEmailAndPassword(auth, email, password);
     setDoc(doc(db,'users',email),{
      savedMovies :[],
     })
  };
  const LogOut = () => {
    return signOut(auth);
  };
  const LogIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const UnSuscribe = onAuthStateChanged(auth, (currentuser) => {
      setuser(currentuser);
    });
    return () => {
      UnSuscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ SignUp, user, LogIn, LogOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function UserAuth() {
  return useContext(AuthContext);
}
