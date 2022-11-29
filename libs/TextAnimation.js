import React, { useEffect, useState, useRef } from "react";
import AnimatedText from "./AnimatedText";

import { motion, useAnimation, useInView } from "framer-motion";

const variants = {
  visible: {
    transition: {
      staggerChildren: 0.025,
    },
  },
};

export default function TextAnimation({
  placeholderText,
  delay,
  spanPaddingBottom,
  threshhold = 0.8,
  durationAnim = 0.75,
  durationHid = 0.85,
  isShowed = true,
}) {
  const [start, setStart] = useState(isShowed);

  const items = useRef(null);

  const itemsView = useInView(items, { amount: threshhold });

  useEffect(() => {
    let timeOut;
    if (itemsView) {
      timeOut = setTimeout(() => {
        setStart(true);
      }, delay * 1000);
    } else {
      setStart(true);
    }
    if (!itemsView) setStart(false);
    return () => {
      clearTimeout(timeOut);
    };
  }, [itemsView]);
  return (
    <motion.div
      initial="hidden"
      ref={items}
      // animate="visible"
      animate={start ? "visible" : "hidden"}
      variants={variants}
    >
      <div>
        {placeholderText.map((item, index) => {
          return (
            <AnimatedText
              {...item}
              key={index}
              durationAnim={durationAnim}
              durationHid={durationHid}
              spanPaddingBottom={spanPaddingBottom}
            />
          );
        })}
      </div>
    </motion.div>
  );
}
