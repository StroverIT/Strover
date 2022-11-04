import Image from "next/legacy/image";
import React from "react";

export default function AboutUs() {
  return (
    <section className="container relative flex flex-col text-center my-80 ">
      <div className="">
        <div className="relative w-full h-[1000px]">
          <Image
            alt="line"
            src="/indexForms/lines/linesTest.svg"
            layout="fill"
          />
        </div>
      </div>

      <div className="flex-center flex-col mr-10 absolute -top-20 left-[400px]">
        <h5 className="mb-2 text-3xl font-medium text-primaryBlue-450">
          КОИ СМЕ НИЕ?
        </h5>
        <p className="max-w-xl text-lg leading-8 text-white ">
          Ние сме Strover, млади, амбициозни и креативни интернет паяци, които
          са готови да се учат от всичко и всички. Плетем мрежата си около
          онлайн търговията, уеб дизайна, онлайн маркетинга и SEO оптимизацията,
          насочени към съществуващи и нови бизнеси.
        </p>
      </div>
      <div className="flex-center flex-col absolute top-[400px] left-[250px]">
        <h5 className="mb-2 text-3xl font-medium text-primaryBlue-450">
          КАКВО ЩЕ ПОЛУЧИТЕ?
        </h5>
        <p className="max-w-xl text-lg leading-8 text-white">
          Комплексна услуга от хора, които са специалисти в съответните сфери:
          дигиталния маркетинг, компютърните науки и онлайн продажбите. Ние ще
          Ви предоставим цялостни дигитални решения за развитието на бранда Ви и
          достигането му до ИДЕАЛНИТЕ КЛИЕНТИ.
        </p>
      </div>
      <div className="flex-center flex-col absolute -bottom-14 left-[450px]">
        <h5 className="mb-2 text-3xl font-medium text-primaryBlue-450">
          ЗАЩО СМЕ РАЗЛИЧНИ?
        </h5>
        <p className="max-w-xl text-lg leading-8 text-white">
          Защото държим на индивидуалния подход към клиента, както и на добрата
          комуникация по всеки един проект. Когато за него няма нужда от сложни
          технически термини - просто не ги използваме. За нас визията в
          интернет пространството е изключително важна.
        </p>
      </div>
    </section>
  );
}
