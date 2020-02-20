import React from "react";

function Shipping(props) {
  return (
    <div className="component-style">
      <h3>Shipping:</h3>
      <p className="item-shipping">{props.item.shipping}</p>
    </div>
  );
}

export default Shipping;
