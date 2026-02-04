import { useState } from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

function ProductList() {
  const allProducts = [
    {
      id: 1,
      name: "Laptop"   
    },
    {
      id: 2,
      name: "Tablet"
    },
    {
      id: 3,
      name: "Smartphone"
    },
    {
      id: 4,
      name: "Headphones"
    }
  ];

  const [count, setCount] = useState(0);

  function addToCart(product) {
    setCount((count) => count + 1);
    alert(`Add ${product.name} to cart.`);
  }

  return(
    <>
      <h2>Items in cart: {count}</h2>
      <div className="products-grid"> 
        {
          allProducts.map(product => (
            <ProductCard key={product.id} product={product} onAction={addToCart}/>
          ))
        }
      </div>
    </>
  );
}

export default ProductList;
