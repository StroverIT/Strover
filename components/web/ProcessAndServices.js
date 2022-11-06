import Image from "next/legacy/image";
import React from "react";

export default function ProcessAndServices() {
  return (
    <section className="mt-80 ">
      <section className="text-center flex-center flex-col">
        <h3 className="text-blue-50 text-4xl uppercase font-semibold">
          Процеса и услугите ни
        </h3>
        <p className="max-w-lg mt-2">
          По-долу може да разгледате за нашият процес за изграждането на успешен
          уеб сайт.
        </p>
      </section>
      <section className="relative mt-14">
        <div className="">
          <div className="relative h-[1020px] w-full">
            <Image
              src="/web/lines.svg"
              alt="web digital lines for counting"
              layout="fill"
            />
          </div>
        </div>
        {/* Analyze */}
        <div className="flex-center flex-col absolute top-[320px] left-[300px] ">
          <div className="relative h-28 w-28">
            <Image src="/icons/analyze.png" alt="analyze icon" layout="fill" />
          </div>
          <h5 className="font-semibold text-2xl mt-3">Анализ и консултация</h5>
          <p className="max-w-sm text-center mt-1">
            Най-напред извършваме консултация, където ще поговорим за вашите
            идеи и как ние можем да ви помогнем.
          </p>
          <button className="bg-blue-50 py-2 px-10 mt-8 rounded-full">
            Научи повече
          </button>
        </div>
        {/* Development */}
        <div className="flex-center flex-col absolute top-[320px] right-[390px] ">
          <div className="relative h-28 w-28">
            <Image
              src="/icons/programing.png"
              alt="Programing or coding "
              layout="fill"
            />
          </div>
          <h5 className="font-semibold text-2xl mt-3">Разработка нa сайт</h5>
          <p className="max-w-sm text-center mt-1">
            След като разберем почече за вашите цел и посока, започваме
            разботката на перфектия за ваш уебсайт.
          </p>
          <button className="bg-blue-50 py-2 px-10 mt-8 rounded-full">
            Научи повече
          </button>
        </div>
        {/* Seo optimization */}
        <div className="flex-center flex-col absolute bottom-[-200px] right-[170px] ">
          <div className="relative h-28 w-28">
            <Image src="/icons/seo.png" alt="Seo optimization" layout="fill" />
          </div>
          <h5 className="font-semibold text-2xl mt-3">SEO оптимизация</h5>
          <p className="max-w-sm text-center mt-1">
            Когато е завършен уейбсайта, се пристъпва към намирането на
            потребители и потенциални клиенти. Това се извършва, чрез търсачките
            или т.н. SEO (Search Engine Optimization)
          </p>
          <button className="bg-blue-50 py-2 px-10 mt-8 rounded-full">
            Научи повече
          </button>
        </div>
        {/* Online writing products */}
        <div className="flex-center flex-col absolute bottom-[-230px] left-[710px] ">
          <div className="relative h-28 w-28">
            <Image
              src="/icons/content.png"
              alt="Online writing products"
              layout="fill"
            />
          </div>
          <h5 className="font-semibold text-2xl mt-3">
            Онлайн добавяне на продукти
          </h5>
          <p className="max-w-sm text-center mt-1">
            С услугата “Онлайн добавяне на продукти”, ние ще добавим вашите
            дигитални продукти, чрез Admin Panel, който е разработен от нас за
            вас.
          </p>
          <button className="bg-blue-50 py-2 px-10 mt-8 rounded-full">
            Научи повече
          </button>
        </div>
        {/* Maintance */}
        <div className="flex-center flex-col absolute bottom-[-230px] left-[157px] ">
          <div className="relative h-28 w-28">
            <Image
              src="/icons/configuration.png"
              alt="Maintance"
              layout="fill"
            />
          </div>
          <h5 className="font-semibold text-2xl mt-3">Поддръжка и развитие</h5>
          <p className="max-w-sm text-center mt-1">
            Когато сайтът Ви има техническа поддръжка, той е винаги актуален,
            винаги защитен от атаки и винаги в изправност и готов да достигне до
            нови висоти.
          </p>
          <button className="bg-blue-50 py-2 px-10 mt-8 rounded-full">
            Научи повече
          </button>
        </div>
      </section>
      <section className="mt-80 container">
        * Всяка услуга изброена по-горе, може да бъде поръчана поотделно
      </section>
    </section>
  );
}
