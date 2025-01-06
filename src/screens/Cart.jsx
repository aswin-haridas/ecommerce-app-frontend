import React, { useState } from 'react';
import styled from 'styled-components';

const CartPage = styled.div`
  padding: 16px;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
`;

const ItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 16px;
`;

const ItemDetails = styled.div`
  flex: 1;
`;

const ItemName = styled.h2`
  font-size: 18px;
  margin: 0;
`;

const ItemPrice = styled.p`
  font-size: 16px;
  color: #555;
`;

const RemoveButton = styled.button`
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  &:hover {
    background-color: #c0392b;
  }
`;

const CheckoutSection = styled.div`
  text-align: right;
  margin-top: 20px;
`;

const CheckoutButton = styled.button`
  background-color: #2ecc71;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: #27ae60;
  }
`;

const Cart = ({ removeFromCart }) => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Sample Item 1',
      image: 'https://via.placeholder.com/150',
      price: 10,
    },
    {
      id: 2,
      name: 'Sample Item 2',
      image: 'https://via.placeholder.com/150',
      price: 20,
    },
    {
      id: 3,
      name: 'Sample Item 3',
      image: 'https://via.placeholder.com/150',
      price: 15,
    },
  ]);

  const handleRemove = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    alert('Proceeding to checkout...');
    // Add actual checkout logic here
  };

  return (
    <CartPage>
      <h1>Your Cart</h1>
      {cartItems.length > 0 ? (
        cartItems.map(item => (
          <CartItem key={item.id}>
            <ItemImage src={item.image} alt={item.name} />
            <ItemDetails>
              <ItemName>{item.name}</ItemName>
              <ItemPrice>Price: ${item.price}</ItemPrice>
              <RemoveButton onClick={() => handleRemove(item.id)}>Remove</RemoveButton>
            </ItemDetails>
          </CartItem>
        ))
      ) : (
        <p>Your cart is empty</p>
      )}
      {cartItems.length > 0 && (
        <CheckoutSection>
          <CheckoutButton onClick={handleCheckout}>Proceed to Checkout</CheckoutButton>
        </CheckoutSection>
      )}
    </CartPage>
  );
};

export default Cart;
