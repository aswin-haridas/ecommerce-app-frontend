import React from 'react'
import styled from 'styled-components'

const TileContainer = styled.div`
  border: 1px solid black;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const Data = styled.div`
display:flex;
justify-content: space-between;
padding: 10px;
align-items: center;    
`

const Price = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0;
`;

const Rating = styled.div`
  color: #f39c12;
`;

const Category = styled.div`
  font-size: 14px;
  color: #555;
`;

const FileName = styled.div`
  font-size: 12px;
  color: #777;
`;

function Tile({ imageSrc, altText, price, rating, category, fileName }) {
  return (
    <TileContainer>
      <Image src={`../src/assets/images/${imageSrc}`} alt={altText} />
      <Category>{category}</Category>
      <FileName>{fileName}</FileName>
      <Data>
        <Price>{price}</Price>
        <Rating>{rating}</Rating>
      </Data>
    </TileContainer>
  );
}

export default Tile
