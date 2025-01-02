import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import { FavoriteBorder, ShoppingBagOutlined } from "@mui/icons-material";

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin: 10px;
`;

const HeaderContainer = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between; 
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f4f4f4;
  margin: 10px;
  padding: 10px;
  border: none;
  width: 400px;
`;

const SearchIconWrapper = styled.div`
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;

const SearchInput = styled.input`
  border: none;
  width: 100%;
  padding: 10px;
  background-color: transparent;
  &:focus {
    outline: none;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Thunikkada</Logo>
      <Categories />
      <SearchContainer>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <SearchInput placeholder="Search products..." />
      </SearchContainer>
      <IconContainer>
        <FavoriteBorder style={{ margin: '0 10px' }} />
        <ShoppingBagOutlined style={{ margin: '0 10px' }} />
      </IconContainer>
    </HeaderContainer>
  );
};

export default Header;
