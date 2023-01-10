import Image from "next/image";
import React from "react";
import TextAnimation from "../../libs/TextAnimation";
import HeaderSpider from "../HeaderSpider";
import FadeFromBottom from "../layouts/animations/onView/FadeFromBottom";

export default function ProcessAndServices() {
  return (
    <section className="mt-20 max-lg:container md:mt-20" id="services">
      <section className="flex-col text-center flex-center">
        <div className="font-semibold uppercase text-blue-50 flex-center">
          <HeaderSpider title="Процеса и услугите ни" size="text-4xl" />
        </div>

        <div className="hidden mt-2 lg:flex">
          <TextAnimation
            placeholderText={[
              {
                type: "paragraph",
                text: "Нашият процес чрез който изграждаме успешен уеб сайт.",
              },
            ]}
          />
        </div>
        <p className="mt-2 text-sm lg:hidden">
          Нашият процес чрез който изграждаме успешен уеб сайт.
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
            <h5 className="mt-3 text-lg font-semibold lg:text-2xl">
              Анализ и консултация
            </h5>
          </FadeFromBottom>
          <FadeFromBottom duration={0.5} delay={0.2}>
            <p className="max-w-sm mt-1 text-center max-lg:text-sm">
              Най-напред извършваме консултация, където ще поговорим за вашите
              идеи и как ние можем да ви помогнем.
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
            <h5 className="mt-3 text-lg font-semibold lg:text-2xl">
              Изработка нa сайт
            </h5>
          </FadeFromBottom>
          <FadeFromBottom duration={0.5} delay={0.2}>
            <p className="max-w-sm mt-1 text-center max-lg:text-sm">
              След като разберем почече за вашите цел и посока, започваме
              разботката на перфектия за ваш сайт.
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
            <h5 className="mt-3 text-xl font-semibold lg:text-2xl">
              SEO оптимизация
            </h5>
          </FadeFromBottom>
          <FadeFromBottom duration={0.5} delay={0.2}>
            <p className="max-w-sm mt-1 text-center max-lg:text-sm">
              Когато е завършен уейбсайта, се пристъпва към намирането на
              потребители и потенциални клиенти. Това се извършва, чрез
              търсачките или т.н. SEO (Search Engine Optimization)
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
            <h5 className="mt-3 text-lg font-semibold text-center lg:text-2xl">
              Онлайн добавяне на продукти
            </h5>
          </FadeFromBottom>
          <FadeFromBottom duration={0.5} delay={0.2}>
            <p className="mt-1 text-center lg:max-w-sm max-lg:text-sm">
              С услугата “Онлайн добавяне на продукти”, ние ще добавим вашите
              дигитални продукти, чрез Admin Panel, който е изработен от нас за
              вас.
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
            <h5 className="mt-3 text-xl font-semibold lg:text-2xl">
              Поддръжка и развитие
            </h5>
          </FadeFromBottom>
          <FadeFromBottom duration={0.5} delay={0.2}>
            <p className="max-w-sm mt-1 text-center max-lg:text-sm">
              Когато сайтът Ви има техническа поддръжка, той е винаги актуален,
              винаги защитен от атаки и винаги в изправност и готов да достигне
              до нови висоти.
            </p>
          </FadeFromBottom>
        </div>
      </section>
      <section className="container mt-20 lg:mt-80">
        <TextAnimation
          placeholderText={[
            {
              type: "paragraph",
              text: "* Всяка услуга изброена по-горе, може да бъде поръчана поотделно",
            },
          ]}
        />
      </section>
    </section>
  );
}
