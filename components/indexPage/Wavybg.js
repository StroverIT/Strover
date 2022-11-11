import React from "react";

import { motion } from "framer-motion";
const svgVar = {};
const pathVariant = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 0,
  },
};
export default function Wavybg() {
  return (
    <motion.svg
      initial="hidden"
      animate="visible"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full rounded-full fill-primaryBlue-100"
    >
      <motion.path
        variants={pathVariant}
        d="M0 221C0 98.945 98.945 0 221 0h562c122.055 0 221 98.945 221 221v148c0 122.055-98.945 221-221 221H221C98.945 590 0 491.055 0 369V221Z"
      />
    </motion.svg>
  );
}
