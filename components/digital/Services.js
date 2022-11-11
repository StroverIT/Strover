import Image from "next/legacy/image";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";
import TextAnimation from "../../libs/TextAnimation";

const dataServices = [
  {
    title: "Дизайн и брандинг",
    text: `По-просто казано  - вашата визия в дигиталното пространство. 
    Днес потребителите се доверяват най-много на визуалните си възприятия и дизайнът на вашите социални мрежи е от изключителна важност.
    Звучи страшно, но нашите креативни STROVER паяци ще ви помогнат с тази задача. 
`,
    lines: 4,
    link: "none",
    _id: "1sdfjkhdshjk18",
  },
  {
    title: "Изготвяне на индивидуална стртегия.",
    text: `Дигиталната стратегия води до продажби, увеличаване на клиентската база и сигурен успех. Следването на ясен план ще ви донесе надеждни и трайни резултати.`,
    lines: 4,

    link: "none",
    _id: "zxczxc141241",
  },
  {
    title: "",
    text: `Създаване на креативно и интерактивно съдържание, което отговаря на нуждите на Вашата потенцуална аудитория.`,
    lines: 4,

    link: "none",
    _id: "sadagzxc213",
  },
  {
    title: "",
    text: `Проучване, анализ, планиране. Важни стъпки за намиране на силните и слабите ви страни.`,
    lines: 4,

    link: "none",
    _id: "asdasfas1212agsd1231",
  },

  {
    title: "Ежемесечен планинг за съдържанието, което ще публикуваме.",
    text: `Календар с идеи и ясен план за дойствие. Поставяме си цели и ги постигаме с помощта на креативни публикации и кампании..
`,
    lines: 0,

    link: "none",
    _id: "21sfaf1",
  },
];

const boxesVariant = {
  animate: { transition: { staggerChildren: 0.5 } },
};

const boxVariant = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { ease: "easeOut", duration: 1 },
  },
};

export default function Services() {
  return (
    <section className="">
      <section className="container items-center text-4xl font-semibold text-center">
        <TextAnimation
          placeholderText={[
            { type: "heading1", text: "Процеса и услугите ни" },
          ]}
        />
      </section>

      <section>
        {dataServices.map((service, index) => {
          return (
            <Service
              key={service._id}
              numb={index + 1}
              lines={service.lines}
              title={service.title}
              text={service.text}
            />
          );
        })}
      </section>
    </section>
  );
}
function Service({ numb, lines, title, text, link }) {
  let arr = [];
  for (let i = 0; i < lines; i++) {
    arr.push(i);
  }
  const [items, itemsView] = useInView({ threshold: 0.2 });

  const itemsAnim = useAnimation();

  useEffect(() => {
    if (itemsView) itemsAnim.start("animate");
    if (!itemsView) itemsAnim.start("initial");
  }, [itemsView]);

  return (
    <section className="flex lg:px-80">
      <section className="relative hidden lg:flex">
        <div className="relative w-40 h-40">
          <Image
            src="/digitalForms/forNumber.svg"
            alt="this is background for digital numbers"
            layout="fill"
          />
          <div className="absolute text-5xl death-center text-blue days-one-font">
            {numb}
          </div>
          <div className="flex-col pt-32 flex-center">
            {arr.length > 0 && <div className="w-2 h-5 bg-pink-100 "></div>}
            {arr.map((line) => (
              <div className="w-2 mt-5 bg-pink-100 h-7" key={line}></div>
            ))}
          </div>
        </div>
      </section>
      <motion.section
        variants={boxesVariant}
        ref={items}
        animate={itemsAnim}
        className="container pt-16"
      >
        <motion.h5 variants={boxVariant} className="text-2xl font-semibold">
          {title}
        </motion.h5>
        <motion.p variants={boxVariant} className="pt-3">
          {text}
        </motion.p>
        <motion.button
          variants={boxVariant}
          className="py-2 mt-10 transition-all bg-pink-100 rounded-full px-9 hover:drop-shadow-lg hover:-translate-y-1"
        >
          Виж повече
        </motion.button>
      </motion.section>
    </section>
  );
}
