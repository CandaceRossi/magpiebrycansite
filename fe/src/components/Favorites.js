import React, { Component } from "react";

class Favorites extends Component {
  render() {
    return (
      <div className="component-style">
        <h2>Favorites</h2>
<div style={{width: "100%", height: "100%", display:"flex", justifyContent: "center", margin:"0 auto"}}>
        <div style={{border: "3px solid black", width: "200px", height: "200px", display: "flex", justifyContent: "center", alignItems:"center", flexDirection:"column"}}>
      <h5 style={{width: "100%"}}>Add Your Favorite Items Here</h5>
      <p style={{height: "auto", width: "100%", fontSize: "75px"}}>X</p>
      </div>
      </div>
      </div>
    );
  }
}

export default Favorites;
