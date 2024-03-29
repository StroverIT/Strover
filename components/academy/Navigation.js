import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import MenuBrands from "../Brands/MenuBrands";
import WhiteSpider from "../svg-anim-comp/WhiteSpider";
import { useRouter } from "next/router";
import LogoName from "../svg-anim-comp/LogoName";
import { useTranslation } from "next-i18next";
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
  const { t } = useTranslation("common");

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
    <nav className="fixed top-0 z-50 w-screen py-5 text-white bg-red-300 shadow-xl">
      <section className="items-center justify-between hidden px-28 md:flex ">
        <div className="py-8">
          <ul className="flex space-x-5">
            <li>
              <Link href="/" scroll={false}>
                {t("Начало")}
              </Link>
            </li>
            <li className="invisible">
              <a href="#services">{t("Услуги")}</a>
            </li>
            <li className="invisible">
              <a href="#questions">Въпроси</a>
            </li>
            <li className="invisible">
              <a href="#questions">Въпроси</a>
            </li>
          </ul>
        </div>
        <div className=" flex-center">
          <div className="relative ">
            <WhiteSpider width="w-14" />
            <div className="absolute h-10 -left-12 top-14 w-96 ">
              <LogoName viewBox={500} />
            </div>
          </div>
        </div>
        <div>
          <ul className="flex items-center space-x-5">
            <li>
              <Link href="/company/aboutUs" scroll={false}>
                {t("За нас")}
              </Link>
            </li>

            <li className="">
              <Link href="/company/contactUs" scroll={false}>
                {t("Контакти")}
              </Link>
            </li>

            <li
              className="uppercase px-5 py-1 font-semibold tracking-[0.15rem] border-2 text-red-150 border-red-150 cursor-pointer"
              onClick={brandsHandler}
            >
              {t("Брандове")}
            </li>
          </ul>
        </div>
      </section>
      <section className="container flex items-center justify-between md:hidden">
        <div className="flex items-center justify-center">
          <div className="relative w-20 h-20">
            <WhiteSpider />
          </div>
          <div className="h-full pl-1 -ml-5 flex-center">
            <LogoName />
          </div>
        </div>
        <button className="relative z-10" aria-label="Hamburger menu">
          <Hamburger toggled={isOpen} toggle={setOpen} label="Hamburger menu" />
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
              className="fixed top-0 left-0 w-screen h-screen bg-red-350"
            >
              <motion.ul
                variants={hamburgerVariants}
                initial="initial"
                animate="animate"
                className="flex flex-col items-center justify-center h-full text-3xl gap-y-10 "
              >
                <motion.li variants={hamburgerList}>
                  <Link href="/">{t("Начало")}</Link>
                </motion.li>

                <motion.li
                  variants={hamburgerList}
                  onClick={() => handleNav("#aboutUs")}
                >
                  {t("За нас")}
                </motion.li>

                <motion.li variants={hamburgerList}>
                  <Link href="/company/contactUs" scroll={false}>
                    {t("Контакти")}
                  </Link>
                </motion.li>

                <motion.li
                  variants={hamburgerList}
                  onClick={brandsHandler}
                  className="px-5 py-1 font-semibold tracking-[0.15rem] border-2 text-red-150 border-red-150 uppercase"
                >
                  {t("Брандове")}
                </motion.li>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
      <MenuBrands
        brandsOpen={brandsOpen}
        setOpenBrands={setOpenBrands}
        bgColor="bg-red-300"
      />
    </nav>
  );
}
