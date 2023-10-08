import React from "react";
import {
  Box,
  Stack,
  Text,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Button,
  Heading,
  Center,
  Flex,
  FormErrorMessage,
  InputGroup,
  InputRightElement,
  Spinner,
  Avatar,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon, AddIcon } from "@chakra-ui/icons";
import Link from "next/link";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useAuth } from "@/functions/context";
import { useState, useRef } from "react";
import { v4 as uuid } from "uuid";

import { storage } from "@/functions/firebase";
import {
  getDownloadURL,
  ref as sRef,
  deleteObject,
  uploadBytesResumable,
} from "firebase/storage";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "password must be at least 6 characters")
    .required("Password is required"),
  firstName: Yup.string()
    .min(3, "FirstName must be at least 3 characters")
    .required("FirstName is required"),
  lastName: Yup.string()
    .min(3, "LastName must be at least 3 characters")
    .required("LastName is required"),
});

const RegisterPage = () => {
  const { name, register } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      //  console.log(values);
      register(
        values.email,
        values.password,
        values.firstName,
        values.lastName
      );
      //resetForm();
    },
  });

  const [imageAsset, setImageAsset] = useState(null);
  const [imageId, setId] = useState("");
  const [loadingImage, setImageLoading] = useState(false);
  const [uploadingByte, setUploadingByte] = useState(null);

  const fileInput = useRef();
  const unique_id = uuid(); //12121dfhjgfihdfd

  const UploadImage = (e) => {
    const small_id = unique_id.slice(0, 8);
    const imageFile = e.target.files[0];

    setId(small_id);

    console.log("small id", small_id);
    console.log("image File-->", imageFile);

    // to specify where i well store the image -->{in profile/{id}} profile as folder name and id as imageName
    const storageRef = sRef(storage, `Profile/${small_id}`);
    // then upload image to location in firebase/storage
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    // progress when start image Upload to firebase/storage
    //state_change from firebase
    uploadTask.on("state_change", (snapshot) => {
        // calculate pircentge of uploaded data of image
        const progressBar =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        //  slice the numbers after coma --> 1.3232 --> 1
        const roundUp = Math.trunc(progressBar);
        setImageLoading(true); // for  execute spinner Loading
        setUploadingByte(roundUp); // for show number of progress --> 10%
      },

      (err) => {
        console.log("err when uploading image", err);
      },

      () => {
        // get Uploaded image URL from storage
        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
          // set image Url from storage in imageAsset
          setImageAsset(downloadUrl);
          console.log("downloadurl====>",downloadUrl)
          // then stop loading spinner
          setImageLoading(false);
        });
      }
    );
  };

  return (
    <Flex align={"center"} justify={"center"} bg={"white"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up dev branch
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box rounded={"lg"} bg={"white"} boxShadow={"lg"} p={8}>
          <form onSubmit={formik.handleSubmit}>
            {/* ---------image Upload--- */}
            <Center>
             <Box>
              {loadingImage ? <img src='downloadUrl' alt="image" /> : <Avatar/>}
             </Box>
             
             
              {/* {loadingImage ? () : ()} */}

              {/* <Avatar alt='avatar'  /> */}
            </Center>

            <Stack spacing={4}>
              <HStack className="!h-[120px]">
                <Box h={"full"}>
                  <FormControl
                    py={"2"}
                    isInvalid={
                      formik.touched.firstName && formik.errors.firstName
                        ? true
                        : false
                    }
                    id="firstName"
                    // isRequired
                  >
                    <FormLabel>
                      First Name
                      {/* {profile?.displayName} */}
                    </FormLabel>
                    <Input
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.firstName}
                      //  onChange={e => setFirstName(e.target.value)}
                      //  value={firstName}

                      type="text"
                    />

                    <FormErrorMessage>
                      {formik.errors.firstName}
                    </FormErrorMessage>
                  </FormControl>
                </Box>
                <Box h={"full"}>
                  <FormControl
                    py={"2"}
                    isInvalid={
                      formik.touched.lastName && formik.errors.lastName
                        ? true
                        : false
                    }
                    id="lastName"
                  >
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.lastName}
                      //  onChange={e => setLastName(e.target.value)}
                      //  value={lastName}

                      type="text"
                    />

                    <FormErrorMessage>
                      {formik.errors.lastName}
                    </FormErrorMessage>
                  </FormControl>
                </Box>
              </HStack>
              <FormControl
                isInvalid={
                  formik.touched.email && formik.errors.email ? true : false
                }
                id="email"
                isRequired
              >
                <FormLabel>Email address</FormLabel>
                <Input
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  // onChange={e => setEmail(e.target.value)}
                  // value={email}

                  type="email"
                />

                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={
                  formik.touched.password && formik.errors.password
                    ? true
                    : false
                }
                id="password"
                isRequired
              >
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    // onChange={e => setPassword(e.target.value)}
                    // value={password}
                    type={showPassword ? "text" : "password"}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>

                <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
              </FormControl>

              <Box>
                <Button
                  color={"white"}
                  bg={"blue.400 !important"}
                  mt={"20px"}
                  mb={"5px"}
                  _hover={{
                    bg: "blue.600 !important",
                  }}
                  // open  the hidden input file when click in text upload to open images in computer

                  onClick={() => fileInput.current.click()}
                  leftIcon={<AddIcon />}
                >
                  Upload Image
                  <input
                    onChange={UploadImage}
                    name="uploadimage"
                    hidden
                    ref={fileInput}
                    type="file"
                  />
                </Button>
              </Box>

              <Stack spacing={10} pt={2}>
                <Button
                  type="submit"
                  // onClick={onSubmit}
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400 !important"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500 !important",
                  }}
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user?{" "}
                  <Link href="/">
                    <span>Login</span>
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};

export default RegisterPage;

// in Register
// import { useAuth } from "@/utils/context";

// const {name} = useAuth()
