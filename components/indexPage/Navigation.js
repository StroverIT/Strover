import React, { useEffect, useState } from "react";
import WhiteSpider from "../svg-anim-comp/WhiteSpider";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { Sling as Hamburger } from "hamburger-react";
import { useRouter } from "next/router";
import MenuBrands from "../Brands/MenuBrands";
import Link from "next/link";
import LogoName from "../svg-anim-comp/LogoName";
import { RiGlobalFill } from "react-icons/ri";
import ChangeLanguage from "../ChangeLanguage";
import { useTranslation } from "next-i18next";

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
  const { t } = useTranslation("common");

  const router = useRouter();

  const listsAnim = useAnimation();
  const [isOpen, setOpen] = useState(false);
  const [brandsOpen, setOpenBrands] = useState(false);
  const [offset, setOffset] = useState(0);
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
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    // THIS MUST BE ONLY FOR HOME ROUTE !!!!!
    <div className={`fixed top-0 z-50  w-full `}>
      <section
        className={`     text-white shadow-xl nav-bg-color transition-all flex-center ${
          offset >= 300 && "lg:rounded-full lg:mt-5 lg:px-10 lg:container"
        }`}
      >
        <div className="container flex justify-between py-5 ">
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
              <motion.li
                variants={listVariant}
                initial="hidden"
                animate="visible"
              >
                <a href="#index">{t("Начало")}</a>
              </motion.li>
              <motion.li
                variants={listVariant}
                initial="hidden"
                animate="visible"
              >
                <a href="#services">{t("Услуги")}</a>
              </motion.li>
              <motion.li
                variants={listVariant}
                initial="hidden"
                animate="visible"
              >
                <Link href="/company/contactUs" scroll={false}>
                  {t("Контакти")}
                </Link>
              </motion.li>
              <motion.li
                variants={listVariant}
                initial="hidden"
                animate="visible"
              >
                <Link href="/company/aboutUs" scroll={false}>
                  {t("За нас")}
                </Link>
              </motion.li>
              <motion.li
                variants={listVariant}
                initial="hidden"
                animate="visible"
                onClick={brandsHandler}
                className="px-5 py-1 font-semibold tracking-[0.15rem] border-2 text-primaryBlue-150 border-primaryBlue-150 cursor-pointer uppercase"
              >
                {t("Брандове")}
              </motion.li>
              <ChangeLanguage />
            </motion.ul>
          </div>
          <div className="md:hidden flex-center">
            <button className="relative z-10" aria-label="Hamburger menu">
              <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                label="Hamburger menu"
              />
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
                      {t("Начало")}
                    </motion.li>
                    <motion.li
                      variants={hamburgerList}
                      onClick={() => handleNav("#services")}
                    >
                      {t("Услуги")}
                    </motion.li>
                    <motion.li variants={hamburgerList}>
                      <Link href="/company/contactUs" scroll={false}>
                        {t("Контакти")}
                      </Link>
                    </motion.li>
                    <motion.li variants={hamburgerList}>
                      <Link href="/company/aboutUs" scroll={false}>
                        {t("За нас")}
                      </Link>
                    </motion.li>
                    <motion.li
                      variants={hamburgerList}
                      onClick={brandsHandler}
                      className="px-5 py-1 font-semibold tracking-[0.15rem] border-2 text-primaryBlue-150 border-primaryBlue-150 uppercase"
                    >
                      {t("Брандове")}
                    </motion.li>
                    <ChangeLanguage isMobile={true} />
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
      </section>
    </div>
  );
}
