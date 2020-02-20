import React, { useContext } from "react";
import { Route, NavLink } from "react-router-dom";
import Description from "./Description";
import Shipping from "./Shipping";
import ProductContext from "../contexts/ProductContext";

const Item = props => {
  const { items, addItem } = useContext(ProductContext);
  const item = items.find(thing => thing.id === Number(props.match.params.id));
  console.log("here is the item", item);

  return (
    <div className="item-wrapper">
      <div className="item-header">
        <div className="image-wrapper">
          <img src={item.imageUrl} alt={item.name} />
        </div>
        <div className="item-title-wrapper">
          <h2>{item.name}</h2>
          <h4>${item.price}</h4>
        </div>
      </div>
      <button onClick={() => addItem(item)} className="md-button shop-button">
        Add Item
      </button>

      <nav className="item-sub-nav">
        <NavLink exact to={`/ItemList/${item.id}`}>
          Description
        </NavLink>
        <NavLink to={`/ItemList/${item.id}/shipping`}>Shipping</NavLink>
      </nav>
      <Route
        exact
        path="/ItemList/:id"
        render={() => <Description item={item} />}
      />
      <Route
        path="/ItemList/:id/shipping"
        render={() => <Shipping item={item.shipping} />}
      />
    </div>
  );
};
export default Item;
