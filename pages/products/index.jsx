import React from "react";
import { orderBy, where } from "firebase/firestore";
import { getDocuments, getDocumentsOrder } from "@/functions/firebase/getData";
import ProdSlider from "@/components/client/products/slider";
import OfferSlider from "@/components/client/sections/offerSlider";
export default function ProductsPage({
  products,
  cats,
  subcats,
  categoryquery,
  subcategoryquery,
  offerProducts
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
  //justify-center flex items-center

  return (
    <div className="">
      {condition !== null && (
        <ProdSlider data={condition} linkText={conditionText} />
      )}

      <div className=" container1">


<OfferSlider/>


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
  //console.log("categoryyyyy", category);

  //console.log("subcategoryyyyy", subcategory);

  //    where("fieldname", "==", fieldValue)

  products = await getDocumentsOrder(
    "products",
    orderBy("timeStamp", "asc"),

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
    orderBy("timeStamp", "asc"),

    //category i am searching for all products that have a category name / same as subcategory , else null nothing (filteration)

    where("isoffer", "==", true)
  );
  console.log("isofferrrrr", offerProducts);

  //console.log("productsssssss", products);

  const cats = await getDocumentsOrder("cats", orderBy("title", "asc"));
  //console.log("catssssssssssss", cats);

  // sub cats  if category filter subcats else filter all subcats

  const subcats = await getDocumentsOrder(
    "subcats",
    orderBy("timeStamp", "asc"),

    //category i am searching for all products that have a category name / same as subcategory , else null nothing (filteration)
    //contextquery.query  // null all subcategories , category parent te3 subcategories ( sub cat limited)
    category ? where("category", "==", category) : null
  );

  //console.log("subcats", subcats);

  return {
    // props from serverside will go to props in clientside
    products: products,
    cats: cats,
    subcats: subcats,
    categoryquery: category, //laptop
    subcategoryquery: subcategory, // LG
    offerProducts :offerProducts
  };
};
