import React, { useCallback, useEffect, useRef, useState } from "react";

// Animations
import { useInView, useAnimate, usePresence } from "framer-motion";

// NextJs
import Image from "next/image";

// Components
import GlowBtn from "../Buttons/GlowBtn"

const MotionPerOneComps = ({ imgData }) => {

  const container = useRef(null);
  const isInView = useInView(container);
  const [text, textAnimate] = useAnimate();
  const [image, imageAnimate] = useAnimate();

  const enterAnimationText = useCallback( () => {
    textAnimate(
      text.current,
      { x: ["-100vw", "0vw"], opacity: ["0%", "50%", "100%"]},
      { duration: 0.5, delay: 0.2 }
    );
  },[]);
  const enterAnimationImage = useCallback( () => {
    imageAnimate(
        image.current,
      { x: ["100vw", "0vw"], opacity: ["0%", "50%", "100%"]},
      { duration: 0.5, delay: 0.2 }
    );
  },[]);

  useEffect(() => {
        if(isInView || imgData){
            enterAnimationText()
            enterAnimationImage()
        }
    
  }, [isInView, imgData, enterAnimationText, enterAnimationImage]);
  return (
    
    <div
      className="relative grid items-center justify-center grid-cols-2 px-44"
      ref={container}
    >
      <div ref={text} className="">
        <div className={` py-2 font-medium  text-3xl`}>{imgData.title}</div>
        <div className={` text-lg whitespace-pre-line`}>
          {imgData.paragraph}
      <GlowBtn text="Започни сега" className="p-4 mt-4" />

        </div>
      </div>
      <div ref={image} className={`flex flex-col items-center justify-center `}>
        <div className={`relative h-[500px]  w-[700px] `}>
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
