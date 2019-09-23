import React from "react";
import { Link } from "react-router-dom";

function ItemsList(props) {
  return (
    <div className="items-container">
      {props.items.map(item => (
        <div className="item-card" key={item.id}>
          <Link to={"/item-list/${item.id}"}>
            <img
              className="item-list-image"
              src={item.imageUrl}
              alt={item.name}
            />
            <p>{item.name}</p>
          </Link>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ItemsList;
