import React from "react";
import Carousel from "react-slick";
import CustomSliderArrow from "../../products/customSliderArrow";
const OfferSlider = ({offerProducts}) => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    className: "md:w-[75%] mx-auto !h-full ",
    nextArrow: <CustomSliderArrow direction={"next"} />,
    prevArrow: <CustomSliderArrow />,
    swipeToSlide: true,
  };
  console.log("imagesssOfferrr ====>" ,offerProducts[0].images)
  return (



<div className=" grid gap-1 my-12 px-12  grid-cols-1 sm:!h-[600px] overflow-hidde   lg:grid-cols-7   place-items-center !w-[100%] ">
{/* ---- parent of slider ---- */}


<div className=" w-full lg:col-span-5 col-span-2 sm:!h-[600px] !h-[100%]">
  <Carousel {...settings}>
    {offerProducts?.map((item, index) => {
      return (
        <div className="w-full !h-[300px] relative sm:!h-[600px] " key={index}>
          <img
            className="w-full !h-[300px] object-cover sm:!h-[600px]  brightness-50   rounded-lg
            "
            src={item?.images[0]}
            alt=""
          />


          <div className="  z-0 absolute  inset-0   text-3xl top-1/2   text-center  text-white ">
            TEXT
          </div>
        </div>
      );
    })}
  </Carousel>
</div>


{/* ----- parent of sideoffer images --- */}


<div className="md:col-span-2 !h-full  flex justify-center lg:grid lg:grid-cols-1  lg:place-items-center gap-4 mt-[50px] lg:mt-[1px]">
  <img
    className="rounded-xl object-cover object-center h-full w-[50%] lg:w-full"
    src="https://i.pcmag.com/imagery/reviews/04jlYF4fsF2M5cejiU8lw7G-2.fit_lim.size_840x473.v1685028816.jpg"
  />


  <img
    className="rounded-xl object-cover object-center h-full w-[50%] lg:w-full"
    src="https://i.pcmag.com/imagery/reviews/04jlYF4fsF2M5cejiU8lw7G-2.fit_lim.size_840x473.v1685028816.jpg"
  />
</div>
</div>

  );
};

export default OfferSlider;
