import { useEffect, useRef, useState } from "react";
import "./carousel.scss";
import { Images } from "src/types/type";

export const Carousel = ({ images }: { images: Images[] }) => {
  const [width, setWidth] = useState<null | number>(null);
  const [shift, setShift] = useState(0);

  const imgWrappRef = useRef<HTMLDivElement | null>(null);

  const handleNextImg = () => {
    if (
      imgWrappRef.current &&
      width &&
      shift - width > -imgWrappRef.current.scrollWidth
    )
      setShift((prev) => prev - width);
  };

  const handlePrevImg = () => {
    if (width && shift - width < 0 - width) setShift((prev) => prev + width);
  };

  useEffect(() => {
    if (imgWrappRef.current) {
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
          <img src={image.img} alt='' key={index} />
        ))}
      </div>
      <button className='navigation next' onClick={handleNextImg}></button>
    </div>
  );
};
