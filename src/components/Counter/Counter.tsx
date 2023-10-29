import "./counter.scss";

export const Counter = () => {
  return (
    <div className='counter-wrapp'>
      <button className='minus'>-</button>
      <div className='count'>0</div>
      <button className='plus'>+</button>
    </div>
  );
};
