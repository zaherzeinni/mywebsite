import {
    DocumentData,
    collection,
    doc,
    getCountFromServer,
    getDoc,
    getDocs,
    query,
    where,
    deleteDoc,
    limit,
  } from "firebase/firestore";
  //import { db, storage } from "./index";
  import {db,storage} from './firebase'
  import { ref, deleteObject } from "firebase/storage";


//step-1- get number of documents in one Collection
  export const getCount = async(col)=>{
    //col --> {products , categories , subcategories}
const colRef = collection(db , col)
const snapshot = await getCountFromServer(colRef)
return snapshot.data().count;


  }