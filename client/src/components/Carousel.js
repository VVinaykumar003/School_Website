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
  src="https://images.pexels.com/photos/8467265/pexels-photo-8467265.jpeg"
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
  src="https://images.pexels.com/photos/8363028/pexels-photo-8363028.jpeg"
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
  src="https://images.pexels.com/photos/8465502/pexels-photo-8465502.jpeg"
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
