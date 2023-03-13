import Image from "next/image";

import TextAnimation from "../../libs/TextAnimation";
import HeaderSpider from "../HeaderSpider";
import FadeFromBottom from "../layouts/animations/onView/FadeFromBottom";
import { useTranslation } from "next-i18next";
import TransText from "../layouts/TransText";
const dataServices = [
  {
    title: "Дизайн и брандинг",
    text: `По-просто казано - вашата визия в дигиталното пространство. Днес потребителите се доверяват най-много на визуалните си възприятия и дизайнът на вашите социални мрежи е от изключителна важност. Звучи страшно, но нашите креативни STROVER паяци ще ви помогнат с тази задача.`,
    lines: 4,
    link: "none",
    _id: "1sdfjkhdshjk18",
  },
  {
    title: "Изготвяне на индивидуална стратегия.",
    text: `Дигиталната стратегия води до продажби, увеличаване на клиентската база и сигурен успех. Следването на ясен план ще ви донесе надеждни и трайни резултати.`,
    lines: 4,

    link: "none",
    _id: "zxczxc141241",
  },
  {
    title: "Съдържание",
    text: `Създаване на креативно и интерактивно съдържание, което отговаря на нуждите на Вашата потенциална аудитория.`,
    lines: 4,

    link: "none",
    _id: "sadagzxc213",
  },
  {
    title: "П.П.А.",
    text: `Проучване, планиране и анализ. Важни стъпки за намиране на силните и слабите Ви страни.`,
    lines: 3,

    link: "none",
    _id: "asdasfas1212agsd1231",
  },

  {
    title: "Ежемесечен планинг за съдържанието, което ще публикуваме.",
    text: `Календар с идеи и ясен план за действие. Поставяме си цели и ги постигаме с помощта на креативни публикации и кампании.`,
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
  const trans = "digital";
  return (
    <section className="mt-20 lg:mt-36" id="services">
      <section className="container items-center text-2xl font-semibold text-center lg:text-4xl">
        <div className="flex-col flex-center">
          <HeaderSpider
            title="Процеса и услугите ни"
            size="max-lg:container text-4xl lg:text-5xl"
            lineColor="bg-pink-200"
            trans={trans}
          />
        </div>
        {/* <TextAnimation
          placeholderText={[
            { type: "heading1", text: "Процеса и услугите ни" },
          ]}
        /> */}
      </section>

      <section className="flex flex-col mt-5 gap-y-10">
        {dataServices.map((service, index) => {
          return (
            <Service
              key={service._id}
              index={index}
              lines={service.lines}
              title={service.title}
              text={service.text}
              trans={trans}
            />
          );
        })}
      </section>
    </section>
  );
}
function Service({ index, lines, title, text, link, trans }) {
  const { t } = useTranslation(trans);

  boxVariant.animate.transition.delay = index / 10;
  let arr = [];
  for (let i = 0; i < lines; i++) {
    arr.push(i);
  }

  return (
    <section className="flex lg:px-80">
      <section className="relative hidden lg:flex">
        <div className="relative w-40 h-40">
          <Image
            src="/digitalForms/forNumber.svg"
            alt="this is background for digital numbers"
            fill
          />
          <div className="absolute text-5xl death-center text-blue days-one-font">
            {index + 1}
          </div>
          <div className="flex-col pt-32 flex-center">
            {arr.length > 0 && <div className="w-2 h-5 bg-pink-100 "></div>}
            {arr.map((line) => (
              <div className="w-2 mt-5 bg-pink-100 h-7" key={line}></div>
            ))}
          </div>
        </div>
      </section>
      <section className="container lg:pt-16">
        <FadeFromBottom duration={0.5}>
          <h2 className="text-lg font-semibold lg:text-2xl">{t(title)}</h2>
        </FadeFromBottom>
        <FadeFromBottom duration={0.5} delay={0.1}>
          <p className="pt-1 max-lg:text-sm">
            <TransText trans={trans}>{text}</TransText>
          </p>
        </FadeFromBottom>
        {/* <motion.button
          variants={boxVariant}
          className="py-2 mt-4 transition-all bg-pink-100 rounded-full lg:mt-5 max-lg:text-sm px-9 hover:drop-shadow-lg hover:-translate-y-1"
        >
          Виж повече
        </motion.button> */}
      </section>
    </section>
  );
}
