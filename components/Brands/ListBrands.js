import React, { useEffect } from "react";
import Image from "next/legacy/image";
import Link from "next/link";

import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

const boxesVariant = {
  animate: { transition: { staggerChildren: 0.2 } },
};

const boxVariant = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { ease: "easeOut", duration: 1.5 },
  },
};

export default function ListBrands({ digital, web, logistics, py, bg }) {
  const [brands, brandsView] = useInView({ threshold: 0.2 });
  const [title, titleView] = useInView({ threshold: 0.2 });

  const brandsAnim = useAnimation();
  const titleAnim = useAnimation();

  useEffect(() => {
    if (brandsView) {
      brandsAnim.start("animate");
    }
    if (!brandsView) {
      brandsAnim.start("initial");
    }
  }, [brandsView]);
  useEffect(() => {
    if (titleAnim) {
      titleAnim.start("animate");
    }
    if (!titleAnim) {
      titleAnim.start("initial");
    }
  }, [titleView]);
  return (
    <section className={`${py} ${bg}  mt-10 pt-14`}>
      <motion.section
        className="mb-10 text-white"
        ref={title}
        variants={boxesVariant}
        animate={brandsAnim}
      >
        <motion.h5
          variants={boxVariant}
          className="text-5xl font-semibold text-center"
        >
          Брандове
        </motion.h5>
        <motion.p variants={boxVariant} className="mt-2 text-center">
          И повече информация за тях
        </motion.p>
      </motion.section>
      <motion.section
        className={`container flex zeroToXl:flex-col xl:items-center xl:justify-center gap-x-14 zeroToXl:gap-y-10`}
        ref={brands}
        variants={boxesVariant}
        animate={brandsAnim}
      >
        {/* Web */}
        {web && (
          <motion.section
            variants={boxVariant}
            className="flex-col text-center flex-center"
          >
            <div className="relative w-32 h-32">
              <Image
                alt="Tech spider logo for strovers' brands"
                src="/logos/web-spider.svg"
                layout="fill"
              />
            </div>
            <h4 className="text-4xl font-bold text-primaryBlue-200 ">Web</h4>
            <p className="max-w-[22rem] mt-2 text-white">
              Разработваме онлайн магазин-и, блогове, персонализирана платформи,
              уеб базиран софтуер и информативни динамични уеб сайтове
            </p>
            <div className="mt-8">
              <Link href="/web" scroll={false}>
                <button className="py-2 text-sm text-white bg-primaryBlue-200 px-7 rounded-xl">
                  Виж повече
                </button>
              </Link>
            </div>
          </motion.section>
        )}
        {/* Digital */}
        {digital && (
          <motion.section
            variants={boxVariant}
            className="flex-col text-center flex-center"
          >
            <div className="relative w-32 h-32">
              <Image
                alt="Tech spider logo for strovers' brands"
                src="/logos/digital-spider.svg"
                layout="fill"
              />
            </div>
            <h4 className="text-4xl font-bold text-pink">Digital</h4>
            <p className="max-w-sm pt-2 text-white">
              Помагаме да достигнете до повече потенциални клиенти, увеличаване
              на прихода и разширяване на аудиторията Ви
            </p>
            <div className="mt-8">
              <Link href="/digital" scroll={false}>
                <button className="py-2 text-sm text-white bg-pink px-7 rounded-xl">
                  Виж повече
                </button>
              </Link>
            </div>
          </motion.section>
        )}
        {/* Logictisc */}
        {logistics && (
          <motion.section
            variants={boxVariant}
            className="flex-col text-center flex-center"
          >
            <div className="relative w-32 h-32">
              <Image
                alt="Tech spider logo for strovers' brands"
                src="/logos/transport-spider.svg"
                layout="fill"
              />
            </div>
            <h4 className="text-4xl font-bold text-orange">Transport</h4>
            <p className="max-w-sm pt-2 text-white">
              Както транспортни услуги, предлагаме също и хамалски услуги от
              опитни и сръчни професионалисти
            </p>
            <div className="mt-8">
              <button className="py-2 text-sm text-white bg-orange px-7 rounded-xl">
                Виж повече
              </button>
            </div>
          </motion.section>
        )}
      </motion.section>
    </section>
  );
}
