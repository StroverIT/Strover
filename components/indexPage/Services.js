import React from "react";

export default function Services() {
  return (
    <section className="bg-[url('/indexForms/background.svg')] no-repeat w-full h-[420px] bg-no-repeat relative">
      <div className="pt-5">
        <h1 className="ml-10 text-5xl font-semibold text-center text-white">
          Брандовe и услуги
        </h1>
      </div>
      <section className="container grid grid-cols-3 mt-24 space-x-10 text-white ">
        {/* Web container */}
        <div className="h-full">
          <h3 className="text-4xl">Web</h3>
          <p className="mt-2">
            Нямате сайт? Не се тревожете! Ние ще създадем един за вас!
          </p>
          <div className="mt-10 ">
            <button className="px-10 py-2 text-sm rounded-lg btn-web-bg-color">
              Научи повече
            </button>
          </div>
        </div>
        {/* Digital container */}
        <div className="text-center">
          <h3 className="text-4xl">Digital</h3>
          <p className="mt-2">
            Имате малко клиенти? Може да ви помогнем, чрез нашите дигитални
            маркетинг умения.
          </p>
          <div className="mt-10 ">
            <button className="px-10 py-2 text-sm rounded-lg btn-digital-bg-color">
              Научи повече
            </button>
          </div>
        </div>
        {/* Logistics container */}
        <div className="flex flex-col items-end w-full text-right">
          <h5 className="text-4xl text-right">Logistics</h5>
          <p className="max-w-sm mt-2 text-right">
            Трябват ви доставки за вашият онлайн магазин? И за това имаме
            решение!
          </p>
          <div className="mt-auto ">
            <button className="px-10 py-2 text-sm rounded-lg btn-logistics-bg-color">
              Научи повече
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}
