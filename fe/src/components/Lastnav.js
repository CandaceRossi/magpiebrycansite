import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Bavnar from "./Bavnar";
import magpiepie from "../images/maglogo/1x/magpiepie.png";
import Midnav from "./Midnav";

const Lastnav = () => {
  return (

    
    <div className="lastnav">

        <Bavnar />
       <div className="newbub">
              <div className="maglogo">
                  <img src={magpiepie} height="75" alt="" />
              </div>
              <div className="navspace"/>
            <div className="subbub">   
              <Midnav />
                <Navbar>
                  <Nav.Link href="/Jewelry">JEWELRY</Nav.Link>
                  <Nav.Link href="/Handbags">HANDBAGS</Nav.Link>
                  <Nav.Link href="/HomeGoods">HOME GOODS</Nav.Link>
                  <Nav.Link href="/Apparel">APPAREL</Nav.Link>
                </Navbar>
            </div> 
        </div>
    </div>
  );
};

export default Lastnav;

// nav justify-content-end col-xs-4

