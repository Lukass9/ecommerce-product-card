import { CartContext } from "src/context/CartContext";
import "./button.scss";
import { useContext } from "react";
import { Product } from "src/types/type";

type Props = {
  children: React.ReactNode;
  product: Product;
};

export const Button = ({ children, product }: Props) => {
  const { handleAddProduct, handleUpdateProduct, cart } =
    useContext(CartContext);
  return (
    <button
      onClick={() => {
        product.count && handleAddProduct(product);

        cart.items.find((el) => el.name === product.name) &&
          handleUpdateProduct(product.name, product);
      }}
      className='btn'>
      {children}
    </button>
  );
};
