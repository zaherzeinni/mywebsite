import React from "react";
import Image from "next/image";
import { NextSeo } from "next-seo";
import Navbar from "@/components/client/layout/navbar";
import Footer from "@/components/client/layout/footer";
//import { H1, Paragraph, H4 } from "components/Typography";
//import { Box, Button, Grid, styled } from "@mui/material";

// styled component
// const TitleBox = styled(Box)(({ theme }) => ({
//   textAlign: "center",
//   "& h1": {
//     fontSize: 40,
//     fontWeight: 600,
//     marginBottom: "10px",
//   },
//   "& div": {
//     width: 200,
//     height: "2px",
//     margin: "auto",
//     background: theme.palette.primary.main,
//   },
// }));

const aboutusdata = [
  {
    a: "Charging Port Repair",
    b: "",
  },
  {
    a: "Digitizer Repair",
    b: "",
  },
  {
    a: "Personal Computer Repair",
    b: "",
  },
  {
    a: "Broken Screen Replacement",
    b: "",
  },
  {
    a: "Tablet Repair",
    b: "",
  },
  {
    a: "Motherboard Repair",
    b: "",
  },
  {
    a: "Motherboard Replacement",
    b: "",
  },
  {
    a: "Macbook Repair",
    b: "",
  },
  {
    a: "Data Recovery & Backup",
    b: "",
  },
  {
    a: "Home & Office Networking",
    b: "",
  },
  {
    a: "System Maintenance",
    b: "",
  },
  {
    a: "Cloud Computing",
    b: "",
  },
];

export default function AboutUs() {
  return (
    <div>
      <Navbar />
      <NextSeo title="ITPROMAX-AboutUs" 
      description="about us"/>
      <div>
        {/* group-hover:scale-105 transition-all duration-700 ease-in-out */}
        <img
          src="/aboutusIMG.jpg"
          alt="about-image"
          className=" relative  h-[100%]  max-w-screen-3xl w-full    md:!h-[800px] object-fit mx-auto "
        />
      </div>
      <div>
        <h1 className="anton-regular  opacity-70 absolute md:top-[5%] mx-2 sm:top-[30%] top-[20%] md:right-[15%] lg:right-[25%]   w-15 text-white md:mx-32 md:!text-7xl !text-3xl  font-bold ">
          ABOUT US
        </h1>
      </div>

      <section
        id="faq"
        aria-labelledby="faq-title"
        className="relative overflow-hidden bg-slate-50 sm:-mt-8"
      >
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <section className=" gap-4 xs:py-10 py-2 px-6">
            <h1 className="mx-auto w-[100%] text-6xl font-bold tracking-tight text-rose-600 sm:text-5xl md:text-7xl mt-9 xs:mt-5">
              About Us
            </h1>
            <article className="grid gap-2 grid-cols-1 mt-10">
              <p className=" w-[100%] md:w-[50%]  my-3 text-justify">
                <b>IT PRO MAX</b> is a small business company located in
                Lebanon,Beirut. It provides you to buy and sell any product such
                as smart phones, desktops and laptops. Moreover, we have many
                Services: Network Communications, Data Cabling, General IT
                Services, Website Hosting, Web Development using REACT & Next JS
                ,HTML,CSS,JS ,also we install Surveillance Systems CCTV cameras.
              </p>
              <h2 className="text-2xl font-bold text-rose-600  w-[90%] md:w-[50%]">
                After-Sales Service Support;
              </h2>
              <p className="   my-3   text-justify w-[90%] md:w-[50%]">
                After-sales service support provided to a customer after the
                product or service has already been purchased. It includes
                warranty service, training, or repair for a product. We provide
                for our customers satisfaction and trusted service and sales.
              </p>
              <h2 className="text-2xl font-bold text-rose-600 w-[90%] md:w-[40%]">
                Many services that customer will get it after purchasing any
                item from us:
              </h2>
              <p className="  w-[100%] md:w-[50%]  my-3 text-justify">
                &bull; <b>Help Desk and Technical Support Services </b>
                after-sales support may come free with the purchase of an item
                and may also be sold as part of a more comprehensive service
                plan. This Service offered through a help or support desk may
                include technical assistance for personal computers, mobile
                phones, software, machinery and a variety of other products.
              </p>
              <p className="  w-[100%] md:w-[50%]  my-3 text-justify">
                &bull; <b>Real-time online support</b> includes email, chat,
                forums, and a social media interface (and monitoring) that
                assists in responding to public complaints. This may include
                handling returns or repairs.
              </p>
              <p className=" w-[100%] md:w-[50%]  my-3 text-justify">
                &bull; <b>Automated customer service lines</b> can give advice
                and solutions to frequent or even more complex issues and
                questions. Typically, rather than employing more human customer
                service representatives, automated responses and bots allow
                customers to easily access support at any time, either by phone
                or online.
              </p>
            </article>
            <h2 className="text-2xl my-10 font-bold text-rose-600  w-[100%] md:w-[50%]">
              Services of Mobiles & Computers:
            </h2>

            <ul
              role="list"
              className="mx-auto mt-2 grid max-w-2xl md:max-w-4xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3 text-justify"
            >
              {aboutusdata.map((item, index) => (
                <li key={index}>
                  <ul role="list" className="flex flex-col gap-y-8">
                    <li>
                      <div className="  ">
                        <h3 className="font-display halfLine text-lg leading-7 text-slate-900 ">
                          - {item.a}
                        </h3>
                      </div>

                      <p className="mt-4 text-sm text-slate-700 text-justify w-[90%] md:w-[80%]">
                        {item.b}
                      </p>
                    </li>
                  </ul>
                </li>
              ))}
            </ul>
          </section>

        </div>
      </section>
      <Footer />
    </div>
  );
}
