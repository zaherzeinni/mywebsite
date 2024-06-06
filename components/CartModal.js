// CartModal.js
import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';

const CartModal = ({showCart,setShowCart,cart}) => {
  
  const [showModal, setShowModal] = useState(false);
  const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     // Recupera os itens do localStorage quando o componente é montado
//     const items = JSON.parse(localStorage.getItem('cart')) || [];
//     setCartItems(items);
//   }, []);

        //setCartItems(cart);

  const getTotalPrice = () => {
    // Calcula o total da compra somando o preço de todos os produtos no carrinho
    return cart.reduce((total, item) => total + item.price, 0);
  };

   const handleClose = () => setShowModal(false);
   const handleShow = () => setShowModal(true);
  
  //const handleClose = () => setShowCart(false);
  //const handleShow = () => setShowCart(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
      Open Cart
      </Button>

      <Modal show={showCart} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cart.length === 0 ? (
            <p> cart is empty.</p>
          ) : (
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  <h3>{item.name}</h3>
                  <p>Price: ${item.price.toFixed(2)}</p>
                </li>
              ))}
            </ul>
          )}
          <h3>Total Price: ${getTotalPrice().toFixed(2)}</h3>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CartModal;