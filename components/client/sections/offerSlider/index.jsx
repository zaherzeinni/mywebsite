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
    autoplay: false,
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
    <div className=" grid gap-1 my-12  grid-cols-1 overflow-hidde   lg:grid-cols-7   place-items-center !w-[100%] ">
      {/* ---- parent of slider ---- */}

      <div className=" w-full h-full bg-red-200 lg:col-span-5 col-span-2">
        <Carousel {...settings}>
         
          {offerProducts.map((data)=>(
 <div className="h-full w-full">
  <img src={data.images[0]}
  className="h-full md:max-h-[400px] md:h-[400px] w-full"
  />
  </div>
          ))}
          
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
