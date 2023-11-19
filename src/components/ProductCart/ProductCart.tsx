import { useState } from "react";
import { Carousel } from "../Carousel/Carousel";
import { PhotoGallery } from "../PhotoGallery/PhotoGallery";
import { Description } from "../Description/Description";
import { Price } from "../Price/Price";
import { Counter } from "../Counter/Counter";
import { Button } from "../Button/Button";
import Cart from "src/assets/images/icon-cart.svg?react";
import Cart1 from "src/assets/images/icon-cart.svg";
import useWindowDimensions from "src/hook/useWindowsDimensions";
import { Product } from "src/types/type";
import { Modal } from "../Modal/Modal";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

const modal = document.getElementById("modal");

const INITIAL_STATE: Product = {
  id: 1,
  name: "Fall Limited Edition Sneakers",
  title: "sneakers company",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
  price: 250.0,
  discountPrice: 125.0,
  discount: 50,
  images: [
    {
      id: 0,
      img: "src/assets/images/image-product-1.jpg",
      thumb: "src/assets/images/image-product-1-thumbnail.jpg", // Dodaj rozszerzenie pliku miniatury
    },
    {
      id: 1,
      img: "src/assets/images/image-product-2.jpg",
      thumb: "src/assets/images/image-product-2-thumbnail.jpg",
    },
    {
      id: 2,
      img: "src/assets/images/image-product-3.jpg",
      thumb: "src/assets/images/image-product-3-thumbnail.jpg",
    },
    {
      id: 3,
      img: "src/assets/images/image-product-4.jpg",
      thumb: "src/assets/images/image-product-4-thumbnail.jpg",
    },
  ],
  count: 0,
};

export const ProductCart = () => {
  const [product, setProduct] = useState(INITIAL_STATE);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleUpdateCount = (count: number) => {
    setProduct((prev) => ({ ...prev, count }));
  };
  const { width } = useWindowDimensions();
  const isMobile = width <= 768;
  console.log(Cart);
  return (
    <div className='wrap-content'>
      {isMobile ? (
        <Carousel images={product.images} />
      ) : (
        <PhotoGallery
          images={product.images}
          isModal={false}
          setIsOpenModal={setIsOpenModal}
        />
      )}
      <div className='wrap-description'>
        <Description
          name={product.name}
          title={product.title}
          description={product.description}
        />
        <Price
          price={product.price}
          discount={product.discount}
          discountPrice={product.discountPrice}
        />
        <div className='wrap-button'>
          <Counter handleUpdateCount={handleUpdateCount} />
          <Button product={product}>
            <Cart />
            <span>Add to cart</span>
          </Button>
        </div>
      </div>

      {isOpenModal &&
        modal &&
        createPortal(
          <Modal images={product.images} setIsOpenModal={setIsOpenModal} />,
          modal
        )}
    </div>
  );
};
