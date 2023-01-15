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
          <div className="container relative flex-col h-full text-3xl flex-center gap-y-10">
            <motion.ul
              variants={hamburgerVariants}
              initial="initial"
              animate="animate"
              className="flex-col text-3xl flex-center gap-y-10"
            >
              <Link href="/brands/web">
                <motion.li variants={hamburgerList} className="flex-center">
                  <RiGlobalFill />
                  <span className="pl-1">Web</span>
                </motion.li>
              </Link>

              <Link href="/brands/digital">
                <motion.li variants={hamburgerList} className="flex-center">
                  <IoMdAnalytics />

                  <span className="pl-1">Digital</span>
                </motion.li>
              </Link>
              {/* <Link href="/trasnport">
                <motion.li variants={hamburgerList} className="flex-center">
                  <FaCarSide />
                  <span className="pl-1">Transport</span>
                </motion.li>
              </Link> */}
              <Link href="/brands/academy">
                <motion.li variants={hamburgerList} className="flex-center">
                  <HiOutlineAcademicCap />
                  <span className="pl-1">Academy</span>
                </motion.li>
              </Link>
            </motion.ul>
            <div
              className="absolute right-0 text-4xl cursor-pointer top-10"
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
