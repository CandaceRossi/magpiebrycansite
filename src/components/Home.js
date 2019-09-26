import React from "react";
import { Carousel } from "react-bootstrap";
import IMG9565 from "../images/IMG-9565.jpg";
import IMG9573 from "../images/IMG-9573.JPG";
import IMG9582 from "../images/IMG-9582.jpg";

function Home() {
  return (
    /*big div*/
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={IMG9565} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={IMG9582} alt="Third slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={IMG9573} alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;
