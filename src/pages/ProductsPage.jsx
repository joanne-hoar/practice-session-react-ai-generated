import { useState, useEffect } from 'react';
import productService from '../services/productService';
import ProductCard from '../components/market/ProductCard';
import './ProductsPage.css'

function ProductsPage(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [count, setCount] = useState(0);
    const [selectedId, setSelectedId] = useState(null); // Track selected product

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

    function selectProduct(product) {
        setSelectedId(product.id);
        console.log(`Selected product: ${product.name}`);
    }

    const selectedProduct = products.find(p => p.id === selectedId);

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
            {selectedProduct && (
                <div className="selected-product-details">
                    <h3>{selectedProduct.name}</h3>
                    <p>{selectedProduct.description}</p>
                </div>
            )}
            <div className="products-grid">
                {products.map(product => (
                    <ProductCard 
                        key={product.id} 
                        product={product}
                        onAction={addToCart}
                        onSelect={selectProduct}
                        isSelected={product.id === selectedId}
                    />
                ))}
            </div>
        </div>
    );
}
export default ProductsPage
