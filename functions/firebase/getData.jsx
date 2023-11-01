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
  import {db,storage} from '.'
  import { ref, deleteObject } from "firebase/storage";


//step-1- get number of documents in one Collection
  export const getCount = async(col)=>{
    //col --> {products , categories , subcategories}
const colRef = collection(db , col)
const snapshot = await getCountFromServer(colRef)
return snapshot.data().count;


  };

function postToJSON(doc) {
  const data = doc.data();

  return {
    ...data,
    id: doc.id,
// createdAt: data.createdAt..... === true or  false
    // createdAt: data.createdAt?.toMillis() || 0,
    // updatedAt: data.updatedAt?.toMillis() || 0,
  };
}

  // 3nde so2el m3yan 3la instock aw collection motghayira hasab price product name, 
  //review bade 3dad m3ayn mnil data 
  // query and limmit is params
export const getDocuments = async (col , querydata = null , limit = null) =>{
  const queryConstraints = [];
  // query here is value from function {price === 200} or {name === adidas} ....
  if (querydata !== null) queryConstraints.push(where(...querydata));
  if (limit !== null) queryConstraints.push(limit(limit));
  //col motghayir marra category marra sub category marra production
  
// where(..) , where(''') , where ....
  const ref = collection(db ,col)
    // query here is method from firebase to filter data
  const docsRef = query(ref ,...queryConstraints);
 //  if query params is exist and limit is exist  filter data else show all data from collection
 const documents = (await getDocs(docsRef)).docs.map(postToJSON);


 return documents; //  [] array of data named categories 
 //, products  , subcategories in /admin/.../all

};




// -----------------------------


// get Single item from firestore ==> ... product ,subcategory , category , review ...


//col  is collection changeable  , id is id of doucment to get from firestore changeble


export const getDocument = async (col ,id)=>{


  const document = postToJSON(await getDoc(doc(db,col , id)))


  return document

}

// col is collection name -->  category  or product
// item is  object that have  data
export const  handleDelete  = (col ,item) =>{


  // path of document we well delete
  const itemDoc = doc(db, col ,item.id)
// delete document from firestore then delete document images
  deleteDoc(itemDoc).then(async()=>{


    // specifu image folder and name to delete it => col is folder  image.name is image name will deleted from storage
    const desertRef = ref(storage ,`${col}/${item.image.name}`)
await deleteObject(desertRef)

window.location.reload()

  })

}

