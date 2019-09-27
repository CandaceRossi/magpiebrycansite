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
            </Link>

            <p>{item.name}</p>
            <p>${item.price}</p>
            <button className="md-button shop-button">Add To Cart</button>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
