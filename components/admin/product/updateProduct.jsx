import React, { useEffect, useState } from "react";
import AdminLayout from "../AdminLayout";
import { useRouter } from "next/router";
import {
  getDocument,
  deleteImages,
  uploadImages,
} from "@/functions/firebase/getData";
import { useAuth } from "@/functions/context";
import ProductForm from "./productForm";
import { toast } from "react-toastify";
import { updateDoc, doc, query } from "firebase/firestore";
import { db } from "@/functions/firebase";
import { message } from "antd";

import { deleteImage } from "@/functions/firebase/getData";



const UpdateProductMain = ({ product, cats, subcats }) => {
  const router = useRouter();

  const { id } = query;

  const [files, setFiles] = useState([]);
  const isupdate = true;

  const { setPageLoading, pageLoading } = useAuth();

  const onFinish = async (values) => {
    console.log("values-->", values);

    const imagesToDelete = product.images.filter(
      (image) => !values.images.includes(image)
    );

    await deleteImages(imagesToDelete);

    const newImagesUpload = await uploadImages(files); // array of links {images}

    // old images + new uploaded images
    values.images = [...values.images, ...newImagesUpload];



    if (!values.video) {
      await deleteImage(product.video);
      message.success("Video Deleted Successfully");
    }

    await updateDoc(doc(db, "products", product.id), values);

    console.log("deletedImages", imagesToDelete);

    message.success(`Product Uploaded Successfully`);

    window.location.reload();
  };

  return (
    <AdminLayout>
      <ProductForm
        //  initialValues all info about product from firestore
        initialValues={product}
        cats={cats}
        subcats={subcats}
        onFinish={onFinish}
        files={files}
        setFiles={setFiles}
        isupdate={isupdate}
      />
    </AdminLayout>
  );
};

export default UpdateProductMain;
