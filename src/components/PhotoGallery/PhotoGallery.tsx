import { useEffect, useRef, useState } from "react";
import "./photoGallery.scss";
import { Images } from "src/types/type";

export const PhotoGallery = ({ images }: { images: Images[] }) => {
  const [activePhoto, setActivePhoto] = useState(0);
  const imgWrappRef = useRef<HTMLDivElement | null>(null);
  const imgWidth = -490;

  useEffect(() => {
    if (imgWrappRef.current) {
      imgWrappRef.current.style.transform = `translateX(${
        imgWidth * activePhoto
      }px)`;
    }
  }, [activePhoto]);
  return (
    <div className='wrap-gallery'>
      <div className='wrap-photo'>
        <div className='img-wrap' ref={imgWrappRef}>
          {images.map((image) => (
            <img src={image.img} alt='' />
          ))}
        </div>
      </div>
      <div className='img-thumb'>
        {images.map((image) => (
          <img
            className={image.id == activePhoto ? "active" : ""}
            src={image.thumb}
            alt=''
            onMouseEnter={() => setActivePhoto(image.id)}
          />
        ))}
      </div>
    </div>
  );
};
