import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import ItemList from "./ItemList";
import Tops from "./Tops";
import Bottoms from "./Bottoms";
import Accessories from "./Accessories";

export default class NavTag extends Component {
  render() {
    return (
      /* big div */
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/Home" className="nav-link">
              Home<span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Contact" className="nav-link">
              Contact
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              to="/ItemList"
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Shop
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link exact to="/ItemList/Tops" className="dropdown-item">
                Tops
              </Link>
              <Link exact to="/ItemList/Bottoms" className="dropdown-item">
                Bottoms
              </Link>
              <div className="dropdown-divider"></div>
              <Link exact to="/ItemList/Accessories" className="dropdown-item">
                Accessories
              </Link>
            </div>
          </li>
        </ul>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/itemList" component={ItemList} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Tops" component={Tops} />
          <Route exact path="/Tops" component={Bottoms} />
          <Route exact path="/Tops" component={Accessories} />
        </Switch>
      </div>
    );
  }
}
