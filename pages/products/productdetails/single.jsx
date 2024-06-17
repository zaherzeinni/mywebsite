// product details of singleproduct

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import parse from "html-react-parser";
import Loader from "@/components/common/Loader";
//import { Avatar, Box, Button, Chip, SimpleGrid, Container } from "@mui/material";
import {
  Box,
  Button,
  SimpleGrid,
  Container,
  Flex,
  Image,
  Grid,
} from "@chakra-ui/react";
//import LazyImage from "components/LazyImage";
//import BazaarRating from "components/BazaarRating";
import { H1, H2, H3, H4, H5, H6 } from "components/Typography";
//import { useAppContext } from "function/context/AppContext";
//import { FlexBox, FlexRowCenter } from "components/ProjectComponents/flex-box";
//import { currency } from "lib";
//import productVariants from "data/product-variants";
//import { serverSideTranslations } from "next-i18next/serverSideTranslations";

//import { loadBundle } from "firebase/firestore";
import {
  getDocument,
  getDocuments,
  getDocumentsOrder,
} from "@/functions/firebase/getData";
import { orderBy, where } from "firebase/firestore";
//import MainLayout from "components/ProjectComponents/mainLayout";
import ClientLayout from "@/components/client/layout/clientLayout";
import Footer from "@/components/client/layout/footer";
import { chakra } from "@chakra-ui/react";
import { FcCheckmark } from "react-icons/fc";
import { VscClose } from "react-icons/vsc";


import { FacebookShareButton, FacebookIcon,FacebookMessengerShareButton,FacebookMessengerIcon,EmailShareButton,EmailIcon,WhatsappIcon,TelegramShareButton,TelegramIcon} from 'react-share';
import { message } from "antd";








import { useAuth } from "@/functions/context";
// import { Button } from "antd";

import {
  Card,
  CardFooter,
  Stack,
  Heading,
  ButtonGroup,
  Text,
} from "@chakra-ui/react";

import { FaSearchPlus } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { FiHeart } from "react-icons/fi";
import { GoHeartFill } from "react-icons/go";


// ================================================================

// ================================================================

const ProductDescription = () => {
  return (
    <Box className="mx-5 ">
      <H3 mb={2}>Specification:</H3>
      <Box>
        Brand: Beats <br />
        Model: S450 <br />
        Wireless Bluetooth Headset <br />
        FM Frequency Response: 87.5 – 108 MHz <br />
        Feature: FM Radio, Card Supported (Micro SD / TF) <br />
        Made in China <br />
      </Box>
    </Box>
  );
};

export default function ProductSingle({products,category,subcategory}) {
  const [product, setProduct] = useState({});
 

  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const locale = router.locale;
  const id = router.query.id;
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

  

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectVariants, setSelectVariants] = useState({
    option: "option 1",
    type: "type 1",
  });

  // HANDLE CHAMGE TYPE AND OPTIONS
  const handleChangeVariant = (variantName, value) => () => {
    setSelectVariants((state) => ({
      ...state,
      [variantName.toLowerCase()]: value,
    }));
  };

  // HANDLE SELECT IMAGE
  const handleImageClick = (ind) => () => setSelectedImage(ind);

  const [getUrl, setGetUrl] = useState();
 

  useEffect(() => {
    const currentUrl = window.location.href;
    console.log(currentUrl, "urlllllllll");
    setGetUrl(currentUrl);
  }, []);




  const copyToClipboard = e => {
    navigator.clipboard.writeText(window.location.toString())
    message.info("URL copied to clipboard successfully")
  }

  const priceAsale = (product.discount/100)*(product.price)

  
  
  

  products.length=4






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




  useEffect(() => {
    const findItemInWishList = wishList.find((item) => item.id === product.id);

    console.log("findItemInWishList==>", findItemInWishList);
    if (findItemInWishList !== undefined) {
      return setWishListExist(false);
    } else {
      setWishListExist(true);
    }
  }, [wishList]);
 
  //cart useEffect for item

  useEffect(() => {
    const findItemInCart = cart?.find((item) => item.id === product.id);

    console.log("findItemInCart==>", findItemInCart);
    if (findItemInCart !== undefined) {
      return setCartExist(false);
    } else {
      setCartExist(true);
    }
  }, [cart]);




console.log(product.category,"product categoryyy")
console.log(product.subcategory,"product SUB categoryyy")
console.log(product.title,"product Titleee")


// const filterProduct = products?.find((item) => item.subcategory === product.subcategory)
// console.log(filterProduct,"filter productttt")


function refreshPage(){  
  window.parent.location = window.parent.location.href; 
                        }

  return (
    <div>
      
  
                {/* <pre></pre>—Monospaced text, preserving spaces and line breaks */}
              {/* <pre> hi       no       100$    <br/>  
              by       yes      200%
        </pre> */}

      <ClientLayout />
      <Box className="">
          


        {loading ? (
          <Loader />
        ) : (
          <Box>
            
            <SimpleGrid gap={5}>
              
              <Box className=" justify-center items-center m-auto space-x-1 md:space-x-10 ">
                <Box className="grid md:flex justify-center align-middle space-x-10 ">
                  <Box className="lg:grid">
                    
                    
                    {/* -------------------Product Image---------------------- */}

            
                    <Box mb={2} className=" rounded-xl md:mt-3 mt-2 lg:!ml-32 imgzoom ">
                      {product?.images && product?.images[0] && (
                        <Image
                          alt={product?.title}
                          src={
                            product?.images && product?.images[selectedImage]
                          }
                          className="sm:w-[30vw] md:w-[40vw] justify-center flex m-auto rounded-lg object-contain"
                          
                        />
                      )}
                    </Box>
               
                 
                    {/* --------------small images to select----------------- */}

                    <Box className="flex justify-center m-auto md:w-[500px] w-auto mb-10 ">
             
                      {product?.images &&
                        product?.images.map((url, ind) => (
                          <Box
                            className="w-[40px] md:w-[60px]  m-auto   rounded-2xl p-1 border-[1px] cursor-pointer imgzoom"
                            key={ind}
                            ml={ind === 0 ? "auto" : 0}
                            onClick={handleImageClick(ind)}
                            mr={
                              ind === product?.images.length - 1
                                ? "auto"
                                : "10px"
                            }
                            borderColor={
                              selectedImage === ind
                                ? "red"
                                : "primary.main"
                            }
                          >
                            <Image className=" rounded-lg  " src={url} />
                          </Box>
                        ))}
                      
                    </Box>
                 
                  </Box>

                  {/* --------------Title and Details----------------- */}
                  
                  
                  <Box className=" !justify-center lg:!mx-24 md:!mx-10 !w-auto mt-4">


                  {/* --------------------PATH OF PRODUCT---------------------- */}
                  
                  
                  <Box className="flex justify-normal  font-semibold text-xs sm:text-md md:text-[10px] lg:text-[14px]">
                  <Link href='/'><Box className=" underline">Home</Box></Link>&nbsp;/
                  &nbsp;<Link href={`/products?category=${product.category}`}><Box className="underline">{product.category}</Box></Link>&nbsp;/
                  &nbsp;<Link href={`/products?subcategory=${product.subcategory}`}><Box className="underline">{product.subcategory}</Box></Link>&nbsp;/
                  &nbsp;<Box>{product.title}</Box>
                  </Box>


                  <Box mt={4} textColor={"blue.600"} fontWeight={'semibold'}>Product Name:</Box>
                    <H1 mb={1} className="text-justify w-[100%] md:w-auto   font-sans md:!text-[20px]">
                      {product.title}
                    </H1>

                    <Box alignItems="center ">
                      <Box className="flex justify-text space-x-1  justify-between">
                      <Box textColor={"blue.600"} fontWeight={'semibold'}>Brand:</Box>
                      <H3 className="md:!text-sm lg:!text-[15px] !m-auto">{product.subcategory}</H3>
                      <Box textColor={"blue.600"} fontWeight={'semibold'} >Type:</Box>
                      <H3 className="md:!text-sm lg:!text-[15px] !m-auto" >{product.category}</H3>
                      </Box>


                      <Box my={1} textColor={"blue.600"} fontWeight={'semibold'}>Description:</Box>
                    </Box>
                        
                    <H4 className=" w-[100%] font-semibold md:!text-sm lg:!text-lg">{product?.desc}</H4>
                    <H4 className=" w-[100%] font-semibold md:!text-sm lg:!text-lg">{product?.desc1}</H4>
                    <H4 className=" w-[100%] font-semibold md:!text-sm lg:!text-lg">{product?.desc2}</H4>
                    <H4 className=" w-[100%] font-semibold md:!text-sm lg:!text-lg">{product?.desc3}</H4>
                    <H4 className=" w-[100%] font-semibold md:!text-sm lg:!text-lg">{product?.desc4}</H4>
                    <H4 className=" w-[100%] font-semibold md:!text-sm lg:!text-lg">{product?.desc5}</H4>
                    

                    <Box pt={1} my={1}>
                    <Box my={0} textColor={"blue.600"}>Price:</Box>
                      {product.discount > 1 ? 
                      <H3 color="primary.main" mb={0.5} lineHeight="1">
                        <span className=" line-through">$ {product.price}</span>  <span className="text-red-500">${product.price-priceAsale} (on sale)</span>
                      </H3>
                        :
                        <H3 color="primary.main" mt={1} lineHeight="1">
                        <span>$ {product.price}</span>
                      </H3>
                        }

                      <Box color="inherit">
                        {product.instock === true ? (
                          <Flex gap={1}>
                            <FcCheckmark className="text-lg top-3 relative" />
                            <H4 className="!my-2">In stock</H4>
                            <div className="mt-2 mx-2">
          {wishListExist ? (
            <FiHeart
              onClick={() => addToWishList(product)}
              className="text-2xl text-red-400  hover:cursor-pointer hover:scale-125   duration-700 "
            />
          ) : (
            <GoHeartFill
              onClick={() => removeFromWishList(product)}
              className="text-2xl text-red-600   hover:cursor-pointer hover:scale-125   duration-700 "
            />
          )}
        </div>

                          </Flex>
                        ) : (
                          <Flex gap={1} mt={5}>
                            <VscClose className="text-red-600 text-lg top-1 relative" />
                            <H4 className="text-red-600">Out of stock</H4>
                          </Flex>
                        )}
                      </Box>
                    </Box>
                    
                        {/* --------------------Social Media to Share:---------------------- */}
                    <Box alignItems="center" mb={2}>
                    
                      {product.instock === true ? (
                        <Box>
                        <Link
                          href={`https://api.whatsapp.com/send?phone=96170480041&text=Salam, I want to reserve this product. %0D%0A *${product.title}* %0D%0A *Price:* ${product.price} $ %0D%0A *URL:* ${getUrl} %0D%0A Thank you!   `}
                          target="_blank"
                        >
                          <Button
                            bg={"green"}
                            className=" hover:!bg-green-700 hover:animate-pulse !text-white"
                            ml={1}
                          >
                            Reserve this Product
                          </Button>
                        </Link>
                        
                        <Box my={1}>
                        <span>
                          <Button className="!bg-blue-600 !text-white hover:!bg-blue-500" mx={1}>Buy Now</Button>
                        
                        {cartExist ? (
                        <Button onClick={()=> addToCart(product)} className="!bg-blue-600 !text-white hover:!bg-blue-500">Add to Cart</Button>
                         ) : (

                        <Button className="text-red-500"
                onClick={() => removeFromCartList(product)}
                variant="ghost"
                colorScheme="red"
              >
                Remove
              </Button>
                      )}

                        </span>

                        </Box>
                        </Box>
                      ) : (
                        <Button className=" hidden hover:!bg-white !bg-white cursor-default"></Button>
                      )}
                    </Box>




                        {/* ------------------Social Media Icons------------------ */}


                    <Box className="my-2">
                      <Box className="mx-1 my-1">
                      Share:
                      </Box>
                    <Flex>
                       
                       
                        <Link href={`https://api.whatsapp.com/send?phone=&text=Salam, please check this product. %0D%0A *${product.title}* %0D%0A *Price:* ${product.price} $ %0D%0A *URL:* ${getUrl} %0D%0A Thank you!   `}
                          target="_blank">
                        <WhatsappIcon className="w-[35px] h-[35px] mx-1 hover:scale-110 duration-500" />
                        </Link>

                        <FacebookShareButton
                          url={getUrl}     //eg. https://www.example.com
                          quotes='qoutess'  //"Your Quotes"
                          hashtag='@' // #hashTag
                          >
                            <FacebookIcon className="w-[35px] h-[35px] mx-1 hover:scale-110 duration-500" />
                          </FacebookShareButton>                         
                                            
                          <FacebookMessengerShareButton
                          url={getUrl}     //eg. https://www.example.com
                          quotes='qoutess'  //"Your Quotes"
                          hashtag='@' // #hashTag
                          >
                            <FacebookMessengerIcon className="w-[35px] h-[35px] mx-1 hover:scale-110 duration-500" />
                          </FacebookMessengerShareButton>    
                          
                          
                          <EmailShareButton
                          url={getUrl}     //eg. https://www.example.com
                          quotes='qoutess'  //"Your Quotes"
                          hashtag='@' // #hashTag
                          >
                            <EmailIcon className="w-[35px] h-[35px] mx-1 hover:scale-110 duration-500" />
                          </EmailShareButton>    


                          <TelegramShareButton
                          url={getUrl}     //eg. https://www.example.com
                          quotes='qoutess'  //"Your Quotes"
                          hashtag='@' // #hashTag
                          >
                            <TelegramIcon className="w-[35px] h-[35px] mx-1 hover:scale-110 duration-500" />
                          </TelegramShareButton>    




                        <button onClick={copyToClipboard} className="w-[35px] h-[35px] mx-1 hover:scale-110 duration-500">
                        <img src="/copylink-s.jpg" alt="copylink" />
                        </button>

                      </Flex>
                    </Box>
                  
                  
                  </Box>
                </Box>

                {/* <ProductDescription  /> */}
              </Box>
            </SimpleGrid>
          </Box>
        )}
      </Box>





            {/* ----------------------------LATEST PRODUCTS------------------------------------ */}
              <br/>
            <hr></hr>
            <h4 className="sm:text-lg md:text-5xl text-3xl tracking-wide md:tracking-wider font-bold we-use-title3">
              Latest Products
            </h4>
        
  
          <div className="flex justify-center">
          <SimpleGrid columns={[1,1,2,4]} gap={3} m={5} >
          
         {products.map((item,index)=>(
          <div key={index}>
            
              <Box className="!flex justify-center items-center"  >
      
    <Card key={index} maxW="xs" w={250} h={'420px'} gap={1} mx={2}  >
      <Box className="flex-col justify-center h-[80%] overflow-hidden ">
      
      <Link href={`/products/productdetails/single?id=${item.id}`} >
        <Image
          src={item.images}
          alt="img"
          borderRadius="10px 10px 0px 0px"
          width={"100%"}
          height={"55%"}
          className="hover:scale-110   duration-700 cursor-pointer  "
         
        />
      </Link>
      
        <Stack mt="10" spacing="3" ml={5}>
          <Heading size="md">{item?.title}</Heading>
          {/* <Text>{data?.desc}</Text> */}
          <Text color="blue.600" fontSize="2xl">
            ${item?.price}   <span>
          {item.discount > 1 && <span className="text-red-500 !text-sm  font-serif font-semibold">on sale %{item.discount}</span>}
          </span>
          </Text>
        
          {/* ------------------------------------instock out of stock--------------------------------------- */}
          <Text>
            {item?.instock ? (
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
      <Box >
        {item?.instock ? (
        <Box> 
   
          
          <Link href={`/products/productdetails/single?id=${item.id}`}>
          <Button className="!flex !justify-center !m-auto !w-auto !mt-5">More Details</Button>
          </Link>
          </Box>
        ) : (
          <div className="text-center m-auto w-auto h-auto !mt-5 ">

            <img src="/soldout.png" className="h-10 w-40 mx-auto  " />
          </div>
        )}
 
      
      </Box>
    </Card>

    </Box>
 
          </div>
         ))}
            </SimpleGrid>
          </div>
   

      <Footer />
    </div>
  );
}



// serverside
ProductSingle.getInitialProps = async (context) => {
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