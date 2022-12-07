import Head from "next/head";
import React, { useEffect, useState } from "react";
import Navigation from "../components/academy/Navigation";

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
        <div className="relative wrapper ">
          <div className="illu">
            <div className="besen">
              <div className="besen__start"></div>
              <div className="besen__end"></div>
            </div>

            <div className="body"></div>

            <div className="leg">
              <div className="leg__top"></div>
              <div className="leg__down">
                <div className="foot"></div>
              </div>
            </div>

            <div className="arm">
              <div className="arm__top"></div>
              <div className="arm__down"></div>
            </div>

            <div className="cap">
              <div className="cap__main"></div>
              <div className="cap__end"></div>
            </div>

            <div className="face--profil">
              <div className="nose"></div>
              <div className="base">
                <div className="hair hair--right"></div>
                <div className="hair hair--left"></div>
                <div className="mouth"></div>
                <div className="glases face--side"></div>
                <div className="eye eye--right"></div>
              </div>
            </div>
          </div>

          <div className="wind wind--1"></div>
          <div className="wind wind--2"></div>

          <motion.div
            className="schnatz"
            animate="animate"
            initial="initial"
            variants={schnatszVariants}
          >
            <div className="kugel"></div>
            <div className="wing wing--left"></div>
            <div className="wing wing--right"></div>
          </motion.div>
          <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full overflow-hidden bg-fixed bg-black opacity-30"></div>
        </div>
      </main>
    </>
  );
}
