import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import MenuBrands from "../Brands/MenuBrands";
import WhiteSpider from "../svg-anim-comp/WhiteSpider";
import { useRouter } from "next/router";
import { IoLogoHackernews } from "react-icons/io";
import Links from "./Links";

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
export default function Navigation({ links }) {
  const router = useRouter();

  const [isOpen, setOpen] = useState(false);
  const [brandsOpen, setOpenBrands] = useState(false);

  const handleNav = (hash) => {
    setOpen(false);
    let timer;
    if (hash) {
      const item = document.querySelector(hash);

      timer = setTimeout(() => {
        if (item) {
          const where = {
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          };
          item.scrollIntoView(where);
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
    <nav className="fixed top-0 z-50 w-screen text-white shadow-xl bg-blue">
      <section className="container items-center justify-between hidden md:flex ">
        <div className="py-8">
          <ul className="flex space-x-5">
            <li>
              <Link href="/" scroll={false}>
                Начало
              </Link>
            </li>
            <Links data={links} />
          </ul>
        </div>
        <div className="relative ">
          <WhiteSpider />
        </div>
        <div>
          <ul className="flex items-center space-x-5">
            <Link href="/company/aboutUs" scroll={false}>
              <li>За нас</li>
            </Link>
            <Link href="/contactUs" scroll={false}>
              <li>Контакти</li>
            </Link>
            <li
              className="px-5 py-1 border cursor-pointer text-primaryBlue-150 border-primaryBlue-150"
              onClick={brandsHandler}
            >
              БРАНДОВЕ
            </li>
          </ul>
        </div>
      </section>
      <section className="container flex items-center justify-between md:hidden">
        <div className="relative flex-center">
          <WhiteSpider />
          <div className="pl-1 text-xl font-bold">Strover</div>
        </div>
        <button className="relative z-10" aria-label="Hamburger menu">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </button>
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
              className="fixed top-0 left-0 w-screen h-screen bg-blue"
            >
              <motion.ul
                variants={hamburgerVariants}
                initial="initial"
                animate="animate"
                className="flex flex-col items-center justify-center h-full text-3xl gap-y-10 "
              >
                <motion.li variants={hamburgerList}>
                  <Link href="/" scroll={false}>
                    Начало
                  </Link>
                </motion.li>

                <motion.li variants={hamburgerList}>
                  <Link href="/company/aboutUs" scroll={false}>
                    За нас
                  </Link>
                </motion.li>

                <motion.li variants={hamburgerList}>
                  <Link href="/contactUs" scroll={false}>
                    Контакти
                  </Link>
                </motion.li>

                <Links data={links} hambOpen={isOpen} hambSetOpen={setOpen} />

                <motion.li
                  variants={hamburgerList}
                  onClick={brandsHandler}
                  className="px-5 py-1 border text-primaryBlue-150 border-primaryBlue-150"
                >
                  Брандове
                </motion.li>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
      <MenuBrands
        brandsOpen={brandsOpen}
        setOpenBrands={setOpenBrands}
        bgColor="bg-blue"
      />
    </nav>
  );
}
