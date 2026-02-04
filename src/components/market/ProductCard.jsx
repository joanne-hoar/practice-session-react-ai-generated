import './ProductCard.css';

function ProductCard({product, onAction, onSelect, isSelected}) {
    return(
        <div 
            className={`product-card ${isSelected ? 'selected' : ''}`}
            onClick={() => onSelect && onSelect(product)}
        >
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <button
                className="add-btn"
                onClick={(e) => {
                    e.stopPropagation(); // Prevent card selection when clicking button
                    onAction(product);
                }}
            >
                Add to Cart
            </button>
        </div>
    );
}

export default ProductCard
