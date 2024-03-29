import Image from "next/image";
import React, { useEffect, useRef } from "react";

import TextAnimation from "../../libs/TextAnimation";

import { motion, useAnimation, useInView } from "framer-motion";
import FadeIn from "../layouts/animations/onView/FadeIn";

import { useTranslation } from "next-i18next";
import TransText from "../layouts/TransText";

const sectionVariant = {
  animate: {
    transition: { staggerChildren: 0.3 },
  },
};

export default function HowToProfit() {
  const trans = "web";
  const { t } = useTranslation(trans);

  const section = useRef(null);
  const sectionView = useInView(section, { amount: 0.2 });

  const sectionAnim = useAnimation();

  useEffect(() => {
    if (sectionView) sectionAnim.start("animate");
    if (!sectionView) sectionAnim.start("initial");
  }, [sectionView]);

  return (
    <section className="relative z-10 text-center max-lg:container pt-14 xl:-mt-96 -mt-28">
      <div className="flex-col flex-center">
        <div className="hidden font-semibold uppercase lg:text-4xl text-blue-50 lg:flex ">
          <TextAnimation
            placeholderText={[
              {
                type: "heading1",
                text: "как вашият уеб сайт печели за вас",
              },
            ]}
            trans={trans}
          />
        </div>
        <h1 className="text-3xl font-semibold uppercase text-blue-50 lg:hidden">
          {t("как вашият уеб сайт печели за вас")}
        </h1>
        <FadeIn duration={0.85} delay={0.4}>
          <div className="max-w-3xl text-lg max-lg:mt-2 ">
            {/* В днешни дни не е достатъчно да притежавате просто сайт, трябва Ви
            Уеб сайт, който развива бизнеса Ви онлайн */}
            {/* Как и защо вашият уебсайт ще печели за бизнесът Ви. */}
          </div>
        </FadeIn>
      </div>
      {/* gap-x-28 */}
      <motion.section
        animate={sectionAnim}
        variants={sectionVariant}
        className="grid mt-20 lg:grid-cols-3 lg:gap-x-28 lg:px-28 max-sm:gap-y-10"
        ref={section}
      >
        <FadeIn duration={0.85}>
          <div className="flex-center">
            <div className="relative h-28 w-28">
              <Image src="/icons/24-hours.png" fill alt="24 hours icon" />{" "}
            </div>
          </div>
          <h2 className="mt-5 text-lg font-semibold lg:text-xl">
            {t("Вашият уеб сайт работи денонощно")}
          </h2>
          <p className="mt-2">
            <TransText trans="web">
              За разлика от нас хората, сайта няма нужда от почивка. Той ще
              представя бизнеса Ви денонощно, за да може до Вас винаги да
              достигат повече потребители и потенциални клиенти, които се
              интересуват от вашите услуги или продукти.
            </TransText>
          </p>
        </FadeIn>
        <FadeIn duration={0.85} delay={0.2} className="">
          <div>
            <div className="flex-center">
              <div className="relative h-28 w-28">
                <Image src="/icons/trust.png" fill alt="24 hours icon" />{" "}
              </div>
            </div>
            <h2 className="mt-5 text-lg font-semibold">
              {t("Изграждане на доверието в клиентите Ви")}
            </h2>
            <p className="mt-2">
              <TransText trans="web">
                Всеки ваш потенциален клиент, ще желае да види така наречената
                “дигитална следа”, това ще рече социални мрежи и Уеб сайт. Защо
                ли? Вече никой не се доверява “на сляпо”, всеки иска да провери
                с кого ще работи.
              </TransText>
            </p>
          </div>
        </FadeIn>
        <FadeIn duration={0.85} delay={0.4} className="">
          <div>
            <div className="flex-center">
              <div className="relative h-28 w-28">
                <Image src="/icons/expansion.png" fill alt="24 hours icon" />{" "}
              </div>
            </div>
            <h2 className="mt-5 text-lg font-semibold">
              {t("Разширяване обхвата на бизнеса Ви")}
            </h2>
            <p className="mt-2">
              <TransText trans="web">
                Забравете вече за териториалните ограничения, вие разполагате с
                целият интернет. Сайтът Ви има възможността да се срещне с
                неограничен брой хора и достигане до повече клиенти.
              </TransText>
            </p>
          </div>
        </FadeIn>
      </motion.section>
    </section>
  );
}
