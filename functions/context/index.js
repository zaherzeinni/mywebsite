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
  sendEmailVerification,
} from "firebase/auth";

import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { Spinner,Box } from "@chakra-ui/react";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [name, setName] = useState("zaher");
  const router = useRouter()
  const [pageLoading,setPageLoading] = useState(false)

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
        //after saving data stop spinner
        console.log("response:===>",res);


        // verification Link send to user Email
        // await promise me to do this function successfully
        await sendEmailVerification(auth.currentUser)


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
        // while loading data from firebase start spinner
        
        toast.success("User added successfully");
        toast.warning("please verify your email ,check your inbox or junk Email");
        router.push("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const signInUser = async (email, password) => {
    try {
      setPageLoading(true);
      //response of user data
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      
      console.log("user===>",userCredential.user.emailVerified)
      // if (userCredential.user.emailVerified === false) {
      
      //   setPageLoading(false);
      //   toast.error("please verify your email")
        
      //   return
      // }
     
      setPageLoading(false);
      toast.success("successfully signed in");
      
      router.push("/");
    } catch (error) {
      toast.error(error?.message);
      setPageLoading(false);
      console.log(error?.message);
      
    }
  };


  const forgetPassword = async (email) => {
    try {
      setPageLoading(true);
      await sendPasswordResetEmail(auth, email);
      setPageLoading(false);
      
      toast.success(
        "successfully password reseted password sent successfully to your email"
      );
      router.push("/auth/login")
      
    } catch (error) {
      toast.error("error reset your Email not found");
    }
  };

  const [userData,setUserData] = useState(null);

  const [profile,setProfile] = useState(null);


  useEffect(
    () =>
      onAuthStateChanged(auth, async (user) => {
        if (user) {
           setPageLoading(true);
          console.log("auth ", user);
          const userRef = doc(db, "users", user.uid);

          const docSnap = await getDoc(userRef);

          if (docSnap.exists()) {
            setProfile(docSnap.data());
              setPageLoading(false);
          }

          // dispatch({
          //   type: "INITIALISE",
          //   payload: { isAuthenticated: true, user },
          // });
          // console.log("initialized state changed", profile);
        }
         else {
          // dispatch({
          //   type: "INITIALISE",
          //   payload: { isAuthenticated: false, user: null },
          // });
        }
      }),

    [
     // dispatch
    
    ]
  );


const logout = () => {
  signOut(auth);
  setProfile(null);
};

  return (
    <StateContext.Provider value={{ name, register, signInUser,forgetPassword,
    pageLoading,profile,userData,logout }}>
      
      {children}
    </StateContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(StateContext);
  return context;
};

