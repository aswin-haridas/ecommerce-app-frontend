import React, { useState } from 'react';
import styled from 'styled-components';
import Tile from './Tile';
import { products } from '../utils/products';
import { useNavigate } from "react-router-dom";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  padding: 16px;
`;

const categories = ['All', 'Bottoms', 'Topwear', 'Dresses', 'Tops'];

const ImageGrid = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <>
      <h1>Explore Products</h1>
      <div>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            style={{ margin: '0 8px', padding: '8px 16px' }}
          >
            {category}
          </button>
        ))}
      </div>
      <GridContainer>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(({ id, category, file_path, product_name, price, rating }) => (
            <Tile
              key={id}
              imageSrc={file_path}
              altText={`Image of ${product_name}`}
              price={price}
              rating={rating}
              category={category}
              fileName={product_name}
              onClick={() => handleProductClick(id)}
            />
          ))
        ) : (
          <p>No images available</p>
        )}
      </GridContainer>
    </>
  );
};

export default ImageGrid;