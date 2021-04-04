import React from "react";
import styled from "styled-components";
import { db } from "./firebase";

function CartItem(props) {
  const deleteItem = (e) => {
    e.preventDefault();
    db.collection("cartitems").doc(props.id).delete();
  };

  let options = [];

  for (let i = 1; i < Math.max(props.item.quantity + 1, 20); i++) {
    options.push(<option value={i}> Quty:{i}</option>);
  }

  const onChangeQuantity = (newQuantity) => {
    db.collection("cartitems")
      .doc(props.id)
      .update({
        quantity: parseInt(newQuantity),
      });
  };

  return (
    <Container>
      <ImageContainer>
        <img src={props.item.image} />
      </ImageContainer>
      <CartItemInfo>
        <CartItemInfoTop>
          <h2>{props.item.name}</h2>
        </CartItemInfoTop>
        <CartItemInfoBottom>
          <CartItemQuantity>
            <select
              value={props.item.quantity}
              onChange={(e) => onChangeQuantity(e.target.value)}
            >
              {options}
            </select>
          </CartItemQuantity>
          <CartItemDelete onClick={deleteItem}>Delete</CartItemDelete>
        </CartItemInfoBottom>
      </CartItemInfo>
      <CartItemPrice>${props.item.price}</CartItemPrice>
    </Container>
  );
}

export default CartItem;

const Container = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
  display: flex;
  border-bottom: 1px solid #ddd;
`;
const ImageContainer = styled.div`
  width: 180px;
  height: 180px;
  flex-shrink: 0;
  flex-grow: 0;
  margin-right: 16px;
  img {
    object-fit: container;
    height: 100%;
    width: 100%;
  }
`;
const CartItemInfoTop = styled.div`
  color: #007185;
  h2 {
    font-size: 18px;
  }
`;
const CartItemInfo = styled.div`
  flex-grow: 1;
`;
const CartItemInfoBottom = styled.div`
  display: flex;
  margin-top: 4px;
`;
const CartItemQuantity = styled.div`
  select {
    border-radius: 7px;
    background-color: #f0f2f2;
    padding: 8px;
    :focus {
      outline: none;
    }
  }
`;
const CartItemDelete = styled.div`
  color: #007185;
  margin-left: 16px;
  corsor: pointer;
`;
const CartItemPrice = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-left: 16px;
`;
