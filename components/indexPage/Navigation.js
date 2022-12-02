import React, { useEffect, useState } from "react";
import Image from "next/legacy/image";
import WhiteSpider from "../svg-anim-comp/WhiteSpider";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { Sling as Hamburger } from "hamburger-react";
import { useRouter } from "next/router";
import MenuBrands from "../Brands/MenuBrands";
import Link from "next/link";
import LogoName from "../svg-anim-comp/LogoName";

const listsVariants = {
  animate: { transition: { staggerChildre: 4 } },
};
const listVariant = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      duration: 1,
      bounce: 0.3,
      delay: 0.4,
    },
  },
};

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

export default function Navigation() {
  const router = useRouter();

  const listsAnim = useAnimation();
  const [isOpen, setOpen] = useState(false);
  const [brandsOpen, setOpenBrands] = useState(false);

  const handleNav = (hash) => {
    setOpen(false);
    let timer;
    if (hash) {
      const item = document.querySelector(hash);

      timer = setTimeout(() => {
        if (item) {
          item.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
        }
      }, 500);
    }
    return () => clearTimeout(timer);
  };
  const brandsHandler = () => {
    setOpenBrands(true);
  };
  useEffect(() => {
    console.log(isOpen, brandsOpen);
    const html = document.querySelector("html");

    if (isOpen || brandsOpen) {
      html.style.overflowY = "hidden";
    }
    if (!isOpen && !brandsOpen) {
      html.style.overflowY = "auto";
    }
  }, [isOpen, brandsOpen]);
  useEffect(() => {
    const html = document.querySelector("html");

    html.style.overflowY = "auto";
  }, [router.pathname]);
  return (
    // THIS MUST BE ONLY FOR HOME ROUTE !!!!!
    <div className="fixed top-0 z-50 w-screen text-white shadow-xl nav-bg-color">
      <div className="container flex justify-between py-5">
        <div className="flex items-center justify-center">
          <div className="relative w-20 h-20">
            <WhiteSpider />
          </div>
          <div className="h-full pl-1 -ml-5 flex-center">
            <LogoName />
          </div>
        </div>
        {/* Links */}
        <div className="hidden md:flex">
          <motion.ul
            variants={listsVariants}
            initial="initial"
            animate={listsAnim}
            className="flex items-center justify-center h-full gap-x-10 "
          >
            <a href="#index">
              <motion.li
                variants={listVariant}
                initial="hidden"
                animate="visible"
              >
                Начало
              </motion.li>
            </a>
            <a href="#services">
              <motion.li
                variants={listVariant}
                initial="hidden"
                animate="visible"
              >
                Услуги
              </motion.li>
            </a>
            <Link href="/contactUs" scroll={false}>
              <motion.li
                variants={listVariant}
                initial="hidden"
                animate="visible"
              >
                Контакти
              </motion.li>
            </Link>
            <Link href="/aboutUs" scroll={false}>
              <motion.li
                variants={listVariant}
                initial="hidden"
                animate="visible"
              >
                За нас
              </motion.li>
            </Link>
            <motion.li
              variants={listVariant}
              initial="hidden"
              animate="visible"
              onClick={brandsHandler}
              className="px-5 py-1 font-semibold tracking-[0.15rem] border-2 text-primaryBlue-150 border-primaryBlue-150 cursor-pointer"
            >
              Брандове
            </motion.li>
          </motion.ul>
        </div>
        <div className="md:hidden flex-center">
          <div className="relative z-10">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
          <AnimatePresence mode="wait">
            {isOpen && (
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
                className="fixed top-0 left-0 w-screen h-screen bg-primaryBlue-750"
              >
                <motion.ul
                  variants={hamburgerVariants}
                  initial="initial"
                  animate="animate"
                  className="flex flex-col items-center justify-center h-full text-3xl gap-y-10 "
                >
                  <motion.li
                    variants={hamburgerList}
                    onClick={() => handleNav("#index")}
                  >
                    Начало
                  </motion.li>

                  <motion.li
                    variants={hamburgerList}
                    onClick={() => handleNav("#services")}
                  >
                    Услуги
                  </motion.li>
                  <motion.li variants={hamburgerList}>
                    <Link href="/contactUs" scroll={false}>
                      Контакти
                    </Link>
                  </motion.li>
                  <motion.li variants={hamburgerList}>
                    <Link href="/aboutUs" scroll={false}>
                      За нас
                    </Link>
                  </motion.li>
                  <motion.li
                    variants={hamburgerList}
                    onClick={brandsHandler}
                    className="px-5 py-1 font-semibold tracking-[0.15rem] border-2 text-primaryBlue-150 border-primaryBlue-150"
                  >
                    Брандове
                  </motion.li>
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <MenuBrands
          brandsOpen={brandsOpen}
          setOpenBrands={setOpenBrands}
          bgColor="bg-primaryBlue-750"
        />
      </div>
    </div>
  );
}
