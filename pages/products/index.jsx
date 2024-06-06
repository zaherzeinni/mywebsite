import React from "react";
import { orderBy, where } from "firebase/firestore";
import { getDocuments, getDocumentsOrder } from "@/functions/firebase/getData";
import ProdSlider from "@/components/client/products/slider";
import OfferSlider from "@/components/client/sections/offerSlider";
import Navbar from "@/components/client/layout/navbar";
import ProjectsMain from "@/components/admin/project/projects";
import ProjectSlider from "@/components/client/sections/projectSlider";
import { useState, useEffect } from "react";
import FireWork from "@/components/common/startFire";
import AdvertiseBar from "@/components/common/advertiseBar";
import AllProducts from "/components/client/products";
import Support from "@/components/client/sections/support";
import Footer from "@/components/client/layout/footer";
import { Button } from "@chakra-ui/react";

// import Categories from "@/components/client/layout/categories";


import Link from "next/link";

export default function ProductsPage({
  products,
  cats,
  subcats,
  categoryquery,
  subcategoryquery,
  offerProducts,
  search,
  projects,
}) {
  console.log("ProductsPage" + products);

  //conditon one
  // only router /products  no  products?category={catName}  no  /products?subcategory={subcatName} cats slider
  // condition two
  // subcategoryquery is exist --> products?subcategory={subcatName} show all subcats in slider

  // condition three
  // categoryquery is exist --> products?category={catName}  show all cats in slider

  const condition =
    !categoryquery && !subcategoryquery
      ? cats
      : subcategoryquery
      ? null
      : categoryquery && subcats;

  const conditionText =
    !categoryquery && !subcategoryquery
      ? "category"
      : subcategoryquery
      ? "subcategory"
      : categoryquery && "subcategory";

  console.log(
    "condition,conditionText",
    products?.length,
    condition,
    conditionText
  );

  const resultProducts = !search
    ? products
    : products.filter((item) => item.title.toLowerCase().includes(search));

  console.log("Result Products ====>", resultProducts);


  // -----FireWork-----

  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setModalOpen(true);
    }, 2000);
  }, []);



  



  return (
    <div className="scroll-smooth">
      
      {/* {modalOpen === true && 
      <FireWork/> } */}

      <AdvertiseBar />
      <Navbar />
      <div className=" text-end text-lg  mr-40    scroll-smooth">
      {resultProducts.length >0 ? `${resultProducts.length} products found` : "no products found" }
      </div>
      
      {condition !== null && (
        <ProdSlider data={condition} linkText={conditionText} />
      )}
      
      <div className=" container1">
        
        
      <div className="-mt-2">
          <AllProducts resultProducts={resultProducts} />
        </div>

      </div>
      <div>
        <Footer />
        </div>
    </div>
  );
}

// serverside
ProductsPage.getInitialProps = async (context) => {
  let products = [];
  //navbar.jsx href={`/products?category=${item.title.toLowerCase()}`}
  const category = context.query.category;
  const subcategory = context.query.subcategory;
  // step 1
  const search = context.query.search;

  console.log("categoryyyyy", category);

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

  // offer products

  const offerProducts = await getDocumentsOrder(
    "products",
    orderBy("timeStamp", "desc"),

    //category i am searching for all products that have a category name / same as subcategory , else null nothing (filteration)

    where("isoffer", "==", true)
  );
  console.log("isofferrrrr", offerProducts);

  //console.log("productsssssss", products);

  const cats = await getDocumentsOrder("cats", orderBy("title", "desc"));
  //console.log("catssssssssssss", cats);

  // sub cats  if category filter subcats else filter all subcats

  const subcats = await getDocumentsOrder(
    "subcats",
    orderBy("timeStamp", "desc"),

    //category i am searching for all products that have a category name / same as subcategory , else null nothing (filteration)
    //contextquery.query  // null all subcategories , category parent te3 subcategories ( sub cat limited)
    category && where("category", "==", category) 
  );

  //console.log("subcats", subcats);

  const projects = await getDocumentsOrder(
    "projects",
    orderBy("timeStamp", "desc")
  );

  console.log("projectsss", projects);

  return {
    // props from serverside will go to props in clientside
    products: products,
    cats: cats,
    subcats: subcats,
    categoryquery: category, //laptop
    subcategoryquery: subcategory, // LG
    offerProducts: offerProducts, // is offer @ main page
    search: search, // Search input at Navbar
    projects: projects,
  };
};
