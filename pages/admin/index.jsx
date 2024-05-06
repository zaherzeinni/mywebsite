import React from "react";
import MainAdmin from "@/components/admin/MainAdmin";
import { getCount } from "@/functions/firebase/getData";
const Admin = ({cats,subcats,products,users,projects}) => {


    console.log('Total Categories Count-->' , cats)


  return (
    <>
      <MainAdmin 
      cats={cats}
      subcats={subcats}
      products={products}
      users={users}
      projects={projects}
      />
    </>
  );
};

export default Admin;

Admin.getInitialProps = async (context) => {
  const cats = await getCount("cats");

  const products = await getCount('products')
  const subcats  =  await getCount('subcats')

  const users = await getCount('users')
  return {
    cats: cats,
    subcats:subcats,
    products:products,
    users:users,

  };
};