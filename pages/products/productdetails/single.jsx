<<<<<<< HEAD
// product details of singleproduct

import Link from "next/link";
import { useState, useEffect } from "react";

import { useRouter } from "next/router";
import parse from "html-react-parser";
import Loader from "@/components/common/Loader";
//import { Avatar, Box, Button, Chip, SimpleGrid, Container } from "@mui/material";
import { Box, Button, SimpleGrid, Container, Flex, Image } from "@chakra-ui/react";
//import LazyImage from "components/LazyImage";
//import BazaarRating from "components/BazaarRating";
import { H1, H2, H3, H6 } from "components/Typography";
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

// ================================================================

// ================================================================

const ProductDescription = () => {
  return (
    <Box>
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

  return (
    <div>
      <ClientLayout />
      <Container
        sx={{
          mb: 6,
        }}
      >
        <Box className="">
          {loading ? (
            <Loader />
          ) : (
            <SimpleGrid >
            
        <Box className="flex justify-center  space-x-10">                         

                {/* --------------small images to select----------------- */}
                <Box className="flex-col my-2 justify-center m-auto w-[300px] h-[300px] ">
                  {product?.images &&
                    product?.images.map((url, ind) => (
                      <Box
                      className="w-[50px]  m-auto    rounded-2xl  border-[1px] cursor-pointer"
                        key={ind}
                        // w={64}
                        // h={64}
                        // minWidth={64}
                        // bgcolor="white"
                        // border="1px solid"
                        // borderRadius="10px"
                        ml={ind === 0 ? "auto" : 0}
                        
                        onClick={handleImageClick(ind)}
                        mr={
                          ind === product?.images.length - 1 ? "auto" : "10px"
                        }
                        borderColor={
                          selectedImage === ind ? "primary.main" : "grey.400"
                        }
                      >
                        <Image  className=' rounded-lg h-16 ' src={url}  />
                      </Box>
                    ))}
                </Box>
                
        <Box className="flex justify-center align-middle space-x-10 ">


                {/* -------------------Product Image---------------------- */}
                <Box  mb={2} className="mx-1">
                  {product?.images && product?.images[0] && (
                    <Image
                      alt={product?.title}
                      width={'100%'}
                      height={'100%'}
                      loading="eager"
                      objectFit="contain"
                      src={product?.images && product?.images[selectedImage]}
                      className=""
                    />
                  )}
                </Box>
                    
                    {/* --------------Title and Details----------------- */}
                  <Box className=" flex w-[600px] text-justify">
                <SimpleGrid className="mt-5" md={6} xs={12}>
                <H1 mb={1}>{product.title}</H1>

                <div>
                  <Box className="mx-4 md:mx-2" alignItems="center" mb={1}>
                    {product?.desc}
                  </Box>
                </div>

                <Box alignItems="center" mb={1}>
                  <Box>Brand:</Box>
                  <H6>Xiaomi</H6>
                </Box>

                <Box alignItems="center" mb={2}>
                  <Box lineHeight="1">Rated:</Box>
                  <Box mx={1} lineHeight="1">
                    <Box color="warn" fontSize="1.25rem" value={4} readOnly />
                  </Box>
                  <H6 lineHeight="1">(50)</H6>
                </Box>

                <Box pt={1} mb={3}>
                  <H2 color="primary.main" mb={0.5} lineHeight="1">
                    $ {product.price}
                  </H2>
                  <Box color="inherit">In Stock Available</Box>
                </Box>

                <Box alignItems="center" mb={2}>
                  <Box>Sold By:</Box>
                  <Link href="/shops/scarlett-beauty" passHref>
                    <H6 ml={1}>Mobile Store</H6>
                  </Link>
                </Box>
              </SimpleGrid>
                  </Box>
        </Box>
        
        </Box>
            


            </SimpleGrid>
          )}

          <ProductDescription />
        </Box>
      </Container>
      <Footer />
    </div>
  );
}
=======
// product details of singleproduct

import Link from "next/link";
import { useState, useEffect } from "react";

import { useRouter } from "next/router";
import parse from "html-react-parser";
import Loader from "@/components/common/Loader";
//import { Avatar, Box, Button, Chip, Grid, Container } from "@mui/material";
import {Img,Box,Button,Grid,Container,Flex} from '@chakra-ui/react'
//import LazyImage from "components/LazyImage";
//import BazaarRating from "components/BazaarRating";
import { H1, H2, H3, H6 } from "components/Typography";
//import { useAppContext } from "function/context/AppContext";
//import { FlexBox, FlexRowCenter } from "components/ProjectComponents/flex-box";
//import { currency } from "lib";
//import productVariants from "data/product-variants";
//import { serverSideTranslations } from "next-i18next/serverSideTranslations";

//import { loadBundle } from "firebase/firestore";
import { getDocument,getDocuments,getDocumentsOrder } from "@/functions/firebase/getData";
import { orderBy, where } from "firebase/firestore";
//import MainLayout from "components/ProjectComponents/mainLayout";
import ClientLayout from "@/components/client/layout/clientLayout";
import Footer from "@/components/client/layout/footer";
import { chakra } from "@chakra-ui/react";

// ================================================================

// ================================================================

const ProductDescription = () => {
  return (
    <Box>
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
  const locale =router.locale
  const id = router.query.id;
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      //setProduct({});
      const data = await getDocument("products", id);
      console.log(data, "fetch categories ====>>> 🎭🎭🎭>", data);
      setProduct(data);
      console.log(data.length,'data lengthhhh')
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

  return (
    <div>
      <ClientLayout/>
      <Container
        sx={{
          mb: 6,
        }}
      >

        <Box className=" mt-[66px]" width="100%">
          {loading ? (
            <Loader />
          ) : (
            <Grid container spacing={3} justifyContent="space-around">
              <Grid item md={6} xs={12} alignItems="center">
                <Box justifyContent="center" mb={6}>
                  {product?.images && product?.images[0] && (
                    <Img
                      alt={product?.title}
                      width={600}
                      height={600}
                      loading="eager"
                      objectFit="contain"
                      src={product?.images && product?.images[selectedImage]}
                    />
                  )}
                </Box>

                <Box overflow="auto">
                  {product?.images &&
                    product?.images.map((url, ind) => (
                      <Flex
                        key={ind}
                        w={64}
                        h={64}
                        minWidth={64}
                        bgcolor="white"
                        border="1px solid"
                        borderRadius="10px"
                        ml={ind === 0 ? "auto" : 0}
                        style={{
                          cursor: "pointer",
                        }}
                        onClick={handleImageClick(ind)}
                        mr={
                          ind === product?.images.length - 1 ? "auto" : "10px"
                        }
                        borderColor={
                          selectedImage === ind ? "primary.main" : "grey.400"
                        }
                      >
                        <Img
                          src={url}
                          variant="square"
                          h={40}
                          w={40}
                        />
                      </Flex>
                    ))}
                </Box>
              </Grid>

              <Grid item md={6} xs={12} alignItems="center">
                <H1 mb={1}>{product.title}</H1>


                <div>
  
   
                    <Box className="mx-4 md:mx-2" alignItems="center" mb={1}>
                    {product?.desc}
                    </Box>
                  
  </div>



                 <Box alignItems="center" mb={1}>
            <Box>Brand:</Box>
            <H6>Xiaomi</H6>
          </Box>

          <Box alignItems="center" mb={2}>
            <Box lineHeight="1">Rated:</Box>
            <Box mx={1} lineHeight="1">
              <Box color="warn" fontSize="1.25rem" value={4} readOnly />
            </Box>
            <H6 lineHeight="1">(50)</H6>
          </Box> 

                 <Box pt={1} mb={3}>
            <H2 color="primary.main" mb={0.5} lineHeight="1">
              $ {product.price}
            </H2>
            <Box color="inherit">Stock Available</Box>
          </Box>

      

          <Box alignItems="center" mb={2}>
            <Box>Sold By:</Box>
            <Link href="/shops/scarlett-beauty" passHref>
             
                <H6 ml={1}>Mobile Store</H6>
             
            </Link>
          </Box> 
              </Grid>





            </Grid>
          )}

          <ProductDescription />
        </Box>
      </Container>
      <Footer/>
    </div>
  );
}




>>>>>>> 403b11c5e3e39313b7f7e9cf314cc103cf609217
