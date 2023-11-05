import { useState } from "react";
import { Links } from "./Links/Links";
import { ToggleBar } from "./ToggleBar/ToggleBar";
import { motion } from "framer-motion";

const show = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.2,
    },
  },
  closed: {
    x: "-100vw",
    opacity: 0,
    transition: {
      type: "tween",
      duration: 0.3,
      delay: 0.2,
    },
  },
};

const slide = {
  open: {
    x: 0,
    transition: {
      type: "tween",
      duration: 0.3,
      delay: 0.15,
    },
  },
  closed: {
    x: "-100vw",
    transition: {
      type: "tween",
      duration: 0.3,
    },
  },
};

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        className='bg-dark'
        initial='closed'
        animate={isOpen ? "open" : "closed"}
        variants={show}>
        <motion.div
          className='bg'
          initial='closed'
          animate={isOpen ? "open" : "closed"}
          variants={slide}>
          <Links isOpen={isOpen} />
        </motion.div>
      </motion.div>
      <ToggleBar setIsOpen={setIsOpen} />
    </>
  );
};
