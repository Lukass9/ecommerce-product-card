import { CartContext } from "src/context/CartContext";
import "./button.scss";
import { useContext } from "react";
import { Product } from "src/types/type";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  product: Product;
};

export const Button = ({ children, product }: Props) => {
  const { handleAddProduct, handleUpdateProduct, cart } =
    useContext(CartContext);
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={() => {
        product.count && handleAddProduct(product);
        cart.items.find((el) => el.name === product.name) &&
          product.count &&
          handleUpdateProduct(product);
      }}
      className='btn'>
      {children}
    </motion.button>
  );
};
