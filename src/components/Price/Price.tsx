import "./price.scss";

export const Price = ({
  price,
  discount,
  discountPrice,
}: {
  price: number;
  discount: number;
  discountPrice: number;
}) => {
  return (
    <div className='price-wrapp'>
      <div className='discount-wrapp'>
        <div className='discount-price'>${discountPrice.toFixed(2)}</div>
        <div className='discount'>{discount}%</div>
      </div>
      <div className='price'>${price.toFixed(2)}</div>
    </div>
  );
};
