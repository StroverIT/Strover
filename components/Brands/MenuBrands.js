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
              <motion.li variants={hamburgerList}>
                <Link href="/brands/web">
                  <div className="flex-center">
                    <div className="">
                      <RiGlobalFill />
                    </div>
                    <div
                      className={`${style.Menu_list_item} `}
                      data-offset="20"
                    >
                      WEB
                      <span className={style.Mask}>
                        <span>WEB</span>
                      </span>
                      <span className={style.Mask}>
                        <span>WEB</span>
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.li>
              <motion.li variants={hamburgerList}>
                <Link href="/brands/digital">
                  <div className="flex-center">
                    <div className="">
                      <IoMdAnalytics />
                    </div>
                    <div
                      className={`${style.Menu_list_item} `}
                      data-offset="20"
                    >
                      digital
                      <span className={style.Mask}>
                        <span>digital</span>
                      </span>
                      <span className={style.Mask}>
                        <span>digital</span>
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.li>
              <motion.li variants={hamburgerList}>
                <Link href="/brands/academy">
                  <div className="flex-center">
                    <div className="">
                      <HiOutlineAcademicCap />
                    </div>
                    <div
                      className={`${style.Menu_list_item} `}
                      data-offset="20"
                    >
                      academy
                      <span className={style.Mask}>
                        <span>academy</span>
                      </span>
                      <span className={style.Mask}>
                        <span>academy</span>
                      </span>
                    </div>
                  </div>
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
