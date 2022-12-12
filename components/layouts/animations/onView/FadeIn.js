import React, { useEffect, useRef } from "react";

import { motion, useAnimation, useInView } from "framer-motion";

export default function FadeIn({
  children,
  delay,
  duration,
  className = "flex-col text-center flex-center",
}) {
  const boxVariant = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { ease: "easeOut", duration, delay },
    },
  };
  const brands = useRef(null);

  const brandsView = useInView(brands, { amount: 0.2 });

  const brandsAnim = useAnimation();

  useEffect(() => {
    if (brandsView) {
      brandsAnim.start("animate");
    }
    if (!brandsView) {
      brandsAnim.start("initial");
    }
  }, [brandsView]);

  return (
    <motion.section
      variants={boxVariant}
      animate={brandsAnim}
      ref={brands}
      className={className}
    >
      {children}
    </motion.section>
  );
}
