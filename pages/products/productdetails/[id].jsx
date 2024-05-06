<<<<<<< HEAD
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import parse from "html-react-parser";
import Loader from "@/components/common/Loader";

import { Img, Box, Button, Grid, Container ,Flex} from "@chakra-ui/react";
//import LazyImage from "components/LazyImage";
//import BazaarRating from "components/BazaarRating";
import { H1, H2, H3, H6 } from "components/Typography";
//import { useAppContext } from "contexts/AppContext";
//import { FlexBox, FlexRowCenter } from "components/ProjectComponents/flex-box";
//import { currency } from "lib";
//import productVariants from "data/product-variants";
//import { serverSideTranslations } from "next-i18next/serverSideTranslations";

//import { loadBundle } from "firebase/firestore";
import { getDocument,getDocuments } from "@/functions/firebase/getData";
//import MainLayout from "components/ProjectComponents/mainLayout";

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

export default function ProductInfo({}) {
  const [product, setProduct] = useState({});
  console.log("🎭🎭🎭>IDDDD", product.title);
  const [loacding, setLoading] = useState(false);

  const router = useRouter();
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

  return (
    <div>
      <Container
        sx={{
          mb: 6,
        }}
      >
        <Box className=" mt-[66px]" width="100%">
          {loacding ? (
            <Loader />
          ) : (
            <Grid container spacing={3} justifyContent="space-around">
              <Grid item md={6} xs={12} alignItems="center">
                <Box justifyContent="center" mb={6}>
                  {product?.images && product?.images[0] && (
                    <Img
                      alt={product?.title}
                      width={300}
                      height={300}
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
                        width={64}
                        height={64}
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
                          w={40}
                          h={40}
                          
                        />
                      </Flex>
                    ))}
                </Box>
              </Grid>

              <Grid item md={6} xs={12} alignItems="center">
                <H1 mb={1}>{product?.title}</H1>

                {product?.desc && (
                  <Box className="mx-4 md:mx-2" alignItems="center" mb={1}>
                    {parse(product?.desc)}
                  </Box>
                )}

                {/* <FlexBox alignItems="center" mb={1}>
            <Box>Brand:</Box>
            <H6>Xiaomi</H6>
          </FlexBox>

          <FlexBox alignItems="center" mb={2}>
            <Box lineHeight="1">Rated:</Box>
            <Box mx={1} lineHeight="1">
              <BazaarRating color="warn" fontSize="1.25rem" value={4} readOnly />
            </Box>
            <H6 lineHeight="1">(50)</H6>
          </FlexBox> */}

                {/* <Box pt={1} mb={3}>
            <H2 color="primary.main" mb={0.5} lineHeight="1">
              {currency(price)}
            </H2>
            <Box color="inherit">Stock Available</Box>
          </Box>

      

          <FlexBox alignItems="center" mb={2}>
            <Box>Sold By:</Box>
            <Link href="/shops/scarlett-beauty" passHref>
              <a>
                <H6 ml={1}>Mobile Store</H6>
              </a>
            </Link>
          </FlexBox> */}
              </Grid>
            </Grid>
          )}

          {/* <ProductDescription /> */}
        </Box>
      </Container>
    </div>
  );
}

// export async function getStaticPaths() {

//   const posts = [];
//   try {
//     const postDocs = await getDocuments("products")
//     postDocs.forEach((doc) => {
//       posts.push(doc.id);
//     });
//   } catch (error) {
//     console.log(error);
//   }

//   const paths = posts.map((id) => {
//     return ['en' , 'tr' ,'ar'].map((locale) => {
//         return {
//             params: { id: id },
//             locale: locale,
//         };
//     });
// });

//   return {
//     paths: paths,
//     // posts.map((post) => ({
//     //   params: {
//     //     id: post,
//     //   },
//     // })),
//     fallback: false,
//   };
// }

// export async function getStaticPaths({ locales }) {
//   let blogs = [];
//   try {
//     blogs = await getDocuments("products");
//   } catch (error) {
//     //
//   }
//   const paths = [];
//   blogs.forEach((blog) => {
//     locales.forEach((locale) => {
//       const path = {
//         params: {
//           id: blog.id,
//         },
//         locale: locale,
//       };
//       paths.push(path);
//     });
//   });
//   return { paths, fallback: false };
// }

// export const getStaticProps = async (ctx) => {
//   return {
//     revalidate: 1,
//     props: {
//       ...(await serverSideTranslations(ctx.locale, ["common"])),
//     },
//   };
// };

// export default ProductInfo;
=======
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import parse from "html-react-parser";
import Loader from "@/components/common/Loader";

import { Img, Box, Button, Grid, Container ,Flex} from "@chakra-ui/react";
//import LazyImage from "components/LazyImage";
//import BazaarRating from "components/BazaarRating";
import { H1, H2, H3, H6 } from "components/Typography";
//import { useAppContext } from "contexts/AppContext";
//import { FlexBox, FlexRowCenter } from "components/ProjectComponents/flex-box";
//import { currency } from "lib";
//import productVariants from "data/product-variants";
//import { serverSideTranslations } from "next-i18next/serverSideTranslations";

//import { loadBundle } from "firebase/firestore";
import { getDocument,getDocuments } from "@/functions/firebase/getData";
//import MainLayout from "components/ProjectComponents/mainLayout";

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

export default function ProductInfo({}) {
  const [product, setProduct] = useState({});
  console.log("🎭🎭🎭>IDDDD", product.title);
  const [loacding, setLoading] = useState(false);

  const router = useRouter();
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

  return (
    <div>
      <Container
        sx={{
          mb: 6,
        }}
      >
        <Box className=" mt-[66px]" width="100%">
          {loacding ? (
            <Loader />
          ) : (
            <Grid container spacing={3} justifyContent="space-around">
              <Grid item md={6} xs={12} alignItems="center">
                <Box justifyContent="center" mb={6}>
                  {product?.images && product?.images[0] && (
                    <Img
                      alt={product?.title}
                      width={300}
                      height={300}
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
                        width={64}
                        height={64}
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
                          w={40}
                          h={40}
                          
                        />
                      </Flex>
                    ))}
                </Box>
              </Grid>

              <Grid item md={6} xs={12} alignItems="center">
                <H1 mb={1}>{product?.title}</H1>

                {product?.desc && (
                  <Box className="mx-4 md:mx-2" alignItems="center" mb={1}>
                    {parse(product?.desc)}
                  </Box>
                )}

                {/* <FlexBox alignItems="center" mb={1}>
            <Box>Brand:</Box>
            <H6>Xiaomi</H6>
          </FlexBox>

          <FlexBox alignItems="center" mb={2}>
            <Box lineHeight="1">Rated:</Box>
            <Box mx={1} lineHeight="1">
              <BazaarRating color="warn" fontSize="1.25rem" value={4} readOnly />
            </Box>
            <H6 lineHeight="1">(50)</H6>
          </FlexBox> */}

                {/* <Box pt={1} mb={3}>
            <H2 color="primary.main" mb={0.5} lineHeight="1">
              {currency(price)}
            </H2>
            <Box color="inherit">Stock Available</Box>
          </Box>

      

          <FlexBox alignItems="center" mb={2}>
            <Box>Sold By:</Box>
            <Link href="/shops/scarlett-beauty" passHref>
              <a>
                <H6 ml={1}>Mobile Store</H6>
              </a>
            </Link>
          </FlexBox> */}
              </Grid>
            </Grid>
          )}

          {/* <ProductDescription /> */}
        </Box>
      </Container>
    </div>
  );
}

// export async function getStaticPaths() {

//   const posts = [];
//   try {
//     const postDocs = await getDocuments("products")
//     postDocs.forEach((doc) => {
//       posts.push(doc.id);
//     });
//   } catch (error) {
//     console.log(error);
//   }

//   const paths = posts.map((id) => {
//     return ['en' , 'tr' ,'ar'].map((locale) => {
//         return {
//             params: { id: id },
//             locale: locale,
//         };
//     });
// });

//   return {
//     paths: paths,
//     // posts.map((post) => ({
//     //   params: {
//     //     id: post,
//     //   },
//     // })),
//     fallback: false,
//   };
// }

// export async function getStaticPaths({ locales }) {
//   let blogs = [];
//   try {
//     blogs = await getDocuments("products");
//   } catch (error) {
//     //
//   }
//   const paths = [];
//   blogs.forEach((blog) => {
//     locales.forEach((locale) => {
//       const path = {
//         params: {
//           id: blog.id,
//         },
//         locale: locale,
//       };
//       paths.push(path);
//     });
//   });
//   return { paths, fallback: false };
// }

// export const getStaticProps = async (ctx) => {
//   return {
//     revalidate: 1,
//     props: {
//       ...(await serverSideTranslations(ctx.locale, ["common"])),
//     },
//   };
// };

// export default ProductInfo;
>>>>>>> 346b1a4 (okkk)
