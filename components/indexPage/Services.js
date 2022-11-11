import React, { useEffect, useState } from "react";

import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";
import Link from "next/link";

const boxesVariant = {
  animate: { transition: { staggerChildren: 0.095 } },
};

const boxVariant = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { ease: "easeOut" },
  },
};
export default function Services() {
  const [title, titleView] = useInView({
    threshold: 0.9,
  });
  const [box, boxView] = useInView({
    threshold: 0.9,
  });
  const [isShowed, setShowed] = useState(false);
  const titleAnim = useAnimation();
  const boxAnim = useAnimation();

  useEffect(() => {
    if (titleView) {
      titleAnim.start({
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    }
    if (!titleView) {
      titleAnim.start({
        opacity: 0,
      });
    }
  }, [titleView]);
  useEffect(() => {
    if (boxView) {
      boxAnim.start("animate");
    }
    if (!boxView) {
      !isShowed && boxAnim.start("initial");
      setShowed(true);
    }
  }, [boxView]);
  return (
    <section
      className="xl:bg-[url('/indexForms/background.svg')] no-repeat w-full zeroToXl:bg-blue-300 zeroToXl:py-10 xl:h-[420px] bg-no-repeat relative"
      id="services"
    >
      <div className="pt-5" ref={title}>
        <motion.h1
          animate={titleAnim}
          className="ml-10 text-5xl font-semibold text-center text-white"
        >
          Брандовe и услуги
        </motion.h1>
      </div>
      <motion.section
        ref={box}
        variants={boxesVariant}
        animate={boxAnim}
        className="container grid items-center justify-center mt-20 text-white zeroToXl:text-center grid-cols xl:grid-cols-3 xl:space-x-10 xl:mt-24 zeroToXl:gap-y-10"
      >
        {/* Web container */}
        <motion.div variants={boxVariant} className="">
          <h3 className="text-4xl">Web</h3>
          <p className="xl:max-w-[18rem] mt-2">
            Нямате сайт? Не се тревожете! Ние ще създадем един за вас!
          </p>
          <div className="mt-10 ">
            <Link href="/web" scroll={false}>
              <button className="px-10 py-2 text-sm rounded-lg btn-web-bg-color">
                Научи повече
              </button>
            </Link>
          </div>
        </motion.div>
        {/* Digital container */}
        <motion.div variants={boxVariant} className="xl:text-center ">
          <h3 className="text-4xl">Digital</h3>
          <p className="mt-2">
            Имате малко клиенти? Може да ви помогнем, чрез нашите дигитални
            маркетинг умения.
          </p>
          <div className="mt-10 ">
            <Link href="/digital" scroll={false}>
              <button className="px-10 py-2 text-sm rounded-lg btn-digital-bg-color">
                Научи повече
              </button>
            </Link>
          </div>
        </motion.div>
        {/* Logistics container */}
        <motion.div
          variants={boxVariant}
          className="xl:w-full xl:flex xl:flex-col xl:items-end xl:text-right"
        >
          <h5 className="text-4xl xl:text-right">Logistics</h5>
          <p className="max-w-sm mt-2 xl:text-right">
            Трябват ви доставки за вашият онлайн магазин? И за това имаме
            решение!
          </p>
          <div className="mt-10 ">
            <button className="px-10 py-2 text-sm rounded-lg btn-logistics-bg-color">
              Научи повече
            </button>
          </div>
        </motion.div>
      </motion.section>
    </section>
  );
}
