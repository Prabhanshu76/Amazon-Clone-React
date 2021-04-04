import React from "react";
import styled from "styled-components";
import NumberFormat from "react-number-format";

function CartTotal(props) {
  return (
    <Container>
      <Subtotal>
        Subtotal ({props.getCount} items):
        <NumberFormat
          value={props.getTotalPrice}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      </Subtotal>
      <CheckoutButton>Proceed to Checkout</CheckoutButton>
    </Container>
  );
}

export default CartTotal;

const Container = styled.div`
  padding: 20px;
  flex: 0.3;
  background-color: white;
`;
const Subtotal = styled.h2`
  margin-bottom: 16px;
`;
const CheckoutButton = styled.button`
  background-color: #f0c14b;
  width: 100%;
  padding: 4px 8px;
  border: 2px solid #a88734;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  :hover {
    background: #ddb374;
  }
`;
