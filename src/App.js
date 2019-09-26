import React, { useState } from "react";
import { Route } from "react-router-dom";
import NavTagg from "./components/Navtagg";
import ItemList from "./components/ItemList";
import Item from "./components/Item";
import data from "./data";

const App = () => {
  const [product] = useState(data);
  return (
    <div className="App">
      <h1 className="store-header">Magpie Designs</h1>
      <div className="component-links">
        <NavTagg />
      </div>
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
    </div>
  );
};

export default App;
