import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ProductContext from "../contexts/ProductContext";
// import CartContext from "../contexts/CartContext";
// import Item from "./Item";

const ItemList = () => {
  const { items, addItem } = useContext(ProductContext);
  // const { cart } = useContext(CartContext);
  console.log("here are the products", items);
  return (
    <div className="items-list-wrapper">
      {items.map(item => {
        return (
          <div className="item-card" key={item.id}>
            <div className="item-card-container">
              <Link to={`/ItemList/${item.id}`}>
                <img
                  className="item-card-image"
                  src={item.imageUrl}
                  alt={item.name}
                />
              </Link>
            </div>

            <div className="item-card-info">
              <p>{item.name}</p>
              <p>${item.price}</p>
              <button
                onClick={addItem}
                className="md-button shop-button"
              >
                Add To Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
