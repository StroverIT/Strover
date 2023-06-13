"use client"

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import Image from "next/image"

export default function IdeasInWebsite({ isBox = true, title, btnText,bigImg, bigImgClassName, bigImgPos}) {


  const { scrollY } = useScroll();
  const [bgPos, setBgPos] = useState(0);
  
  useEffect(() => {
    return scrollY.onChange((latest) => {
      setBgPos(latest - 100);
    });
  }, []);
  
  return (
    <section>
      <motion.section
        className={`  nav-bg-color-gradient  py-[5.8rem] relative`}
        style={{
          backgroundPositionX: bgPos,
        }}
      >
        <div className="text-center ">
          <h3 className="text-3xl font-bold text-white lg:text-4xl">
            {title}
          </h3>
          <motion.div className="mt-10">
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className="px-5 py-3 font-semibold text-white uppercase rounded-lg shadow-lg lg:px-8 lg:py-5 lg:text-lg btn-bg-color"
            >
              {btnText}
            </motion.button>
          </motion.div>
          <div className="absolute top-10 z-20 left-20 rotate-[54deg]">
            <div className="relative w-24 h-24"><Image src="/homeIcons/idea.png" alt="Превърнете идеите си в сайт" fill/></div>
          </div>
          <div className={`absolute z-20 ${bigImgPos}`}>
            <div className={`relative ${bigImgClassName}`}><Image src={`/homeIcons/${bigImg}`} alt={title} fill/></div>
          </div>
         
        </div>
      </motion.section>
     
    </section>
  );
}
