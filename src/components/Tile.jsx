import React from 'react'
import styled from 'styled-components'
import shirt from '../assets/shirt.jpeg'

const TileContainer = styled.div`
  border: 1px solid black;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
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


function Tile() {
  return (
    <TileContainer>
      <Image src={shirt} alt="shirt" />
      <Data><Price>$20.00</Price>
      <Rating>★★★★☆</Rating></Data>
      
    </TileContainer>
  )
}

export default Tile
