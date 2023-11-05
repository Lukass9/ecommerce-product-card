const links = ["Collections", "Men", "Women", "About", "Contact"];
import { motion } from "framer-motion";

const showLinks = {
  open: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    x: 0,
    opacity: 1,
  },
  closed: {
    x: -50,
    opacity: 0,
  },
};
type Links = {
  isOpen: boolean;
};

export const Links = ({ isOpen }: Links) => {
  return (
    <motion.ul
      initial='closed'
      animate={isOpen ? "open" : "closed"}
      variants={showLinks}>
      {links.map((link) => (
        <motion.li
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          key={link}>
          {link}
        </motion.li>
      ))}
    </motion.ul>
  );
};
