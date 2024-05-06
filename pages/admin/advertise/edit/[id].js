import React from "react";
import UpdateAdvertiseMain from "@/components/admin/advertise/updateAdvertise";
import { getDocument } from "@/functions/firebase/getData";
const EditPageAdvertise = ({ advertise }) => {
  return (
    <div>
      <UpdateAdvertiseMain advertise={advertise} />
    </div>
  );
};

export default EditPageAdvertise;

//// serverside to fetch single catgory in serverside from firestore

EditPageAdvertise.getInitialProps = async (context) => {
  // context.query.id ==> admin/adverts/edit/${context.query.id} in browser
  const data = await getDocument("adverts", context.query.id);

  console.log("single adverts --<>", data);

  return {
    advertise: data,
  };
};
