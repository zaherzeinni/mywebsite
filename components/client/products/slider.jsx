import React from 'react';
import Slider from "react-slick";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { Box,Center,IconButton } from '@chakra-ui/react';
import Image from 'next/image';

// Settings for the slider
const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
        {
          breakpoint: 1424,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },

        {
            breakpoint: 1124,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 800,
            settings: {
              dots: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
        ],
      };
      


const ProdSlider = ({data}) => {

const [slider, setSlider] = React.useState(null);
    return (
        <div mt={22} marginTop={"22"}>
        <Center>
        <Box >
      <IconButton
        aria-label="left-arrow"
        colorScheme="messenger"
        borderRadius="full"
        m="3"
        //position="absolute"
        //left={3}
        //top={3}
        //zIndex={2}
        // onClick={() => slider.current.slickNext()}
        onClick={() => slider.slickPrev()}
      >
        <BiLeftArrowAlt />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme="messenger"
        borderRadius="full"
        //position="absolute"
        //left={55}
        //top={3}
        //zIndex={2}
        // onClick={() => slider.current.slickNext()}
        onClick={() => slider.slickNext()}
      >
        <BiRightArrowAlt />
      </IconButton>
      </Box>
      </Center>

      <Slider {...settings} ref={(slider) => setSlider(slider)}>
  

        {data.map((item,index)=>(
            <div key={index}>
            
            {item.title}
            <Image src={item.image} 
            width={150}
            height={150}
            className=' rounded-full'
            
            />
            </div>
        ))}

      </Slider>
    </div>
    );
}

export default ProdSlider;
