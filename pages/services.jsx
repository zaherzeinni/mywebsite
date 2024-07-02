import React from 'react'
import { NextSeo } from "next-seo";
import AdvertiseBar from "@/components/common/advertiseBar";
import Navbar from "@/components/client/layout/navbar";
import Footer from "@/components/client/layout/footer";

export default function Services() {
  return (
    <div>
            <NextSeo title="Services | ITPROMAX" 
      description="services"/>

      <AdvertiseBar />
      <Navbar />

      <img src='https://www.spcdn.org/blog/wp-content/uploads/2023/07/coming-soon-page-cover.png'
      
      className='w-full h-full object-fill'
      />
      <Footer />
    </div>
  )
}
