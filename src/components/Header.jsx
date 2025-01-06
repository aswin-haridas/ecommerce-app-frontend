import styled from "styled-components";
import { FavoriteBorder, PersonOutline, ShoppingBagOutlined } from "@mui/icons-material";
import Logo from "./HeaderAtoms/Logo";
import SearchBox from "./HeaderAtoms/SearchBox";

const HeaderContainer = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between; 
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin: 0 10px;
  display: flex;
  align-items: center;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo/>
      <SearchBox/>
      <IconContainer>
        <IconButton>
          <FavoriteBorder />
        </IconButton>
        <IconButton>
          <ShoppingBagOutlined />
        </IconButton>
        <IconButton>
          <PersonOutline />
        </IconButton>
      </IconContainer>
    </HeaderContainer>
  );
};

export default Header;
