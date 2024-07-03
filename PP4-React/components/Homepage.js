import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div>
          {/* <!-- Hero Image/Slider --> */}
      <div className="hero">
        <h1>Welcome to CuppaClick</h1>
        <p>Discover our exclusive coffee blends and accessories</p>
      </div>

      {/* <!-- Categories --> */}
      <div className="container categories">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Coffee Beans</h5>
                <p className="card-text">Explore our variety of premium coffee beans.</p>
                <Link to="/products" className="btn btn-primary">Shop Now</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Beverages</h5>
                <p className="card-text">Delicious ready-to-drink coffee beverages.</p>
                <Link to="/products" className="btn btn-primary">Shop Now</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Accessories</h5>
                <p className="card-text">High-quality coffee making accessories.</p>
                <Link to="/products" className="btn btn-primary">Shop Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Featured Products --> */}
      <div className="container featured-products">
        <h2 className="text-center">Featured Products</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="https://cdn.luxe.digital/media/20230226135738/best-coffee-beans-brands-for-wellness-review-luxe-digital-1-780x520.jpg" className="card-img-top" alt="Product 1"/>
              <div className="card-body">
                <h5 className="card-title">Whole Bean Coffee</h5>
                <p className="card-text">Fresher, richer flavor compared to pre-ground coffee because they retain their essential oils and flavors until they are ground just before brewing</p>
                <a href="#" className="btn btn-primary">Buy Now</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://cdn.shopify.com/s/files/1/0660/8571/6215/files/Frappuccino.jpg?v=1695722115" className="card-img-top" alt="Product 2"/>
              <div className="card-body">
                <h5 className="card-title">Java Chip Frappuccino</h5>
                <p className="card-text">Coffee blended with chocolate chips, milk, and ice, topped with whipped cream..</p>
                <a href="#" className="btn btn-primary">Buy Now</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://sc04.alicdn.com/kf/H57a6b8371b064250bd08da1df9c7c42e5.jpg" className="card-img-top" alt="Product 3"/>
              <div className="card-body">
                <h5 className="card-title">Coffee Accessories Gift</h5>
                <p className="card-text">Coffee accessories make wonderful gifts for coffee enthusiasts. </p>
                <a href="#" className="btn btn-primary">Buy Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
