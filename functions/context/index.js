import { createContext, useEffect, useState, useContext } from "react";
import { db, auth } from "../firebase";


import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";


import { collection, doc, getDoc, setDoc } from "firebase/firestore";


const StateContext = createContext();


export const StateContextProvider = ({ children }) => {
  const [name, setName] = useState("zaher");


  const register = async (email, password, firstName, lastName) => {
    console.log("data in register Function", email);
    // step 1  register to firebase/auth with email and password
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (res) => {
        // step 2 save this user data  {email , uuid , displaName} + Role--> {admin ,user} to firestore
        console.log("Res--->", res?.user);
        const userRef = doc(collection(db, "users"), res?.user?.uid);


        // send auth user data with specefic user uid as document id to firestore
        await setDoc(userRef, {
          uid: res?.user?.uid,
          email: email,
          displayName: `${firstName} ${lastName}`,
          role: "admin",
          password: password,
        });
      })
      // if auth have error  send toast message to show error to user
      .catch((err) => {
        console.log("error-->", err?.message);
      });
  };


  const signInUser = async (email, password) => {
    console.log("data in login function ", email, password);
  };


  return (
    <StateContext.Provider value={{ name, register, signInUser }}>
      {children}
    </StateContext.Provider>
  );
};


export const useAuth = () => {
  const context = useContext(StateContext);
  return context;
};
