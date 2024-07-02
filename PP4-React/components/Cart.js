import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
    const total = storedCart.reduce((acc, item) => acc + (item.price || 0), 0);
    setTotalPrice(total);
  }, []);

  

  const handleCheckout = () => {
    // Handle checkout logic
    localStorage.removeItem('cart');
    alert('Checkout successful!');
  };

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.map((item, index) => (
        <div key={index}>
          <img src={item.image_url} alt={item.name} width="100" />
          <p>{item.name}</p>
          <p>Price: ${item.price || 'n/a'}</p>
        </div>
      ))}
      <h2>Total: ${totalPrice}</h2>
      <button onClick={handleCheckout}>Checkout</button>
      <Link to="/checkout">Proceed to Checkout</Link>
    </div>
  );
}

export default Cart;
