import React, { useEffect } from "react";
import { FaSpider } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

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
}) {
  const [section, sectionView] = useInView({ threshold: 0.9 });
  const sectionAnim = useAnimation();

  useEffect(() => {
    if (sectionView) sectionAnim.start("animate");
    if (!sectionView) sectionAnim.start("initial");
  }, [sectionView]);

  return (
    <motion.div className="" ref={section} animate={sectionAnim}>
      <h3 className={`${size} text-center font-medium`}>{title}</h3>

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
