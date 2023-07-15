"use client"
import React, { useCallback, useEffect, useRef, useState } from "react";

// Animations
import { useInView, useAnimate, usePresence } from "framer-motion";
import Link from "next/link";
// NextJs
import Image from "next/image";

// Components
import GlowBtn from "../Buttons/GlowBtn";

const MotionPerOneComps = ({ imgData,children, isReversed }) => {
  const container = useRef(null);
  const isInView = useInView(container);
  const [text, textAnimate] = useAnimate();
  const [image, imageAnimate] = useAnimate();

  const enterAnimationText = useCallback(() => {
    let x = isReversed ? ["100vw", "0vw"] : ["-100vw", "0vw"]

    textAnimate(
      text.current,
      { x, opacity: ["0%", "50%", "100%"] },
      { duration: 0.5, delay: 0.2 }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const enterAnimationImage = useCallback(() => {
    let x = isReversed ? ["-100vw", "0vw"] : ["100vw", "0vw"]
    imageAnimate(
      image.current,
      { x, opacity: ["0%", "50%", "100%"] },
      { duration: 0.5, delay: 0.2 }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isInView || imgData) {
      enterAnimationText();
      enterAnimationImage();
    }
  }, [isInView, imgData, enterAnimationText, enterAnimationImage]);
  return (
    <div
      className="relative grid items-center justify-center xl:grid-cols-2 "
      ref={container}
    >
      <div ref={text} className={`max-xl:order-2 ${isReversed && " xl:order-2 xl:ml-16"}`}>
        {/* Title */}
        <h2 className={` py-2 font-medium   xl:text-3xl`}>
          {imgData.title}
        </h2>
        {/* Container */}
        <div className="">
     
        {/* Paragraph */}

          <div
            className={` text-sm xl:text-lg  xl:whitespace-pre-line`}
          >
            {imgData.paragraph || children}
          </div>
         
        </div>
        
        <Link href="/plan">
          <GlowBtn text="Започни сега" className="p-4 mt-4" />
        </Link>
      </div>
           {/* Image */}

      <div
          ref={image}
          className={`  flex-center `}
        >
          <div
            className={`relative  w-[300px] h-[200px] xl:h-[500px]  xl:w-[700px]  max-xl:order-1 ${isReversed ? "xl:order-1" : ""}`}
          >
            <Image
              src={imgData.imgUrl}
              fill
              alt={imgData.imgUrl}
              className="object-contain"
            />
          </div>
        </div>
    </div>
  );
};

export default MotionPerOneComps;
