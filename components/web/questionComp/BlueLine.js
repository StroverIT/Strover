import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const lineVariants = {
  initial: {
    width: 0,
  },
  animate: {
    width: "100%",
    transition: {
      duration: 1,
    },
  },
};
export default function BlueLine() {
  const [line, lineView] = useInView();
  const lineAnim = useAnimation();

  useEffect(() => {
    if (lineView) lineAnim.start("animate");

    if (!lineView) lineAnim.start("initial");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lineView]);

  return (
    <div className="py-2  flex-center">
      <div className="w-4 h-4 rounded-full bg-blue-250"></div>

      <motion.div
        className="w-full h-1 bg-blue-250"
        ref={line}
        animate={lineAnim}
        variants={lineVariants}
      ></motion.div>
      <div className="w-4 h-4 rounded-full bg-blue-250"></div>
    </div>
  );
}
