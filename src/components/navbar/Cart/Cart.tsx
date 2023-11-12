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

export const Cart = () => {
  const { cart } = useContext(CartContext);

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className='cart-icon-wrap'
        onClick={() => setIsOpen((prev) => !prev)}>
        <CartSVG />
        {cart.total ? <div className='total'>{cart.total}</div> : null}
      </div>
      {isOpen && <CartDetail items={cart.items} />}
    </>
  );
};
