import { createContext, useState } from "react";
import { Cart, Item, Product } from "src/types/type";
import { v4 as uuidv4 } from "uuid";

const INITIAL_STATE: Cart = {
  items: [],
  total: 0,
};

export const CartContext = createContext<{
  cart: Cart;
  setCart: React.Dispatch<React.SetStateAction<Cart>>;
  handleAddProduct: (product: Product) => void;
  handleDeleteProduct: (items: string) => void;
  handleUpdateProduct: (product: Product) => void;
}>({
  cart: INITIAL_STATE,
  setCart: () => {},
  handleAddProduct: (product) => {},
  handleDeleteProduct: (items) => {},
  handleUpdateProduct: (product) => {},
});

export const CartContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cart, setCart] = useState<Cart>(INITIAL_STATE);

  const calculateTotal = (items: Item[]) => {
    let total = 0;
    items.forEach((el) => {
      total += el.quantity;
    });
    setCart((prev) => ({ ...prev, total }));
  };
  const handleAddProduct = (product: Product) => {
    const newProd: Item = {
      id: uuidv4(),
      name: product.name,
      img: product.images[0],
      price: product.discountPrice,
      quantity: product.count,
    };
    setCart((prev) => ({
      ...prev,
      items: [...prev.items, newProd],
      total: prev.total + product.count,
    }));
  };
  const handleDeleteProduct = (id: string) => {
    const items = cart.items.filter((el) => el.id !== id);
    setCart((prev) => ({ ...prev, items }));
    calculateTotal(items);
  };
  const handleUpdateProduct = (product: Product) => {
    const items = cart.items;
    items[items.findIndex((el) => el.name === product.name)].quantity =
      product.count;

    setCart((prev) => ({ ...prev, items }));
    calculateTotal(items);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        handleAddProduct,
        handleDeleteProduct,
        handleUpdateProduct,
      }}>
      {children}
    </CartContext.Provider>
  );
};
