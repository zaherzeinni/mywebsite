import React from "react";
import Link from "next/link";
import Image from "next/image";
import Marquee from "react-fast-marquee";


// ---------------------------- project Slider after Categories------------------

const ProjectSlider = ({ projects }) => {

  return (


    <div  className=" p-5  rounded-xl  ">
            <h1 className="we-use-title1 sm:text-lg md:text-5xl text-3xl tracking-wide md:tracking-wider font-bold  mb-5 ">
             Our Projects
            </h1>
  
      <Marquee pauseOnHover>
        {projects?.map((item, index) => {
          return (
            <div
              key={index}
              className="   relative h-44 m-4 hover:scale-[1.02]  hover:drop-shadow-none hover:transform  shadow-2xl hover:outline-[1px]  duration-150   "
            >
              <div className="">
                <Image
                  src={item.images[0]}
                  className="!h-44 object-cover rounded-md"
                  width={300}
                  height={200}
                />
              </div>

              <div className=" !rounded-md"></div>
            </div>
          );
        })}
      </Marquee>
      
    </div>


 
  );
};

export default ProjectSlider;
