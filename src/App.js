import React from "react";
import NavTagg from "./components/Navtagg";

const App = props => {
  return (
    <div className="App">
      <h1 className="store-header">Magpie Designs</h1>
      <div className="component-links">
        <NavTagg />
      </div>
    </div>
  );
};

export default App;
