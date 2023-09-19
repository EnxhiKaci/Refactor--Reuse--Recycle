import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const Detail = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.error('Error fetching product details:', err);
      });
  }, [id]);

  const deleteProduct = () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this product?');

    if (confirmDelete) {
      axios
        .delete(`http://localhost:8000/api/products/${id}`)
        .then((res) => {
          console.log(res.data);
          navigate('/products');
        })
        .catch((err) => {
          console.error('Error deleting product:', err);
        });
    }
  };

  return (
    <div>
      <h3>{product.title}</h3>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
      <button onClick={deleteProduct}>Delete</button>
    </div>
  );
};

export default Detail;
