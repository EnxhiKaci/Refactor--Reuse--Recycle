import React, { useState } from 'react';
import ProductForm from '../Components/ProductForm';
import ProductsList from '../Components/ProductsList';

const Main = () => {
  const [products, setProducts] = useState([]); 

  const handleProductSubmit = (product) => {
   
    setProducts([...products, product]); 
  };
  return (
    <>
      <ProductForm onSubmit={handleProductSubmit} />
      <hr />
      <ProductsList products={products} setProducts={setProducts} />
    </>
  );
};

export default Main;