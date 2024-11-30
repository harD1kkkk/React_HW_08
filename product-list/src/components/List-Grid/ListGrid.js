import React from 'react';
import '../styles/ListGrid.css';

const ListGrid = ({ isGridView, children }) => {
  return (
    <div className={isGridView ? 'grid-view' : 'list-view'}>
      {children}
    </div>
  );
};

export default ListGrid;
