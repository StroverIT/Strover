import * as React from "react";

import { motion } from "framer-motion";
const svgVariant = {
  initial: {
    opacity: 0,
    backgroundColor: "#fffff",

  },

  animate: {
    opacity: 1,
    
    backgroundColor: "#00BCFF",
    
    // stroke: "hsl(110, 67%, 30%, 100%)",
    transition: {
      duration: 1,
      ease: [0.075, 0.82, 0.165, 1],
    },
  },
};
const variants = {
  initial: {
    opacity: 0,
    pathLength: 0,
    // Light green
    // DARK GREEN
    // stroke: "hsl(110, 67%, 30%, 0%)"
  },

  animate: {
    opacity: 1,
    pathLength: 1,
    
    backgroundColor: ["#fffff","#00BCFF"],
    
    // stroke: "hsl(110, 67%, 30%, 100%)",
    transition: {
      duration: 1,
      ease: [0.075, 0.82, 0.165, 1],
    },
  },
};
const pathVariant = {
  initial: {
    opacity: 0,
    pathLength: 0,
    stroke: "#FFFFFF",

    // stroke: "hsl(110, 67%, 30%, 0%)",
  },
  animate: {
    opacity: 1,
    pathLength: 1,
    stroke: "#FFFFFF",
    // stroke: "hsl(110, 67%, 30%, 100%)",

    transition: {
      duration: 0.5,
      delay: 0.5,

    },
  },
};
const Check = () => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 500 500"
    xmlSpace="preserve"
    animate="animate"
    initial="initial"
    variants={svgVariant}
    className="rounded-full "
  >
    {/* <motion.circle
      variants={variants}
      className="stroke-primaryBlue-700"
      cx={250}
      cy={243.5}
      r={240}
      style={{
        fill: "none",
        strokeWidth: 25,
        strokeMiterlimit: 25,
      }}
    /> */}

    <motion.path
      variants={pathVariant}
      style={{
        fill: "none",
        strokeWidth: 25,
        strokeLinejoin: "round",
        strokeMiterlimit: 25,
      }}
      d="m139.4 245.3 98 94.6 154.5-162.4"
    />
  </motion.svg>
);

export default Check;
