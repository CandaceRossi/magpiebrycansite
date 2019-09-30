import React from "react";
import { Container, Carousel } from "react-bootstrap";
import IMG9565 from "../images/IMG-9565.jpg";
import IMG9573 from "../images/IMG-9573.JPG";
import IMG9582 from "../images/IMG-9582.jpg";

const Carouselcomp = () => {
  return (
    <Container>
      <Carousel>
        <Carousel.Item>
          <img className="col-xs-12 col-sm-8" src={IMG9565} alt="First slide" />
          <Carousel.Caption>
            <h3>Diamonds are Forever</h3>
            <p>Mall Slushies</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="col-xs-12 col-sm-8" src={IMG9582} alt="Third slide" />

          <Carousel.Caption>
            <h3>Snoop Dogg</h3>
            <p>Yatch</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="col-xs-12 col-sm-8" src={IMG9573} alt="Third slide" />

          <Carousel.Caption>
            <h3>Jambo Hola</h3>
            <p>Past Present Future</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Carouselcomp;
