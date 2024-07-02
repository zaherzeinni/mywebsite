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
      {/* -------------------------- new task development website-------------------  */}
    
      <div>
      <img src='https://www.spcdn.org/blog/wp-content/uploads/2023/07/coming-soon-page-cover.png'
      
      className='w-full h-full object-fill'
      />
      </div>

      <div className='hidden'> 
      
      
      <div>
        <img src='/web-development/Web-dev-spinningCircles.png' alt='image' />
      </div>
      <div>
      <img src='/web-development/about-img-w1.jpg' alt='image' />
      </div>
      <div>
      <img src='/web-development/about-img-w2.jpg' alt='image' />
      </div>
      <div>
      <img src='/web-development/about-img-w3.jpg' alt='image' />
      </div>
      

      <div className='m-3'>
      <video width="320" height="240" controls>
      <source src="/web-development/Web-dev-spinningCircles-video.mp4" type="video/mp4"/>
  
Your browser does not support the video tag.
    </video>
      </div>

      </div>


      <Footer />
    </div>
  )
}
