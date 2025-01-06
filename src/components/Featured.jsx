import React from 'react'
import styled from 'styled-components'
import Tile from './Tile'
import shirt from '../assets/shirt.jpeg'

const RowContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 10px;
  margin: 10px;
`;

function Row() {
  const sampleProducts = [
    { id: 1, imageSrc: shirt, altText: 'Shirt 1', price: '$20.00', rating: '★★★★☆', category: 'Shirts', fileName: 'shirt_1.jpg' },
    { id: 2, imageSrc: shirt, altText: 'Shirt 2', price: '$25.00', rating: '★★★☆☆', category: 'Shirts', fileName: 'shirt_2.jpg' },
    { id: 3, imageSrc: shirt, altText: 'Shirt 3', price: '$30.00', rating: '★★★★★', category: 'Shirts', fileName: 'shirt_3.jpg' },
    { id: 4, imageSrc: shirt, altText: 'Shirt 4', price: '$35.00', rating: '★★★☆☆', category: 'Shirts', fileName: 'shirt_4.jpg' },
  ];

  return (
    <RowContainer>
      {sampleProducts.map(({ id, imageSrc, altText, price, rating, category, fileName }) => (
        <Tile 
          key={id} 
          imageSrc={imageSrc} 
          altText={altText} 
          price={price} 
          rating={rating} 
          category={category}
          fileName={fileName}
        />
      ))}
    </RowContainer>
  )
}

export default Row