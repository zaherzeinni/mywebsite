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

export default function ProductSingle() {
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
  const [whatsappUrl, setWhatsappUrl] = useState();

  useEffect(() => {
    const currentUrl = window.location.href;
    console.log(currentUrl, "urlllllllll");
    setGetUrl(currentUrl);
  }, []);

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
                    <Box mb={2} className=" rounded-xl md:mt-3 mt-2 mx-5 ">
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
                            className="w-[40px] md:w-[60px]  m-auto   rounded-2xl  border-[1px] cursor-pointer"
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
                                ? "primary.main"
                                : "grey.400"
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
                    <H1 mb={1} className="text-justify w-[70%] md:w-auto">
                      {product.title}
                    </H1>

                    <Box alignItems="center" mb={1}>
                      <Box>Brand:</Box>
                      <H3>{product.subcategory}</H3>
                      <Box my={2}>Description:</Box>
                    </Box>

                    <Box className=" lg:w-[70%] w-[40%] font-semibold">{product?.desc}</Box>

                    <Box pt={1} my={1}>
                    <Box my={2}>Price:</Box>
                      <H4 color="primary.main" mb={0.5} lineHeight="1">
                        $ {product.price}
                      </H4>
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




                    <Box>
                      <Flex>
                        <Link href={`https://api.whatsapp.com/send?phone=&text=Salam, please check this product. %0D%0A *${product.title}* %0D%0A *Price:* ${product.price} $ %0D%0A *URL:* ${getUrl} %0D%0A Thank you!   `}
                          target="_blank" >

                        <img src="/whatsapp-s.png" alt="whatsapp" width={55} height={50}/>
                        </Link>

                        <Link href={`https://www.facebook.com/send?${getUrl} %0D%0A  `}
                          target="_blank" >
                        
                        <img src="/facebook-s.jpg" alt="facebook" width={50} height={45}/>
                        </Link>                        
                        
                        <img src="/instagram-s.jpg" alt="instagram" width={40} height={40}/>
                        <img src="/tiktok-s.jpg" alt="tiktok" width={50} height={40}/>
                        <img src="/copylink-s.jpg" alt="copylink" width={50} height={40}/>
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

      <Footer />
    </div>
  );
}

// <a href="https://api.whatsapp.com/send?phone=96170480041&amp;text=Hello%2C+I+want+reserve+this+product%0D%0A%0D%0A*Open+Box+iPhone+15+Plus+Collection*%0D%0A*Price:* 995%C2%A0%24%0D%0A*URL:* https%3A%2F%2Fwww.khatwtelephone.com%2Flb%2Fproduct%2Fopen-box-iphone-15-plus-collection%2F%0D%0AThank+you%21" target="_blank"><Button bg={"green.400"}  className=" hover:!bg-green-700 hover:animate-ping1 !text-white"  ml={1}>Reserve this Product</Button ></a>
