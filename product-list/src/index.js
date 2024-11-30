import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ProductsPage from './components/pages/ProductsPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductsPage />
  </React.StrictMode>
);
