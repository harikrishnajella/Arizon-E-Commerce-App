import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MiniCart from './MiniCart';
import '../styles/Header.css';

const Header = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <header className="header">
      <div className="logo">Arizon</div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <button onClick={() => setShowCart(!showCart)}>🛒</button>
      </nav>
      {showCart && <MiniCart />}
    </header>
  );
};

export default Header;
