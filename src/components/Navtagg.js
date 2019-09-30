import React from "react";
import { Nav, NavbarBrand } from "react-bootstrap";
import magpiepie from "../images/maglogo/1x/magpiepie.png";
import Bavnar from "../components/Bavnar";
import Midnav from "../components/Midnav";
import Lastnav from "../components/Lastnav";

const NavTagg = () => {
  return (
    <div>
      <Nav className="navtagg-style">
        <NavbarBrand>
          <img src={magpiepie} height="50" alt="" />
        </NavbarBrand>

        <Bavnar />
        <Midnav />
        <Lastnav />
      </Nav>
    </div>
  );
};

export default NavTagg;
