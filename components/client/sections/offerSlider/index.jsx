import React from "react";
import Carousel from "react-slick";
import CustomSliderArrow from "../../products/customSliderArrow";
const OfferSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    className: "md:w-[75%] mx-auto ",
    nextArrow: <CustomSliderArrow direction={"next"} />,
    prevArrow: <CustomSliderArrow />,
    swipeToSlide: true,
  };

  return (
    <div className=" grid gap-1 my-12  grid-cols-1 overflow-hidde   lg:grid-cols-7   place-items-center !w-[100%] ">
      {/* ---- parent of slider ---- */}

      <div className=" w-full lg:col-span-5 col-span-2">
        <Carousel {...settings}>
          <div className="">
            <img src="Hp Laptop.jpg" alt="" />
          </div>
          <div className="">
            <img src="Hp Laptop.jpg" alt="" />
          </div>
          <div className="">
            <img src="Hp Laptop.jpg" alt="" />
          </div>
        </Carousel>
      </div>

      {/* ----- parent of sideoffer images --- */}

      <div className="md:col-span-2  flex justify-center lg:grid lg:grid-cols-1  lg:place-items-center gap-4 mt-[34px] lg:mt-[1px]">
        <img className="rounded-xl object-cover object-center h-full w-[50%] lg:w-full" src="imacccc.jpg" />

        <img className="rounded-xl object-cover object-center h-full w-[50%] lg:w-full" src="imacccc.jpg" />
      </div>
    </div>
  );
};

export default OfferSlider;
