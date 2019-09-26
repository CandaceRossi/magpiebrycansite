import React from "react";
import { Container, Carousel } from "react-bootstrap";
import IMG9565 from "../images/IMG-9565.jpg";
import IMG9573 from "../images/IMG-9573.JPG";
import IMG9582 from "../images/IMG-9582.jpg";

function Home() {
  return (
    /*big div*/
    <Container>
      <Carousel bsPrefix="carousel">
        <Carousel.Item>
          <img
            className="d-block"
            width={90}
            height={90}
            src={IMG9565}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            width={90}
            height={90}
            src={IMG9582}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Snoop Dogg</h3>
            <p>Yatch</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            width={90}
            height={90}
            src={IMG9573}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Home;
