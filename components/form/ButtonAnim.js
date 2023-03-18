import React from "react";
import { motion } from "framer-motion";
const ButtonAnim = ({ className, color, children }) => {
  const boxShadowStyle = `0 0 0 3px #FFFFFF, 0 0 0 6px ${color}`;

  return (
    <div className="relative">
      <motion.button
        className={`${className} relative`}
        whileHover={{
          boxShadow: boxShadowStyle,
          transition: { type: "spring", stiffness: 300, duration: 2 },
        }}
      >
        <div
          className={`absolute top-0 left-0 w-full h-full ${color} -z-10 rounded-lg`}
        ></div>
        <div
          className={`absolute top-0 left-0 w-full h-full bg-transparent z-10 rounded-lg bg-cover	`}
        ></div>
        {children}
      </motion.button>
    </div>
  );
};

export default ButtonAnim;
