import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = ({ currentPage }) => {
  const { getTotalItems } = useCart();

  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">Paradise Nursery</h1>
        <nav className="nav">
          {currentPage !== 'landing' && (
            <Link to="/" className="nav-link">Home</Link>
          )}
          {currentPage !== 'products' && (
            <Link to="/products" className="nav-link">Shop Plants</Link>
          )}
          {currentPage !== 'cart' && (
            <Link to="/cart" className="cart-icon">
              <span className="material-icons">shopping_cart</span>
              <span className="cart-count">{getTotalItems()}</span>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;