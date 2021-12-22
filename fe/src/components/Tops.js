import React, { Component } from "react";
import ProductContext from "../contexts/ProductContext";

const Tops = () => {
  const { items, addItem } = useContext(ProductContext);

  let newItems = items.slice(3,4);
  return (
     <div className="component-style">
        <h2>Jewelry</h2>
  
    <div className="items-list-wrapper">
        <ItemList items={newItems}/>
     </div> 
    </div>
  );
};

export default Tops;
