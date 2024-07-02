import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fake-coffee-api.vercel.app/api');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products', error);
      }
    };
    fetchProducts();
  }, []);
  
  return (
   
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
              <img src={product.image_url} alt={product.name} width="100" />
              <p>{product.name}</p>
              <p>{product.description}</p>
              <p>Price: ${product.price || 'n/a' }</p>
              <button onClick={() => {
              const cart = JSON.parse(localStorage.getItem('cart')) || [];
              const updatedCart = [...cart, product];
              localStorage.setItem('cart', JSON.stringify(updatedCart));
              }}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
