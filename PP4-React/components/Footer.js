import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    /* <!-- Footer --> */
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h5>Links</h5>
          <ul class="list-unstyled">
            <li><Link to="/" class="text-light">Home</Link></li>
            <li><Link to="/products" class="text-light">Products</Link></li>
            <li><Link to="/cart" class="text-light">Cart</Link></li>
            <li><Link to="/register" class="text-light">Register</Link></li>
          </ul>
        </div>
        <div class="col-md-4">
          <h5>Contact Info</h5>
          <p class="text-light">123 Coffee St, Coffee City, CA 12345</p>
          <p class="text-light">Email: info@coffeehaven.com</p>
          <p class="text-light">Phone: (123) 456-7890</p>
        </div>
        <div class="col-md-4">
          <h5>Social Media</h5>
          <ul class="list-unstyled">
            <li><a href="#" class="text-light">Facebook</a></li>
            <li><a href="#" class="text-light">Twitter</a></li>
            <li><a href="#" class="text-light">Instagram</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  );
}

export default Footer;
