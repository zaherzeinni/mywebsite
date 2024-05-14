import React from "react";
import AdvertiseForm from "./advertiseForm";
import { useAuth } from "@/functions/context";
import { db } from "@/functions/firebase";
import { addDoc, collection,serverTimestamp } from "firebase/firestore";
//import { message } from "antd";
import AdminLayout from "../AdminLayout";

const AddAdvertiseMain = () => {
  const { setPageLoading, pageLoading } = useAuth();
  const isupdate = true;

  const onFinish = async (values) => {
    console.log("values-->", values);


      values.timeStamp = serverTimestamp()
      await addDoc(collection(db, "adverts"), values);
      message.success("advertise added  successfully");
  };

  return (
    <AdminLayout>
      <AdvertiseForm {...{ onFinish}} />
    </AdminLayout>
  );
};

export default AddAdvertiseMain;
