import { createContext, useState } from "react";
import { Cart } from "src/types/type";

const INITIAL_STATE: Cart = {
  items: [],
  total: 0,
};

export const CartContext = createContext<{
  cart: Cart;
  setCart: React.Dispatch<React.SetStateAction<Cart>>;
}>({ cart: INITIAL_STATE, setCart: () => {} });

export const CartContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cart, setCart] = useState<Cart>(INITIAL_STATE);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
