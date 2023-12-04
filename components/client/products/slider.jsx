import React from "react";
import Slider from "react-slick";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { Box, Center, IconButton } from "@chakra-ui/react";
import Image from "next/image";
import CustomSliderArrow from "./customSliderArrow";

// Settings for the slider
const settings = {
  dots: false,
  infinite: true,
  arrows: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  className: "md:w-[600px] mx-auto mt-4 w-[80%] py-12",
  nextArrow: <CustomSliderArrow direction={"next"} />,
  prevArrow: <CustomSliderArrow />,

  responsive: [
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: true,
      },
    },

    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: true,
      },
    },
  ],
};

const ProdSlider = ({ data }) => {
  const [slider, setSlider] = React.useState(null);
  return (
    <div>
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {data.map((item, index) => (
          <div key={index} className="flex-col py-6 justify-center items-center">
            <Image
              src={item.image}
              width={100}
              height={100}
              className="rounded-full w-[130px] h-[130px] mx-auto 
              hover:cursor-pointer hover:border-2  border-solid border-blue-600 hover:transition-all hover:duration-700 hover:scale-110 hover:shadow-2xl"
            />
            <div className=" text-center mt-3 font-semibold text-lg hover:animate-pulse cursor-pointer  hover:text-blue-600">
              {item.title}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProdSlider;
