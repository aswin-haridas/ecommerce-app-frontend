import React from 'react';
import { FavoriteBorder, ShoppingBagOutlined } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


const NavContainer = () => {
  return (
    <>
      <Nav>
        <Button component={Link} to="/favorites">
          <FavoriteBorder />
        </Button>
        <Button component={Link} to="/cart">
          <ShoppingBagOutlined />
        </Button>
        <Button component={Link} to="/login">
          Login
        </Button>
      </Nav>
    </>
  );
};

export default NavContainer;
