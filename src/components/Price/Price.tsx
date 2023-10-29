import "./price.scss";

export const Price = () => {
  return (
    <div className='price-wrapp'>
      <div className='discount-wrapp'>
        <div className='discount-price'>$125.00</div>
        <div className='discount'>50%</div>
      </div>
      <div className='price'>$250.00</div>
    </div>
  );
};
