import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1 className="landing-title">Paradise Nursery</h1>
        <p className="landing-description">
          Welcome to Paradise Nursery, your one-stop destination for beautiful, healthy houseplants. 
          We carefully cultivate a wide variety of plants that can transform your space into a lush 
          indoor garden. With over 10 years of experience, our plant specialists can help you find 
          the perfect additions to your home or office.
        </p>
        <Link to="/products" className="get-started-btn">Get Started</Link>
      </div>
    </div>
  );
};

export default LandingPage;