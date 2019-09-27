import React from "react";
import { Navbar, Nav, NavbarBrand } from "react-bootstrap";
import Home from "../components/Home";
import Contact from "../components/Contact";
import About from "../components/About";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import { Route, Switch } from "react-router-dom";
import magpiepie from "../images/maglogo/1x/magpiepie.png";

const NavTagg = () => {
  return (
    <div>
      <Nav>
        <NavbarBrand>
          <img src={magpiepie} height="50" alt="" />
        </NavbarBrand>
        <Navbar className="nav justify-content-end">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/Contact">Contact</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/About">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/ItemList">Shop</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/SignIn">Sign In</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/SignUp">Sign Up</Nav.Link>
          </Nav.Item>
        </Navbar>
      </Nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/About" component={About} />
        <Route exact path="/SignIn" component={SignIn} />
        <Route exact path="/SignUp" component={SignUp} />
      </Switch>
    </div>
  );
};

export default NavTagg;
