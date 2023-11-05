import { Button } from "src/components/Button/Button";
import Delete from "src/assets/images/icon-delete.svg?react";

type Item = {
  name: string;
  img: string;
  price: number;
  quantity: number;
};

export const CartDetail = ({ items }: { items: Item[] }) => {
  return (
    <div className='cart-wrap'>
      <h2 className='title'>Cart</h2>
      <hr />
      {items.length ? (
        <div className='cart-detail-wrap'>
          {items.map((item) => (
            <div className='item-wrapp'>
              <img src={item.img} alt='' />
              <div className='item-detail'>
                <div className='item-name'>{item.name}</div>
                <div className='item-price'>
                  ${item.price} x {item.quantity}{" "}
                  <b>${item.price * item.quantity}</b>
                </div>
              </div>
              <Delete />
            </div>
          ))}
          <Button>Checkout</Button>
        </div>
      ) : (
        <div className='cart-detail-wrap center'>
          <p>Your cart is empty</p>
        </div>
      )}
    </div>
  );
};
