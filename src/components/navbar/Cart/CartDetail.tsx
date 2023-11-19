import { useContext } from "react";
import Delete from "src/assets/images/icon-delete.svg?react";
import { CartContext } from "src/context/CartContext";
import { Item } from "src/types/type";
import { motion } from "framer-motion";

const variants = {
  visible: { opacity: 1, scale: 1, y: 0, x: 0 },
  hidden: { opacity: 0, scale: 0, y: -150, x: 100 },
};

type Props = {
  items: Item[];
};

export const CartDetail = ({ items }: Props) => {
  const { handleDeleteProduct } = useContext(CartContext);
  return (
    <motion.div
      className='cart-wrap'
      variants={variants}
      initial='hidden'
      animate='visible'
      exit='hidden'>
      <h2 className='title'>Cart</h2>
      <hr />
      {items.length ? (
        <div className='cart-detail-wrap'>
          {items.map((item) => (
            <div key={item.id} className='item-wrapp'>
              <div className='item-center'>
                <img src={item.img.img} alt='' />
                <div className='item-detail'>
                  <div className='item-name'>{item.name}</div>
                  <div className='item-price'>
                    ${item.price} x {item.quantity}
                    <b>${item.price * item.quantity}</b>
                  </div>
                </div>
              </div>

              <Delete
                className='delete'
                onClick={() => handleDeleteProduct(item.id)}
              />
            </div>
          ))}
          <motion.button className='btn' whileTap={{ scale: 0.9 }}>
            Checkout
          </motion.button>
        </div>
      ) : (
        <div className='cart-detail-wrap center'>
          <p>Your cart is empty</p>
        </div>
      )}
    </motion.div>
  );
};
