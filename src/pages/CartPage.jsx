import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import CartItem from '../components/CartItem';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cartItems, getTotalItems, getTotalPrice } = useCart();

  return (
    <div className="cart-page">
      <Header currentPage="cart" />
      <div className="container">
        <h1 className="page-title">Shopping Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty.</p>
            <Link to="/products" className="continue-shopping-btn">Start Shopping</Link>
          </div>
        ) : (
          <>
            <div className="cart-summary">
              <p className="cart-total-items">Items in cart: {getTotalItems()}</p>
              <p className="cart-total-price">Total: ${getTotalPrice().toFixed(2)}</p>
            </div>
            
            <div className="cart-items">
              {cartItems.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
            
            <div className="cart-actions">
              <Link to="/products" className="continue-shopping-btn">Continue Shopping</Link>
              <button className="checkout-btn">Checkout</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;