import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NextArrow, PrevArrow } from './ArrowComponents';

const AutoCarousel: React.FC = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow onClick={function (): void {
        throw new Error('Function not implemented.');
    } } />, // Use the NextArrow component
    prevArrow: <PrevArrow onClick={function (): void {
        throw new Error('Function not implemented.');
    } } />,
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        <div>
          <img
            src="./images/slider/slider1.jpg"
            alt="Slide 1"
            className="w-full"
          />
        </div>
        <div>
          <img
            src="./images/slider/slider2.jpg"
            alt="Slide 2"
            className="w-full"
          />
        </div>
        <div>
          <img
            src="./images/slider/slider3.jpg"
            alt="Slide 3"
            className="w-full"
          />
        </div>
      </Slider>
    </div>
  );
};

export default AutoCarousel;
