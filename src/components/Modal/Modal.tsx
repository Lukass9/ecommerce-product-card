import { Images } from "src/types/type";
import { PhotoGallery } from "../PhotoGallery/PhotoGallery";
import "./modal.scss";
import Close from "src/assets/images/icon-close.svg?react";
import { useRef } from "react";

type Props = {
  images: Images[];
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Modal = ({ images, setIsOpenModal }: Props) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && e.target === modalRef.current) {
      setIsOpenModal(false);
    }
  };
  return (
    <div className='modal-background' onClick={handleClose} ref={modalRef}>
      <button
        className='close'
        onClick={() => {
          setIsOpenModal(false);
        }}>
        <Close viewBox='0 0 15 15' height='20' width='20' />
      </button>
      <PhotoGallery images={images} isModal={true} />
    </div>
  );
};
