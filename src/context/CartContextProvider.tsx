// import { useState } from "react";
// import { CartContext } from "./CartContext";
// import { Cart } from "src/types/type";

// export const CartContextProvider = ({
//   children,
// }: {
//   children: React.ReactNode;
// }) => {
//   const value = useProviderCart();
//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// };

// const initialState: Cart = {
//   items: [],
//   total: 0,
// };

// const useProviderCart = () => {
//   const [cart, setCart] = useState<Cart>(initialState);
//   return { cart, setCart };
// };
// export type CartContextData = ReturnType<typeof useProviderCart>;
