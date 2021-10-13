import React from "react";

const ShoppingCartItem = (props) => {
  console.log("theheck", props)
  return (
    <div className="shopping-cart-item">
    
      <img src={props.item.imageUrl} alt={`${props.item.name}`} />

      <div>
        <h1 className="makemesmaller">{props.item.name}</h1>
        <p>$ {props.item.price}</p>
        <button onClick={() => props.removeItem(props.item.id)}>
          Remove from cart
        </button>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
