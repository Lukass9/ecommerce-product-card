import { useEffect, useRef, useState } from "react";
import "./photoGallery.scss";
import { Images } from "src/types/type";
import Prev from "src/assets/images/icon-previous.svg?react";
import Next from "src/assets/images/icon-next.svg?react";

type Props = {
  images: Images[];
  isModal: boolean;
  setIsOpenModal?: React.Dispatch<React.SetStateAction<boolean>>;
};

export const PhotoGallery = ({ images, isModal, setIsOpenModal }: Props) => {
  const [activePhoto, setActivePhoto] = useState(0);
  const imgWrappRef = useRef<HTMLDivElement | null>(null);
  const imgWidth = isModal ? 600 : 490;

  const handlePrev = () => {
    if (activePhoto > 0) setActivePhoto((prev) => prev - 1);
  };
  const handleNext = () => {
    if (activePhoto < images.length - 1) setActivePhoto((prev) => prev + 1);
  };

  useEffect(() => {
    if (imgWrappRef.current) {
      imgWrappRef.current.style.transform = `translateX(-${
        imgWidth * activePhoto
      }px)`;
    }
  }, [activePhoto]);
  return (
    <div className='wrap-gallery'>
      {isModal && (
        <button className='btn btn-prev' onClick={handlePrev}>
          <Prev />
        </button>
      )}
      <div className='wrap-photo'>
        <div className={`img-wrap ${isModal && "img-modal"}`} ref={imgWrappRef}>
          {images.map((image) => (
            <img
              src={image.img}
              alt=''
              key={image.id}
              onClick={() => setIsOpenModal && setIsOpenModal(true)}
            />
          ))}
        </div>
      </div>
      {isModal && (
        <button className='btn btn-next' onClick={handleNext}>
          <Next />
        </button>
      )}
      <div className='img-thumb'>
        {images.map((image) => (
          <img
            className={image.id == activePhoto ? "active" : ""}
            src={image.thumb}
            alt=''
            key={image.id}
            onMouseEnter={() => setActivePhoto(image.id)}
          />
        ))}
      </div>
    </div>
  );
};
