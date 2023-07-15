"use client"

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import Image from "next/image"
import Link from "next/link";

export default function IdeasInWebsite({ isBox = true, title, btnText,bigImg, bigImgClassName, bigImgPos}) {


  const { scrollY } = useScroll();
  const [bgPos, setBgPos] = useState(0);
  
  useEffect(() => {
    return scrollY.onChange((latest) => {
      setBgPos(latest - 100);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <section>
      <motion.section
        className={`  nav-bg-color-gradient  py-6 xl:py-[5.8rem] relative `}
        style={{
          backgroundPositionX: bgPos,
        }}
      >
        <div className="grid text-center">
          <div className="order-2">
            <h2 className="text-3xl font-bold text-white lg:text-4xl">
              {title}
            </h2>
            <Link href="/plan">
              <motion.div className="mt-5 xl:mt-10">
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  className="px-5 py-3 font-semibold text-white uppercase rounded-lg shadow-lg lg:px-8 lg:py-5 lg:text-lg btn-bg-color"
                >
                  {btnText}
                </motion.button>
              </motion.div>
            </Link>
          </div>
          {/* This is idea icon */}
          <div className="absolute top-0 xl:top-10 z-20 w-3 -left-5 rotate-[54deg]">
            <div className="relative w-24 h-24"><Image src="/ecommerceIcons/idea.png" alt="Превърнете идеите си в сайт" fill/></div>
          </div>
          <div className={`xl:absolute max-xl:mb-10 z-20 ${bigImgPos} flex-center order-1`}>
            <div className={`relative ${bigImgClassName}`}><Image src={`/ecommerceIcons/${bigImg}`} alt={title} fill/></div>
          </div>
         
        </div>
      </motion.section>
     
    </section>
  );
}
