import React from 'react';
import styled from 'styled-components';
import Tile from '../components/Tile';
import { products } from '../utils/products';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  padding: 16px;
`;

const ImageGrid = () => {
  return (
    <>
      <h1>Explore Products</h1>
      <GridContainer>
        {products.length > 0 ? (
          products.map(({ id, category, file_path, file_name, price, rating }) => (
            <Tile
              key={id}
              imageSrc={file_path}
              altText={`Image of ${file_name}`}
              price={price}
              rating={rating}
              category={category}
              fileName={file_name}
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