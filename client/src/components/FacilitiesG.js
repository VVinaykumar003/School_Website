import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components for the carousel
const CarouselContainer = styled.div`
  position: relative;
  width: 600px;
  height: 300px;
  margin: auto;
  overflow: hidden;
  border: 2px solid #ddd;
  border-radius: 10px;
`;

const Carousel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const CarouselImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  font-size: 30px;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
  border-radius: 50%;
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const PrevButton = styled(Button)`
  left: 10px;
`;

const NextButton = styled(Button)`
  right: 10px;
`;

const ImageCarousel = () => {
  const images = [
    "mission.jpg",
    "mission.jpg",
    "mission.jpg",
    "mission.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <CarouselContainer>
      <PrevButton onClick={prevSlide}>&#10094;</PrevButton>
      <Carousel>
        <CarouselImage src={images[currentIndex]} alt="carousel" />
      </Carousel>
      <NextButton onClick={nextSlide}>&#10095;</NextButton>
    </CarouselContainer>
  );
};

export default ImageCarousel;
