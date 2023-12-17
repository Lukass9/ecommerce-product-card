import CartSVG from "src/assets/images/icon-cart.svg?react";
import { CartDetail } from "./CartDetail";
import { useState, useContext } from "react";
import { CartContext } from "src/context/CartContext";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

export const Cart = () => {
  const { cart } = useContext(CartContext);

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        aria-label='cart'
        className='cart-icon-wrap'
        onClick={() => setIsOpen((prev) => !prev)}>
        <CartSVG />
        {cart.total ? (
          <motion.div
            className='total'
            key={cart.total}
            initial={{ scale: 0.3 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", bounce: 0.75 }}>
            {cart.total}
          </motion.div>
        ) : null}
      </button>
      <AnimatePresence>
        {isOpen && <CartDetail items={cart.items} />}
      </AnimatePresence>
    </>
  );
};
