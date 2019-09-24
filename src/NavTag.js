import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Store from "./Store";

class NavTag extends Component {
  render() {
    return (
      /* big div */
      <div className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/Home" className="navbar-brand">
          MagPie
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </Link>

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
                to="/Store"
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
                <Link exact to="/Shop/Tops" className="dropdown-item">
                  Action
                </Link>
                <Link exact to="/Shop/Bottoms" className="dropdown-item">
                  Another action
                </Link>
                <div className="dropdown-divider"></div>
                <Link exact to="/Shop/Accessories" className="dropdown-item">
                  Something else here
                </Link>
              </div>
            </li>
          </ul>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Store" component={Store} />
          <Route exact path="/About" component={About} />
        </Switch>
      </div>
    );
  }
}
export default NavTag;

// {
//   /* <nav className="navbar">
//           <ul className="navbar-nav">
//             <Link to={"/"} className="nav-link">
//               Home
//             </Link>

//             <Link to={"/contact"} className="nav-link">
//               Contact
//             </Link>

//             <Link to={"/about"} className="nav-link">
//               About
//             </Link>
//           </ul>
//         </nav>

//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route path="/contact" component={Contact} />
//           <Route path="/about" component={About} />
//         </Switch>
//       </div>
//     );
//   }
// }

// export default NavTag;

// // function NavTag() {
//  return (
//    <div>
//      <div className="nav-style">
//        <NavLink className="some-link" to="/">
//          Home
//        </NavLink>
//        <NavLink className="some-link" to="/About/">
//          About
//        </NavLink>
//        <NavLink className="some-link" to="/Contact/">
//          Contact
//        </NavLink>
//        <NavLink className="some-link" to="/Store/">
//          Store
//        </NavLink>
//      </div>
//    </div>
//  );
//  }

//  export default NavTag; */
// }
