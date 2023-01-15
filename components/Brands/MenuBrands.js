import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import { HiOutlineAcademicCap, HiX } from "react-icons/hi";
import { RiGlobalFill } from "react-icons/ri";
import { IoMdAnalytics } from "react-icons/io";

import Link from "next/link";

const hamburgerVariants = {
  animate: { transition: { staggerChildren: 0.1, delay: 1 } },
};
// transition: {
//   type: "spring",
//   duration: 1,
//   bounce: 0.3,
//   delay: 0.4,
// },
const hamburgerList = {
  initial: {
    x: "-100vw",
  },
  animate: {
    x: 0,
  },
};
import style from "./brands.module.css";

export default function MenuBrands({ brandsOpen, setOpenBrands, bgColor }) {
  const closeHandler = () => {
    setOpenBrands(false);
  };

  return (
    <AnimatePresence mode="wait">
      {brandsOpen && (
        <motion.div
          initial="initialState"
          animate="animateState"
          exit="exitState"
          transition={{
            duration: 0.75,
          }}
          variants={{
            initialState: {
              opacity: 0,
              clipPath: "polygon(0 0,100% 0,100% 100%, 0% 100%)",
            },
            animateState: {
              opacity: 1,

              clipPath: "polygon(0 0,100% 0,100% 100%, 0% 100%)",
            },
            exitState: {
              opacity: 0,
              clipPath: "polygon(50% 0,50% 0,50% 100%, 50% 100%)",
            },
          }}
          className={`fixed top-0 left-0 z-50 w-screen h-screen ${bgColor}`}
        >
          <div className={`${style.Menu} flex-center h-screen`}>
            <motion.ul
              variants={hamburgerVariants}
              initial="initial"
              animate="animate"
              className={`${style.Menu_list} font-semibold`}
              data-offset="10"
            >
              <motion.li
                variants={hamburgerList}
                className={`${style.Menu_list_item}`}
                data-offset="20"
                onclick
              >
                <Link href="/brands/web">
                  WEB
                  <span className={style.Mask}>
                    <span>WEB</span>
                  </span>
                  <span className={style.Mask}>
                    <span>WEB</span>
                  </span>
                </Link>
              </motion.li>
              <motion.li
                variants={hamburgerList}
                className={style.Menu_list_item}
                data-offset="16"
                onclick
              >
                <Link href="/brands/digital">
                  Digital
                  <span className={style.Mask}>
                    <span>Digital</span>
                  </span>
                  <span className={style.Mask}>
                    <span>Digital</span>
                  </span>
                </Link>
              </motion.li>
              <motion.li
                variants={hamburgerList}
                className={style.Menu_list_item}
                data-offset="12"
                onclick
              >
                <Link href="/brands/academy">
                  ACademy
                  <span className={style.Mask}>
                    <span>ACademy</span>
                  </span>
                  <span className={style.Mask}>
                    <span>ACademy</span>
                  </span>
                </Link>
              </motion.li>
            </motion.ul>
            <div
              className="absolute text-5xl text-red-200 cursor-pointer right-10 top-10"
              onClick={closeHandler}
            >
              <HiX />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
