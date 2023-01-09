import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import MenuBrands from "../../Brands/MenuBrands";
import WhiteSpider from "../../svg-anim-comp/WhiteSpider";
import { useRouter } from "next/router";
import { IoLogoHackernews } from "react-icons/io";
import LogoName from "../../svg-anim-comp/LogoName";

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
export default function Navigation({ bgColor, pageLinks, navColor }) {
  const router = useRouter();

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
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className="fixed top-0 z-50 w-screen">
      <section
        className={`${
          offset >= 300 && "lg:container lg:rounded-full lg:mt-5"
        } ${navColor} py-5 shadow-xl  transition-all`}
      >
        <section className="items-center justify-between hidden px-28 lg:flex ">
          <div className="py-8">
            <ul className="flex space-x-5">
              <li>
                <Link href="/" scroll={false}>
                  Начало
                </Link>
              </li>
              {pageLinks.map((data) => {
                return (
                  <li key={data.hash}>
                    <a href={`#${data.hash}`}>{data.text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={`${offset <= 300 && "-mt-10"} flex-center`}>
            <div className="relative ">
              <WhiteSpider width="w-20" />
              <div
                className={`${
                  offset >= 300 && "hidden"
                } absolute h-10 -left-[3.35rem] top-20 w-[30rem] `}
              >
                <LogoName viewBox={500} />
              </div>
            </div>
          </div>
          <div>
            <ul className="flex items-center space-x-5">
              <li>
                <Link href="/company/aboutUs" scroll={false}>
                  За нас
                </Link>
              </li>
              <li>
                <Link href="/contactUs" scroll={false}>
                  Контакти
                </Link>
              </li>
              <li
                className="px-5 py-1 font-semibold tracking-[0.15rem] border-2 text-primaryBlue-150 border-primaryBlue-150 cursor-pointer"
                onClick={brandsHandler}
              >
                БРАНДОВЕ
              </li>
            </ul>
          </div>
        </section>
        <section className="container flex items-center justify-between lg:hidden">
          <div className="flex items-center justify-center">
            <div className="relative w-20 h-20">
              <WhiteSpider />
            </div>
            <button className="h-full pl-1 -ml-5 flex-center">
              <LogoName />
            </button>
          </div>
          <div className="relative z-10" aria-label="Hamburger menu">
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
                className={`fixed top-0 left-0 w-screen h-screen ${bgColor}`}
              >
                <motion.ul
                  variants={hamburgerVariants}
                  initial="initial"
                  animate="animate"
                  className="flex flex-col items-center justify-center h-full text-3xl gap-y-10 "
                >
                  <motion.li variants={hamburgerList}>
                    <Link href="/">Начало</Link>
                  </motion.li>
                  {pageLinks
                    .filter((link) => link.text != "")
                    .map((link) => {
                      return (
                        <motion.li
                          key={link.hash}
                          variants={hamburgerList}
                          onClick={() => handleNav(`#${link.hash}`)}
                        >
                          {link.text}
                        </motion.li>
                      );
                    })}
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
        </section>
        <MenuBrands
          brandsOpen={brandsOpen}
          setOpenBrands={setOpenBrands}
          bgColor={bgColor}
        />
      </section>
    </nav>
  );
}
