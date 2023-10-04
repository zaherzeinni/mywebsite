// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/firestorage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1wKlWYBGwmDRP8tUc2DJmGzgTk8HwbLw",
  authDomain: "posts-app-d8514.firebaseapp.com",
  projectId: "posts-app-d8514",
  storageBucket: "posts-app-d8514.appspot.com",
  messagingSenderId: "952942736909",
  appId: "1:952942736909:web:0abc58c0c68016f0078744",
  measurementId: "G-H8REBXMYQQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestoreDatabase = getFirestore(app);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app);

export default firestoreDatabase;

//export const provider =  new GoogleAuthProvider()