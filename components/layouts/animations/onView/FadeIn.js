import React, { useEffect } from "react";

import { motion, useAnimation } from "framer-motion";
import Image from "next/legacy/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

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
  const [brands, brandsView] = useInView({ threshold: 0.2 });

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
