import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Lastnav = () => {
  return (
    <div className="lastnav">
      <Navbar>
        <Nav.Link href="/Jewelry">Jewelry</Nav.Link>
        <Nav.Link href="/Handbags">Handbags</Nav.Link>
        <Nav.Link href="/HomeGoods">Home Goods</Nav.Link>
        <Nav.Link href="/Apparel">Apparel</Nav.Link>
      </Navbar>
    </div>
  );
};

export default Lastnav;

// nav justify-content-end col-xs-4
