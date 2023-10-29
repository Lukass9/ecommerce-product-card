import React from "react";
import img from "src/assets/images/image-product-1.jpg";
import "./carousel.scss";
const images = [
  "src/assets/images/image-product-1.jpg",
  "src/assets/images/image-product-2.jpg",
  "src/assets/images/image-product-3.jpg",
  "src//assets/images/image-product-4.jpg",
];

export const Carousel = () => {
  return (
    <div className='carousel'>
      <div className='image-wrapp'>
        {images.map((image) => (
          <img src={image} alt='' />
        ))}
      </div>
    </div>
  );
};
