import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Handbags from "./Handbags";
import HomeGoods from "./HomeGoods";
import Jewelry from "./Jewelry";
import Apparel from "./Apparel";
import { Route, Switch } from "react-router-dom";

const Lastnav = () => {
  return (
    <div className="lastnav">
      <Navbar nav justify-content-end col-xs-12>
        <Nav.Link href="/Jewelry">Jewelry</Nav.Link>
        <Nav.Link href="/Handbags">Handbags</Nav.Link>
        <Nav.Link href="/HomeGoods">Home Goods</Nav.Link>
        <Nav.Link href="/Apparel">Apparel</Nav.Link>
      </Navbar>

      <Switch>
        <Route exact path="/Jewelry" component={Jewelry} />
        <Route exact path="/Handbags" component={Handbags} />
        <Route exact path="/HomeGoods" component={HomeGoods} />
        <Route exact path="/Apparel" component={Apparel} />
      </Switch>
    </div>
  );
};

export default Lastnav;
