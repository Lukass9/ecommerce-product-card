import { Button } from "src/components/Button/Button";
import Delete from "src/assets/images/icon-delete.svg?react";
import { Item } from "src/types/type";
import { useContext } from "react";
import { CartContext } from "src/context/CartContext";

export const CartDetail = ({ items }: { items: Item[] }) => {
  const { handleDeleteProduct } = useContext(CartContext);
  return (
    <div className='cart-wrap'>
      <h2 className='title'>Cart</h2>
      <hr />
      {items.length ? (
        <div className='cart-detail-wrap'>
          {items.map((item) => (
            <div key={item.id} className='item-wrapp'>
              <img src={item.img} alt='' />
              <div className='item-detail'>
                <div className='item-name'>{item.name}</div>
                <div className='item-price'>
                  ${item.price} x {item.quantity}
                  <b>${item.price * item.quantity}</b>
                </div>
              </div>
              <Delete onClick={() => handleDeleteProduct(item.id)} />
            </div>
          ))}
          <button className='btn'>Checkout</button>
        </div>
      ) : (
        <div className='cart-detail-wrap center'>
          <p>Your cart is empty</p>
        </div>
      )}
    </div>
  );
};
