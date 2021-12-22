import React, {useContext} from "react";
import ItemList from "./ItemList";
import ProductContext from "../contexts/ProductContext";

const Jewelry = () =>{
const { items } = useContext(ProductContext);

let newItems = items.slice(0,3);

return (

      <div className="component-style">
        <h2>Jewelry</h2>
  
    <div className="items-list-wrapper">
        <ItemList items={newItems}/>
     </div> 
    </div>
   
    );
  }

export default Jewelry;

