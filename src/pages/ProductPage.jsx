import React, { useState } from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const ProductPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', ...new Set(products.map(product => product.category))];
  
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="product-page">
      <Header currentPage="products" />
      <div className="container">
        <h1 className="page-title">Our Plants</h1>
        
        <div className="category-filter">
          {categories.map(category => (
            <button 
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="products-grid">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;