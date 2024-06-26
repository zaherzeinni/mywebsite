import React, { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
import { GoHeartFill } from "react-icons/go";
import { FiHeart } from "react-icons/fi";
import { useAuth } from "@/functions/context";

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

import { useRouter } from "next/router";

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
 
  console.log("wishlist========>",wishList,data)

  const router = useRouter();
  const locale = router.locale;
  const id = router.query.id;
  
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      //setProduct({});
      const data = await getDocument("products", id);
      console.log(data, "fetch categories ====>>> 🎭🎭🎭>", data);
      setProduct(data);
      setLoading(false);
    };

    if (id) getProduct();
  }, [id]);






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
    
  console.log(data,"dataaaaaaaaa")


  return (
      
      <SimpleGrid  >

         {/* ------------------------------------Product Cards--------------------------------------- */}

    <Card key={index} maxW="2xs" h={'420px'}    >
      <Box className="flex-col justify-center h-[85%] overflow-hidden  ">
      
      <Link href={`/products/productdetails/single?id=${data.id}`}>
        <Image
          src={data?.images[0]}
          alt="img"
          borderRadius="10px 10px 0px 0px"
          width={"100%"}
          height={"62%"}
          className="hover:scale-110   duration-700 cursor-pointer  "
        />
      </Link>
      
        <Stack mt="6" spacing="3" ml={5}>
          <Heading size="md">{data?.title}</Heading>
          {/* <Text>{data?.desc}</Text> */}
          <Text color="blue.600" fontSize="2xl">
            ${data?.price}   <span>
          {data.discount > 1 && <span className="text-red-500 !text-sm  font-serif font-semibold">on sale %{data.discount}</span>}
          </span>
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
      <CardFooter mt={-8} >
        {data?.instock ? (
        
          <ButtonGroup spacing="1" m={"auto"} className="flex flex-row sm:flex-col lg:flex-row !mt-5" >
            <Button variant="solid" colorScheme="blue" >
              <Link href={`/products/productdetails/single?id=${data.id}`}>Buy now</Link>
            </Button>

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
          <div className="text-center m-auto w-auto h-auto !mt-8 ">
            <img src="/soldout.png" className="h-10 w-40 m-auto " />
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
        </div>
      
      </CardFooter>
    </Card>
    </SimpleGrid>
    
  );
};

export default ProductCard;







// serverside
ProductCard.getInitialProps = async (context) => {
  let products = [];
  //navbar.jsx href={`/products?category=${item.title.toLowerCase()}`}
  const category = context.query.category;
  const subcategory = context.query.subcategory;
  // step 1
  const search = context.query.search;

  //console.log("categoryyyyy", category);

  //console.log("subcategoryyyyy", subcategory);

  //    where("fieldname", "==", fieldValue)

  products = await getDocumentsOrder(
    "products",
    orderBy("timeStamp", "desc"),

    //category i am searching for all products that have a category name / same as subcategory , else null nothing (filteration)
    category
      ? where("category", "==", category)
      : subcategory
      ? where("subcategory", "==", subcategory)
      : null
  )
  return {
    products:products,
    category:category,
    subcategory:subcategory
  }
  }