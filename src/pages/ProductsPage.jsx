import { useState, useEffect } from 'react';
import productService from '../services/productService';
import ProductCard from '../components/market/ProductCard';
import './ProductsPage.css'

function ProductsPage(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [count, setCount] = useState(0);

    // useEffect to fetch products on first render
    useEffect(() => {
        productService.getAllProducts()
            .then(data => {
                setProducts(data);
                setLoading(false);
            });
    }, []); // Empty dependency array = run once on mount

    function addToCart(product) {
        setCount((count) => count + 1);
        alert(`Add ${product.name} to cart.`);
    }

    // Show loading state while fetching
    if (loading) {
        return (
            <div>
                <h2>Loading products...</h2>
            </div>
        );
    }

    return(
        <div>
            <h2>Our Products</h2>
            <h3>Items in cart: {count}</h3>
            <div className="products-grid">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} onAction={addToCart}/>
                ))}
            </div>
        </div>
    );
}
export default ProductsPage
