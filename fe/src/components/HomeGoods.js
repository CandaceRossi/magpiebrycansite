import React, { useContext } from "react";
import ItemList from "./ItemList";
import ProductContext from "../contexts/ProductContext";

const HomeGoods = () =>{
const { items, addItem } = useContext(ProductContext);
let newItems = items.slice(5,7);
return (

      <div className="component-style">
        <h2>HomeGoods</h2>
  
    <div className="items-list-wrapper">
    <ItemList items={newItems} />
     </div> 
    </div>
   
    );
  }
export default HomeGoods;
