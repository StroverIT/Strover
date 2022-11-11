import Image from "next/legacy/image";
import React from "react";

import { motion } from "framer-motion";
const titleBoxVariants = {
  animate: { transition: { staggerChildren: 0.2 } },
};
const boxVariants = {
  initial: {
    x: "-100vw",
  },
  animate: {
    x: 0,
    transition: {
      duration: 1.2,
    },
  },
};
export default function HeroSection() {
  return (
    <section className="flex items-center container h-[90vh] relative">
      <motion.section
        variants={titleBoxVariants}
        initial="initial"
        animate="animate"
      >
        <motion.h1 variants={boxVariants} className="text-7xl">
          Strover Digital
        </motion.h1>
        <motion.p variants={boxVariants} className="max-w-xl mt-3 text-md">
          предлага услуги в областта на дигиталният маркетинг, цялостно
          интегриране на бизнеса ви в желаните от Вас социални мрежи и достигане
          до повече клиенти и следователно до по-голям приход.
        </motion.p>
        <motion.button
          variants={boxVariants}
          className="px-16 py-2 mt-10 font-bold bg-pink-100 border border-white rounded-lg "
        >
          Виж повече
        </motion.button>
      </motion.section>
      <section className="absolute -right-[1050px] hidden lg:flex">
        <motion.section
          animate={{
            rotate: [100, 0],
            x: ["40vw", "0vw"],
            transition: {
              duration: 1,
            },
          }}
          className="relative h-[500px] w-[2000px]"
        >
          <Image
            src="/digitalForms/heroSec2.svg"
            alt="digital marketing with all services"
            layout="fill"
            objectFit="contain"
          />
        </motion.section>
      </section>
    </section>
  );
}
