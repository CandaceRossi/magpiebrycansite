import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ProductContext from "../contexts/ProductContext";
// import Item from "./Item";

const ItemList = props => {
  console.log("this is the problem", props);
  const { items, addItems } = useContext(ProductContext);
  console.log("here are the products", items);
  return (
    <div className="items-list-wrapper">
      {items.map(item => {
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
            <button
              onClick={() => addItems(item)}
              className="md-button shop-button"
            >
              Add To Cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
