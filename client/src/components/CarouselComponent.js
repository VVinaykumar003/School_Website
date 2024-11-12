import React from "react";
import { Carousel } from "react-bootstrap";
import "./CarouselComponent.css"; // Import the CSS file

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://nalandaschool.org/wp-content/uploads/2022/02/Best-ICSE-School-In-Vadodara-_-Nalanda-International-School.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Welcome to Nalanda School</h3>
          <p>Best ICSE School in Vadodara</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://academicworld.co.in/wp-content/uploads/2020/07/classroom-1.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Modern Campus Facilities</h3>
          <p>Providing the best learning environment for students.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://alwinmemorialpublicschool.com/wp-content/uploads/2024/02/COMPUTER-LAB-1-1024x457.jpg.webp"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Excellence in Education</h3>
          <p>Preparing students for a bright future.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
