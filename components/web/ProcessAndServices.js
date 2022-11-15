import Image from "next/legacy/image";
import React from "react";
import TextAnimation from "../../libs/TextAnimation";

export default function ProcessAndServices() {
  return (
    <section className="mt-20 max-lg:container md:mt-80" id="services">
      <section className="flex-col text-center flex-center">
        <div className="hidden text-4xl font-semibold uppercase text-blue-50 lg:flex">
          <TextAnimation
            placeholderText={[
              {
                type: "heading1",
                text: "Процеса и услугите ни",
              },
            ]}
          />
        </div>
        <h1 className="text-xl font-semibold uppercase text-blue-50 lg:hidden">
          Процеса и услугите ни
        </h1>
        <div className="hidden mt-2 lg:flex">
          <TextAnimation
            placeholderText={[
              {
                type: "paragraph",
                text: "По-долу може да разгледате за нашият процес за изграждането на успешен уеб сайт.",
              },
            ]}
          />
        </div>
        <p className="mt-2 text-sm lg:hidden">
          По-долу може да разгледате за нашият процес за изграждането на успешен
          уеб сайт.
        </p>
      </section>
      <section className="relative max-lg:flex max-lg:flex-col mt-14 max-lg:gap-y-20">
        <div className="hidden lg:flex">
          <div className="relative h-[1020px] w-full">
            <Image
              src="/web/lines.svg"
              alt="web digital lines for counting"
              layout="fill"
            />
          </div>
        </div>
        {/* Analyze */}
        <div className="flex-center flex-col lg:absolute lg:top-[320px] lg:left-[300px] ">
          <div className="relative h-28 w-28">
            <Image src="/icons/analyze.png" alt="analyze icon" layout="fill" />
          </div>
          <h5 className="mt-3 text-lg font-semibold lg:text-2xl">
            Анализ и консултация
          </h5>
          <p className="max-w-sm mt-1 text-center max-lg:text-sm">
            Най-напред извършваме консултация, където ще поговорим за вашите
            идеи и как ние можем да ви помогнем.
          </p>
        </div>
        {/* Development */}
        <div className="flex-center flex-col lg:absolute lg:top-[320px] lg:right-[390px] ">
          <div className="relative h-28 w-28">
            <Image
              src="/icons/programing.png"
              alt="Programing or coding "
              layout="fill"
            />
          </div>
          <h5 className="mt-3 text-lg font-semibold lg:text-2xl">
            Изработка нa сайт
          </h5>
          <p className="max-w-sm mt-1 text-center max-lg:text-sm">
            След като разберем почече за вашите цел и посока, започваме
            разботката на перфектия за ваш уебсайт.
          </p>
        </div>
        {/* Seo optimization */}
        <div className="flex-center flex-col lg:absolute lg:bottom-[-200px] lg:right-[170px] ">
          <div className="relative h-28 w-28">
            <Image src="/icons/seo.png" alt="Seo optimization" layout="fill" />
          </div>
          <h5 className="mt-3 text-xl font-semibold lg:text-2xl">
            SEO оптимизация
          </h5>
          <p className="max-w-sm mt-1 text-center max-lg:text-sm">
            Когато е завършен уейбсайта, се пристъпва към намирането на
            потребители и потенциални клиенти. Това се извършва, чрез търсачките
            или т.н. SEO (Search Engine Optimization)
          </p>
        </div>
        {/* Online writing products */}
        <div className="flex-center flex-col lg:absolute lg:bottom-[-230px] lg:left-[710px] ">
          <div className="relative h-28 w-28">
            <Image
              src="/icons/content.png"
              alt="Online writing products"
              layout="fill"
            />
          </div>
          <h5 className="mt-3 text-lg font-semibold text-center lg:text-2xl">
            Онлайн добавяне на продукти
          </h5>
          <p className="mt-1 text-center lg:max-w-sm max-lg:text-sm">
            С услугата “Онлайн добавяне на продукти”, ние ще добавим вашите
            дигитални продукти, чрез Admin Panel, който е разработен от нас за
            вас.
          </p>
        </div>
        {/* Maintance */}
        <div className="flex-center flex-col lg:absolute lg:bottom-[-230px] lg:left-[157px] ">
          <div className="relative h-28 w-28">
            <Image
              src="/icons/configuration.png"
              alt="Maintance"
              layout="fill"
            />
          </div>
          <h5 className="mt-3 text-xl font-semibold lg:text-2xl">
            Поддръжка и развитие
          </h5>
          <p className="max-w-sm mt-1 text-center max-lg:text-sm">
            Когато сайтът Ви има техническа поддръжка, той е винаги актуален,
            винаги защитен от атаки и винаги в изправност и готов да достигне до
            нови висоти.
          </p>
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
