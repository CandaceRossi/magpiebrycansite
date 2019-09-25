import React from "react";
import { Link } from "react-router-dom";

const ItemList = props => {
  console.log("this is the problem", props);
  return (
    <div className="items-list-wrapper">
      {props.items.map(item => {
        return (
          <div className="item-card" key={item.id}>
            <Link to={`/ItemList/${item.id}`}>
              <img
                className="item-list-image"
                src={item.imageUrl}
                alt={item.name}
              />
              <p>{item.name}</p>
            </Link>
            <p>${item.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
