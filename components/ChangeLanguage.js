import React, { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { RiGlobalFill } from "react-icons/ri";
import { useRouter } from "next/router";
import Image from "next/image";

const listVariant = {
  hidden: {
    y: "-100vw",
  },
  visible: {
    y: 0,
    transition: {
      duration: 1,
      delay: 0.4,
    },
  },
};

const flagsVariants = {
  animate: { transition: { staggerChildren: 1 } },
  exitState: {
    opacity: 0,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.3,
      delay: 0.4,
    },
  },
};
const flagVariant = {
  hidden: {
    y: "10px",
    opacity: 0,
  },
  visible: {
    y: 12,
    opacity: 1,

    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.3,
      delay: 0.4,
    },
  },
};
const ChangeLanguage = ({ isMobile }) => {
  if (isMobile) {
    listVariant.hidden.y = "100vw";
    flagVariant.hidden.y = "-10px";
    flagVariant.visible.y = -20;
  }
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);

  const changeLangHandler = (lang) => {
    setOpen(false);

    router.push(router.asPath, undefined, { scroll: false, locale: lang });
  };
  return (
    <>
      <motion.li
        variants={listVariant}
        initial="hidden"
        animate="visible"
        className="relative "
      >
        <div
          className="px-1 py-1 text-5xl font-semibold cursor-pointer text-primaryBlue-100"
          onClick={() => setOpen(!isOpen)}
        >
          <RiGlobalFill />
        </div>
        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div initclassname="">
              <motion.div
                variants={flagsVariants}
                initial="hidden"
                animate="visible"
                exit="exitState"
                className="relative"
              >
                <motion.div
                  variants={flagVariant}
                  className={`absolute cursor-pointer left-2 ${
                    isMobile ? "-top-32" : "top-2"
                  }`}
                  onClick={() => changeLangHandler("bg")}
                >
                  <div className="relative w-10 h-10">
                    <Image
                      src="/indexIcons/bulgaria.png"
                      fill
                      alt="Bulgarian flag"
                    />
                  </div>
                </motion.div>
                <motion.div
                  variants={flagVariant}
                  className={`absolute cursor-pointer left-2 ${
                    isMobile ? "-top-20" : "top-16"
                  }`}
                  onClick={() => changeLangHandler("en")}
                >
                  <div className="relative w-10 h-10">
                    <Image
                      src="/indexIcons/united-states.png"
                      fill
                      alt="Bulgarian flag"
                    />
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.li>
    </>
  );
};

export default ChangeLanguage;
