import React, { useEffect, useState } from 'react';
import ProductList from '../productsList/ProductList';
import Filters from '../Filters/Filters';
import Sorting from '../Sorting/Sorting';
import ListGrid from '../List-Grid/ListGrid'; 
import '../styles/ProductsPage.css';

const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isGridView, setIsGridView] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                if (!response.ok) throw new Error('Failed to fetch products');
                const data = await response.json();
                setProducts(data);
                setFilteredProducts(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    const handleFilter = ({ category, price }) => {
        let filtered = [...products];

        if (category) {
            filtered = filtered.filter((product) => product.category === category);
        }

        if (price) {
            filtered = filtered.filter((product) => product.price <= price);
        }

        setFilteredProducts(filtered);
    };

    const handleSort = (order) => {
        const sortedProducts = [...filteredProducts];
        if (order === 'price-asc') {
            sortedProducts.sort((a, b) => a.price - b.price);
        } else if (order === 'price-desc') {
            sortedProducts.sort((a, b) => b.price - a.price);
        }
        setFilteredProducts(sortedProducts);
    };

    const toggleView = () => {
        setIsGridView(prevState => !prevState); // Toggle between grid and list view
    };

    return (
        <div className="products-page">
            <h1>Products</h1>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p className="error">Error: {error}</p>
            ) : (
                <>
                    <div className="filters-sorting-container">
                        <Filters onFilter={handleFilter} />
                        <Sorting onSort={handleSort} />
                    </div>
                    <div className="list-grid-toggle">
                        <button onClick={toggleView}>
                            {isGridView ? 'Switch to List View' : 'Switch to Grid View'}
                        </button>
                    </div>
                    {/* Wrap ProductList with ListGrid */}
                    <ListGrid isGridView={isGridView}>
                        <ProductList products={filteredProducts} />
                    </ListGrid>
                </>
            )}
        </div>
    );
};

export default ProductsPage;
