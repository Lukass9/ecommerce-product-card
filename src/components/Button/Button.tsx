import { CartContext } from "src/context/CartContext";
import "./button.scss";
import { useContext } from "react";
import { Product } from "src/types/type";

type Props = {
  children: React.ReactNode;
  product: Product;
};

export const Button = ({ children, product }: Props) => {
  const { setCart } = useContext(CartContext);
  return (
    <button
      onClick={() => {
        const newProd = {
          name: product?.name,
          img: product?.images[0],
          price: product?.price,
          quantity: product?.count,
        };
        setCart((prev) => ({
          ...prev,
          items: [...prev.items, newProd],
          total: product ? product.count : 0,
        }));
      }}
      className='btn'>
      {children}
    </button>
  );
};
