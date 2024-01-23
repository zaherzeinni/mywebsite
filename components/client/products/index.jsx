import React from "react";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import { GoHeartFill } from "react-icons/go";
import { FiHeart } from "react-icons/fi";

//https://intercool-navy.vercel.app/
//https://github.dev/AKT41/Intercool/tree/3d3336effbbc5b1ac5b2a77b3862ef4726abdb53/src

const AllProducts = ({ resultProducts }) => {
  return (
    <div className="my-1 grid grid-rows-5* grid-flow-col  gap-2">
      <span id="cards" className="scroll-smooth">
        <div className=" flex flex-col justify-center items-center min-h-screen">
          <div className="flex flex-col w-full  items-center justify-center gap-6 md:gap-10 py-10 px-5">
            <h1 className="sm:text-3xl md:text-5xl text-3xl tracking-wide md:tracking-wider font-bold we-use-title">
              Features Products
            </h1>
            <div className="container !grid !grid-cols-1 sm:!grid-cols-2 md:!grid-cols-3 xl:!grid-cols-4 !gap-12">
              {resultProducts.map((data,index)=>(
                
              <Fade key={index} bottom>
                <div  className="card w-[95%]  ">
                
                  <div className="face  face1 medikal-iç"  
                  style={{backgroundImage: `linear-gradient( #424242bd, #424242bd),url(${data?.images[0]})`,backgroundSize:'contain',backgroundRepeat: 'no-repeat' }}
                  >
                    <FiHeart className="text-3xl text-white absolute top-5 right-4" />
                    {/* <GoHeartFill className="text-3xl text-red-600 absolute top-5 right-4" /> */}
                    <div className="conten ">
                      <h2 className="jav ">{data?.title}</h2>
                      <p className="java line-clamp-3 ">
                        {data?.desc}
                      </p>
                      <p>${data?.price}</p>
                      <p className=" text-xs font-medium mt-4 bg-slate-500 p-2 w-max rounded-md hover:bg-green-400 hover:cursor-pointer">
                        <Link
                          href="/products/product-categoris/medikal"
                          className=" w-max  text-[14px] hover:text-red-500"
                        >
                          more details
                        </Link>
                      </p>
                      
                    </div>
                  </div>
                  {/* linear-gradient( #42424246, #42424246), */}
                  <div className="face face2 medikal-ön" 
                  style={{backgroundImage: `url(${data?.images})`,backgroundSize:'cover' }} 
                  > 
              <h2 className="!text-3xl sm:!text-4xl ">{data?.title}</h2>
                  </div>
                </div>
              </Fade>
  ))}    
            </div>
          </div>
        </div>
        <style>
          {`
                body{
                    scroll-behavior: smooth;
                }
                `}
        </style>
      </span>
    </div>
  );
};

export default AllProducts;
