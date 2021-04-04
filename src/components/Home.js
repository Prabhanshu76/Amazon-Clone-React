import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Product from "./Product";
import { db } from "./firebase";

function Home() {
  let count = 0;
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    db.collection("product").onSnapshot((snapshot) => {
      let tempProducts = [];

      tempProducts = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data(),
      }));
      setProducts(tempProducts);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  console.log(products);

  const getData1 = () => {
    let prod = [];
    for (let i = 0; i < products.length; i++) {
      if (i < 2) {
        prod.push(
          <Product
            title={products[i].product.name}
            price={products[i].product.price}
            rating={products[i].product.rating}
            image={products[i].product.image}
            id={products[i].id}
          />
        );
      }
    }
    return prod;
  };
  const getData2 = () => {
    let prod = [];
    for (let i = 2; i < products.length; i++) {
      prod.push(
        <Product
          title={products[i].product.name}
          price={products[i].product.price}
          rating={products[i].product.rating}
          image={products[i].product.image}
          id={products[i].id}
        />
      );
    }
    return prod;
  };

  return (
    <Container>
      <Banner></Banner>
      <Content>{getData1()}</Content>
      <Content2>{getData2()}</Content2>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  max-width: 1500px;
  margin: 0 auto;
`;

const Banner = styled.div`
  background-image: url("https://i.imgur.com/SYHeuYM.jpg");
  min-height: 600px;
  background-position: center;
  background-size: cover;
  z-index: 1;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;

const Content = styled.div`
  padding-left:10px
  padding-right:10px;
  margin-top:-350px;
  z-indes:100;
  display:flex;

`;
const Content2 = styled.div`
padding-left:10px
padding-right:10px;
z-indes:100;
display:flex;
justify-content: space-between;
`;

const Content3 = styled.div`
  flex: 0 32%;
  height: 100px;
  margin-bottom: 2%;
`;
