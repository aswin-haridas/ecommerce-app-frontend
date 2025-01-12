import React from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '../utils/products';

const Products = () => {
  const navigate = useNavigate();

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div>
      {products.map(product => (
        <div key={product.id} onClick={() => handleProductClick(product.id)}>
          <img src={product.file_path} alt={product.product_name} />
          <h2>{product.product_name}</h2>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price}</p>
          <p>Rating: {product.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
