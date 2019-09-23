import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

class NavTag extends Component() {
  render() {
    return (
      <div>
        <h2>MagPie</h2>
        <nav className="navbar">
          <ul className="navbar-nav">
            <Link to={"/"} className="nav-link">
              Home
            </Link>

            <Link to={"/contact"} className="nav-link">
              Contact
            </Link>

            <Link to={"/about"} className="nav-link">
              About
            </Link>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    );
  }
}

export default NavTag;

// import React from "react";
// import { NavLink } from "react-router-dom";
// // import { Nav, NavItem } from "reactstrap";

// function NavTag() {
//   return (
//     <div>
//       <div className="nav-style">
//         <NavLink className="some-link" to="/">
//           Home
//         </NavLink>
//         <NavLink className="some-link" to="/About/">
//           About
//         </NavLink>
//         <NavLink className="some-link" to="/Contact/">
//           Contact
//         </NavLink>
//         <NavLink className="some-link" to="/Store/">
//           Store
//         </NavLink>
//       </div>
//     </div>
//   );
// }

// export default NavTag;
