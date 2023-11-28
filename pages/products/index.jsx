import React from "react";
import { orderBy,where } from "firebase/firestore";
import { getDocuments, getDocumentsOrder } from "@/functions/firebase/getData";
import ProdSlider from "@/components/client/products/slider";

export default function ProductsPage({ products,cats }) {
  console.log("ProductsPage" + products);

  return (
    <div>
        <ProdSlider 
        data={cats}
        />
      </div>
  );
}

// serverside
ProductsPage.getInitialProps = async (context) => {
  let products = [];
//navbar.jsx href={`/products?category=${item.title.toLowerCase()}`}
  const category = context.query.category;

  console.log("categoryyyyy", category);

  const subcategory = context.query.subcategory;

  console.log("subcategoryyyyy", subcategory);

  //    where("fieldname", "==", fieldValue)

  products = await getDocumentsOrder(
    "products",
    orderBy("timeStamp", "desc"),


    //category i am searching for all products that have a category name / same as subcategory , else null nothing (filteration)
    category
      ? where("category", "==", category)
      : subcategory
      ? where("subcategory", "==", subcategory)
      : null
  );
    console.log("productsssssss",products)

   const cats = await getDocumentsOrder(
        "cats",
        orderBy("title", "desc") )
        console.log("catssssssssssss",cats)


  return {
    // props from serverside will go to props in clientside
    products: products,
    cats:cats
  };
};
