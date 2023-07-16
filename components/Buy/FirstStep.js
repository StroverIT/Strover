"use client";
import React from "react";
import GoogleInputs from "../Inputs/GoogleInputs";
import GlowBtn from "../Buttons/GlowBtn";
import { motion } from "framer-motion";
import Checkbox from "../Inputs/Checkbox";
import Container from "./Container";

import { RadioGroup } from '@headlessui/react'

const boxVariants = {
  initial: { x: "20vw", opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { staggerChildren: 0.4, ease: "easeInOut", duration: 1 },
  },
};
const FirstStep = ({ valueChanger, inputs,setCurrStep, valueCheckerChanger, data,maintanceType, setMaintanceType }) => {

  const includes = data.includesWithPrevPlan ? data.includesWithPrevPlan : data.includes



  return (
    <>
    <div className=" border-b border-[#d8d4dc]">
        <Container>
        {inputs.typeService != "maintance" &&  <>
            <h2 className="text-2xl ">Информация за бизнеса</h2>
            <p className="mt-2">
             За да изградим най-подходящият дизайн и най-добрата маргетингова стратегия, ще ни е нужна сферата на бизнеса
             {/* <br />
              <span className="text-sm">
                * Не се тревожете от избора сега, в бъдеще ще имате възможността да
                промените избора си
              </span> */}
            </p>
          </>}
          {inputs.typeService == "maintance" &&  <>
            <h2 className="text-2xl ">Типа на сайта</h2>
            <p className="mt-2">
             Изберете какъв е типа на сайта.
             {/* <br />
              <span className="text-sm">
                * Не се тревожете от избора сега, в бъдеще ще имате възможността да
                промените избора си
              </span> */}
            </p>
          </>}
          <motion.div
            className="grid mt-5 "
            variants={boxVariants}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={boxVariants}>
            {inputs.typeService != "maintance" && <>
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
            </>}
            {inputs.typeService == "maintance" &&              <MyRadioGroup
            
            selected={maintanceType} setSelected={setMaintanceType}
            />
}
            </motion.div>
          </motion.div>
        </Container>
      </div>
      
        <Container>
          <div className="grid lg:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold">Какво включва плана:</h3>
              <ol className="ml-4 list-decimal">
                { includes.map((include, index)=>{
                  return <li key={index}>{include}</li>
                })}
                
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

const plans = [
  {
    name: 'Онлайн Магазин',
    value: "ecommerce"
  },
  {
    name: 'Уебсайт',
    value: "website"
  },
 
]

  function MyRadioGroup({selected, setSelected}) {

  return (
    <div className="w-full px-4 py-4">
      <div className="w-full max-w-xl mx-auto">
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="grid grid-cols-2 gap-x-10 ">
            {plans.map((plan) => (
              <RadioGroup.Option
                key={plan.name}
                value={plan.value}
                className={({ active, checked }) =>
                  `${
                    active
                      ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                      : ''
                  }
                  ${
                    checked ? 'bg-[#10648c] bg-opacity-75 text-white' : 'bg-white'
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center">
                        <div className="text-xl">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${
                              checked ? 'text-white' : 'text-gray-900'
                            }`}
                          >
                            {plan.name}
                          </RadioGroup.Label>
                 
                        </div>
                      </div>
                      {checked && (
                        <div className="text-white shrink-0">
                          <CheckIcon className="w-6 h-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}