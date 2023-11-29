import React from 'react';
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { IconButton } from '@chakra-ui/react';

const CustomSliderArrow = ({direction,onClick}) => {
    return (
        
        <div className={` ${direction==='next' ? " sm:-right-16 -right-3" : "sm:-left-16 -left-3" } absolute top-[40%] `} onClick={onClick} >
                  <IconButton
        aria-label="left-arrow"
        colorScheme="messenger"
        borderRadius="full"
        className={`${direction==='next' ? "rotate-180" : ""}`}
        zIndex={2}
        w={1}
        h={9}
        bg={'blue.600'}
        fontSize={25}
      >
        <BiLeftArrowAlt />
      </IconButton>
      
        </div>
    );
}

export default CustomSliderArrow;
