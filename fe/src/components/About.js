import React, { Component } from "react";
// import magpiepie from "./images/maglogo/1x/magpiepie.png";


class About extends Component {
  render() {
    return (
      // <div> <img src={magpiepie} height="75" alt="" /></div>
      <div className="sign-design">
        {/* <div class="sidebar-box"> */}
        <h3 className="header-style">GET TO KNOW</h3>
        <h4 style={{ textAlign: 'center', color: '#683B2B', fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>our story</h4>
        <p>
          Magpie Designs is a family workshed and creative outsource for
          impactful designs seen all over the world.
          </p>
        <p>
          Our designs are unique and mimic style from cultures broad and far.
          Many within our selection have strong bold and beautiful textiles
          which offer a story of its historical liniage, to be remembered and
          celebrated. to the designs
          </p>
        <p>
          Magpie Designs is a family workshed and creative outsource for
          impactful designs seen all over the world.
          </p>
        <div class="sidebar-box">
          <p>A Journey of Love, Healing, and Awareness</p>
        </div>
        {/* <p class="read-more"><a href="#" class="button">Read More</a></p> */}
        {/* </div> */}
      </div>
    );
  }
}

export default About;
