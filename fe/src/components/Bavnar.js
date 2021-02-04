import React, { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { CartContext } from "../contexts/CartContext";


const Bavnar = () => {
  const { ...cart } = useContext(CartContext);
  console.log("Nav Cart Items?", cart);
  return (
    <div className="bavnar">
      <Navbar>
        <Nav.Link href="/">HOME</Nav.Link>
        <Nav.Link href="/Contact">CONTACT</Nav.Link>
        <Nav.Link href="/About">ABOUT</Nav.Link>
        <Nav.Link href="/ShoppingCart">SHOPPING CART <span>{cart.length}</span>
        </Nav.Link>
      </Navbar>
    </div>
  );
};

export default Bavnar;

