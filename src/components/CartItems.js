import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem";
function CartItems(props) {
  return (
    <Container>
      <Title>Shopping Cart</Title>
      <hr />

      <ItemContainer>
        {props.cartItems.map((item) => (
          <CartItem id={item.id} item={item.product} />
        ))}
      </ItemContainer>
    </Container>
  );
}

export default CartItems;

const Container = styled.div`
  background-color: white;
  flex: 0.8;
  padding: 20px;
  margin-right: 10px;
`;
const Title = styled.h1`
  margin-bottom: 8px;
`;
const ItemContainer = styled.div``;
