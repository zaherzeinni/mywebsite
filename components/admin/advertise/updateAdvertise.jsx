import React from "react";
import AdvertiseForm from "./advertiseForm";
import { useAuth } from "@/functions/context";
import { db } from "@/functions/firebase";
import { updateDoc, doc } from "firebase/firestore";
import { message } from "antd";
import AdminLayout from "../AdminLayout";

const UpdateAdvertiseMain = ({ advertise }) => {
  const { setPageLoading, pageLoading } = useAuth();
  const isupdate = true;
  const initialValues = advertise;

  const onFinish = async (values) => {
    console.log("values-->", values);
    await updateDoc(doc(db, "adverts", initialValues?.id), values);
    message.success("updated Successfully");
  };

  return (
    <AdminLayout>
      <AdvertiseForm {...{ onFinish, initialValues }} />
    </AdminLayout>
  );
};

export default UpdateAdvertiseMain;
