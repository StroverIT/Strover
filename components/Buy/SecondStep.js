"use client";
import React from "react";
import GoogleInputs from "../Inputs/GoogleInputs";
import GlowBtn from "../Buttons/GlowBtn";
import { motion } from "framer-motion";
import Checkbox from "../Inputs/Checkbox";
import Container from "./Container"

const boxVariants = {
  initial: { x: "20vw", opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { staggerChildren: 0.4, ease: "easeInOut", duration: 1 },
  },
};
const SecondStep = ({ valueChanger, inputs,setCurrStep, valueCheckerChanger }) => {
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
                <Checkbox name="customProducts" onChange={valueCheckerChanger}>
                  <span className="text-lg cursor-pointer">
                Желаете ли повече или по-малко продукти?
                  </span>
                </Checkbox>
                { inputs.customProducts && <GoogleInputs
                placeholder="Сферата на бизнеса"
                name="businessSphere"
                onChange={valueChanger}
                value={inputs.businessSphere}
              />}
              </div>
              <div className="mt-1">
                <Checkbox name="uniqueDesign" onChange={valueCheckerChanger}>
                  <span className="text-lg">
                  Уникален дизайн?
                  </span>
                </Checkbox>
              </div>
              <div className="mt-1">
                <Checkbox name="domain" onChange={valueCheckerChanger}>
                  <span className="text-lg">
                  Имате домейн?
                  </span>
                </Checkbox>
              </div>
              <div className="mt-1">
                <Checkbox name="seo" onChange={valueCheckerChanger}>
                  <span className="text-lg">
                  Желаете ли да оптимизараме тързачките за вашият сайт?
                  </span>
                </Checkbox>
              </div>
              <div className="mt-1">
                <Checkbox name="chat" onChange={valueCheckerChanger}>
                  <span className="text-lg">
                  Желаете ли чат на живо с клиентите?
                  </span>
                </Checkbox>
              </div>
              <div className="mt-1">
                <Checkbox name="onlinePayment" onChange={valueCheckerChanger}>
                  <span className="text-lg">
                  Магазина ще има ли онлайн плащани?
                  </span>
                </Checkbox>
              </div>
              <div className="mt-1">
                <Checkbox name="promoCodes" onChange={valueCheckerChanger}>
                  <span className="text-lg">
                  Промо кодове?
                  </span>
                </Checkbox>
              </div>
              <div className="mt-1">
                <Checkbox name="specialPromo" onChange={valueCheckerChanger}>
                  <span className="text-lg">
                  Лични промоции за спефицични клиентите?
                  </span>
                </Checkbox>
              </div>
              <div className="mt-1">
                <Checkbox name="facebookShop" onChange={valueCheckerChanger}>
                  <span className="text-lg">
                  Желаете ли допълнител Facebook Магазин?
                  </span>
                </Checkbox>
              </div>
            </motion.div>
          </motion.div>
          <div class="grid grid-cols-2 gap-5">
          <GlowBtn
              theme="red"
              text="Предишна стъпка"
              className="w-full py-2 mt-4"
              onClick={() => setCurrStep(1)}
            />
            <GlowBtn
              theme="green"
              text="Следваща стъпка"
              className="w-full py-2 mt-4"
              onClick={() => setCurrStep(3)}
            />
          </div>
        </Container>
     
       
        </div>
    </>
  );
};

export default SecondStep;
