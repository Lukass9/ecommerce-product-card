import { useEffect, useRef, useState } from "react";
import "./carousel.scss";

const images = [
  "src/assets/images/image-product-1.jpg",
  "src/assets/images/image-product-2.jpg",
  "src/assets/images/image-product-3.jpg",
  "src/assets/images/image-product-4.jpg",
];

export const Carousel = () => {
  const [width, setWidth] = useState<null | number>(null);
  const [shift, setShift] = useState(0);

  const imgWrappRef = useRef(null);

  const handleNextImg = () => {
    if (width && shift - width > -imgWrappRef.current.scrollWidth)
      setShift((prev) => prev - width);
  };

  const handlePrevImg = () => {
    if (width && shift - width < 0 - width) setShift((prev) => prev + width);
  };

  useEffect(() => {
    if (imgWrappRef.current) {
      console.dir(imgWrappRef.current);
      setWidth(imgWrappRef.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    if (imgWrappRef.current) {
      imgWrappRef.current.style.transform = `translateX(${shift}px)`;
    }
  }, [shift]);

  return (
    <div className='carousel'>
      <button className='navigation prev' onClick={handlePrevImg}></button>
      <div ref={imgWrappRef} className='image-wrapp'>
        {images.map((image, index) => (
          <img src={image} alt='' key={index} />
        ))}
      </div>
      image width = {width} <br />
      image shift = {shift}
      <button className='navigation next' onClick={handleNextImg}></button>
    </div>
  );
};
