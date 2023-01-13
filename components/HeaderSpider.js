import React, { useEffect, useRef } from "react";
import { FaSpider } from "react-icons/fa";
import { motion, useAnimation, useInView } from "framer-motion";

const lineVariants = {
  initial: { width: 0, opacity: 0 },
  animate: {
    width: "100%",
    opacity: 1,
    transition: {
      duration: 2,
      type: "spring",
    },
  },
};
export default function HeaderSpider({
  title,
  size,

  lineColor = "bg-primaryBlue-200",
  typeHead = "h1",
}) {
  const section = useRef(null);

  const sectionView = useInView(section, { amount: 1 });
  const sectionAnim = useAnimation();

  useEffect(() => {
    if (sectionView) sectionAnim.start("animate");
    if (!sectionView) sectionAnim.start("initial");
  }, [sectionView]);

  return (
    <motion.div className="" ref={section} animate={sectionAnim}>
      {typeHead == "h1" ? (
        <h1 className={`${size} text-center font-medium`}>{title}</h1>
      ) : (
        <h2 className={`${size} text-center font-medium`}>{title}</h2>
      )}

      <div className="mt-2 flex-center">
        <motion.div
          variants={lineVariants}
          className={`h-1 ${lineColor}`}
        ></motion.div>
        <div className="px-3 text-xl">
          <FaSpider />
        </div>

        <motion.div
          variants={lineVariants}
          className={`h-1  ${lineColor}`}
        ></motion.div>
      </div>
    </motion.div>
  );
}
