import Image from "next/legacy/image";
import React from "react";

export default function HeroSection() {
  return (
    <section className="flex items-center    h-[70vh] relative  ">
      <section className="container relative z-30">
        <h1 className="text-7xl font-bold text-blue-50">Strover Web</h1>
        <p className="max-w-xl mt-3 text-md">
          В Strover Web ще научите за нашите услуги в областта на разработването
          на уеб сайтове, поддържане и ребрандиране на вече същестуващи такива,
          както и SEO оптимизация.
        </p>
        <div className="mt-4">
          <button className="btn-bg-color py-3 px-8 text-lg rounded-lg font-semibold">
            Научи повече
          </button>
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
