import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

export const userContext = createContext({
  userData: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const value = {
    currentUser,
    setCurrentUser,
  };


  useEffect(()=>{
    const unsuscribe = onAuthStateChangedListener((user)=>{
      console.log(user)
      if(user){
        createUserDocumentFromAuth(user)
      }
      setCurrentUser(user)
    })
    return unsuscribe
  },[])

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};
