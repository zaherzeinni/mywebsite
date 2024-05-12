import React from "react";
import { useForm } from "@formcarry/react";

import { CheckCircleIcon } from "@heroicons/react/outline";
import { NextSeo } from "next-seo";
import Navbar from "@/components/client/layout/navbar";
import Footer from "@/components/client/layout/footer";
import Link from "next/link";

import { db } from "@/functions/firebase";
import { addDoc,collection,serverTimestamp } from "@firebase/firestore";

import * as yup from "yup";
import { useFormik } from "formik";


import { Button, Card } from "@chakra-ui/react";

// const FORM_ID = process.env.NEXT_PUBLIC_FORM_ID;

// function ContactUs() {
//   const { state, submit } = useForm({
//     id: FORM_ID,
//   });

  export const Wrapper = (
    ({
      children,
  
      ...rest
    }) => <Card {...rest}>{children}</Card>
  )(({ theme, passwordVisibility }) => ({
    width: 500,
    padding: "2rem 3rem",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },

    ".googleButton": {
      ...googleStyle,
      "&:hover": googleStyle,
    },
    ".agreement": {
      marginTop: 12,
      marginBottom: 24,
    },
  }));

  const ContactUs = () => {
    const sitekey = "6Ldcb5cpAAAAAPWrd2Kk_YCIWOjIVd6lfbsLZ1D9";


const initialValues = {
  email: "",
  name: "",
  subject: "",
  description: "",

  phone: "",
  newsletter: "",
};

const formSchema = yup.object().shape({
  name: yup.string().required("name is required"),
  description: yup.string().required("message is required"),
  subject: yup.string().required("subject is required"),

  phone: yup.number().required("phone number is required"),
  email: yup.string().email("invalid email").required("Email is required"),
  //agreements: yup.Boolean().required("agreements is required"),
});

const handleFormSubmit = async (values) => {
  console.log(values);

  if (news) {
    // add user to firebase

    const data = {
      name: values.name,
      email: values.email,
      phone: values.phone,
    };

    await addDoc(collection(db, "news"), data);
    enqueueSnackbar("Added to newsletter users", {
      variant: "success",
    });
  }

  const res = await fetch(`/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },

    body: JSON.stringify({
      ...values,
    }),
  });

  console.log("RESPONSE", res);

  if (res?.status === 200) {
    enqueueSnackbar("your form message has sended successfully", {
      variant: "success",
    });
  } else {
    enqueueSnackbar("Some thing wrong", {
      variant: "error",
    });
  }

  //resetForm();
};

const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
useFormik({
  initialValues,
  onSubmit: handleFormSubmit,
  validationSchema: formSchema,
});

  return (
    <>
      <NextSeo
        title="Contact Us | ITPROMAX"
        description="ITPROMAX is a small business "
      />
      <Navbar/>
      <div>
        {/* group-hover:scale-105 transition-all duration-700 ease-in-out */}
        <img
          src="/contactus.jpg"
          alt="contactus-image"
          className=" relative  h-[100%]  max-w-screen-3xl w-full    md:!h-[800px] object-fit mx-auto "
        />
      </div>
      <div>
        <h1 className="anton-regular   opacity-70 absolute md:top-[8%] mx-2 sm:top-[30%] lg:top-[10%] top-[10%] md:right-[35%] lg:right-[65%]   w-96 text-white md:mx-32 md:!text-7xl !text-3xl  font-bold ">
          Contact Us
        </h1>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 md:py-16 lg:px-8">
        <section>
          <div className=" font-semibold text-lg text-justify">We are here to answer all your questions and help you with everything you need.You can reach us by phone or email at any time.We promise to provide support and advice to get the most out of our products.</div>
          <p className="my-4 text-lg duration-200 hover:text-rose-600 md:justify-start">
            <a
              target={"_blank"}
              rel="noopener noreferrer"
              href="https://maps.app.goo.gl/aVHAza3KnaQqYdfy6"
            >
              <strong>Address:</strong> Lebanon, Beirut - Hamra Street
            </a>
          </p>
        </section>
     
        <div className="md:grid grid-cols-1 gap-5 py-4 md:grid-cols-2 md:py-8 flex  flex-col-reverse">
          <section className="h-64 md:h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6623.454391220492!2d35.47801366604833!3d33.89667909785311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f17283e7e3ced%3A0x740bcfc330ca9eb0!2sHamra%2C%20Beirut!5e0!3m2!1sen!2slb!4v1706309292921!5m2!1sen!2slb"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-lg"
            />
          </section>
          <section className="">
            <div className="rounded-lg bg-white p-8 drop-shadow-lg lg:col-span-3 lg:p-12">
             
            
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="sr-only" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="w-full rounded-lg border p-3 text-sm drop-shadow-xl focus-within:outline-none focus:border-rose-600"
                      placeholder="Name"
                      type="text"
                      id="name"
                      name="name"
                      required
                      onBlur={handleBlur}
                      value={values.name}
                      onChange={handleChange}
                      error={!!touched.name && !!errors.name}
                      helperText={touched.name && errors.name}
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="sr-only" htmlFor="email">
                        Email
                      </label>
                      <input
                        className="w-full rounded-lg border p-3 text-sm drop-shadow-xl focus-within:outline-none focus:border-rose-600"
                        placeholder="Email "
                        type="email"
                        id="email"
                        name="email"
                        required
                        onBlur={handleBlur}
                        value={values.email}
                        onChange={handleChange}
                        error={!!touched.email && !!errors.email}
                        helperText={touched.email && errors.email}
                      />
                    </div>
                    <div>
                      <label className="sr-only" htmlFor="phone">
                        Phone
                      </label>
                      <input
                        className="w-full rounded-lg border p-3 text-sm drop-shadow-xl focus-within:outline-none focus:border-rose-600"
                        placeholder="Phone Number"
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        onBlur={handleBlur}
                        value={values.phone}
                        onChange={handleChange}
                        error={!!touched.phone && !!errors.phone}
                        helperText={touched.phone && errors.phone}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      className="w-full rounded-lg border p-3 text-sm drop-shadow-xl focus-within:outline-none focus:border-rose-600"
                      placeholder="Message"
                      rows={8}
                      id="message"
                      name="description"
                      defaultValue={""}
                      required
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.description}
                      error={Boolean(errors.description && touched.description)}
                      helperText={touched.description && errors.description}
                    />
                  </div>
                  <div className="mt-4">
                    <Button
                      type="submit"
                      variant="contained"
                      className="inline-flex w-full items-center justify-center rounded-lg bg-rose-600 px-5 py-3 text-white sm:w-auto"
                    >
                      <span className="font-medium"> Submit </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-3 h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Button>
                  </div>
                </form>
              
            </div>
          </section>
        </div>
     
      </div>
      <Footer/>
    </>
  );
}

export default ContactUs;