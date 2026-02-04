const products = [
    {
      id: 1,
      name: "Laptop",
      description: "High-performance laptop for professionals"
    },
    {
      id: 2,
      name: "Tablet",
      description: "Portable tablet for everyday use"
    },
    {
      id: 3,
      name: "Smartphone",
      description: "Latest smartphone with advanced features"
    },
    {
      id: 4,
      name: "Headphones",
      description: "Noise-cancelling wireless headphones"
    },
    {
      id: 5,
      name: "Smart Watch",
      description: "Fitness tracker and smartwatch"
    },
    {
      id: 6,
      name: "Camera",
      description: "Professional digital camera"
    }
];

class ProductService {
  getAllProducts() {
    // Return Promise with 2-second delay (simulates API call)
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });
  }

  getProductById(id) {
    return products.find(product => product.id === id);
  }
}

export default new ProductService();
