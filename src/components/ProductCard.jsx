import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext.js';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
    const { addToCart } = useContext(CartContext);
  
    return (
      <div className="product-card">
        <img src={product.image} alt={product.title} />
        <div className="product-info">
          <h4>{product.title}</h4>
          <p>${product.price.toFixed(2)}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    );
  };
  
  export default ProductCard;