import React, { useState } from "react";

// Nextjs
import Image from "next/legacy/image";

// Framer motion
import { motion, AnimatePresence } from "framer-motion";
import TextAnimation from "../../libs/TextAnimation";
// Icons
import { AiOutlinePlus } from "react-icons/ai";
import { questionData } from "./questionComp/questionData";
import BlueLine from "./questionComp/BlueLine";

export default function Questions() {
  return (
    <section>
      <div className="-mb-[310px] lg:-mb-[350px]">
        <div className="relative z-10 w-full h-96">
          <Image src="/web/questions/upperLayer.svg" layout="fill" alt="Adad" />
        </div>
        <div className="relative w-full h-96 -mt-[370px] lg:-mt-[320px] z-10">
          <Image
            src="/web/questions/upperDownLayer.svg"
            layout="fill"
            alt="Adad"
          />
        </div>
      </div>

      <section className="relative w-full bg-blue-200 mt-28 pb-36  ">
        <section className="container pt-28">
          <div className="flex-col flex-center">
            <div
              className="text-4xl font-semibold text-blue-50 hidden lg:flex"
              id="questions"
            >
              <TextAnimation
                placeholderText={[
                  {
                    type: "heading1",
                    text: "ЧЕСТО ЗАДАВАНИ ВЪПРОСИ",
                  },
                ]}
              />
            </div>

            <div
              className="text-xl lg:text-4xl font-semibold text-blue-50  max-lg:text-center lg:hidden"
              id="questions"
            >
              ЧЕСТО ЗАДАВАНИ ВЪПРОСИ
            </div>
            <p className="max-lg:text-sm max-w-lg mt-1 text-center ">
              Какви са най-често задаваните въпроси, които вълнуват нашите
              клиенти преди да започнем съвместната си работа
            </p>
          </div>
        </section>

        {/* Questions */}
        <section className="relative z-20 flex flex-col mx-auto mt-10 lg:px-52 max-w-7xl max-lg:container">
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
      <div className="-mt-[13rem] lg:-mt-[14rem]">
        <div className="relative z-10 w-full h-96">
          <Image src="/web/questions/upperLayer.svg" layout="fill" alt="Adad" />
        </div>
        <div className="relative w-full h-96 -mt-[365px] lg:-mt-[320px] z-10">
          <Image
            src="/web/questions/upperDownLayer.svg"
            layout="fill"
            alt="Adad"
          />
        </div>
      </div>
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
          <h4 className="text-md lg:text-lg font-semibold uppercase">
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
