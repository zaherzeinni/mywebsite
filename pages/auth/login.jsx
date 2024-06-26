import React from 'react';

import {InputRightElement ,Input,Stack,Box,Flex, Heading, Text, FormControl, FormLabel ,Radio, HStack,Button,FormErrorMessage, InputGroup, Spinner} from '@chakra-ui/react';

import { ViewIcon,ViewOffIcon } from '@chakra-ui/icons';

import * as Yup from "yup";
import { useFormik } from "formik";

import Link from "next/link";

import { useAuth } from '@/functions/context';
import { NextSeo } from 'next-seo';
import AdvertiseBar from '@/components/common/advertiseBar';
import Navbar from "@/components/client/layout/navbar";
import Footer from "@/components/client/layout/footer";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "password must be at least 6 characters")
    .required("Password is required"),
});


const Login = () => {

const {signInUser} = useAuth()
  
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      //console.log(values);;
     signInUser(
      values.email,
      values.password,
     )

      resetForm();
    },
  });

  const [showPassword, setShowPassword] = React.useState(false)

    return (
        <div>
                   <NextSeo
        title="ITPROMAX | Login"
        description="ITPROMAX is a small business "
      />
          <AdvertiseBar/>
          <Navbar/>
        <Flex 
        minH={"55vh"} 
        align={"center"} 
        justify={"center"} 
        bg={"white"}>

        
            <Stack mx={"auto"} maxW={"lg"} py={5} px={6} >

            {/* <img src='/icon.png' className='w-[20%] h-[20%] justify-center m-auto' alt='logo' /> */}

            {/* ----header--- */}
            <Stack align={"center"}>
            <Heading fontSize={"3xl"} textAlign={"center"}>                
                Sign in to your account
                </Heading>
                <Text fontSize={"lg"} color={"gray.600"}>
                to enjoy all of our cool features
                </Text>
                </Stack>

                {/* form text Zaher Zeinni */}

                <Box px="20px" py="35px" rounded={"lg"} bg="white" boxShadow={"2xl"}>
                <form onSubmit={formik.handleSubmit}>

                <Stack spacing={4}>
                    
                <FormControl
                      height={'80px'}
                      py={"-5"}
                      isInvalid={
                        formik.touched.email && formik.errors.email
                          ? true
                          : false
                      }
                      id="email"
                      // isRequired
                    >
                    
                  <FormLabel>Email address</FormLabel>
                  <Input 
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  />
                    <FormErrorMessage>
                        {formik.errors.email}
                      </FormErrorMessage>
                </FormControl>


                <FormControl
                height={'80px'}
                      py={"2"}
                   
                      isInvalid={
                        formik.touched.password && formik.errors.password
                          ? true
                          : false
                      }
                      id="password"
                      // isRequired
                    >
                  <FormLabel>Password</FormLabel>
                  <InputGroup size='md'>
                  <Input 
                  type={showPassword ? 'text' : 'password'}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  />

                <InputRightElement width='3.5rem'>
                        <Button h='1.75rem' size='sm' onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                          {showPassword ? <ViewIcon /> : <ViewOffIcon/>  }
                        </Button>
                      </InputRightElement>
                      </InputGroup>
                      
                      <FormErrorMessage>
                        {formik.errors.password}
                      </FormErrorMessage>
                      
                </FormControl>


                <HStack justifyContent={"space-between"} py={4} >
                    <Box >
                    <Link href={"/auth/register"}>
                      {/* // inline block {span}  */}
                      
                        <Box color="blue.400" _hover={{ color: "blue.500" }}>
                        <span
                        type='submit'
                        _hover={{ bg: "blue.500" }}
                        bg={"blue.400"}
                        color={"white"}
                        ml="115px"
                        
                        >
                        Register Now
                        </span>
                        </Box>
                       
                      </Link>
                </Box>
                <Box color={"blue.400"} _hover={{ color: "blue.500" }}>
                <Link href="/auth/reset">
                    <span>Forgot Password!</span>
                  </Link>
                </Box>
                </HStack>
                
                <Button
                type='submit'
                _hover={{ bg: "blue.500" }}
                bg={"blue.400"}
                color={"white"}
              >
                Sign in
              </Button>
             
                </Stack>
                </form>
                </Box>
                
            </Stack>
        </Flex>
        <Footer/>
        </div>
    );
}

export default Login;

