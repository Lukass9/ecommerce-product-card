const links = ["Collections", "Men", "Women", "About", "Contact"];
import { motion } from "framer-motion";
import useWindowDimensions from "src/hook/useWindowsDimensions";

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
  const { width } = useWindowDimensions();
  const isDesktop = width > 1440;
  return (
    <motion.ul
      initial='closed'
      animate={isOpen ? "open" : "closed"}
      variants={showLinks}>
      {links.map((link) => (
        <motion.li
          variants={itemVariants}
          whileHover={
            isDesktop ? { borderBottom: "3px solid orange" } : { scale: 1.1 }
          }
          whileTap={
            isDesktop
              ? { scale: 0.95, borderBottom: "10px solid orange" }
              : { scale: 0.95 }
          }
          key={link}>
          {link}
        </motion.li>
      ))}
    </motion.ul>
  );
};
