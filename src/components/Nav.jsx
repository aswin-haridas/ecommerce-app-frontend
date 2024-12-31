import React from 'react';
import { FavoriteBorder, ShoppingBagOutlined } from '@material-ui/icons';
import Button from '@material-ui/core/Button';

const NavContainer = () => {
  return (
    <div>
      <Button>
        <FavoriteBorder />
      </Button>
      <Button>
        <ShoppingBagOutlined />
      </Button>
      <Button>
        Login
      </Button>
    </div>
  );
};

export default NavContainer;
