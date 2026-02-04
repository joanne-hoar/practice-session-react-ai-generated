import './ProductCard.css';

function ProductCard({product, onAction}) {

    return(
        <div className="product-card">
            <h3>{product.name}</h3>
            <button className="add-btn" onClick={() => onAction(product)}>Add to Cart</button>
        </div>
    );
}

export default ProductCard
