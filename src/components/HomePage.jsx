import React, { useEffect, useState } from 'react';
import '../styles/HomePage.css';
import ProductCard from './ProductCard';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => setError('Failed to load featured products'));
  }, []);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-text">
          <h1>Welcome to Arizon</h1>
          <p>Shop the latest fashion and gadgets at unbeatable prices.</p>
        </div>
      </section>

      <section className="featured">
        <h2>Featured Products</h2>
        {error && <p className="error">{error}</p>}
        <div className="product-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
