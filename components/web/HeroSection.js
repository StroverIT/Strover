import React from "react";
import CodeTextAnim from "../../libs/CodeTextAnim";
import { useTranslation } from "next-i18next";

export default function HeroSection() {
  const { t } = useTranslation("web");

  return (
    <section className="max-sm:mt-10 flex items-center    max-lg:flex-center text-center lg:left-1/2 lg:-translate-x-1/2 z-30  h-[70vh]  lg:absolute lg:-translate-y-[4rem] md:top-28">
      <section className="relative z-30 ">
        {/* <h1 className="text-5xl font-bold md:text-7xl text-blue-50">
          Изработка на сайт
        </h1> */}
        {/* <div className="container w-screen"> */}

        <CodeTextAnim />

        {/* </div> */}
        <div className="flex-center">
          <p className="max-w-xl mt-3 text-center text-md md:font-medium max-md:container">
            {t(
              "В Strover Web ще научите всичко необходимо за изработване на уеб сайт"
            )}
          </p>
        </div>
        {/* <p className="container max-w-xl mt-3 text-justify text-md hypens-auto">
          В Strover Web ще научите за нашите услуги в областта на разработването
          на уеб сайтове, поддържане и ребрандиране на вече същестуващи такива,
          както и SEO оптимизация.
        </p> */}
        <div className="mt-10">
          <a href="#services" className="inline-flex">
            <button className="px-8 py-3 text-lg font-semibold rounded-lg btn-bg-color">
              {t("Научи повече")}
            </button>
          </a>
        </div>
      </section>
      {/* <section className="absolute -right-[940px]">
          <section className="relative h-[500px] w-[2000px]">
            <Image
              src="/digitalForms/heroSec2.svg"
              alt="digital marketing with all services"
              layout="fill"
              objectFit="contain"
            />
          </section>
        </section> */}
    </section>
  );
}
