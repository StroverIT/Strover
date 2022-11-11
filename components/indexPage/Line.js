import React, { useEffect, useState } from "react";

import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

export default function Line({ setSecondCont, setThirdCont }) {
  const [lineHeight, setLineHeight] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  // const {
  //   ref: firstLine,
  //   inView: viewFirstLine,
  //   trackVisibility,
  // } = useInView({
  //   threshold: 0.5,
  // });
  const [firstLine, viewFirstLine] = useInView({
    threshold: 0.2,
  });

  const firstLineAnim = useAnimation();
  // const posY = window.scrollY;
  // const posX = window.scrollX;
  // window.scroll({ top: posY - 20, left: posX, behavior: "smooth" });
  const handleScroll = () => {
    const position = window.pageYOffset;

    window.pageXOffset = window.pageXOffset - 400;
    setScrollPosition(position);
  };
  function wheel(e) {
    // console.log(e);
    let delta = 0;
    console.log(e);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: false });
    window.addEventListener("mousewheel", wheel, false);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousewheel", wheel);
    };
  }, []);
  useEffect(() => {
    if (viewFirstLine) {
      if (lineHeight != 1000) {
        setLineHeight((prevVal) => prevVal + 10);
      }
      if (lineHeight == 400) setSecondCont(true);
      if (lineHeight == 950) setThirdCont(true);
      // lineHeight, setLineHeight
    }
  }, [scrollPosition]);
  return (
    <div className="relative ml-20" ref={firstLine}>
      <svg
        width={1200}
        height={lineHeight}
        fill="none"
        animate={firstLineAnim}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M254 701c-139.176.243-252.453-90.087-252.648-201.617C1.158 387.853 111.81 297.246 253 297M878 296.634c92.209.161 167.27-65.953 167.41-147.567C1045.55 67.453 972.256 1.164 878.711 1M253 297h625M254 701s676.534 6.125 726 5.998M980 707c176.98 0 211 274.5 0 270.5"
          stroke="#86CFF4"
          strokeOpacity={0.47}
          strokeWidth={2}
        />
      </svg>
    </div>
  );
}
