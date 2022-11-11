import React from "react";
import { motion, useAnimation } from "framer-motion";

const textLogo = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      duration: 1,
      bounce: 0.3,
      delay: 3,
    },
  },
};
const listsVariants = {
  animate: { transition: { staggerChildre: 4 } },
};
const listVariant = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      duration: 1,
      bounce: 0.3,
      delay: 0.4,
    },
  },
};
export default function Links() {
  const listsAnim = useAnimation();

  return (
    <motion.ul
      variants={listsVariants}
      initial="initial"
      animate={listsAnim}
      className="flex h-full items-center justify-center gap-x-10 flex-wrap"
    >
      <motion.li variants={listVariant} initial="hidden" animate="visible">
        <a href="#index">Начало</a>
      </motion.li>
      <motion.li variants={listVariant} initial="hidden" animate="visible">
        <a href="#aboutUs">За нас</a>
      </motion.li>
      <motion.li variants={listVariant} initial="hidden" animate="visible">
        <a href="#services">Услуги</a>
      </motion.li>
      <motion.li variants={listVariant} initial="hidden" animate="visible">
        Контакти
      </motion.li>
      <motion.li
        variants={listVariant}
        initial="hidden"
        animate="visible"
        className="text-primaryBlue-150 border border-primaryBlue-150 px-5 py-1"
      >
        Брандове
      </motion.li>
    </motion.ul>
  );
}
