import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Favorites from "./Favorites";
// import Shopping from "./Shopping";
// import ItemList from "../components/ItemList";
// import Item from "../components/Item";
import SignIn from "./SignIn";
import { Route, Switch } from "react-router-dom";

const Midnav = () => {
  return (
    <div className="midnav">
      <Navbar>
        <Nav.Link href="/SignIn">SignIn</Nav.Link>
        <Nav.Link href="/Favorites">Favorites</Nav.Link>
        <Nav.Link href="/ItemList">Shopping</Nav.Link>
      </Navbar>

      <Switch>
        <Route exact path="/SignIn" component={SignIn} />
        <Route exact path="/Favorites" component={Favorites} />
        {/* <Route exact path="/Shopping" component={Shopping} /> */}
      </Switch>
    </div>
  );
};

export default Midnav;
