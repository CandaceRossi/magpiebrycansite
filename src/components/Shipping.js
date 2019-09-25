import React from "react";

function Shipping(props) {
  return (
    <div>
      <p>Shipping:</p>
      <p className="item-shipping">{props.item.shipping}</p>
    </div>
  );
}

export default Shipping;
