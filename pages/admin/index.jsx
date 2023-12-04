import React from "react";
import MainAdmin from "@/components/admin/MainAdmin";
import { getCount } from "@/functions/firebase/getData";
const Admin = ({cats,subcats,products,users}) => {


    console.log('categories Account-->' , cats)

  return (
    <>
      <MainAdmin 
      cats={cats}
      subcats={subcats}
      products={products}
      users={users}
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