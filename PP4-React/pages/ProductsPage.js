import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
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
        setProducts(mockProducts);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch products');
        setLoading(false);
      }
    }, 1000);
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Our Coffee Products</h2>
      <div>
        {products.map(product => (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            <Link to={`/products/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
