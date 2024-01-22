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

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [name, setName] = useState("zaher");
  const router = useRouter();
  const [pageLoading, setPageLoading] = useState(false);

  // step One for wishlist and cart
  const [wishList, setWishList] = useState([]);
  const [cart, setCart] = useState([]);

  const wishListSnapShot = async (userId) => {
    const docRef = doc(db, "wishlist", userId); //access the db folder name wishlist with userId
    // fetch data from document
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("wishlist is exist");
      setWishList(docSnap.data().wishList);
    }
  };

  const cartSnapShot = async (userId) => {
    const docRef = doc(db, "cart", userId); //
    // fetch data from document
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("cart is exist");
      setCart(docSnap.data().cart);
    }
  };

  // create wishlist and cart document when user has registered

  const createCollections = async (user) => {
    const wishRef = doc(collection(db, "wishlist"), user?.uid);
    const cartRef = doc(collection(db, "cart"), user?.uid);
    try {
      await setDoc(wishRef, {
        wishList: [],
      });

      await setDoc(cartRef, {
        cart: [],
      });
    } catch (error) {}
  };

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
        console.log("response:===>", res);

        // verification Link send to user Email
        // await promise me to do this function successfully
        await sendEmailVerification(auth.currentUser);

        const userRef = doc(collection(db, "users"), res.user?.uid);

        await setDoc(userRef, {
          uid: res.user?.uid,
          email: email,
          displayName: `${firstName} ${lastName}`,
          password: password,
          imageAsset: imageAsset,
          imageId: imageId,
          role: "admin",
        });

        createCollections(res.user?.uid)

        setPageLoading(false);
        // while loading data from firebase start spinner

        toast.success("User added successfully");
        toast.warning(
          "please verify your email ,check your inbox or junk Email"
        );
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
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log("user===>", userCredential.user.emailVerified);
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
      router.push("/auth/login");
    } catch (error) {
      toast.error("error reset your Email not found");
    }
  };

  const [userData, setUserData] = useState(null);

  const [profile, setProfile] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      console.log("user Auth Data--->", user);
      // if auth user is  already maked register or Login
      // find his profile data from firebase/firetore
      setPageLoading(true);
      if (user) {
        // set Authuser data in state
        setUserData(user);
        localStorage.setItem("isLogged", true);
        // specify path for get Auth user Data from firestore
        const userRef = doc(db, "users", user?.uid);

        const docSnap = await getDoc(userRef);

        // if AuthUser have data in firestore set his data in setProfile
        if (docSnap.exists()) {
          console.log("firstore Data of user--->", docSnap.data());
          setProfile(docSnap.data());
        }
      }

      setPageLoading(false);
    });
  }, []);

  const logout = () => {
    signOut(auth);
    setProfile(null);
    setPageLoading(false);
  };

  const [inputt, setInputt] = useState();

  return (
    <StateContext.Provider
      value={{
        name,
        register,
        signInUser,
        forgetPassword,
        pageLoading,
        profile,
        userData,
        logout,
        setPageLoading,
        setName,
        inputt,
        setInputt,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(StateContext);
  return context;
};
