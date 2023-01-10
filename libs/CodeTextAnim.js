import React from "react";

import style from "./codeTextAnim.module.css";

import { motion } from "framer-motion";
import { useIsSmall } from "../libs/FramerMediaQueryFn";

const CodeTextAnim = () => {
  const isSmall = useIsSmall();

  const mediaVar = isSmall
    ? {
        animate: {
          y: [0, -40, -80, -120, -120, -80, -40, 0],
          transition: {
            type: "tween",
            duration: 14.5,
            // duration: 1.5,

            repeat: Infinity,
            repeatDelay: 2,
            delay: 1,
          },
        },
      }
    : {
        animate: {
          x: [
            "900px",
            "400px",
            "-150px",
            "-625px",
            "-625px",
            "-150px",
            "400px",
            "900px",
          ],
          transition: {
            type: "tween",
            duration: 10,
            // duration: 1.5,

            repeat: Infinity,
            repeatDelay: 2,
            delay: 1,
          },
          // x: ["0vw", "-125vw", "-268vw", "-393vw"],
        },
      };
  return (
    <div
      className={`relative flex  overflow-hidden text-2xl font-semibold md:text-4xl px-10   ${style.content__container} `}
    >
      <h1 className={`${style.title} `}>Изработка на</h1>
      <motion.ul
        animate="animate"
        variants={mediaVar}
        className={` text-left absolute  gap-x-2  ${style.text} gap-x-10  `}
      >
        <li className={`w-96    md:w-auto`}>онлайн магазин</li>
        <li className={`w-96   md:w-auto`}>уеб сайт</li>
        <li className={`w-96  md:w-auto`}>бизнес сайт</li>
        <li className={`w-96  md:w-auto `}>форум</li>
      </motion.ul>
    </div>
  );
};

export default CodeTextAnim;
