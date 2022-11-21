import React from "react";

import { motion } from "framer-motion";

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};
const pathVariants2 = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    opacity: { duration: 2 },
    pathLength: 1,
    transition: {
      duration: 2.8,
      ease: "easeInOut",
    },
  },
};
const circleVariant = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      delay: 1,
      duration: 1,
      ease: "easeInOut",
    },
  },
};
export default function WhiteSpider({ width = "w-20" }) {
  return (
    <div className={`${width}`}>
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 186.99 212.85"
        className="fill-white"
      >
        <defs>
          <style>
            {
              ".cls-1,.cls-2,.cls-4{fill:none;stroke-miterlimit:10;stroke:#ffff}.cls-1,.cls-4{stroke-width:2px}.cls-4{stroke-linecap:round}"
            }
          </style>
        </defs>
        <path
          className="cls-1"
          d="M117.48 136.43a23.83 23.83 0 1 1-35.65-20.68 14.54 14.54 0 1 1 23.41-.15 23.82 23.82 0 0 1 12.24 20.83Z"
        />
        <motion.path
          variants={pathVariants2}
          initial="hidden"
          animate="visible"
          className="cls-1"
          d="M105.88 114.63h23.31l21.91 21.71v26.29M115.57 127.06l12.48 12.21.44 32.7-19.77 20.49M107.97 105.94l20.52.37 22.61-22.09V56.16M106.84 101.31l21.12-20.07.53-31.85-20.52-21.2"
        />
        <motion.circle
          variants={circleVariant}
          initial="hidden"
          animate="visible"
          className=" "
          cx={104.94}
          cy={195.73}
          r={5.05}
        />
        <motion.circle
          variants={circleVariant}
          initial="hidden"
          animate="visible"
          className=""
          cx={151.1}
          cy={167.63}
          r={5.05}
        />
        <motion.circle
          variants={circleVariant}
          initial="hidden"
          animate="visible"
          className=""
          cx={151.1}
          cy={50.98}
          r={5.05}
        />
        <motion.circle
          variants={circleVariant}
          initial="hidden"
          animate="visible"
          className=""
          cx={104.54}
          cy={24.52}
          r={5.05}
        />
        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          className="cls-1"
          d="m71.6 127.06-12.49 12.21-.44 32.7 19.77 20.49"
        />
        <motion.circle
          variants={circleVariant}
          initial="hidden"
          animate="visible"
          className=""
          cx={82.22}
          cy={195.73}
          r={5.05}
        />
        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          className="cls-1"
          d="M80.73 114.94H57.42l-21.91 21.7v26.29"
        />
        <motion.circle
          variants={circleVariant}
          initial="hidden"
          animate="visible"
          className=""
          cx={35.51}
          cy={167.94}
          r={5.05}
        />
        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          className="cls-1"
          d="m79.05 105.94-20.52.37-22.61-22.09V56.16"
        />
        <motion.circle
          variants={circleVariant}
          initial="hidden"
          animate="visible"
          className=""
          cx={35.92}
          cy={50.98}
          r={5.05}
        />

        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          className="cls-1"
          d="M80.41 101.43 59.3 81.35l-.53-31.85 20.51-21.2"
        />
        <motion.circle
          variants={circleVariant}
          initial="hidden"
          animate="visible"
          className=""
          cx={82.72}
          cy={24.63}
          r={5.05}
        />
        <path
          d="M103.64 128.87a13.48 13.48 0 1 1-20 0l10 9.35Z"
          style={{
            stroke: "#ffff",
            strokeMiterlimit: 10,
          }}
        />
        <motion.circle
          variants={circleVariant}
          initial="hidden"
          animate="visible"
          cx={93.65}
          cy={106.11}
          r={5.47}
        />
        <path className="cls-1" d="M93.65 108.37v33.56" />
        <motion.circle
          variants={circleVariant}
          initial="hidden"
          animate="visible"
          cx={93.65}
          cy={140.14}
          r={4.5}
        />
        <path
          className="cls-4"
          d="m99.8 92.51 1.73-2.79a1 1 0 0 0 0-1.11L98 83.73M87.39 92.52l-1.72-2.79a1 1 0 0 1 0-1.11l3.5-4.87"
        />
      </svg>
    </div>
  );
}
