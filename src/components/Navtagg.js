import React from "react";
import { Nav } from "react-bootstrap";
import Home from "../components/Home";
import Contact from "../components/Contact";
import About from "../components/About";
import { Route, Switch } from "react-router-dom";

const NavTagg = () => {
  return (
    <div>
      <Nav>
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
      </Nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/About" component={About} />
      </Switch>
    </div>
  );
};

export default NavTagg;
