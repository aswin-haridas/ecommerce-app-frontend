import React from 'react'
import styled from 'styled-components'
import Tile from './Tile'

const RowContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 10px;
  margin: 10px;
`;

function Row() {
  return (
    <RowContainer>
      <Tile />
      <Tile />
      <Tile />
      <Tile />
    </RowContainer>
  )
}

export default Row