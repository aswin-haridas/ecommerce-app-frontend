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

const Header = () => {
  return (
    <HeaderContainer>
      <Logo/>
      <SearchBox/>
      <IconContainer>
        <FavoriteBorder style={{ margin: '0 10px' }} />
        <ShoppingBagOutlined style={{ margin: '0 10px' }} />
        <PersonOutline style={{ margin: '0 10px' }} />
      </IconContainer>
    </HeaderContainer>
  );
};

export default Header;
