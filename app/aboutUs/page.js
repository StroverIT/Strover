import React from "react";
import InitText from "../../components/InitText";
import Image from "next/image";

const Page = () => {
  return (
    <div className="">
        
      <InitText text="За нас" />

      <div className="flex flex-col gap-y-5">
          <div className="m-28">
              <h1 className="mb-2 text-4xl">Strover Company</h1>
              <p className="text-lg">
                Ние сме Strover. Млади, амбициозни и креативни интернет паяци, които са
                готови да се учат от всичко и всички. Плетем мрежата си около онлайн
                търговията, уеб дизайна, онлайн маркетинга и SEO оптимизацията, насочени
                към съществуващи и нови бизнеси.
              </p>
          </div>
          <div class="grid grid-cols-[40%60%] m-28">
              <div className="relative w-48 h-48"><Image src="/aboutUsIcons/office.png" fill alt="Работна етика / принципи на работа" /> </div>
              <div>
                  <h2 className="mb-2 text-2xl ">ПРИНЦИПИ НА РАБОТА</h2>
                  <p>
                    Ние от Strover влагаме лично отношение към всеки отделен проект. Винаги
                    завършваме работата си докрай и навреме. За нас това е израз на нашата
                    професионална етика и отговорност.
                  </p>
              
              </div>
          </div>
          <div className="m-28 grid grid-cols-[40%60%]">
          <div className="relative w-48 h-48"><Image src="/aboutUsIcons/teamwork.png" fill alt="Работна етика / принципи на работа" /> </div>

              <div>
                  <h2 className="mb-2 text-2xl">Екип, който намира решения за Вас</h2>
                  <p>
                    Винаги свежи, за работата да е приятна с нас, достатъчно креативни, за
                    да представим бизнеса Ви по един специален начин, ние сме постоянно
                    мотивирани, за да Ви предложим решения, от които имате нужда!
                  </p>
              </div>
          </div>
          <div className="m-28 grid grid-cols-[40%60%]">
          <div className="relative w-48 h-48"><Image src="/aboutUsIcons/growth.png" fill alt="Работна етика / принципи на работа" /> </div>

              <div>
                  <h2 className="mb-2 text-2xl">Услуги, които Ви гарантират успех</h2>
                  <p>
                    Кога една услуга е успешна? Когато е изградена върху най-новите
                    тенденции и актуални практики, когато е под постоянна анализация, когато
                    се напасва перфектно от ползвателите ѝ. Ние работим непрестанно върху
                    услугите си, за да Ви гарантираме успех!
                  </p>
              </div>
          </div>
          <div className="m-28 grid grid-cols-[40%60%]">
          <div className="relative w-48 h-48"><Image src="/aboutUsIcons/business.png" fill alt="Работна етика / принципи на работа" /> </div>

              <div>
                  <h2 className="mb-2 text-2xl">Резултати, които винаги сте искали</h2>
                  <p>
                    През годините научихме много неща за успеха и едно от нещата е че бизнес не се
                    създава самостоятелно. Нашият успех е пряко обвързан с този на нашите
                    клиенти. Затова всеки наш проект, ние се фокусираме върху резултатите,
                    към които се стремите!
                  </p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Page;
