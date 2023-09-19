import React, { useEffect } from 'react';
import axios from 'axios';


const ProductsList = ({ products, setProducts, updated, setUpdated }) => {
 
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [updated, setProducts]);

  const deleteProduct = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8000/api/products/${id}`);
      console.log(response.data);
      setUpdated(!updated);
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  // Check if products is an array before mapping over it
  if (!Array.isArray(products)) {
    return (
      <div>
        <h2>All Products</h2>
        <p>No products available.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>All Products</h2>
      {products.map((product) => (
        <div key={product._id}>
          <p>{product.title}</p>
          <p>Price: {product.price}</p>
          <p>Description: {product.description}</p>
          <button onClick={() => deleteProduct(product._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
