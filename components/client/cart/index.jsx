import React, { useState } from 'react'
import { useEffect } from 'react';
import { getDocuments } from '@/functions/firebase/getData';

export default function CartComponent() {

const [inCart,setInCart]= useState([])


useEffect(() => {
    const getCart = async () => {
        // setAdvert([]);
        const data = await getDocuments('cart');
        console.log(data,"fetch cart ====>>>>")
        setInCart(data)
      }
      getCart();
  }, []);


console.log(inCart,"in carttt")

    return (
    <div>
        this is Cart

        <div>
            {inCart.length}
            
            {inCart.map((item,index)=>(
                <div key={index}>
                    {item.cart[0].desc3}
                </div>
            ))}
        </div>
    </div>
  )
}





// // serverside
// CartComponent.getInitialProps = async (context) => {
//     const cart = await getDocuments("cart"); //  []
 
//     console.log("data_in_cart", cart);
 
//     return {
//       // props from serverside will go to props in clientside
//       cart:cart,
//     };
//   };