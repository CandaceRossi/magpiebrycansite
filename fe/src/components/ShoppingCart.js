import React, { useContext } from "react";
// import CartContext from "../contexts/CartContext";

import ShoppingCartItem from "./ShoppingCartItem";

const ShoppingCart = props => {
  // const { cart, removeItem } = useContext(CartContext);

  console.log("CART ITEMS?", props.cart);
  const getCartTotal = () => {
    return props.cart
      .reduce((acc, value) => {
        return acc + value.price;
      }, 0)
      .toFixed(2);
  };

  return (
    <div className="shopping-cart">
      {props.cart.map((item) => (
        <ShoppingCartItem
          key={item.id}
          item={item}
          removeItem={props.removeItem}
        />
      ))}

      <div className="shopping-cart__checkout">
        <p>Total: ${getCartTotal()}</p>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
