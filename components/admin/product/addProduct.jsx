import React from "react";
import ProductForm from "./productForm";
import { useAuth } from "@/functions/context";
import { useState } from "react";
import { db } from "@/functions/firebase";
import { addDoc, collection } from "firebase/firestore";
import { uploadImages } from "@/functions/firebase/getData";
import { message } from "antd";
import AdminLayout from "../AdminLayout";


const AddProductMain = ({ cats, subcats }) => {
  const [files, setFiles] = useState([]);
  const { setPageLoading, pageLoading } = useAuth();


  const onFinish = async (values) => {
    console.log("values-->", values);

    //urls [array of images]
    values.images  = await  uploadImages(files)   

    await addDoc(collection(db,'products') ,values)


    message.success(`Product Uploaded Successfully`);
  };


  return (
    <AdminLayout>
      <ProductForm {...{ cats, subcats, onFinish, files, setFiles }} />
    </AdminLayout>
  );
};


export default AddProductMain;


