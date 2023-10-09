import { createContext, useEffect, useState, useContext } from "react";
import { db, auth } from "../firebase";

import { toast } from "react-toastify";

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
        console.log(res);
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
      //  setPageLoading(true);
      await signInWithEmailAndPassword(auth, email, password);

      toast.success("successfully signed in");

      router.push("/");
    } catch (error) {
      toast.error(error?.message);

      console.log(error?.message);
    }
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
