"use client";
import React from "react";
import GoogleInputs from "../Inputs/GoogleInputs";
import GlowBtn from "../Buttons/GlowBtn";
import { motion } from "framer-motion";
import Checkbox from "../Inputs/Checkbox";
import Container from "./Container";

const boxVariants = {
  initial: { x: "20vw", opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { staggerChildren: 0.4, ease: "easeInOut", duration: 1 },
  },
};
const FirstStep = ({ valueChanger, inputs,setCurrStep, valueCheckerChanger }) => {
  return (
    <>
      <div className=" border-b border-[#d8d4dc]">
        <Container>
          <h2 className="text-2xl ">Информация</h2>
          <p className="mt-2">
            Изберете медота по който ще ви е най-удобно да комуникираме.
            <br />
            <span className="text-sm">
              * Не се тревожете от избора сега, в бъдеще ще имате възможността да
              промените избора си
            </span>
          </p>
          <motion.div
            className="grid mt-5 "
            variants={boxVariants}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={boxVariants}>
              <GoogleInputs
                placeholder="Сферата на бизнеса"
                name="businessSphere"
                onChange={valueChanger}
                value={inputs.businessSphere}
              />
              <div className="mt-5">
                <Checkbox name="isImages" onChange={valueCheckerChanger} value={inputs.isImages}>
                  <span className="text-lg cursor-pointer">
                    Имате ли снимки на продуктите ?
                  </span>
                </Checkbox>
              </div>
              <div className="mt-1">
                <Checkbox name="isFullDescription" onChange={valueCheckerChanger} value={inputs.isFullDescription}>
                  <span className="text-lg">
                    Имате ли пълна информация за продуктите?
                  </span>
                </Checkbox>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </div>
        <Container>
          <div className="grid grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold">Какво включва плана:</h3>
              <ol className="ml-4 list-decimal">
                <li>50 продукта</li>
                <li>Мобилна версия</li>
                <li>Нива на достъп</li>
              </ol>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Включено във всеки план:</h3>
              <ol className="ml-4 list-decimal">
                <li>Безплатен хост за 6 месеца</li>
                <li>Безплатен SSL сертификат за 6 месеца</li>
                <li>Промоции на продуктите</li>
              </ol>
            </div>
          </div>
          <GlowBtn
            theme="green"
            text="Следваща стъпка"
            className="w-full py-2 mt-4"
            onClick={() => setCurrStep(2)}
          />
        </Container>
    </>
  );
};

export default FirstStep;
