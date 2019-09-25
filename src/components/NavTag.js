import React from "react";
import { Route, Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

import Home from "./Home";
// import Contact from "./Contact";
// import About from "./About";
// import ItemList from "./ItemList";
// import Tops from "./Tops";
// import Bottoms from "./Bottoms";
// import Accessories from "./Accessories";
// import { Navbar, NavItem, NavDropdown, Nav } from "react-bootstrap";
// import { Navbar, NavItem, Nav } from "react-bootstrap";
// export default class NavTag extends Component {

const NavTag = () => {
  return (
    // <nav className='nav-wrapper grey darken-3'>
    //   <div className="container">
    //     <Link to='/' className="brand-logo">MarioPlan</Link>
    //   </div>
    // </nav>
    //     <div>
    //       <Navbar>
    //         <Navbar.Header>
    //           <Navbar.Brand>
    //             <a href="#home">React-Bootstrap</a>
    //           </Navbar.Brand>
    //         </Navbar.Header>
    //         <Nav>
    //           <NavItem eventKey={1} href="#">
    //             Link
    //           </NavItem>
    //           <NavItem eventKey={2} href="#">
    //             Link
    //           </NavItem>
    //           <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
    //             <NavDropdown.Item eventKey={3.1}>Action</NavDropdown.Item>
    //             <NavDropdown.Item eventKey={3.2}>Another action</NavDropdown.Item>
    //             <NavDropdown.Item eventKey={3.3}>
    //               Something else here
    //             </NavDropdown.Item>
    //             <NavDropdown.Item divider />
    //             <NavDropdown.Item eventKey={3.4}>Separated link</NavDropdown.Item>
    //           </NavDropdown>
    //         </Nav>
    //       </Navbar>
    //     </div>
    //   );
    // };
//     <div className="App container">
//       <Navbar fluid collapseOnSelect>
//         <Navbar.Header>
//           <Navbar.Brand>
//             <Link to="/">Scratch</Link>
//           </Navbar.Brand>
//           <Navbar.Toggle />
//         </Navbar.Header>
//         <Navbar.Collapse>
//           <Nav pullRight>
//             <LinkContainer to="/SignUp">
//               <NavItem>Signup</NavItem>
//             </LinkContainer>
//             <LinkContainer to="/SignIn">
//               <NavItem>Login</NavItem>
//             </LinkContainer>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//       <Navbar fluid collapseOnSelect>
//         <Navbar.Header>
//           <Navbar.Brand>
//             <Link to="/">Scratch</Link>
//           </Navbar.Brand>
//           <Navbar.Toggle />
//         </Navbar.Header>
//         <Navbar.Collapse>
//           <Nav pullRight>
//             <LinkContainer to="/signup">
//               <NavItem>Signup</NavItem>
//             </LinkContainer>
//             <LinkContainer to="/login">
//               <NavItem>Login</NavItem>
//             </LinkContainer>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//       <Route exact path="/SignIn" component={SignIn} />
//       <Route exact path="/SignUp" component={SignUp} />
//     </div>
//   );
// };

// export default NavTag;

// in app js
// import Navbar from 'location'
// call Navbar component in app

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
