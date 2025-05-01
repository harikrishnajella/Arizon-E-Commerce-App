import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext.js';
import { Link } from 'react-router-dom';
import '../styles/MiniCart.css';


const MiniCart = () => {
    const [open, setOpen] = useState(false);
    const { cartItems } = useContext(CartContext);
  
    const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  
    return (
      <div className="mini-cart-wrapper">
        <div className="cart-icon" onClick={() => setOpen(!open)}>
          🛒 <span className="count">{cartItems.length}</span>
        </div>
        {open && (
          <div className="mini-cart-dropdown">
            <h4>Cart Items</h4>
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <>
                <ul>
                  {cartItems.map(item => (
                    <li key={item.id}>
                      <img src={item.image} alt={item.title} />
                      <div>
                        <span>{item.title}</span>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                <p className="subtotal">Subtotal: ${subtotal.toFixed(2)}</p>
                <Link to="/cart" className="view-cart-btn" onClick={() => setOpen(false)}>View Cart</Link>
                <button className="checkout-btn" disabled>Checkout</button>
              </>
            )}
          </div>
        )}
      </div>
    );
  };
  
  export default MiniCart;
