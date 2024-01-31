import React, { useState } from "react";
import { useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import { GoHeartFill } from "react-icons/go";
import { FiHeart } from "react-icons/fi";
import { useAuth } from "@/functions/context";


const ProductCard = ({data,index}) => {


const [wishListExist,setWishListExist] = useState (true)

const {wishList,setWishList,cart,setCart,addToWishList} = useAuth()

// console.log("wishlist========>",wishList,data)


useEffect(() => {
const findItemInWishList = wishList.find((item)=>item.id===data.id)

console.log("findItemInWishList==>",findItemInWishList)
if (findItemInWishList !== undefined) {
    return setWishListExist(false)
} else

{setWishListExist(true)}

}, [wishList]);


    return (
        
        <Fade key={index} bottom>
        <div  className="card w-[95%]  ">
        
          <div className="face  face1 medikal-iç"  
          style={{backgroundImage: `linear-gradient( #424242bd, #424242bd),url(${data?.images[0]})`,backgroundSize:'contain',backgroundRepeat: 'no-repeat' }}
          >
           
           {wishListExist ? 
            <FiHeart onClick={()=>addToWishList(data)} className="text-3xl text-white absolute top-5 right-4" />
            :
            
            <GoHeartFill className="text-3xl text-red-600 absolute top-5 right-4" /> }
            <div className="conten ">
              <h2 className="jav ">{data?.title}</h2>
              <p className="java line-clamp-3 ">
                {data?.desc}
              </p>
              <p>${data?.price}</p>
              <p className=" text-xs font-medium mt-4 bg-slate-500 p-2 w-max rounded-md hover:bg-green-400 hover:cursor-pointer">
                <Link
                  href="/products/product-categoris/medikal"
                  className=" w-max  text-[14px] hover:text-red-500"
                >
                  more details
                </Link>
              </p>
              
            </div>
          </div>
          {/* linear-gradient( #42424246, #42424246), */}
          <div className="face face2 medikal-ön" 
          style={{backgroundImage: `url(${data?.images})`,backgroundSize:'cover',backgroundPosition:'center' }} 
          > 
      <h2 className="!text-2xl sm:!text-3xl  !p-0.5  !rounded-md ">{data?.title}</h2>
          </div>
        </div>
      </Fade>

    );
}

export default ProductCard;
