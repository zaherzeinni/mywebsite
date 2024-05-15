import React from "react";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import ProductCard from "../productcard";


const AllProducts = ({ resultProducts }) => {
  return (
    <div className="my-1 grid grid-rows-5* grid-flow-col  gap-2">
      <span id="cards" className="scroll-smooth">
        <div className=" flex flex-col justify-center items-center min-h-screen">
          <div className="flex flex-col w-full  items-center justify-center gap-6 md:gap-10 py-6 px-5">
            <h1 className="sm:text-lg md:text-5xl text-3xl tracking-wide md:tracking-wider font-bold we-use-title">
              Features Products
            </h1>
            <div className="container !grid !grid-cols-1 sm:!grid-cols-2 md:!grid-cols-3 xl:!grid-cols-4 !gap-12">
              {resultProducts.map((data,index)=>(
                
                  <ProductCard data={data}
                  key={index}

                  />
  ))}    
            </div>
          </div>
        </div>

      </span>
    </div>
  );
};

export default AllProducts;
