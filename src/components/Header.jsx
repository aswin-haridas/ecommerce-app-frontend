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

const Header = ({ onMouseEnter }) => {

  const navigate=useNavigate();
  const goToLogin=()=>{
    navigate('/auth');
  };

  return (
    <HeaderContainer>
      <Logo />
      <ExploreButton onMouseEnter={onMouseEnter} onClick={onMouseEnter}>
        EXPLORE
      </ExploreButton>
      <SearchBox />
      <IconContainer>
        <IconButton>
          <FavoriteBorder />
        </IconButton>
        <IconButton>
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
