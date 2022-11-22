import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";

import { motion } from "framer-motion";

const header1 = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
      bounce: 0.3,
      delay: 1.5,
    },
  },
};
const header2 = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
      delay: 2,
    },
  },
};
const paraVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
      delay: 2.4,
    },
  },
};
const button = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
      delay: 2.8,
    },
  },
};
const icon = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
      delay: 3.2,
    },
  },
};
const icon2 = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
      delay: 3.6,
    },
  },
};
const icon3 = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
      delay: 4,
    },
  },
};
const icon4 = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
      delay: 4.4,
    },
  },
};
export default function HeroSection() {
  return (
    <section
      className="container h-screen grid-cols-2 text-center flex-center md:text-left lg:grid "
      id="index"
    >
      <div className="flex flex-col justify-center text-white ">
        <motion.div
          variants={header1}
          initial="hidden"
          animate="visible"
          className="text-6xl font-bold md:text-7xl"
        >
          Strovers&apos;
        </motion.div>
        <motion.div
          variants={header2}
          initial="hidden"
          animate="visible"
          className="text-5xl font-bold text-primaryBlue-700"
        >
          Brands
        </motion.div>
        <motion.p
          variants={paraVariant}
          initial="hidden"
          animate="visible"
          className="max-w-sm mt-5 text-lg"
        >
          Ние ще развием бизнеса Ви в онлайн пространството в желаната за вас
          ниша.
        </motion.p>
        <motion.div
          variants={button}
          initial="hidden"
          animate="visible"
          className="mt-10"
        >
          <a href="#services" className="inline-flex h-full">
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className="h-full px-8 py-3 text-lg font-semibold rounded-lg btn-bg-color"
            >
              Научи повече
            </motion.button>
          </a>
        </motion.div>
      </div>
      {/* Outer polygon */}
      <div className="absolute top-[100px] -right-[50px] ">
        <div className="relative ">
          <div className="w-[800px] h-[700px] relative opacity-10 lg:opacity-20">
            <Image src="/testing.svg" alt="inner-polygon" layout="fill" />
          </div>
          <div className="absolute lg:top-10 lg:right-0 right-0  bottom-10 -rotate-[40deg] w-96 h-56 opacity-10 lg:opacity-40">
            <Image
              src="/logos/white-spider.svg"
              alt="white spider logo"
              layout="fill"
            />
          </div>
          {/* <div className="death-center w-16 h-16 ml-[15px] -mt-[10px]">
            <Image
              src="/logos/white-spider.svg"
              alt="white spider logo"
              layout="fill"
            />
          </div> */}
          {/* Web */}
          <motion.div
            variants={icon}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            initial="hidden"
            animate="visible"
            className="  absolute right-[500px] hidden lg:block top-[50px] text-white  "
          >
            <Link href="/web" scroll={false}>
              <div className="relative flex flex-col items-center justify-center gap-y-10">
                <div className="w-20 h-20 ">
                  <Image
                    src="/indexForms/forms/Polygon 3.svg"
                    alt="white spider logo"
                    layout="fill"
                  />
                </div>
                <div className="absolute w-16 h-16 text-xl font-semibold">
                  <Image
                    src="/icons/coding.png"
                    layout="fill"
                    alt="acadamey hat"
                  />
                </div>
                <div className="absolute mt-2 text-xl font-semibold top-20 ">
                  Web
                </div>
              </div>
            </Link>
          </motion.div>
          {/* Digital */}
          <motion.div
            variants={icon2}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            initial="hidden"
            animate="visible"
            className="  absolute right-[370px] top-[280px] text-white hidden lg:block "
          >
            <Link href="/digital" scroll={false}>
              <div className="relative flex flex-col items-center justify-center gap-y-10">
                <div className="w-20 h-20 ">
                  <Image
                    src="/indexForms/forms/Polygon 1.svg"
                    alt="white spider logo"
                    layout="fill"
                  />
                </div>
                <div className="absolute w-16 h-16 text-xl font-semibold top-2">
                  <Image
                    src="/icons/social-media.png"
                    layout="fill"
                    alt="acadamey hat"
                  />
                </div>
                <div className="absolute mt-2 ml-1 text-xl font-semibold top-20">
                  Digital
                </div>
              </div>
            </Link>
          </motion.div>
          {/* Academy */}
          <motion.div
            variants={icon3}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            initial="hidden"
            animate="visible"
            className="  absolute right-[100px] bottom-[150px] hidden lg:block text-white  "
          >
            <Link href="/academy" scroll={false}>
              <div className="relative flex flex-col items-center justify-center gap-y-10">
                <div className="w-20 h-20 ">
                  <Image
                    src="/indexForms/forms/Polygon 2.svg"
                    alt="white spider logo"
                    layout="fill"
                  />
                </div>
                <div className="absolute w-16 h-16 text-xl font-semibold top-4">
                  <Image
                    src="/icons/mortarboard.png"
                    layout="fill"
                    alt="acadamey hat"
                  />
                </div>
                <div className="absolute mt-2 ml-1 text-xl font-semibold top-20">
                  Academy
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
