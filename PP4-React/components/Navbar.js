import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/cuppaclickLogo.jpg'; // path to image file

const Navbar = () => (
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
    <img id='logo' src={logo} alt="Logo" />
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link to="/products">Products</Link>
        </li>
        <li class="nav-item">
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </div>
  </div>
  </nav> 
);

export default Navbar;
