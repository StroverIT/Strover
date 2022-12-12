import Image from "next/image";
import React, { useState } from "react";
import TextAnimation from "../../libs/TextAnimation";
import HeaderSpider from "../HeaderSpider";
import FadeFromBottom from "../layouts/animations/onView/FadeFromBottom";

export default function MoreServices() {
  const [showFirstText, setShowFirstText] = useState(false);
  const [showSecondText, setShowSecondText] = useState(false);

  return (
    <section className="container mt-24 lg:mt-20">
      <div className="text-xl font-semibold uppercase flex-center lg:text-4xl text-blue-50 ">
        <HeaderSpider title="Допълнителни услуги" size="4xl" />
      </div>
      <section className="grid items-center justify-center mt-20 max-lg:text-center lg:grid-cols-2 gap-y-36 lg:mt-16 max-lg:gap-y-28">
        {/* <div className="flex-col flex-center ">
          <FadeFromBottom duration={0.5}>
            <div className="relative h-28 w-28">
              <Image
                src="/icons/brochure.png"
                alt="Създаване на онлайн брошури"
                fill
              />
            </div>
          </FadeFromBottom>
          <FadeFromBottom duration={0.5} delay={0.1}>
            <h5 className="mt-3 text-lg font-semibold lg:text-2xl">
              Създаване на онлайн брошури
            </h5>
          </FadeFromBottom>
          <FadeFromBottom duration={0.5} delay={0.2}>
            <p
              className={`max-w-sm mt-1 text-center max-lg:text-sm ${
                showFirstText ? "" : "card-preview-text"
              }`}
            >
              Брошурите и листовките могат да бъдат, подобно на почти всички
              документи и хартиени композиции, без да харчите цяло състояние за
              правене на тестови разпечатки, малки количества флаери или за
              получаване на материал за стартиране на бизнес. Също така може да
              бъде използвана на вашият уебсайт.
            </p>
          </FadeFromBottom>
          <FadeFromBottom duration={0.5} delay={0.3}>
            <button
              className="px-10 py-2 mt-8 rounded-full bg-blue-50"
              onClick={() => setShowFirstText(!showFirstText)}
            >
              {showFirstText ? "Скрий текста" : "Виж повече"}
            </button>
          </FadeFromBottom>
        </div> */}
        <div className="flex-col flex-center ">
          <FadeFromBottom duration={0.5}>
            <div className="relative h-28 w-28">
              <Image src="/icons/graphic-design.png" alt="Maintance" fill />
            </div>
          </FadeFromBottom>

          <FadeFromBottom duration={0.5} delay={0.1}>
            <h5 className="mt-3 text-lg font-semibold lg:text-2xl">
              Редизайн{" "}
            </h5>
          </FadeFromBottom>

          <FadeFromBottom duration={0.5} delay={0.2}>
            <p
              className={`max-w-sm mt-1 text-center ${
                showSecondText ? "" : "card-preview-text "
              } max-lg:text-sm`}
            >
              Това е в същността си основен ремонт, правещ значителна промяна на
              елементи като кода, съдържанието, структурата и визуалните
              елементи на текущия сайт. Ревизирането и променянето на съставните
              елементи на дадения сайт имат за цел да подобрят визията,
              функциите, потребителския опит и всички други параметри, засягащи
              качественото представяне на сайта – пред потребителите и
              алгоритмите на онлайн търсачките.
            </p>
          </FadeFromBottom>

          <FadeFromBottom duration={0.5} delay={0.3}>
            <button
              className="px-10 py-2 mt-8 rounded-full bg-blue-50"
              onClick={() => setShowSecondText(!showSecondText)}
            >
              {showSecondText ? "Скрий текста" : "Виж повече"}
            </button>
          </FadeFromBottom>
        </div>
        <div className="flex-col flex-center ">
          <FadeFromBottom duration={0.5}>
            <div className="relative h-28 w-28">
              <Image src="/icons/brand.png" alt="Maintance" fill />
            </div>
          </FadeFromBottom>

          <FadeFromBottom duration={0.5} delay={0.1}>
            <h5 className="mt-3 text-xl font-semibold lg:text-2xl">
              Ребрандиране
            </h5>
          </FadeFromBottom>

          <FadeFromBottom duration={0.5} delay={0.2}>
            <p className="max-w-sm mt-1 text-center max-lg:text-sm">
              При “Ребрандирането”, ние ще променим вече съществуващите елементи
              с нови, като преди това проучим пазара и конкуренцията, за да
              разберем какво търси вашата аудитория.
            </p>
          </FadeFromBottom>
        </div>
        <div className="flex-col flex-center ">
          <FadeFromBottom duration={0.5}>
            <div className="relative h-28 w-28">
              <Image src="/icons/adwords.png" alt="Maintance" fill />
            </div>
          </FadeFromBottom>

          <FadeFromBottom duration={0.5} delay={0.1}>
            <h5 className="mt-3 text-xl font-semibold lg:text-2xl">
              Google Ads
            </h5>
          </FadeFromBottom>

          <FadeFromBottom duration={0.5} delay={0.2}>
            <p className="max-w-sm mt-1 text-center max-lg:text-sm">
              Желате по-бързо и по-лесно да достигнете до повече клиенти?
              Услугата &quot;Google Ads&quot; предоставя точно това.
            </p>
          </FadeFromBottom>
        </div>
        <div className="flex-col flex-center ">
          <FadeFromBottom duration={0.5}>
            <div className="relative h-28 w-28">
              <Image src="/icons/photo.png" alt="Maintance" fill />
            </div>
          </FadeFromBottom>

          <FadeFromBottom duration={0.5} delay={0.1}>
            <h5 className="mt-3 font-semibold text-md lg:text-2xl">
              Създаване на снимки за сайт
            </h5>
          </FadeFromBottom>

          <FadeFromBottom duration={0.5} delay={0.2}>
            <p className="max-w-sm mt-1 text-center max-lg:text-sm">
              Както всички знаем, красотата продават, затова е важно да имате
              професионално направени снимки.
            </p>
          </FadeFromBottom>
        </div>
      </section>
    </section>
  );
}
