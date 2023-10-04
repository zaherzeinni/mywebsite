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
} from "@chakra-ui/react";
import Link from "next/link";
import * as Yup from "yup";
import { useFormik } from "formik";
// import {db} from '../../functions/firebase/index'


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
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      console.log(values);


      //resetForm();
    },
  });


  return (
    <div className="">
      <Flex
        minH={"100vh"}
        bg={"gray.100"}
        //  to centered  children from top and button
        //align-items
        align={"center"}
        //  to centered children from left and right in flex
        justify={"center"}
      >
        <Stack mx={"auto"} maxW={"lg"} py={12} px={6}>
          {/* ----header--- */}


          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Sign up
            </Heading>


            <Text fontSize={"lg"} color={"blue.400"}>
              To Get Discount %
            </Text>
          </Stack>


          {/* form */}


          <Box px={12} py={14} rounded={"lg"} bg={"white"} boxShadow={"xl"}>
            <form onSubmit={formik.handleSubmit}>
              <Stack spacing={4}>
                {/* // for firstname and LastName */}
                <HStack height={'85px'}>
                  <Box height={'85px'}>
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


                  <Box height={'85px'}>
                    <FormControl
                      py={"2"}
                      isInvalid={
                        formik.touched.lastName && formik.errors.lastName
                          ? true
                          : false
                      }
                      id="lastName"
                      // isRequired
                    >
                      <FormLabel>
                        Last Name
                        {/* {profile?.displayName} */}
                      </FormLabel>
                      <Input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastName}
                        //  onChange={e => setFirstName(e.target.value)}
                        //  value={firstName}


                        type="text"
                      />


                      <FormErrorMessage>
                        {formik.errors.lastName}
                      </FormErrorMessage>
                    </FormControl>
                  </Box>
                </HStack>


                 <FormControl 
                 height={'85px'}
                      py={"2"}
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
                 height={'85px'}
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
                  <Input 
                  type="password" 
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  />
                      <FormErrorMessage>
                        {formik.errors.password}
                      </FormErrorMessage>
                </FormControl>


                <Button mt="10px"
                  _hover={{ bg: "blue.500" }}
                  bg={"blue.400"}
                  color={"white"}
                >
                  Sign up
                </Button>


                <Box align={"center"}>
                  <Text>
                    Already a Register?
                    <Link href={"/auth/login"}>
                      {/* // inline block {span}  */}
                      <Box as="span" color={"blue.400"} className="pl-2">
                        login
                      </Box>
                    </Link>
                  </Text>
                </Box>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Flex>
    </div>
  );
};


export default RegisterPage;
