import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const ProductUpdate = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({
    name: '',
    price: 0,
    description: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const updateProduct = (e) => {
    e.preventDefault();
    // Add validation here if needed before updating
    if (!product.name || isNaN(product.price) || product.price <= 0) {
      alert('Please provide valid product information.');
      return;
    }

    axios
      .patch(`http://localhost:8000/api/products/edit/${id}`, product)
      .then((res) => {
        console.log(res);
        // Redirect to the product details page or product list page
        navigate(`/products/${id}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Update a Product</h1>
      <form onSubmit={updateProduct}>
        <p>
          <label>Product Name:</label>
          <br />
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
            required
          />
        </p>
        <p>
          <label>Price:</label>
          <br />
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={(e) =>
              setProduct({ ...product, price: parseFloat(e.target.value) })
            }
            required
            min="0"
          />
        </p>
        <p>
          <label>Description:</label>
          <br />
          <input
            type="text"
            name="description"
            value={product.description}
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
          />
        </p>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default ProductUpdate;
