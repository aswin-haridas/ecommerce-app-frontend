import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  max-width: 80%;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  color: #333;
`;

const Header = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
`;

const Content = styled.div`
  display: flex;
  gap: 20px;
`;

const CartItemsWrapper = styled.div`
  flex: 3;
  border: 1px solid #ddd;
  padding: 10px;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  border-bottom: 1px solid #ddd;

  &:last-child {
    border-bottom: none;
  }
`;

const ItemDetails = styled.div`
  flex: 2;
`;

const ItemImage = styled.img`
  width: 150px;
  height: 200px;
  object-fit: cover;
  margin-right: 16px;
`;

const ItemName = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

const ItemPrice = styled.p`
  font-size: 14px;
  color: #777;
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
`;

const Button = styled.button`
  padding: 5px 10px;
  margin: 0 5px;
  border: 1px solid #ddd;
  cursor: pointer;
  background: #f5f5f5;
  transition: background 0.2s;

  &:hover {
    background: #e0e0e0;
  }
`;

const Quantity = styled.p`
  margin: 0 10px;
`;

const RemoveButton = styled.button`
  flex: 1;
  padding: 5px 10px;
  border: none;
  background: #ff4d4d;
  color: #fff;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #e63939;
  }
`;

const EmptyCart = styled.p`
  text-align: center;
  color: #999;
`;

const Summary = styled.div`
  flex: 1;
  border: 1px solid #ddd;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const TotalAmount = styled.h2`
  margin-bottom: 20px;
`;

const CheckoutButton = styled.button`
  padding: 10px 20px;
  width:100%;
  background: #333;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #555;
  }
`;

// React Component
const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Women Notched Lapel Collar Overcoat",
      price: 1199,
      discount: "₹2,050 OFF",
      image:
        "https://i.postimg.cc/2jXv5hwg/24beaece-7302-4876-adbd-5ff4e98ecc78.jpg",
      quantity: 1,
    },
    {
      id: 2,
      title: "Women Solid Notched Lapel Overcoat",
      price: 1549,
      discount: "₹2,650 OFF",
      image:
        "https://i.postimg.cc/2jXv5hwg/24beaece-7302-4876-adbd-5ff4e98ecc78.jpg",
      quantity: 1,
    },
  ]);

  const incrementQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const navigate = useNavigate();
  const goToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <Container>
      <Header>Shopping Cart</Header>
      <Content>
        <CartItemsWrapper>
          {cartItems.length === 0 ? (
            <EmptyCart>Your cart is empty</EmptyCart>
          ) : (
            cartItems.map((item) => (
              <CartItem key={item.id}>
                <ItemImage src={item.image}/>
                <ItemDetails>
                  <ItemName>{item.title}</ItemName>
                  <ItemPrice>₹{item.price}</ItemPrice>
                  <p>{item.discount}</p>
                </ItemDetails>
                <QuantityControls>
                  <Button onClick={() => decrementQuantity(item.id)}>-</Button>
                  <Quantity>{item.quantity}</Quantity>
                  <Button onClick={() => incrementQuantity(item.id)}>+</Button>
                </QuantityControls>
                <RemoveButton onClick={() => removeItem(item.id)}>
                  Remove
                </RemoveButton>
              </CartItem>
            ))
          )}
        </CartItemsWrapper>
        <Summary>
          <TotalAmount>Total amount: ₹{total}</TotalAmount>
          <CheckoutButton onClick={goToCheckout}>Place Order</CheckoutButton>
        </Summary>
      </Content>
    </Container>
  );
};

export default CartPage;
