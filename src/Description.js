import React from "react";

function Description(props) {
  return (
    <div>
      <p>Description:</p>
      <p className="item-description">{props.item.description}</p>
    </div>
  );
}

export default Description;
