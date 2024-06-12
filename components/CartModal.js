//Tailwind CSS Shopping Carts
//https://tailwindui.com/components/ecommerce/components/shopping-carts

import { Fragment, useState } from 'react'
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
// const products = [
//   {
//     id: 1,
//     name: 'Throwback Hip Bag',
//     href: '#',
//     color: 'Salmon',
//     price: '$90.00',
//     quantity: 1,
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
//     imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
//   },
// ]

export default function CartModal({showCart,setShowCart,cart}) {
  //const [open, setOpen] = useState(true)

  return (
    <Transition show={showCart}>
      <Dialog className="relative z-10" onClose={setShowCart}>
        <TransitionChild
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-300 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <TransitionChild
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <DialogPanel className="pointer-events-auto w-screen max-w-md mt-24">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <DialogTitle className="text-lg font-medium text-gray-900">Shopping cart</DialogTitle>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setShowCart(false)}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {cart.map((product) => (
                              <li key={product.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 p-1 hover: scale-125 duration-300  transition-all hover:cursor-pointer imgzoom">

                                 <Link href={`/products/productdetails/single?id=${product.id}`}>  
                                  <img
                                    src={product.images}
                                    alt={product.imagesAlt}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </Link>
                                </div>


                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a href={product.href}>{product.title}</a>
                                      </h3>
                                      <p className="ml-4">${product.price}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">{product.desc}</p>
                                    <p className="mt-1 text-sm text-gray-500">{product.subcategory}</p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">{product.category}</p>

                                    <div className="flex">
                                      <button

                                        type="button"
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>$262.00</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Checkout
                        </a>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or{' '}
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => setShowCart(false)}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}












// // CartModal.js
// import React, { useState, useEffect } from 'react';
// import { Button, Modal } from 'react-bootstrap';

// const CartModal = ({showCart,setShowCart,cart}) => {
  
//   const [showModal, setShowModal] = useState(false);
//   const [cartItems, setCartItems] = useState([]);

// //   useEffect(() => {
// //     // Recupera os itens do localStorage quando o componente é montado
// //     const items = JSON.parse(localStorage.getItem('cart')) || [];
// //     setCartItems(items);
// //   }, []);

//         //setCartItems(cart);

//   const getTotalPrice = () => {
//     // Calcula o total da compra somando o preço de todos os produtos no carrinho
//     return cart.reduce((total, item) => total + item.price, 0);
//   };

//    const handleClose = () => setShowModal(false);
//    const handleShow = () => setShowModal(true);
  
//   //const handleClose = () => setShowCart(false);
//   //const handleShow = () => setShowCart(true);

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//       Open Cart
//       </Button>

//       <Modal show={showCart} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Shopping cart</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {cart.length === 0 ? (
//             <p> cart is empty.</p>
//           ) : (
//             <ul>
//               {cart.map((item) => (
//                 <li key={item.id}>
//                   <h3>{item.name}</h3>
//                   <p>Price: ${item.price.toFixed(2)}</p>
//                 </li>
//               ))}
//             </ul>
//           )}
//           <h3>Total Price: ${getTotalPrice().toFixed(2)}</h3>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// };

// export default CartModal;