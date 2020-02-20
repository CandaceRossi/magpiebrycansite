import React, { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import CartContext from "../contexts/CartContext";

const Bavnar = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="bavnar">
      <Navbar>
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/Contact">Contact</Nav.Link>
        <Nav.Link href="/About">About</Nav.Link>
        <Nav.Link href="/ShoppingCart">
          Shopping Cart <span>{cart.length}</span>
        </Nav.Link>
      </Navbar>
    </div>
  );
};

export default Bavnar;
