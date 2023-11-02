import React from "react";
import ProductForm from "./productForm";
import { toast } from "react-toastify";
import { useAuth } from "@/functions/context";
import { useState } from "react";
import { db } from "@/functions/firebase";
import { addDoc, collection } from "firebase/firestore";
import { uploadImages, deleteImages } from "@/functions/firebase/getData";
import { message } from "antd";
import AdminLayout from "../AdminLayout";


const AddProductMain = ({ cats, subcats }) => {
  const [files, setFiles] = useState([]);
  const { setPageLoading, pageLoading } = useAuth();


  const onFinish = async (values) => {
    console.log("values-->", values);


    message.info(`data--> ${values?.title}`);
  };


  return (
    <AdminLayout>
      <ProductForm {...{ cats, subcats, onFinish, files, setFiles }} />
    </AdminLayout>
  );
};


export default AddProductMain;


