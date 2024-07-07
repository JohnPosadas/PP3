import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Checkout.css'; // Custom CSS for additional styling

const Checkout = () => {
  const [fullName, setFullName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [address, setAddress] = useState('');
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const [totalPrice, setTotalPrice] = useState(cart.reduce((acc, item) => acc + (item.price || 0), 0));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle checkout logic
    localStorage.removeItem('cart');
    alert('Order placed successfully!');
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Checkout</h1>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card p-4 shadow-lg">
            <h2 className="mb-4">Customer Information</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label htmlFor="fullName" className="form-label">Full Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="fullName" 
                  value={fullName} 
                  onChange={(e) => setFullName(e.target.value)} 
                  placeholder="Enter your full name" 
                  required 
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="contactNumber" className="form-label">Contact Number</label>
                <input 
                  type="tel" 
                  className="form-control" 
                  id="contactNumber" 
                  value={contactNumber} 
                  onChange={(e) => setContactNumber(e.target.value)} 
                  placeholder="Enter your contact number" 
                  required 
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="address" className="form-label">Delivery Address</label>
                <textarea 
                  className="form-control" 
                  id="address" 
                  value={address} 
                  onChange={(e) => setAddress(e.target.value)} 
                  placeholder="Enter your delivery address" 
                  rows="3" 
                  required 
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">Place Order</button>
            </form>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card p-4 shadow-lg">
            <h2 className="mb-4">Order Summary</h2>
            {cart.map((item, index) => (
              <div key={index} className="d-flex justify-content-between mb-2">
                <span>{item.name}</span>
                <span>${item.price || 'n/a'}</span>
              </div>
            ))}
            <h3 className="text-end">Total: ${totalPrice}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
