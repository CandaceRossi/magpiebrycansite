import React, { useState } from "react";
import { Route, Switch, Link } from "react-router-dom";
import "./App.css";
import data from "./data";
import NavTag from "./components/NavTag";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import AddToEmailList from "./components/AddToEmailList";
import ItemList from "./components/ItemList";
import Item from "./components/Item";

const App = () => {
  const [product, setProduct] = useState(data);
  console.log("maybe a problemo", product);
  return (
    <div className="App">
      <h1 className="store-header">Magpie Designs</h1>
      <div className="component-links">
        <NavTag />

        <Link to="/">Home</Link>
        <Link to="/ItemList">Shop</Link>
        <Link to="/SignUp">Sign Up</Link>
        <Link to="/SignIn">Sign In</Link>

        <AddToEmailList />
      </div>
      <Switch>
        <Route exact path="/SignIn" component={SignIn} />
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/AddToEmailList" component={AddToEmailList} />
        <Route
          exact
          path="/ItemList"
          render={props => <ItemList items={product} {...props} />}
        />
        <Route
          exact
          path="/ItemList/:id"
          render={props => <Item items={product} {...props} />}
        />
      </Switch>
    </div>
  );
};

export default App;
