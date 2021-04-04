import { useState, useEffect } from "react";
import Header from "./components/Header.js";
import Cart from "./components/Cart.js";
import Home from "./components/Home.js";
import Login from "./components/Login.js";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { auth, db } from "./components/firebase";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [cartItems, setCartItems] = useState([]);

  const getCartitems = () => {
    db.collection("cartitems").onSnapshot((snapshot) => {
      const tempItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data(),
      }));
      setCartItems(tempItems);
    });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      localStorage.removeItem("user");
      setUser(null);
    });
  };

  useEffect(() => {
    getCartitems();
  }, []);

  return (
    <Router>
      {!user ? (
        <Login setUser={setUser} />
      ) : (
        <Container className="App">
          <Header signOut={signOut} user={user} cartItems={cartItems} />
          <Switch>
            <Route path="/cart">
              <Cart cartItems={cartItems} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Container>
      )}
    </Router>
  );
}

export default App;

const Container = styled.div`
  background-color: #eaeded;
`;
