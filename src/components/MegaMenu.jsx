import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const MegaMenuWrapper = styled.div`
  width: 100%;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  animation: ${({ isOpen }) => (isOpen ? fadeIn : fadeOut)} 0.3s ease-in-out;
  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const Column = styled.div`
  min-width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CategoryTitle = styled.h3`
  font-weight: 500;
  color: rgb(233, 173, 78);
  margin-bottom: 0.5rem;
`;

const SubCategoryTitle = styled.h3`
  font-weight: 500;
  color: rgb(28, 28, 28);
  margin-bottom: 0.5rem;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  color: #666;
  padding: 0.5rem 0;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #1a1a1a;
  }
`;

const MegaMenu = ({ isOpen }) => {
  return (
    <MegaMenuWrapper isOpen={isOpen}>
      <Container>
        <Title>Shop by Category</Title>
        <Grid>
          {/* Men's Section */}
          <Column>
            <CategoryTitle>Men's Wear</CategoryTitle>
          </Column>
          <Column>
            <List>
              <SubCategoryTitle>Bottoms</SubCategoryTitle>
              <ListItem>Cargos</ListItem>
              <ListItem>Jeans</ListItem>

              <SubCategoryTitle>Topwear</SubCategoryTitle>
              <ListItem>Casual Tops</ListItem>
              <ListItem>Formal Tops</ListItem>
              <ListItem>Traditional Wear</ListItem>
            </List>
          </Column>

          {/* Women's Section */}
          <Column>
            <CategoryTitle>Women's Wear</CategoryTitle>
          </Column>
          <Column>
            <List>
              <SubCategoryTitle>Bottoms</SubCategoryTitle>
              <ListItem>Jeans</ListItem>
              <ListItem>Pants</ListItem>
              <ListItem>Skirts</ListItem>

              <SubCategoryTitle>Dresses</SubCategoryTitle>
              <ListItem>Casual Dresses</ListItem>
              <ListItem>Formal Dresses</ListItem>
              <ListItem>Traditional Dresses</ListItem>
            </List>
          </Column>
          <Column>
            <List>
              <SubCategoryTitle>Tops</SubCategoryTitle>
              <ListItem>Casual Tops</ListItem>
              <ListItem>Formal Tops</ListItem>
              <ListItem>Traditional Tops</ListItem>
            </List>
          </Column>
        </Grid>
      </Container>
    </MegaMenuWrapper>
  );
};

export default MegaMenu;
