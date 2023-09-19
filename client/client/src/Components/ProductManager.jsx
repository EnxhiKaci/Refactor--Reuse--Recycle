import React, { useState } from 'react';
import ProductForm from './ProductForm';
import DeleteButton from './DeleteButton';

const ProductManager = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductSubmit = (product) => {
    if (selectedProduct) {
      
      const updatedProducts = products.map((p) =>
        p.id === selectedProduct.id ? { ...p, ...product } : p
      );
      setProducts(updatedProducts);
    } else {
      
      const newProduct = { id: Date.now(), ...product };
      setProducts([...products, newProduct]);
    }
    setSelectedProduct(null);
  };

  const handleDeleteProduct = (productId) => {
    const updatedProducts = products.filter((p) => p.id !== productId);
    setProducts(updatedProducts);
  };

  return (
    <div>
      <h2>Product Manager</h2>
      <ProductForm
        onSubmit={handleProductSubmit}
        initialProduct={selectedProduct || { name: '', price: '' }}
      />
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <DeleteButton onClick={() => handleDeleteProduct(product.id)} />
            <button
              onClick={() => setSelectedProduct(product)}
              className="edit-button"
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductManager;
