import React from "react";
import Nav from "react-bootstrap/Nav";
import { Route, Switch } from "react-router-dom";
import Contact from "../components/Contact";
import About from "../components/About";

// import ItemList from "../components/ItemList";
// import Item from "../components/Item";

const Bavnar = props => {
  return (
    <div className="bavnar">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/Contact">Contact</Nav.Link>
      <Nav.Link href="/About">About</Nav.Link>
      <Nav.Link href="/Cart">Shopping Cart</Nav.Link>

      <Switch>
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/About" component={About} />
        {/* <Route exact path="/Itemlist" component={ItemList} /> */}
      </Switch>
    </div>
  );
};

export default Bavnar;
