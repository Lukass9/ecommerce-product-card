import { useReducer } from "react";
import "./counter.scss";

const counterReducer = (
  count: number,
  action: { type: "INCREMENT" | "DECREMENT" }
) => {
  switch (action.type) {
    case "INCREMENT":
      return count + 1;

    case "DECREMENT":
      if (count > 0) {
        return count - 1;
      }
      return count;

    default:
      return count;
  }
};

export const Counter = () => {
  const [count, dispatch] = useReducer(counterReducer, 0);

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div className='counter-wrapp'>
      <button className='minus' onClick={handleDecrement}>
        -
      </button>
      <div className='count'>{count}</div>
      <button className='plus' onClick={handleIncrement}>
        +
      </button>
    </div>
  );
};
