import React from 'react';

const CheckoutPage = () => {
  const handleCheckout = () => {
    localStorage.removeItem('cart');
    alert('Thank you for your purchase!');
  };

  return (
    <div>
      <h2>Checkout</h2>
      <button onClick={handleCheckout}>Complete Purchase</button>
    </div>
  );
};

export default CheckoutPage;
