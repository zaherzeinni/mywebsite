
import React from "react";
import CategoryForm from "./categoryForm";
import { toast } from "react-toastify";
import { useAuth } from "@/functions/context";
import { useState } from "react";
import { db } from "@/functions/firebase";
import { updateDoc, doc } from "firebase/firestore";
import { uploadImages, deleteImage } from "@/functions/firebase/getData";
import { message } from "antd";
import AdminLayout from "../AdminLayout";


const UpdateCategoryMain = ({ cats }) => {
  const [file, setFile] = useState("");
  const { setPageLoading, pageLoading } = useAuth();
  const isupdate = true;
  const initialValues = category;


  const onFinish = async (values) => {
    console.log("values-->", values);
    console.log("file", file);


    // if file is empty {upload icon}  and update category  image Remover stop function and show error message
    if (!file && !values.image) {
      message.error("Please select file and your initial image is Empty");
      return; // stoppppp progress the function
    }


    // if file select from upload icon delete old image and add new image from file
    else if (file) {
      message.info(
        "file select from upload icon delete old image and add new image from file"
      );


      await deleteImage(initialValues.image);
      message.success("image deleted");
      values.image = await uploadImages(file, true, "cats");
      message.success("new image updated");
      await updateDoc(doc(db, "cats", initialValues?.id), values);
      message.success('updated Successfully')
    } else {
      await updateDoc(doc(db, "cats", initialValues?.id), values);
      message.info("update only title with old image success");
    }
  };


  return (
    <AdminLayout>
      <CategoryForm {...{ onFinish, file, setFile, initialValues }} />
    </AdminLayout>
  );
};


export default UpdateCategoryMain;



