import Head from "next/head";
import React, { useEffect, useState } from "react";
import Navigation from "../components/academy/Navigation";

import style from "../styles/Academy.module.css";
import { motion } from "framer-motion";

export default function Academy() {
  const schnatszVariants = {
    initial: {},
    animate: {
      x: [0, 50, 100, 200, 150, -400, 0],
      y: [0, 100, 500, 50, 400, 100, 0],
      transition: { repeat: Infinity, duration: 6, type: "spring" },
    },
  };

  return (
    <>
      <Head>
        <title>StroverAcademy</title>
        <meta
          name="description"
          content="Академия за дигитални мрежи, изработка на сайтове и уеб дизайн"
        />
      </Head>
      <Navigation />
      <main className="h-[100vh] relative ">
        <div className="absolute z-10 py-2 text-5xl font-bold text-white -translate-x-1/2 -translate-y-1/2 rounded-full left-1/2 top-1/2 flex-center">
          <div className="px-6">Очаквайте скоро!</div>
        </div>
        <div className={`relative ${style.wrapper}`}>
          <div className={`${style.illu}`}>
            <div className={`${style.besen}`}>
              <div className={`${style.besen__start}`}></div>
              <div className={`${style.besen__end}`}></div>
            </div>

            <div className={`${style.body}`}></div>

            <div className={`${style.leg}`}>
              <div className={`${style.leg__top}`}></div>
              <div className={`${style.leg__down}`}>
                <div className={`${style.foot}`}></div>
              </div>
            </div>

            <div className={`${style.arm}`}>
              <div className={`${style.arm__top}`}></div>
              <div className={`${style.arm__down}`}></div>
            </div>

            <div className={`${style.cap}`}>
              <div className={`${style.cap__main}`}></div>
              <div className={`${style.cap__end}`}></div>
            </div>

            <div className={`${style.face__profil}`}>
              <div className={`${style.nose}`}></div>
              <div className={`${style.base}`}>
                <div className={`${style.hair} ${style.hair__right}`}></div>
                <div className={`${style.hair} ${style.hair__left}`}></div>
                <div className={`${style.mouth}`}></div>
                <div className={`${style.glases} ${style.face__side}`}></div>
                <div className={`${style.eye} ${style.eye__right}`}></div>
              </div>
            </div>
          </div>

          <div className={`${style.wind} ${style.wind__1}`}></div>
          <div className={`${style.wind} ${style.wind__2}`}></div>

          <motion.div
            className={`${style.schnatz}`}
            animate="animate"
            initial="initial"
            variants={schnatszVariants}
          >
            <div className={`${style.kugel}`}></div>
            <div className={`${style.wing} ${style.wing__left}`}></div>
            <div className={`${style.wing} ${style.wing__right}`}></div>
          </motion.div>
          <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full overflow-hidden bg-fixed bg-black opacity-30"></div>
        </div>
      </main>
    </>
  );
}
