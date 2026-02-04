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

  return(
    <div className="products-grid"> 
      {
        allProducts.map(product => (
          <ProductCard key={product.id} product={product}/>
        ))
      }
    </div>
  );
}

export default ProductList;
