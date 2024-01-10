import React from "react";
import { Fade } from "react-reveal";
import Link from "next/link";

//https://intercool-navy.vercel.app/
//https://github.dev/AKT41/Intercool/tree/3d3336effbbc5b1ac5b2a77b3862ef4726abdb53/src

const AllProducts = ({ products }) => {
  return (
    <div className="my-1 grid grid-rows-5* grid-flow-col  gap-2">
      <span id="cards" className="scroll-smooth">
        <div className=" flex flex-col justify-center items-center min-h-screen">
          <div className="flex flex-col w-full  items-center justify-center gap-6 md:gap-10 py-10 px-5">
            <h1 className="md:text-5xl text-3xl tracking-wide md:tracking-wider font-bold we-use-title">
              Features Products
            </h1>
            <div className="container !grid !grid-cols-1 sm:!grid-cols-2 md:!grid-cols-3 lg:!grid-cols-4 !gap-12">
              {products.map((data,index)=>(
              <Fade bottom>
                <div key={index} className="card w-[95%] ">
                  <div className="face  face1 medikal-iç"  
                  style={{backgroundImage: `linear-gradient( #424242bd, #424242bd),url(${data.images[0]})`,backgroundSize:'contain',backgroundRepeat: 'no-repeat' }}
                  >
               
                    <div className="conten ">
                      <h2 className="jav ">{data.title}</h2>
                      <p className="java line-clamp-3 ">
                        {data.desc}
                      </p>
                      <p>${data.price}</p>
                      <p className=" text-xs font-medium mt-4 bg-slate-500 p-2 w-max rounded-md hover:bg-green-400">
                        <Link
                          href="/products/product-categoris/medikal"
                          className=" w-max  text-[14px] hover:text-red-500"
                        >
                          more details
                        </Link>
                      </p>
                      
                    </div>
                  </div>
                  {/*  */}
               
                  
                  <div className="face face2 medikal-ön" 
                  style={{backgroundImage: `linear-gradient( #42424246, #42424246),url(${data.images})`,backgroundSize:'cover' }} 
                  > 
              <h2 className="!text-3xl sm:!text-4xl ">{data.title}</h2>
                  </div>
                </div>
              </Fade>
  ))}
  
  
              {/* <Fade bottom>
                <div className="card w-[100%]">
                  <div className="face face1 endüstriyel-iç">
                    <div className="content">
                      <span className="stars"></span>
                      <h2 className="python">Endüstriyel</h2>
                      <p className="python">
                        Endüstriyel, İntercool PE İzolasyonlu Bakır Boru üretimi
                        ve ihracatı yapmaktadır endüstriyel alanda yaptığı
                        ürünler ile birlikte sizlere hizmet vermektedir.
                      </p>
                      <p className=" text-xs font-medium  bg-slate-500 p-2 w-max rounded-md">
                        <Link
                          href="/products/product-categoris/endüstriyel"
                          className="text-white w-max"
                        >
                          Kategoriyi Göster
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="face face2 endüstriyel-ön">
                    <h2>Endüstriyel</h2>
                  </div>
                </div>
              </Fade>
              <Fade bottom>
                <div className="card w-[100%]">
                  <div className="face face1 sıhhitesisat-iç">
                    <div className="content">
                      <h2 className="java">Sıhhi Tesisat </h2>
                      <p className="java line-clamp-3">
                        Sıhhi Tesisat, Pe İzolasyonlu Bakır Boruları Sıhhi
                        Tesisat alanında sıkça kullanılmaktadır. Sıhhi Tesisat
                        sektöründe İntercool markası adını duyurmuştur.
                      </p>
                      <p className=" text-xs font-medium  bg-slate-500 p-2 w-max rounded-md">
                        <Link
                          href="/products/product-categoris/sihhitesisat"
                          className="text-white w-max"
                        >
                          Kategoriyi Göster
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="face face2 sıhhitesisat-ön">
                    <h2 className="">Sıhhi Tesisat </h2>
                  </div>
                </div>
              </Fade>
              <Fade bottom>
                <div className="card w-[100%]">
                  <div className="face face1 klima-iç">
                    <div className="content">
                      <span className="stars"></span>
                      <h2 className="python">Klima</h2>
                      <p className="python">
                        Klima, İntercool markası olarak klima sektöründe oldukça
                        tanınan, sektörün lider markalarından birisidir.
                        İntercool Bakır Boru Sektörünün lider markası.
                      </p>
                      <p className=" text-xs font-medium  bg-slate-500 p-2 w-max rounded-md">
                        <Link
                          href="/products/product-categoris/klima"
                          className="text-white w-max"
                        >
                          Kategoriyi Göster
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="face face2 klima-ön">
                    <h2>Klima</h2>
                  </div>
                </div>
              </Fade> */}
              
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
