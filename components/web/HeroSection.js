import React from "react";

export default function HeroSection() {
  return (
    <section className="max-sm:mt-10 flex items-center    max-lg:flex-center text-center lg:left-1/2 lg:-translate-x-1/2 z-30  h-[70vh]  lg:absolute lg:-translate-y-[4rem] md:top-28 ">
      <section className="relative z-30 ">
        <h1 className="text-5xl font-bold md:text-7xl text-blue-50">
          Изработка на сайт
        </h1>
        <p className="max-w-xl mt-3 text-md max-md:container ">
          В Strover Web ще научите всичко необходимо за изработването и
          поддръжането на един успешен уеб сайт
        </p>
        {/* <p className="container max-w-xl mt-3 text-justify text-md hypens-auto">
          В Strover Web ще научите за нашите услуги в областта на разработването
          на уеб сайтове, поддържане и ребрандиране на вече същестуващи такива,
          както и SEO оптимизация.
        </p> */}
        <div className="mt-10">
          <a href="#services" className="inline-flex">
            <button className="px-8 py-3 text-lg font-semibold rounded-lg btn-bg-color">
              Научи повече
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
