import { createContext, useEffect, useState, useContext } from "react";
import { db, auth } from "../firebase";

import { toast } from "react-toastify";
import { useRouter } from "next/router";


import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { Spinner } from "@chakra-ui/react";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [name, setName] = useState("zaher");
  const router = useRouter()

  const register = (
    email,
    password,
    firstName,
    lastName,
    imageAsset,
    imageId
  ) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (res) => {
        setPageLoading(true);
        console.log("response:===>",res);
        const userRef = doc(collection(db, "users"), res.user?.uid);

        await setDoc(userRef, {
          uid: res.user?.uid,
          email,
          displayName: `${firstName} ${lastName}`,
          imageAsset,
          imageId,
          role: "admin",
        });
        setPageLoading(false);
        toast.success("User added successfully");
        router.push("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const signInUser = async (email, password) => {
    try {
        //setPageLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      
      toast.success("successfully signed in");
      
      router.push("/");
    } catch (error) {
      toast.error(error?.message);
      
      console.log(error?.message);
      
    }
  };


  const forgetPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);

      toast.success(
        "successfully password reseted password sent successfully to your email"
      );
    } catch (error) {
      toast.error("error reset your Email not found");
    }
  };


  return (
    <StateContext.Provider value={{ name, register, signInUser,forgetPassword }}>
      {children}
    </StateContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(StateContext);
  return context;
};
