import React from "react";

const ShoppingCartItem = props => {
  return (
    <div className="shopping-cart-item">
      <img src={props.imageUrl} alt={`${props.name}`} />

      <div>
        <h1>{props.name}</h1>
        <p>$ {props.price}</p>
        <button onClick={() => props.removeItem(props.id)}>
          Remove from cart
        </button>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
