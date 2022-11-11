import Image from "next/legacy/image";
import React, { useEffect } from "react";

import TextAnimation from "../../libs/TextAnimation";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const sectionVariant = {
  animate: {
    transition: { staggerChildren: 0.3 },
  },
};
const divVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 2.5,
      type: "spring",
    },
  },
};
export default function HowToProfit() {
  const [section, sectionView] = useInView({ threshold: 0.2 });

  const sectionAnim = useAnimation();

  useEffect(() => {
    if (sectionView) sectionAnim.start("animate");
    if (!sectionView) sectionAnim.start("initial");
  }, [sectionView]);

  return (
    <section className="container relative z-10 text-center pt-14 xl:-mt-96 -mt-28">
      <div className="flex-col flex-center">
        <div className="text-4xl font-semibold uppercase text-blue-50">
          <TextAnimation
            placeholderText={[
              {
                type: "heading1",
                text: "как сайтът ви ще печели за вас",
              },
            ]}
          />
        </div>
        <div className="max-w-2xl mt-2 text-lg">
          <TextAnimation
            delay="1"
            placeholderText={[
              {
                type: "paragraph",
                text: "В днешни дни не е достатъчно да притежавате просто сайт, трябва Ви Уеб сайт, който развива бизнеса Ви онлайн.",
                // text: "Това е повече от уебсайт. Това си е твоя бизнес.",
              },
            ]}
          />
        </div>
      </div>
      {/* gap-x-28 */}
      <motion.section
        animate={sectionAnim}
        variants={sectionVariant}
        className="grid lg:grid-cols-3 mt-14 gap-x-10 max-sm:gap-y-10"
        ref={section}
      >
        <motion.div variants={divVariant}>
          <div className="flex-center">
            <div className="relative h-28 w-28">
              <Image
                src="/icons/24-hours.png"
                layout="fill"
                alt="24 hours icon"
              />{" "}
            </div>
          </div>
          <h5 className="mt-5 text-xl font-semibold">
            Денонощно сайта работи за вас
          </h5>
          <p className="mt-2 ">
            За разлика от Вас, сайтът Ви няма нужда от почивка. Сайтът ще
            представя бизнеса Ви денонощно, за да може до Вас винаги да достигат
            повече потребители и потенциални клиенти, които се интересуват от
            това, което предлагате.
          </p>
        </motion.div>
        <motion.div variants={divVariant}>
          <div className="flex-center">
            <div className="relative h-28 w-28">
              <Image src="/icons/trust.png" layout="fill" alt="24 hours icon" />{" "}
            </div>
          </div>
          <h5 className="mt-5 text-lg font-semibold">
            Изграждане на доверието в клиентите Ви
          </h5>
          <p className="mt-2">
            Всеки ваш потенциален клиент, ще желае да види вашата “дигитална
            следа”, това ще рече социални мрежи и Уеб сайт. Защо ли? Вече никой
            не се доверява “на сляпо”, всеки иска да провери с кого ще работи.
          </p>
        </motion.div>
        <motion.div variants={divVariant}>
          <div className="flex-center">
            <div className="relative h-28 w-28">
              <Image
                src="/icons/expansion.png"
                layout="fill"
                alt="24 hours icon"
              />{" "}
            </div>
          </div>
          <h5 className="mt-5 text-lg font-semibold">
            Разширяване обхвата на бизнеса Ви
          </h5>
          <p className="mt-2">
            Забравете вече за териториалните ограничения, вие разполагате с
            целият интернет. Сайтът Ви има възможноста да се срещне с
            неограничен брой хора и да достигнете до повече клиенти.
          </p>
        </motion.div>
      </motion.section>
    </section>
  );
}
