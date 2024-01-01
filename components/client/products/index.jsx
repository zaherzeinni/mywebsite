import React from 'react';
import { Card } from 'antd';

import { GrAdd } from "react-icons/gr";

const { Meta } = Card;

const AllProducts = ({products}) => {

    return (
        <div className='my-32 grid grid-rows-5 grid-flow-col  gap-2'>
        {products.map((item,index)=>(
  <div>
  <Card
    hoverable
    style={{
      width: 240,
      height:400,
      marginTop:15,
    }}
    cover={<img 
        className='h-[270px]     hover:   border-solid hover:transition-all hover:duration-500 hover:scale-105 hover:shadow-xl  '
        alt="example" src={item.images} />}
  >
    <Meta title={item.title} description={item.desc} />
    <div className='flex gap-2'>
    <div>
    ${item.price} 
    </div>
    <div className='   line-through opacity-40'>
    ${item.price} 
    </div>
    <div className='  px-4 py-4 bg-green-700 absolute bottom-5 right-5 font-semibold shadow-lg rounded-full text-white'>
    
    <div className='     text-xl text-white  stroke-white fill-white '> 
    <GrAdd className='stroke-white fill-white text-white' /> 
    </div>
    
    </div>

    </div>
  </Card>
  </div>
       
        ))}
        </div>
    );
}

export default AllProducts;
