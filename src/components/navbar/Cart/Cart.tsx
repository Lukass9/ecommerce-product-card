import CartSVG from "src/assets/images/icon-cart.svg?react";
import { CartDetail } from "./CartDetail";
import { useState, useContext } from "react";
import { CartContext } from "src/context/CartContext";

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

export const Cart = () => {
  const { cart } = useContext(CartContext);

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className='cart-icon-wrap'>
        <CartSVG onClick={() => setIsOpen((prev) => !prev)} />
        {cart.total ? <div className='total'>{cart.total}</div> : null}
      </div>
      {isOpen && <CartDetail items={cart.items} />}
    </>
  );
};
