import CartSVG from "src/assets/images/icon-cart.svg?react";
import { CartDetail } from "./CartDetail";
import { useState } from "react";

type Item = {
  name: string;
  img: string;
  price: number;
  quantity: number;
};

const items: Item[] = [
  {
    name: "Fall Limited Edition Sneakers",
    img: "src/assets/images/image-product-1-thumbnail.jpg",
    price: 125,
    quantity: 3,
  },
];

const total = 3;

export const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className='cart-icon-wrap'>
        <CartSVG onClick={() => setIsOpen((prev) => !prev)} />
        {total ? <div className='total'>{total}</div> : null}
      </div>
      {isOpen && <CartDetail items={items} />}
    </>
  );
};
