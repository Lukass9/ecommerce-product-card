import "./photoGallery.scss";
import { Images } from "src/types/type";

export const PhotoGallery = ({ images }: { images: Images[] }) => {
  return (
    <div className='wrap-gallery'>
      <div className='img-wrap'>
        {images.map((image) => (
          <img src={image.img} alt='' />
        ))}
      </div>
      <div className='img-thumb'>
        {images.map((image) => (
          <img src={image.thumb} alt='' />
        ))}
      </div>
    </div>
  );
};
