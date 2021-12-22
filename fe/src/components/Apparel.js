import React, { useContext } from "react";
import ItemList from "./ItemList";
import ProductContext from "../contexts/ProductContext";

const Apparel = () =>{
const { items, addItem } = useContext(ProductContext);

let newItems = items.slice(9,11);
return (

      <div className="component-style">
        <h2>Apparel</h2>
  
    <div className="items-list-wrapper">
    <ItemList items={newItems} />
     </div> 
    </div>
   
    );
  }

export default Apparel;
