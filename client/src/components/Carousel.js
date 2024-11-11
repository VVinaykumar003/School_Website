import React from "react";
import { Carousel } from "react-bootstrap";

// Import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/1200x400?text=Slide+1"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Slide 1</h3>
          <p>First Slide Description</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/1200x400?text=Slide+2"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Slide 2</h3>
          <p>Second Slide Description</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/1200x400?text=Slide+3"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Slide 3</h3>
          <p>Third Slide Description</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
