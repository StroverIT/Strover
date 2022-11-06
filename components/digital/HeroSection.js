import Image from "next/legacy/image";
import React from "react";

export default function HeroSection() {
  return (
    <section className="flex items-center container   h-[80vh] relative">
      <section>
        <h1 className="text-7xl">Strover Digital</h1>
        <p className="max-w-xl mt-3 text-md">
          предлага услуги в областта на дигиталният маркетинг, цялостно
          интегриране на бизнеса ви в желаните от Вас социални мрежи и достигане
          до повече клиенти и следователно до по-голям приход.
        </p>
        <button className="bg-pink-100 border mt-10 border-white rounded-lg py-2 px-16 font-bold  ">
          Виж повече
        </button>
      </section>
      <section className="absolute -right-[1050px]">
        <section className="relative h-[500px] w-[2000px]">
          <Image
            src="/digitalForms/heroSec2.svg"
            alt="digital marketing with all services"
            layout="fill"
            objectFit="contain"
          />
        </section>
      </section>
    </section>
  );
}
