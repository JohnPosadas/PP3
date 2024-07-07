import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cart.css'; // Custom CSS for additional styling

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
    <div className="container my-5">
      <h1 className="text-center mb-4">Your Cart</h1>
      <div className="row">
        {cart.map((item, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100">
              <img src={item.image_url} className="card-img-top" alt={item.name} />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Price: ${item.price || 'n/a'}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-center">Total: ${totalPrice}</h2>
      <div className="text-center">
        <button className="btn btn-primary mx-2" onClick={handleCheckout}>Checkout</button>
        <Link to="/checkout" className="btn btn-secondary mx-2">Proceed to Checkout</Link>
      </div>
    </div>
  );
}

export default Cart;
