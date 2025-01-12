import React from "react";
import styled from "styled-components";
import { FavoriteBorder, PersonOutline, ShoppingBagOutlined } from "@mui/icons-material";
import Logo from "./Logo";
import SearchBox from "./SearchBox";
import { useNavigate } from "react-router-dom";

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

const ExploreButton = styled.div`
  background: none;
  border: none;
  cursor: pointer;
  margin: 0 10px;
  display: flex;
  align-items: center;
`;
const LogoText = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin: 10px;
`;
const Header = ({ onMouseEnter }) => {

  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/auth');
  };
  const goToWishlist = () => {
    navigate('/wishlist');
  }
  const goToCart = () => {
    navigate('/cart');
  }

  return (
    <HeaderContainer>
      <LogoText>Thunikkada</LogoText>

      <ExploreButton onMouseEnter={onMouseEnter} onClick={onMouseEnter}>
        EXPLORE
      </ExploreButton>
      <SearchBox />
      <IconContainer>
        <IconButton onClick={goToWishlist}>
          <FavoriteBorder />
        </IconButton>
        <IconButton onClick={goToCart}>
          <ShoppingBagOutlined />
        </IconButton>
        <IconButton onClick={goToLogin}>
          <PersonOutline />
        </IconButton>
      </IconContainer>
    </HeaderContainer>
  );
};

export default Header;
