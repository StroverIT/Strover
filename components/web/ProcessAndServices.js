import Image from "next/legacy/image";
import React from "react";
import TextAnimation from "../../libs/TextAnimation";

export default function ProcessAndServices() {
  return (
    <section className="mt-20 md:mt-80 ">
      <section className="flex-col text-center flex-center">
        <div className="text-4xl font-semibold uppercase text-blue-50 ">
          <TextAnimation
            placeholderText={[
              {
                type: "heading1",
                text: "Процеса и услугите ни",
              },
            ]}
          />
        </div>
        <div className="mt-2 ">
          <TextAnimation
            placeholderText={[
              {
                type: "paragraph",
                text: "По-долу може да разгледате за нашият процес за изграждането на успешен уеб сайт.",
              },
            ]}
          />
        </div>
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
          <h5 className="mt-3 text-2xl font-semibold">Анализ и консултация</h5>
          <p className="max-w-sm mt-1 text-center">
            Най-напред извършваме консултация, където ще поговорим за вашите
            идеи и как ние можем да ви помогнем.
          </p>
          <button className="px-10 py-2 mt-8 rounded-full bg-blue-50">
            Научи повече
          </button>
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
          <h5 className="mt-3 text-2xl font-semibold">Разработка нa сайт</h5>
          <p className="max-w-sm mt-1 text-center">
            След като разберем почече за вашите цел и посока, започваме
            разботката на перфектия за ваш уебсайт.
          </p>
          <button className="px-10 py-2 mt-8 rounded-full bg-blue-50">
            Научи повече
          </button>
        </div>
        {/* Seo optimization */}
        <div className="flex-center flex-col lg:absolute lg:bottom-[-200px] lg:right-[170px] ">
          <div className="relative h-28 w-28">
            <Image src="/icons/seo.png" alt="Seo optimization" layout="fill" />
          </div>
          <h5 className="mt-3 text-2xl font-semibold">SEO оптимизация</h5>
          <p className="max-w-sm mt-1 text-center">
            Когато е завършен уейбсайта, се пристъпва към намирането на
            потребители и потенциални клиенти. Това се извършва, чрез търсачките
            или т.н. SEO (Search Engine Optimization)
          </p>
          <button className="px-10 py-2 mt-8 rounded-full bg-blue-50">
            Научи повече
          </button>
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
          <h5 className="mt-3 text-2xl font-semibold">
            Онлайн добавяне на продукти
          </h5>
          <p className="max-w-sm mt-1 text-center">
            С услугата “Онлайн добавяне на продукти”, ние ще добавим вашите
            дигитални продукти, чрез Admin Panel, който е разработен от нас за
            вас.
          </p>
          <button className="px-10 py-2 mt-8 rounded-full bg-blue-50">
            Научи повече
          </button>
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
          <h5 className="mt-3 text-2xl font-semibold">Поддръжка и развитие</h5>
          <p className="max-w-sm mt-1 text-center">
            Когато сайтът Ви има техническа поддръжка, той е винаги актуален,
            винаги защитен от атаки и винаги в изправност и готов да достигне до
            нови висоти.
          </p>
          <button className="px-10 py-2 mt-8 rounded-full bg-blue-50">
            Научи повече
          </button>
        </div>
      </section>
      <section className="container mt-28 lg:mt-80">
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
