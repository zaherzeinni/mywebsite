import React from "react";
import { NextSeo } from "next-seo";
import AdvertiseBar from "@/components/common/advertiseBar";
import Navbar from "@/components/client/layout/navbar";
import Footer from "@/components/client/layout/footer";
import { useAuth } from "@/functions/context";
import Link from "next/link";
import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";

import * as Yup from "yup";
import { useFormik } from "formik";

// after checkout ---------->  then order confirmation---------------------------
export default function Checkout() {
  const { cart, removeFromCartList, getTotalPrice } = useAuth();

  if (typeof window !== "undefined") {
    const spans = document.querySelectorAll(".word span");

    spans.forEach((span, idx) => {
      span.addEventListener("click", (e) => {
        e.target.classList.add("active");
      });
      span.addEventListener("animationend", (e) => {
        e.target.classList.remove("active");
      });

      // Initial animation
      setTimeout(() => {
        span.classList.add("active");
      }, 750 * (idx + 1));
    });

    //const shippingPrice = document.querySelector('#radio_2').value;
    //console.log("shipping price",shippingPrice)
  }

  // ---------------------value of price shipping------------------

  // const [shippingPrice, setShippingPrice] = useState();

  // console.log("shippingPrice is:" + shippingPrice);

  // function selector() {
  //   if (subjectid.value != undefined) {
  //     if (subjectid.value == "radio_2") {

  //       // }   else if (subject.value == "Other") {
  //       //     check2()
  //       // }   else if (subject.value == "More information") {
  //       //     check3()
  //     }
  //   }
  // }
  // -------------------form email and address validation using Yup and formik----------
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("First Name is required"),
    lastName: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("last Name is required"),
    email: Yup.string()
      .min(8, "Email must be at least 8 characters")
      .required("Email is required"),
    phone: Yup.string()
      .max(8, "Phone Number must be at least 8 numbers")
      .required("Phone Number is required"),
    city: Yup.string()
      .min(4, "City must be at least 4 characters")
      .required("City is required"),
  });

  const { signInUser } = useAuth();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      city: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      //console.log(values);;
      signInUser(values.firstName);
      signInUser(values.lastName);
      signInUser(values.email);
      signInUser(values.phone);
      signInUser(values.city);

      resetForm();
    },
  });

  return (
    <div>
      <NextSeo
        title="ITPROMAX | Checkout"
        description="ITPROMAX is a small business "
      />
      <AdvertiseBar />
      <Navbar />
      <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
        {/* <a href="/" className="text-2xl font-bold text-gray-800">ITPROMAX</a> */}

        {/* <div className="word">
  <span>I</span>
  <span>T</span>
  <span>P</span>
  <span>R</span>
  <span>O</span>
  <span>M</span>
  <span>A</span>
  <span>X</span>
</div> */}
        <div>
          <h1 className="anton-regular md:!text-4xl lg:!text-7xl !text-2xl  font-bold text-gray-500">
            Checkout
          </h1>
        </div>

        <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
          <div className="relative">
            <ul className="relative flex w-full items-center justify-between space-x-1 md:space-x-2">
              <li className="flex items-center space-x-1 text-left sm:space-x-4">
                <a
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-emerald-700"
                  href="#Order-Summary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </a>
                <span className="font-semibold text-gray-900">
                  Order Summary
                </span>
              </li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <li className="flex items-center space-x-2 text-left sm:space-x-4">
                <a
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white ring ring-blue-600 ring-offset-2"
                  href="#Shipping"
                >
                  2
                </a>
                <span className="font-semibold text-gray-900">Shipping</span>
              </li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <li className="flex items-center space-x-1 text-left sm:space-x-4">
                <a
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white"
                  href="#Payment-Details"
                >
                  3
                </a>
                <span className="font-semibold text-gray-500">
                  Payment Details
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32 ">
        <div className="px-4 pt-8">
          <p id="Order-Summary" className="text-xl font-medium">
            Order Summary
          </p>
          <p className="text-gray-400">
            Check your items. And select a suitable shipping method.
          </p>

          {cart.map((product, index) => (
            <div
              key={index}
              className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6"
            >
              <div className="flex flex-col rounded-lg bg-white sm:flex-row ">
                <div className="hover: scale-110 duration-300  transition-all hover:cursor-pointer imgzoom my-auto">
                  <Link
                    href={`/products/productdetails/single?id=${product.id}`}
                  >
                    <img
                      className="m-auto h-48 w-48 rounded-md border  object-contain object-center align-middle my-auto "
                      src={product.images}
                      alt="image"
                    />
                  </Link>
                </div>
                <div className="flex w-ful flex-col px-4 py-4 m-auto">
                  <Link
                    href={`/products/productdetails/single?id=${product.id}`}
                  >
                    <span className="font-semibold hover:text-blue-600">
                      {product.title}
                    </span>
                  </Link>
                  <span className="float-right text-gray-400">
                    {product.category}
                  </span>
                  <span className="float-right text-gray-400">
                    {product.desc}
                  </span>
                  <span className="float-right text-gray-400">
                    {product.desc1}
                  </span>
                  <span className="float-right text-gray-400">
                    {product.desc2}
                  </span>
                  <span className="float-right text-gray-400">
                    {product.desc3}
                  </span>
                  <span className="float-right text-gray-400">
                    {product.desc4}
                  </span>
                  <span className="float-right text-gray-400">
                    {product.desc5}
                  </span>
                  <p className="text-lg font-bold">$ {product.price}</p>
                </div>
                <div className=" !text-center !flex !m-auto">
                  <Button
                    onClick={() => removeFromCartList(product)}
                    type="button"
                    className=" !font-medium !text-blue-600 hover:!text-red-500"
                  >
                    Remove
                  </Button>
                </div>
              </div>
            </div>
          ))}
          <p id="Shipping" className="mt-8 text-lg font-medium">
            Shipping Methods
          </p>
          <form className="mt-5 grid gap-6">
            <div className="relative">
              <input
                className="peer hidden"
                id="radio_1"
                type="radio"
                name="radio"
                checked
              />
              <span className="peer-checked:border-blue-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
              <label
                className="peer-checked:border-2 peer-checked:border-blue-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                for="radio_1"
              >
                <img
                  className="w-14 object-contain"
                  src="/delivery-truck.png"
                  alt=""
                />
                <div className="ml-5">
                  <span className="mt-2 font-semibold">Free Delivery</span>
                  <p className="text-slate-500 text-sm leading-6 w-40 sm:w-full">
                    delivery inside Beirut estimated time: 2 working days
                  </p>
                </div>
              </label>
            </div>
            <div className="relative">
              <input
                className="peer hidden"
                id="radio_2"
                type="radio"
                name="radio"
                value="radio_2"
              />
              <span className="peer-checked:border-blue-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
              <label
                className="peer-checked:border-2 peer-checked:border-blue-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                for="radio_2"
              >
                <img
                  className="w-14 object-contain"
                  src="/delivery-moto.png"
                  alt=""
                />
                <div className="ml-5">
                  <span className="mt-2 font-semibold">Charge Delivery</span>
                  <p className="text-slate-500 text-sm leading-6 w-40 sm:w-full">
                    delivery estimated time: 24 hours working day
                  </p>
                </div>
              </label>
            </div>
          </form>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
            <p id="Payment-Details" className="text-xl font-medium">
              Payment Details
            </p>
            <p className="text-gray-400">
              Complete your order by providing your payment details.
            </p>
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row  sm:space-x-2">
                {/* -------first Name--------- */}
              <FormControl
                height={"80px"}
                py={"-5"}
                isInvalid={
                  formik.touched.firstName && formik.errors.firstName
                    ? true
                    : false
                }
                id="firstName"
                // isRequired
              >
                <FormLabel
                  for="firstName"
                  className="mt-4 mb-2 block text-sm font-medium"
                >
                  First Name
                </FormLabel>
                <div className="relative">
                  <Input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                    className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Your Full Name"
                  />
                  <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3"></div>
                </div>
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
                {/* ---------last Name-------- */}
              <FormControl
                height={"80px"}
                py={"-5"}
                isInvalid={
                  formik.touched.lastName && formik.errors.lastName
                    ? true
                    : false
                }
                id="lastName"
                // isRequired
              >
              <FormLabel
                  for="lastName"
                  className="mt-4 mb-2 block text-sm font-medium"
                >
                  Last Name
                </FormLabel>
                <div className="relative">
                  <Input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                    className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Your Last Name"
                  />
                  <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3"></div>
                </div>
                <FormErrorMessage>{formik.errors.lastName}</FormErrorMessage>
                </FormControl>
              </div>
                {/* ---------------email and phone number-------------------- */}
              <div className="flex flex-col sm:flex-row  sm:space-x-2">
                {/* ---------email--------- */}
              
              <FormControl
                height={"80px"}
                py={"-5"}
                isInvalid={
                  formik.touched.email && formik.errors.email
                    ? true
                    : false
                }
                id="email"
                // isRequired
              >
                <FormLabel
                  for="email"
                  className="mt-4 mb-2 block text-sm font-medium"
                >
                  Email
                </FormLabel>
                <div className="relative ">
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    required
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Your Email"
                  />
                </div>
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
                {/* -----------phone------------ */}
              <FormControl
                height={"80px"}
                py={"-5"}
                isInvalid={
                  formik.touched.phone && formik.errors.phone
                    ? true
                    : false
                }
                id="phone"
                // isRequired
              >
                <FormLabel
                  for="phone"
                  className="mt-4 mb-2 block text-sm font-medium"
                >
                  Phone Number
                </FormLabel>
                <div className="relative">
                  <Input
                    type="number"
                    id="phone"
                    name="phone"
                    maxLength={8}
                    required
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                    className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="03xxxxxx"
                  />
                </div>
                <FormErrorMessage>{formik.errors.phone}</FormErrorMessage>
              </FormControl>
             </div>

                {/* --------------------city and street and building address------------------ */}
             
             
              {/* ---------------problem here in billing address------------------ */}
              
                <div className="">
              <FormControl
                height={"80px"}
                py={"-5"}
                isInvalid={
                  formik.touched.city && formik.errors.city
                    ? true
                    : false
                }
                id="city"
                // isRequired
              >

              
              <FormLabel
                for="city"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                Billing Address
              </FormLabel>
              <div className="flex flex-col sm:flex-row">
                <div className="relative flex-shrink-0 sm:w-4/12 md:w-2/8 my-2 sm:my-0">
                  <Input
                    type="text"
                    id="city"
                    name="city"
                    className="w-full rounded-md border border-gray-200 px-4 py-3 !pl-9 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="City"
                  />
                  <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <img
                      className="h-4 w-4 object-contain"
                      src="/Lebanese_flag.png"
                      alt=""
                    />
                  </div>
                </div>
                
                
                {/* -----------------street and building address---------------- */}
                <div className="w-full md:w-6/8 sm:mx-2">
                  <Input
                    type="text"
                    id="address"
                    name="address"
                    className="w-full rounded-md border border-gray-200 py-3 pl-2  text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Street And Building Address"
                  />
                </div>
              </div>

              </FormControl>




              <FormControl
                height={"80px"}
                py={"-5"}
                isInvalid={
                  formik.touched.leavemessage && formik.errors.leavemessage
                    ? true
                    : false
                }
                id="leavemessage"
                // isRequired
              >
              <FormLabel
                for="leavemessage"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                Leave message
              </FormLabel>
              <div className="flex flex-col sm:flex-row">
                <div className="relative flex-shrink-0 sm:w-4/12 md:w-full">
                  <Textarea
                    type="text"
                    id="leavemessage"
                    name="leavemessage"
                    rows={2}
                    className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Leave message about your order or delivery"
                  />
                </div>
               
              </div>
                </FormControl>
                </div>





              <div className="mt-6 border-t border-b py-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Subtotal</p>
                  <p className="font-semibold text-gray-900">
                    $ {getTotalPrice().toFixed(2)}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Shipping</p>
                  <p className="font-semibold text-gray-900">$ 1 </p>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Total</p>
                <p className="text-2xl font-semibold text-gray-900">
                  $ {(getTotalPrice() + 8).toFixed(2)}
                </p>
              </div>
            </div>
            <button className="mt-4 mb-8 w-full rounded-md bg-sky-600 px-6 py-3 font-medium text-white hover:bg-sky-400">
              Place Order
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
