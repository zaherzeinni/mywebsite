import React from 'react'
import { Card, Spin } from "antd";
import { GrProductHunt } from "react-icons/gr";
import { PiSubtractSquareDuotone } from "react-icons/pi";
import { TbCategory } from "react-icons/tb";
import { IoMdContacts } from "react-icons/io";

export default function CountCard({cats,subcats,products,users}) {
  return (
    <div>

<div className="max-[325px]:p-1 min-[326px]:p-4 ">
      <div className="flex gap-2 flex-wrap">
        <Card className="min-[500px]:flex-grow max-[500px]:w-full ">
          <div className="flex justify-center items-center gap-2 font-poppins ">
            <div className="bg-[#EDF5F5] max-[500px]:p-1 min-[500px]:p-2 rounded-lg">
            <GrProductHunt  className="text-[#4d40a4] text-s min-[376px]:text-3xl" />
            </div>
            <div className="text-xs md:text-lg">
              <p className="font-bold">Total Products</p>
              <p>{products}</p>
            </div>
          </div>
        </Card>
        <Card className="min-[500px]:flex-grow max-[500px]:w-full">
          <div className="flex justify-center items-center gap-2 font-poppins">
            <div className="bg-[#F9E0D8] max-[500px]:p-1 min-[500px]:p-2 rounded-lg">
              <TbCategory className="text-[#E9967B] text-s min-[376px]:text-3xl" />
            </div>
            <div className="text-xs md:text-lg">
              <p className="font-bold    ">Total Categories</p>
              <p>{cats}</p>
            </div>
          </div>
        </Card>
        <Card className="min-[500px]:flex-grow max-[500px]:w-full ">
          <div className="flex justify-center items-center gap-2 font-poppins">
            <div className="bg-[#E2FF54] max-[500px]:p-1 min-[500px]:p-2 rounded-lg">
              <PiSubtractSquareDuotone className="text-[#00952A] text-s min-[376px]:text-3xl" />
            </div>
            <div className="text-xs md:text-lg">
              <p className="font-bold">Sub Categories</p>
              <p>{subcats}</p>
            </div>
          </div>
        </Card>
        <Card className="min-[500px]:flex-grow max-[500px]:w-full">
          <div className="flex justify-center items-center gap-2 font-poppins">
            <div className="bg-[#ECF6FD] max-[500px]:p-2 min-[500px]:p-2 rounded-lg">
              <IoMdContacts  className="text-[#74C5DF] text-s min-[376px]:text-3xl" />
            </div>
            <div className="text-xs md:text-lg">
              <p className="font-bold">Users</p>
              <p>{users}</p>
            </div>
          </div>
        </Card>
      </div>
     
      
     
    
      
      
      
    </div>
  
    </div>
  )
}