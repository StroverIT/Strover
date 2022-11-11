import React, { useState } from "react";

// Nextjs
import Image from "next/legacy/image";

// Framer motion
import { motion, AnimatePresence } from "framer-motion";
import TextAnimation from "../../libs/TextAnimation";
// Icons
import { AiOutlinePlus } from "react-icons/ai";
const questionData = [
  {
    title: "КОЛКО ПАРИ ЩЕ МИ СТРУВА",
    text: `Всеки наш проект има индивидуален дизайн и бизнес логика. Офертата, която ще Ви предложим за изработката на уеб сайт или онлайн магазин ще бъде специално създадена за вас като съотношение цена-качество  и ще е съобразена спрямо целите, които гоните, функционалностите и мащаба на сайта`,
    _id: "1231231212",
  },
  {
    title: "КАКВО ОЧАКВАТЕ ОТ МЕН",
    text: `От Вас очакваме да ни предоставите информацията, с която ще искате да представите бизнеса си, дейността си, продуктите и/или услугите си. Разбира се, нашият екип ще Ви съдейства с предложения, препоръки и подробни насоки. Ако нямате времето за тази подготовка, то ще може да Ви съдействаме и с този етап.`,
    _id: "1231311",
  },
  {
    title: "ИМАМ ПО-ИЗГОДНИ ПРЕДЛОЖЕНИЯ",
    text: `Добре разработеният сайт генерира приходи от онлайн пространството Ви години наред. Професионалният ни съвет е да не се фокусирате върху разлики в рамките на няколкостотин лева, които се възвръщат моментално като инвестиция, а да съпоставяте предложенията по това какво ще донесат за бизнеса Ви.`,
    _id: "21312323112",
  },
  {
    title: "КОЛКО ВАРИАНТА НА ВИЗИИ ЩЕ МИ ДАДЕТЕ",
    text: `Ние не работим по готови темплейти, затова Ви предоставяме индивидуални дизайни, които са съобразени с вашите предпочитания за визия. Те се съчетаваст с успешни работещи практити, за да Ви предоставим  най-добрите решения. Разбира се първо минава през Вашето одобрение и корекции при необходимост. `,
    _id: "sadc2sa",
  },
  {
    title: "КАК КЛИЕНТИТЕ ЩЕ ДОСТИГАТ ДО МЕН",
    text: `Въжмосностите са безкрайни затова избираме най-оптималният начин, спрямо вашият бизнес и технологии за изграждането на сайта.`,
    isBorder: false,
    _id: "1231sada211s",
  },
];
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

      <section className="relative w-full bg-blue-200 mt-28 pb-36">
        <section className="container pt-28">
          <div className="flex-col flex-center">
            <div className="text-4xl font-semibold text-blue-50">
              <TextAnimation
                placeholderText={[
                  {
                    type: "heading1",
                    text: "ЧЕСТО ЗАДАВАНИ ВЪПРОСИ",
                  },
                ]}
              />
            </div>
            <p className="max-w-lg mt-1 text-center">
              Какви са най-често задаваните въпроси, които вълнуват нашите
              клиенти преди да започнем съвместната си работа
            </p>
          </div>
        </section>

        {/* Questions */}
        <section className="relative z-20 flex flex-col mx-auto mt-10 lg:px-48 max-w-7xl">
          <div className="flex-center">
            <div className="w-4 h-4 rounded-full bg-blue-250"></div>
            <div className="w-full h-1 bg-blue-250"></div>
            <div className="w-4 h-4 rounded-full bg-blue-250"></div>
          </div>
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
          <div className="flex-center">
            <div className="w-4 h-4 rounded-full bg-blue-250"></div>
            <div className="w-full h-1 bg-blue-250"></div>
            <div className="w-4 h-4 rounded-full bg-blue-250"></div>
          </div>
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
          <h4 className="text-lg font-semibold uppercase">{title}</h4>
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
                className="mt-1"
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
