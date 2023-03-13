import Image from "next/image";
import React from "react";
import TextAnimation from "../../libs/TextAnimation";
import HeaderSpider from "../HeaderSpider";
import FadeFromBottom from "../layouts/animations/onView/FadeFromBottom";
import { useTranslation } from "next-i18next";
import TransText from "../layouts/TransText";
export default function ProcessAndServices() {
  const trans = "web";
  const { t } = useTranslation("web");

  return (
    <section className="mt-20 max-lg:container md:mt-20" id="services">
      <section className="flex-col text-center flex-center">
        <div className="font-semibold uppercase text-blue-50 flex-center">
          <HeaderSpider
            title="Процеса и услугите ни"
            trans={trans}
            size="text-4xl"
          />
        </div>

        <div className="hidden mt-2 lg:flex">
          <TextAnimation
            placeholderText={[
              {
                type: "paragraph",
                text: "Нашият процес чрез който изграждаме успешен уеб сайт.",
              },
            ]}
            trans={trans}
          />
        </div>
        <p className="mt-2 text-sm lg:hidden">
          {t("Нашият процес чрез който изграждаме успешен уеб сайт.")}
        </p>
      </section>
      <section className="relative max-3xl:flex max-3xl:flex-wrap max-3xl:items-center max-3xl:justify-center mt-14 max-3xl:gap-y-20 sm:gap-y-10 sm:gap-x-40">
        <div className="hidden 3xl:flex">
          <div className="relative h-[1020px] w-full">
            <Image
              src="/web/lines.svg"
              alt="web digital lines for counting"
              fill
            />
          </div>
        </div>
        {/* Analyze */}
        <div className="flex-center flex-col 3xl:absolute lg:top-[320px] lg:left-[300px] ">
          <FadeFromBottom duration={0.5}>
            <div className="relative h-28 w-28">
              <Image src="/icons/analyze.png" alt="analyze icon" fill />
            </div>
          </FadeFromBottom>

          <FadeFromBottom duration={0.5} delay={0.1}>
            <h2 className="mt-3 text-lg font-semibold lg:text-2xl">
              {t("Анализ и консултация")}
            </h2>
          </FadeFromBottom>
          <FadeFromBottom duration={0.5} delay={0.2}>
            <p className="max-w-sm mt-1 text-center max-lg:text-sm">
              {t(
                "Най-напред извършваме консултация, където ще поговорим за вашите идеи и как ние можем да ви помогнем."
              )}
            </p>
          </FadeFromBottom>
        </div>
        {/* Development */}
        <div className="flex-center flex-col 3xl:absolute lg:top-[320px] lg:right-[390px] ">
          <FadeFromBottom duration={0.5}>
            <div className="relative h-28 w-28">
              <Image
                src="/icons/programing.png"
                alt="Programing or coding "
                fill
              />
            </div>
          </FadeFromBottom>
          <FadeFromBottom duration={0.5} delay={0.1}>
            <h2 className="mt-3 text-lg font-semibold lg:text-2xl">
              {t("Изработка нa сайт")}
            </h2>
          </FadeFromBottom>
          <FadeFromBottom duration={0.5} delay={0.2}>
            <p className="max-w-sm mt-1 text-center max-lg:text-sm">
              {t(
                "След като разберем повече за вашите цел и посока, започваме разработка на перфектният за ваш сайт."
              )}
            </p>
          </FadeFromBottom>
        </div>
        {/* Seo optimization */}
        <div className="flex-center flex-col 3xl:absolute lg:bottom-[-120px] lg:right-[170px] ">
          <FadeFromBottom duration={0.5}>
            <div className="relative h-28 w-28">
              <Image src="/icons/seo.png" alt="Seo optimization" fill />
            </div>
          </FadeFromBottom>
          <FadeFromBottom duration={0.5} delay={0.1}>
            <h2 className="mt-3 text-xl font-semibold lg:text-2xl">
              {t("SEO оптимизация")}
            </h2>
          </FadeFromBottom>
          <FadeFromBottom duration={0.5} delay={0.2}>
            <p className="max-w-sm mt-1 text-center max-lg:text-sm">
              <TransText trans="web">
                Когато е завършен уейбсайта, се пристъпва към намирането на
                потребители и потенциални клиенти. Това се извършва, чрез
                търсачките или т.н. SEO (Search Engine Optimization)
              </TransText>
            </p>
          </FadeFromBottom>
        </div>
        {/* Online writing products */}
        <div className="flex-center flex-col 3xl:absolute lg:bottom-[-160px] lg:left-[710px] ">
          <FadeFromBottom duration={0.5}>
            <div className="relative h-28 w-28">
              <Image
                src="/icons/content.png"
                alt="Online writing products"
                fill
              />
            </div>
          </FadeFromBottom>
          <FadeFromBottom duration={0.5} delay={0.1}>
            <h2 className="mt-3 text-lg font-semibold text-center lg:text-2xl">
              {t("Онлайн добавяне на продукти")}
            </h2>
          </FadeFromBottom>
          <FadeFromBottom duration={0.5} delay={0.2}>
            <p className="mt-1 text-center lg:max-w-sm max-lg:text-sm">
              <TransText trans="web">
                С услугата “Онлайн добавяне на продукти”, ние ще добавим вашите
                дигитални продукти, чрез Admin Panel, който е изработен от нас
                за вас.
              </TransText>
            </p>
          </FadeFromBottom>
        </div>
        {/* Maintance */}
        <div className="flex-center flex-col 3xl:absolute lg:bottom-[-160px] lg:left-[157px] ">
          <FadeFromBottom duration={0.5}>
            <div className="relative h-28 w-28">
              <Image src="/icons/configuration.png" alt="Maintance" fill />
            </div>
          </FadeFromBottom>
          <FadeFromBottom duration={0.5} delay={0.1}>
            <h2 className="mt-3 text-xl font-semibold lg:text-2xl">
              {t("Поддръжка и развитие")}
            </h2>
          </FadeFromBottom>
          <FadeFromBottom duration={0.5} delay={0.2}>
            <p className="max-w-sm mt-1 text-center max-lg:text-sm">
              <TransText trans="web">
                Когато сайтът Ви има техническа поддръжка, той е винаги
                актуален, винаги защитен от атаки и винаги в изправност и готов
                да достигне до нови висоти.
              </TransText>
            </p>
          </FadeFromBottom>
        </div>
      </section>
      <section className="container mt-20 lg:mt-80 flex">
        <span className="pr-1">*</span>
        <TextAnimation
          placeholderText={[
            {
              type: "paragraph",
              text: "Всяка услуга изброена по-горе, може да бъде поръчана поотделно",
            },
          ]}
          trans={trans}
        />
      </section>
    </section>
  );
}
