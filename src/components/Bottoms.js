import React, { Component } from "react";

const Bottoms = props => {
  // const [bottoms] = useState(data.shirts);
  return (
    <div>
      <h2>Tops</h2>
      <div>
        <img src="" />
        <h3>{props.name}</h3>
        <h3>{props.price}</h3>
      </div>
    </div>
  );
};

export default Bottoms;
