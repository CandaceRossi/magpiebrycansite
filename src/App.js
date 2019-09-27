import React, { useState } from "react";
import { Route } from "react-router-dom";
import NavTagg from "./components/Navtagg";
import ItemList from "./components/ItemList";
import Item from "./components/Item";
import data from "./data";
import AddToEmailList from "./components/AddToEmailList";

const App = () => {
  const [product] = useState(data);
  return (
    <div className="App">
      <div className="component-list">
        <NavTagg />
        <AddToEmailList />
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
