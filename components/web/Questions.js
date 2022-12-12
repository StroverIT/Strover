import React, { useState } from "react";

// Nextjs

// Framer motion
import { motion, AnimatePresence } from "framer-motion";

// Icons
import { AiOutlinePlus } from "react-icons/ai";
import { questionData } from "./questionComp/questionData";
import BlueLine from "./questionComp/BlueLine";
import HeaderSpider from "../HeaderSpider";

export default function Questions() {
  return (
    <section>
      <section className="relative w-full -mt-[5.6rem] bg-blue-200  pb-28 box">
        <section className="container pt-28">
          <div className="flex-col pb-2 flex-center">
            <div
              className="hidden text-4xl font-semibold text-blue-50 lg:flex"
              id="questions"
            >
              <HeaderSpider title="ЧЕСТО ЗАДАВАНИ ВЪПРОСИ" />
            </div>

            <div
              className="text-xl font-semibold lg:text-4xl text-blue-50 max-lg:text-center lg:hidden"
              id="questions"
            >
              ЧЕСТО ЗАДАВАНИ ВЪПРОСИ
            </div>
            <p className="max-w-xl mt-1 text-center max-lg:text-sm ">
              Какви са най-често задаваните въпроси, които вълнуват нашите
              клиенти преди да започнем съвместната си работа
            </p>
          </div>
        </section>

        {/* Questions */}
        <section className="relative z-20 flex flex-col mx-auto lg:px-52 max-w-7xl max-lg:container">
          <BlueLine />
          {questionData.map((question, index) => {
            return (
              <Question
                key={question._id}
                title={question.title}
                text={question.text}
                isBorder={question.isBorder}
                index={index}
              />
            );
          })}
          <BlueLine />
        </section>
      </section>
    </section>
  );
}

const variants = {
  hide: { opacity: 0, y: -10, transition: { duration: 0.5 } },
  // You can do whatever you want here, if you just want it to stop completely use `rotate: 0`
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const iconVariants = {
  closed: { rotate: 0 },
  open: {
    rotate: "135deg",
    transition: {
      duration: 0.5,
    },
  },
};
function Question({ title, text, isBorder = true, index }) {
  console.log(index);
  const [isOpen, setOpen] = useState(index == 0 ? true : false);

  return (
    <section className={`p-4 ${isBorder ? "border-b-2 border-blue-250" : ""} `}>
      <div onClick={() => setOpen(!isOpen)} className="cursor-pointer">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold uppercase text-md lg:text-lg">
            {title}
          </h4>
          <motion.div
            animate={isOpen ? "open" : "closed"}
            variants={iconVariants}
            className={`text-xl ${isOpen ? "text-lightGreen" : "text-white"}`}
          >
            <AiOutlinePlus />
          </motion.div>
        </div>
        <motion.div
          animate={isOpen ? "show" : "hide"}
          transition={{
            type: "spring",
            duration: 2,
            stiffness: 260,
            damping: 20,
          }}
          variants={variants}
        >
          <AnimatePresence>
            {isOpen && (
              <motion.p
                exit={{
                  opacity: 0,
                }}
                className="mt-1 max-lg:text-sm"
              >
                {text}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
