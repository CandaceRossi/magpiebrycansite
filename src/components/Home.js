import React from "react";
import IMG9565 from "../images/IMG-9565.jpg";
import IMG9573 from "../images/IMG-9573.JPG";
import IMG9582 from "../images/IMG-9582.jpg";

function Home() {
  return (
    /*big div*/
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-25" src={IMG9565} alt="First slide"></img>
          <div className="carousel-item">
            <img
              className="d-block w-25"
              src={IMG9573}
              alt="Second slide"
            ></img>
            <div className="carousel-item">
              <img
                className="d-block w-25"
                src={IMG9582}
                alt="Third slide"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
