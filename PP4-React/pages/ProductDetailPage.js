import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      try {
        const mockProducts = [
          { id: 1, title: 'Espresso', description: 'Strong and bold coffee', price: 2.5 },
          { id: 2, title: 'Latte', description: 'Smooth and creamy coffee', price: 3.5 },
          { id: 3, title: 'Cappuccino', description: 'Rich and foamy coffee', price: 3.0 }
        ];
        const foundProduct = mockProducts.find(p => p.id === parseInt(productId));
        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          setError('Product not found');
        }
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch product');
        setLoading(false);
      }
    }, 1000);
  }, [productId]);

  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const newItem = { ...product, quantity: 1 };
    cart.push(newItem);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Item added to cart!');
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price.toFixed(2)}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetailPage;
