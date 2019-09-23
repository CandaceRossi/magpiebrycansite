import React from "react";
import { Route, NavLink } from "react-router-dom";
import Description from "./Description";
import Shipping from "./Shipping";

function Item(props) {
  const item = props.items.find(
    thing => thing.id === Number(props.match.params.id)
  );
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
      <nav className="item-sub-nav">
        <NavLink to={`/item-list/${item.id}`}>Description</NavLink>
        <NavLink to={`/item-list/${item.id}/shipping`}>Shipping</NavLink>
      </nav>
      <Route
        path="/item-list/:id"
        render={() => <Description items={item} />}
      />
      <Route
        path="/item-list/:id/shipping"
        render={() => <Shipping items={item} />}
      />
    </div>
  );
}
export default Item;
