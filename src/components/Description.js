import React from "react";

function Description(props) {
  return (
    <div className="component-style">
      <h3>Description:</h3>
      <p className="item-description">{props.item.description}</p>
    </div>
  );
}

export default Description;
