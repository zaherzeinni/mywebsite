import React from "react";
import Carousel from "react-slick";
import CustomSliderArrow from "../../products/customSliderArrow";
import { motion } from "framer-motion";
//import { Fade } from 'react-reveal'
import Link from "next/link";
import { Image } from "@chakra-ui/react";

// ------------------------- offer slider the big one top of the page--------------------

const OfferSlider = ({ offerProducts }) => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 7000,
    cssEase: "linear",
    className: "md:w-[75%] mx-auto !h-full  ",
    nextArrow: <CustomSliderArrow direction={"next"} />,
    prevArrow: <CustomSliderArrow />,
    swipeToSlide: true,
  };
  console.log("imagesssOfferrr ====>", offerProducts.images);
  return (
    <div className=" grid gap-1 mt-2 mb-8 px-12  grid-cols-1 lg:!h-[700px] h-full overflow-y-hidde   lg:grid-cols-7   place-items-center !w-[100%] ">
      {/* ---- parent of slider ---- */}

      <div className=" w-full lg:col-span-5 col-span-2 sm:!h-[700px] !h-[100%] ">
        <Carousel {...settings}>
          {offerProducts?.map((item, index) => {
            return (
              <div className="w-full h-full relative  " key={index}>
            
            
                <img
                  className=" p-[13px] relative lg:-top-[13px] w-full !h-full object-center  xs:!h-[700px]  !object-fit xs:object-cover brightnes-50 rounded-[4%]"
                  src={item?.images[0]}
                  alt=""
                />
               
            
                <div className="  z-10 absolute  inset-0   text-3xl flex  text-center  text-white ">
               
                <Link href={`/products/productdetails/single?id=${item.id}`}>
                  <div className="max-w-3xl z-10 space-y-4 px-4 mt-[65px] sm:px-6 lg:px-8 py-6 rounded-lg">
                    <motion.div
                      initial={{ y: "100%" }}
                      whileInView={{ y: 0 }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                      className="text-4xl md:text-8xl font-bold uppercase bg-gray-950 bg-opacity-20 rounded-xl "
                    >
                      <div className="text-sm md:text-xl space-y-3" key={index}>
                        <div className="flex" >
                          <div className="font-content rounded-md bg-gray-300 px-3 py-2 bg-opacity-20">
                            
                             {item.title} 
                          </div>
                        </div>
                        <div>
                        <div className="!text-sm mx-4">
                          {item.desc}
                          </div>                
                          <div className="font-bold underline animate-pulse">
                            {item.discount !== 0 && (
                           
                             
                              <div className="flex justify-center mt-3 w-auto mx-1">
                               <div className="space-x-3"> {item.discount}%
                              </div>
                                <img
                                  src="Sale-image.png"
                                  className="w-[100px] h-[40px]  object-content rounded-lg"
                                />
                              </div>
                             )
                            
                            }
                          </div>



                        </div>
                      </div>
                    </motion.div>
                  </div>
                  </Link>

                </div>
              </div>
            );
          })}
        </Carousel>
      </div>

      {/* -----two images  the right section of offer slider--- */}

      <div className="md:col-span-2 !h-full  flex justify-center lg:grid lg:grid-cols-1  lg:place-items-center gap-4 mt-[50px] lg:mt-[1px]">
        <img
          className="rounded-xl object-cover object-center h-full w-[50%] lg:w-full  "
          src="USDT.jpg"
        />
        {/* <a
                                href='https://wa.me/96170480041' target="_blank" rel="noreferrer" 
                                
                                className='text-gray-200    '
                            >
        <img src="whatsApp.png" alt="whatsapp" width={30} height={30} className="absolute top-28 right-14 md:top-60 md:left-40"/>
        </a> */}
        <img
          className="rounded-xl object-fit object-center h-full w-[50%] lg:w-full relative"
          src="https://minutly-solution-images.s3.amazonaws.com/a5535181-ce42-47f0-b83d-86e938d237b3.jpg"
        />
        
      </div>
    </div>
  );
};

export default OfferSlider;
