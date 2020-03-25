import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Lastnav = () => {
  return (
    <div className="lastnav">
      <Navbar>
        <Nav.Link href="/Jewelry">JEWELRY</Nav.Link>
        <Nav.Link href="/Handbags">HANDBAGS</Nav.Link>
        <Nav.Link href="/HomeGoods">HOME GOODS</Nav.Link>
        <Nav.Link href="/Apparel">APPAREL</Nav.Link>
      </Navbar>
    </div>
  );
};

export default Lastnav;

// nav justify-content-end col-xs-4

