import React from 'react';
import { getDocuments } from '@/functions/firebase/getData';
import { useState,useEffect } from 'react';

const Index = () => {
    
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            setProducts([]);
            const data = await getDocuments('products');
            console.log(data,"fetch Products ====>>>>")
            setProducts(data)
          }
        getProducts();
      }, []);
    

    return (
        <div>
            
            {products.map((item,index)=>(
                <div>
                {item.title}
                {item.category}
                {item.subcategory}
                {item.price}
                {item.desc}
                {item.instock}
                <img src={item.images} width={50} height={50} />
                <video src={item.video} width={80} height={80} />
                </div>
            ))}
        </div>
    );
}

export default Index;
