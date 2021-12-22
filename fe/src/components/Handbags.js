import React, { useContext } from "react";
import ItemList from "./ItemList";
import ProductContext from "../contexts/ProductContext";

const Handbags = () =>{
const { items, addItem } = useContext(ProductContext);
let newItems = items.slice(7,9);
return (

      <div className="component-style">
        <h2>HandBags</h2>
  
    <div className="items-list-wrapper">
    <ItemList items={newItems} />
     </div> 
    </div>
   
    );
  }



export default Handbags;
