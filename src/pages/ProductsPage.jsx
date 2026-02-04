import { useState } from 'react';
import productService from '../services/productService';
import ProductCard from '../components/market/ProductCard';
import './ProductsPage.css'

function ProductsPage(){
    const allProducts = productService.getAllProducts();
    const [count, setCount] = useState(0);

    function addToCart(product) {
        setCount((count) => count + 1);
        alert(`Add ${product.name} to cart.`);
    }

    return(
        <div>
            <h2>Our Products</h2>
            <h3>Items in cart: {count}</h3>
            <div className="products-grid">
                {allProducts.map(product => (
                    <ProductCard key={product.id} product={product} onAction={addToCart}/>
                ))}
            </div>
        </div>
    );
}
export default ProductsPage
