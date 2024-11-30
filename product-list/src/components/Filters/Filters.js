import React, { useState } from 'react';
import '../styles/Filters.css';

const Filters = ({ onFilter }) => {
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    onFilter({ category: e.target.value, price }); 
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
    onFilter({ category, price: e.target.value }); 
  };

  return (
    <div className="filters">
      <label>
        Category:
        <select value={category} onChange={handleCategoryChange}>
          <option value="">All</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
      </label>
      <label>
        Max Price:
        <input
          type="number"
          value={price}
          onChange={handlePriceChange}
          placeholder="Enter max price"
        />
      </label>
    </div>
  );
};

export default Filters;
