import React from 'react'
import { NextSeo } from "next-seo";
import AdvertiseBar from '@/components/common/advertiseBar';
import Navbar from "@/components/client/layout/navbar";
import Footer from "@/components/client/layout/footer";
import { useAuth } from '@/functions/context';
import Link from 'next/link';
import { Button,FormControl,FormLabel,FormErrorMessage,Input } from '@chakra-ui/react';
import { useState } from 'react';

import * as Yup from "yup";
import { useFormik } from "formik";

// after checkout ---------->  then order confirmation---------------------------
export default function Checkout() {


  const {cart,removeFromCartList,getTotalPrice}=useAuth()

  if (typeof window !== "undefined") {

    const spans = document.querySelectorAll('.word span');

    spans.forEach((span, idx) => {
      span.addEventListener('click', (e) => {
        e.target.classList.add('active');
      });
      span.addEventListener('animationend', (e) => {
        e.target.classList.remove('active');
      });
      
      // Initial animation
      setTimeout(() => {
        span.classList.add('active');
      }, 750 * (idx+1))
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
    email: Yup.string()
      .email("invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "password must be at least 6 characters")
      .required("Password is required"),
  });

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
        title="ITPROMAX | Checkout"
        description="ITPROMAX is a small business "
      />
      <AdvertiseBar/>
      <Navbar/>
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
          <a className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-emerald-700" href="#Order-Summary" 
            ><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg
          ></a>
          <span className="font-semibold text-gray-900">Order Summary</span>
        </li>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <li className="flex items-center space-x-2 text-left sm:space-x-4">
          <a className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white ring ring-blue-600 ring-offset-2" href="#Shipping">2</a>
          <span className="font-semibold text-gray-900">Shipping</span>
        </li>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <li className="flex items-center space-x-1 text-left sm:space-x-4">
          <a className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white" href="#Payment-Details">3</a>
          <span className="font-semibold text-gray-500">Payment Details</span>
        </li>
      </ul>
    </div>
  </div>
</div>
<div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
  <div className="px-4 pt-8">
    <p id="Order-Summary" className="text-xl font-medium">Order Summary</p>
    <p className="text-gray-400">Check your items. And select a suitable shipping method.</p>
    
    {cart.map((product,index)=>(
    <div key={index} className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
    
      <div  className="flex flex-col rounded-lg bg-white sm:flex-row ">
        <div className='hover: scale-110 duration-300  transition-all hover:cursor-pointer imgzoom my-auto'>
        <Link href={`/products/productdetails/single?id=${product.id}`}>  
        <img className="m-auto h-48 w-48 rounded-md border  object-contain object-center align-middle my-auto " src={product.images} alt="image" />
        </Link>
        </div>
        <div className="flex w-ful flex-col px-4 py-4 m-auto">
        <Link href={`/products/productdetails/single?id=${product.id}`}>  
          <span className="font-semibold hover:text-blue-600">{product.title}</span>
          </Link>
          <span className="float-right text-gray-400">{product.category}</span>
          <span className="float-right text-gray-400">{product.desc}</span>
          <span className="float-right text-gray-400">{product.desc1}</span>
          <span className="float-right text-gray-400">{product.desc2}</span>
          <span className="float-right text-gray-400">{product.desc3}</span>
          <span className="float-right text-gray-400">{product.desc4}</span>
          <span className="float-right text-gray-400">{product.desc5}</span>
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
    <p id="Shipping" className="mt-8 text-lg font-medium">Shipping Methods</p>
    <form className="mt-5 grid gap-6">
      <div className="relative">
        <input className="peer hidden" id="radio_1" type="radio" name="radio" checked />
        <span className="peer-checked:border-blue-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
        <label className="peer-checked:border-2 peer-checked:border-blue-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_1">
          <img className="w-14 object-contain" src="/delivery-truck.png" alt="" />
          <div className="ml-5">
            <span className="mt-2 font-semibold">Free Delivery</span>
            <p className="text-slate-500 text-sm leading-6 w-40 sm:w-full">delivery estimated time: 2 working days</p>
          </div>
        </label>
      </div>
      <div className="relative">
        <input className="peer hidden" id="radio_2" type="radio" name="radio" value="radio_2"
        
        />
        <span className="peer-checked:border-blue-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
        <label className="peer-checked:border-2 peer-checked:border-blue-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_2">
          <img className="w-14 object-contain" src="/delivery-moto.png" alt="" />
          <div className="ml-5">
            <span className="mt-2 font-semibold">Charge Delivery</span>
            <p className="text-slate-500 text-sm leading-6 w-40 sm:w-full">delivery estimated time: 24 hours working day</p>
          </div>
        </label>
      </div>
    </form>
  </div>
  <form onSubmit={formik.handleSubmit}>
  <div  className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
    <p id='Payment-Details'className="text-xl font-medium">Payment Details</p>
    <p className="text-gray-400">Complete your order by providing your payment details.</p>
    <div className="">
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
      <FormLabel for="email" className="mt-4 mb-2 block text-sm font-medium">Email</FormLabel>
      <div className="relative">
        <Input type="email" id="email" name="email" required
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}                   className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="youremail@gmail.com" />
        
        <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
          {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
          </svg> */}
        </div>
      </div>
      <FormErrorMessage>
                        {formik.errors.email}
                      </FormErrorMessage>
                </FormControl>
      <label for="card-holder" className="mt-4 mb-2 block text-sm font-medium">Card Holder</label>
      <div className="relative">
        <input type="text" id="card-holder" name="card-holder" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Your full name here" />
        <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
          </svg>
        </div>
      </div>
      <label for="card-no" className="mt-4 mb-2 block text-sm font-medium">Card Details</label>
      <div className="flex">
        <div className="relative w-7/12 flex-shrink-0">
          <input type="text" id="card-no" name="card-no" className="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="xxxx-xxxx-xxxx-xxxx" />
          <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
            <svg className="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
              <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
            </svg>
          </div>
        </div>
        <input type="text" name="credit-expiry" className="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="MM/YY" />
        <input type="text" name="credit-cvc" className="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="CVC" />
      </div>
      <label for="billing-address" className="mt-4 mb-2 block text-sm font-medium">Billing Address</label>
      <div className="flex flex-col sm:flex-row">
        <div className="relative flex-shrink-0 sm:w-7/12">
          <input type="text" id="billing-address" name="billing-address" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Street Address" />
          <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
            <img className="h-4 w-4 object-contain" src="https://flagpack.xyz/_nuxt/4c829b6c0131de7162790d2f897a90fd.svg" alt="" />
          </div>
        </div>
        <select type="text" name="billing-state" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500">
          <option value="State">State</option>
        </select>
        <input type="text" name="billing-zip" className="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="ZIP" />
      </div>

      
      <div className="mt-6 border-t border-b py-2">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-900">Subtotal</p>
          <p className="font-semibold text-gray-900">$ {getTotalPrice().toFixed(2)}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-900">Shipping</p>
          <p className="font-semibold text-gray-900">$ 1 </p>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm font-medium text-gray-900">Total</p>
        <p className="text-2xl font-semibold text-gray-900">$ {(getTotalPrice()+8).toFixed(2)}</p>
      </div>
    </div>
    <button className="mt-4 mb-8 w-full rounded-md bg-sky-600 px-6 py-3 font-medium text-white hover:bg-sky-400">Place Order</button>
  </div>
  </form>
</div>
<Footer/>
    </div>
  )
}
