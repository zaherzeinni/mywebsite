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

export default function ProductSingle({products,data,index}) {
  const [product, setProduct] = useState({});
  console.log("🎭🎭🎭=>product.title", product.title);

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
      console.log(data.length, "data lengthhhh");
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
    const findItemInWishList = wishList.find((item) => item.id === products.id);

    console.log("findItemInWishList==>", findItemInWishList);
    if (findItemInWishList !== undefined) {
      return setWishListExist(false);
    } else {
      setWishListExist(true);
    }
  }, [wishList]);

  //cart useEffect for item

  useEffect(() => {
    const findItemInCart = cart?.find((item) => item.id === products.id);

    console.log("findItemInCart==>", findItemInCart);
    if (findItemInCart !== undefined) {
      return setCartExist(false);
    } else {
      setCartExist(true);
    }
  }, [cart]);








  return (
    <div>
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

            
                    <Box mb={2} className=" rounded-xl md:mt-3 mt-2 mx-5 imgbox ">
                      {product?.images && product?.images[0] && (
                        <Image
                          alt={product?.title}
                          src={
                            product?.images && product?.images[selectedImage]
                          }
                          className="sm:w-[30vw] md:w-[27vw] justify-center flex m-auto rounded-lg object-contain"
                        />
                      )}
                    </Box>
               
                 
                    {/* --------------small images to select----------------- */}

                    <Box className="flex justify-center m-auto md:w-[500px] w-auto my-6 ">
             
                      {product?.images &&
                        product?.images.map((url, ind) => (
                          <Box
                            className="w-[40px] md:w-[60px]  m-auto   rounded-2xl p-1 border-[1px] cursor-pointer imgbox"
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
                  <Box className=" justify-center m-auto">
                  <Box>Product Name:</Box>
                    <H1 mb={1} className="text-justify w-[70%] md:w-auto   font-sans">
                      {product.title}
                    </H1>

                    <Box alignItems="center " mb={1}>
                    
                      <Box>Brand:</Box>
                      <H3>{product.subcategory}</H3>
                      <Box>Condition:</Box>
                      <H3>{product.category}</H3>
                      
                      <Box my={2}>Description:</Box>
                    </Box>

                    <Box className=" lg:w-[70%] w-[40%] font-semibold">{product?.desc}</Box>

                    <Box pt={1} my={1}>
                    <Box my={2}>Price:</Box>
                      {product.discount > 1 ? 
                      <H4 color="primary.main" mb={0.5} lineHeight="1">
                        <span className=" line-through">$ {product.price}</span>  <span className="text-red-500">${product.price-priceAsale} (on sale)</span>
                      </H4>
                        :
                        <H4 color="primary.main" mb={0.5} lineHeight="1">
                        <span>$ {product.price}</span>
                      </H4>
                        }

                      <Box color="inherit">
                        {product.instock === true ? (
                          <Flex gap={1}>
                            <FcCheckmark className="text-lg top-3 relative" />
                            <H5 className="!my-2">In stock</H5>
                          </Flex>
                        ) : (
                          <Flex gap={1} mt={5}>
                            <VscClose className="text-red-600 text-lg top-1 relative" />
                            <H5 className="text-red-600">Out of stock</H5>
                          </Flex>
                        )}
                      </Box>
                    </Box>
                    
                        {/* --------------------Social Media to Share:---------------------- */}
                    <Box alignItems="center" mb={2}>
                    
                      {product.instock === true ? (
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



            {/* ----------------------------RELATED PRODUCTS------------------------------------ */}


            <h4 className="sm:text-lg md:text-5xl text-3xl tracking-wide md:tracking-wider font-bold we-use-title3">
              Related Products
            </h4>
        
          <div>
          
         {products.map((item,index)=>(
          <div key={index}>
            
              <Box className="!flex justify-center items-center"  >
      
    <Card key={index} maxW="2xs" h={'450px'}  >
      <Box className="flex-col justify-center h-[80%]  ">
      
      <Link href={`/products/productdetails/single?id=${products.id}`}>
        <Image
          src={item.images}
          alt="img"
          borderRadius="10px 10px 0px 0px"
          width={"100%"}
          height={"71%"}
          className="hover:scale-110   duration-700 cursor-pointer "
        />
      </Link>
      
        <Stack mt="6" spacing="3" ml={5}>
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
      <CardFooter >
        {item?.instock ? (
        
          <ButtonGroup spacing="1" m={"auto"} className="flex flex-row sm:flex-col lg:flex-row !-mb-14" >
            <Button variant="solid" colorScheme="blue">
              <Link href={`/products/productdetails/single?id=${item.id}`}>Buy now</Link>
            </Button>

            {cartExist ? (
              <Button
                onClick={() => addToCart(products)}
                variant="ghost"
                colorScheme="blue"
              >
                Add to cart
              </Button>
            ) : (
              <Button className="text-red-500"
                onClick={() => removeFromCartList(products)}
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

    </Box>
 
          </div>
         ))}
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
    products:products
  }
  }