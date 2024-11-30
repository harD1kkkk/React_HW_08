import React from 'react';
import '../styles/Sorting.css';

const Sorting = ({ onSort }) => {
  const handleSortChange = (e) => {
    onSort(e.target.value); 
  };

  return (
    <div className="sorting">
      <label>
        Sort by:
        <select onChange={handleSortChange}>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </label>
    </div>
  );
};

export default Sorting;
