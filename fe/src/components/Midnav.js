import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Midnav = () => {
  return (
    <div className="midnav">
      <Navbar>
        <Nav.Link href="/SignIn">SignIn</Nav.Link>
        <Nav.Link href="/Favorites">Favorites</Nav.Link>
        <Nav.Link href="/ItemList">Shopping</Nav.Link>
      </Navbar>
    </div>
  );
};

export default Midnav;

//nav justify-content-end col-xs-4
