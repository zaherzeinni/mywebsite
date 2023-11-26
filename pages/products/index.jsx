import React from 'react';
import { getDocuments } from '@/functions/firebase/getData';
import { useState,useEffect } from 'react';
import ProductsMain from '@/components/admin/product/products';

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
                <div key={index}>
                {item.title}
                {item.category}
                {item.subcategory}
                {item.price}$
                {item.desc}
                {item.instock}
                <img src={item.images} alt="img" width={50} height={50} />
                <video src={item.video} alt="video" width={80} height={80} />
                </div>
            ))}
        </div>
    );
}

export default Index;



// serverside
Index.getInitialProps = async (context) => {
    const Products = await getDocuments("products"); //  []
  
  
    console.log("productsData", Products);
  
  
    return {
      // props from serverside will go to props in clientside
      products: Products,
    };
  };
  