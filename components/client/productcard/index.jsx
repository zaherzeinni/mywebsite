import React, { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
import { GoHeartFill } from "react-icons/go";
import { FiHeart } from "react-icons/fi";
import { useAuth } from "@/functions/context";
// import { Button } from "antd";

import {
  Button,
  Card,
  SimpleGrid,
  Box,
  CardFooter,
  Stack,
  Heading,
  ButtonGroup,
  Image,
  Text,
} from "@chakra-ui/react";

import { FaSearchPlus } from "react-icons/fa";
import { FcCheckmark } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";

const ProductCard = ({ data, index }) => {
  const [wishListExist, setWishListExist] = useState(true);
  const [cartExist, setCartExist] = useState(true);
  const {
    wishList,
    setWishList,
    cart,
    setCart,
    addToWishList,
    removeFromWishList,
    addToCart,
    removeFromCartList,
  } = useAuth();

  // console.log("wishlist========>",wishList,data)

  useEffect(() => {
    const findItemInWishList = wishList.find((item) => item.id === data.id);

    console.log("findItemInWishList==>", findItemInWishList);
    if (findItemInWishList !== undefined) {
      return setWishListExist(false);
    } else {
      setWishListExist(true);
    }
  }, [wishList]);

  //cart useEffect for item

  useEffect(() => {
    const findItemInCart = cart?.find((item) => item.id === data.id);

    console.log("findItemInCart==>", findItemInCart);
    if (findItemInCart !== undefined) {
      return setCartExist(false);
    } else {
      setCartExist(true);
    }
  }, [cart]);

  return (
    
      <SimpleGrid  >
    <Card key={index} maxW="xs" h={'500px'}  >
      <Box className="flex-col justify-center h-[80%]  ">
      
      <Link href={`/products/productdetails/single?id=${data.id}`}>
        <Image
          src={data?.images[0]}
          alt="img"
          borderRadius="10px 10px 0px 0px"
          width={"100%"}
          height={"71%"}
          className="hover:scale-110   duration-700 cursor-pointer "
        />
      </Link>
      
        <Stack mt="6" spacing="3" ml={5}>
          <Heading size="md">{data?.title}</Heading>
          {/* <Text>{data?.desc}</Text> */}
          <Text color="blue.600" fontSize="2xl">
            ${data?.price}
          </Text>
          {/* ------------------------------------instock out of stock--------------------------------------- */}
          <Text>
            {data?.instock ? (
              <span className="flex flex-row gap-2 ">
                <FcCheckmark className="text-xl " /> In stock
              </span>
            ) : (
              <span className="flex flex-row gap-2 ">
                <RxCross2 className="text-red-600 text-xl" /> Out of stock
              </span>
            )}
          </Text>
        </Stack>
      </Box>
      {/* <Divider my={3}/> */}
      <CardFooter >
        {data?.instock ? (
        
          <ButtonGroup spacing="1" m={"auto"} className="flex flex-row sm:flex-col lg:flex-row !-mb-14" >
            <Button variant="solid" colorScheme="blue">
              <Link href={`/products/productdetails/single?id=${data.id}`}>Buy now</Link>
            </Button>

            {/* href="/products/product-categoris/medikal" */}
            {/* `/shop/single?id=${item.id}` */}
            
            {/* <Link href={`/productdetails/single?id=${item.id}`}>
              <a>
                <Avatar
                  alt={item.name}
                  src={item.imgUrl}
                  sx={{
                    mx: 2,
                    width: 76,
                    height: 76,
                  }}
                />
              </a>
            </Link> */}




            {cartExist ? (
              <Button
                onClick={() => addToCart(data)}
                variant="ghost"
                colorScheme="blue"
              >
                Add to cart
              </Button>
            ) : (
              <Button className="text-red-500"
                onClick={() => removeFromCartList(data)}
                variant="ghost"
                colorScheme="red"
              >
                Remove
              </Button>
            )}
          </ButtonGroup>
          
        ) : (
          <div className="text-center m-auto w-auto h-auto !-mb-14 ">
            <img src="/soldout.png" className="h-11 w-56 m-auto " />
          </div>
        )}
        {/* ---------------------------wishlist and zoom product details-------------------------------- */}
          
         
        <div >
          {wishListExist ? (
            <FiHeart
              onClick={() => addToWishList(data)}
              className="text-2xl text-red-400 absolute top-5 right-2 hover:cursor-pointer hover:scale-125   duration-700 "
            />
          ) : (
            <GoHeartFill
              onClick={() => removeFromWishList(data)}
              className="text-2xl text-red-600 absolute top-5 right-2 hover:cursor-pointer hover:scale-125   duration-700 "
            />
          )}

          {/* <Link href={`/products/productdetails/single?id=${data.id}`}> */}
            {/* <FaSearchPlus className="  absolute text-xl top-14 right-2 text-gray-400  !font-light  hover:scale-125   duration-700 " /> */}
          {/* </Link> */}
        </div>
      
      </CardFooter>
    </Card>
    </SimpleGrid>
    
  );
};

export default ProductCard;
