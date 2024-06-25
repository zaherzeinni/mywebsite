import React from "react";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import ProductCard from "../../../pages/productcard";
import { NextSeo } from "next-seo";

const AllProducts = ({ resultProducts }) => {


  console.log(resultProducts.length,"result productss")
  

  return (
    <div className="my-1 grid grid-flow-col  gap-2">
                  
      <NextSeo
        title="ITPROMAX | Products"
        description="ITPROMAX is a small business "
      />

      <span id="cards" className="scroll-smooth">
        <div className=" flex flex-col justify-center items-center min-h-screen1">
          <div className="flex flex-col w-full  items-center justify-center gap-6 md:gap-5 py-1 px-5 -mt-0">
            <h1 className="sm:text-lg md:text-5xl text-3xl tracking-wide md:tracking-wider font-bold we-use-title">
              Features Products
            </h1>
           
            {resultProducts.length===0 ? <div className="text-xl mb-[90%] text-red-500">Opss, no products found. <Link href='/products' className="underline">return to Products</Link></div> :
            
            
            <div className="container !grid !grid-cols-1 sm:!grid-cols-2 md:!grid-cols-3 xl:!grid-cols-4 !gap-12">
         
             
              {resultProducts.map((data,index)=>(
              
                  
                  <ProductCard
                  key={index}
                  data={data}
                  />
                
               

  ))}    
            </div>
    }
         </div>
        </div>

      </span>
    </div>
  );
};

export default AllProducts;
