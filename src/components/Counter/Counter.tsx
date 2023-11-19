import { useReducer, useEffect } from "react";
import { motion } from "framer-motion";
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

type Props = {
  handleUpdateCount: (count: number) => void;
};

export const Counter = ({ handleUpdateCount }: Props) => {
  const [count, dispatch] = useReducer(counterReducer, 0);

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  useEffect(() => {
    handleUpdateCount(count);
  }, [count]);
  return (
    <div className='counter-wrapp'>
      <motion.button
        className='minus'
        onClick={handleDecrement}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}>
        -
      </motion.button>
      <motion.div
        className='count'
        key={count}
        initial={{ scale: 1.5 }}
        animate={{ scale: 1 }}>
        {count}
      </motion.div>
      <motion.button
        className='plus'
        onClick={handleIncrement}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}>
        +
      </motion.button>
    </div>
  );
};
