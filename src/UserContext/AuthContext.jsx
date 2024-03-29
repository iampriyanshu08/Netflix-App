import { createContext, useEffect, useContext, useState } from "react";
import { auth } from "../Firebase/Firebase";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

 const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setuser] = useState();
  const SignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
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
    <AuthContext.Provider value={ {SignUp, user,LogIn,LogOut} }>
      {children}
    </AuthContext.Provider>
  );
};



export function UserAuth (){
  return useContext(AuthContext)
}





