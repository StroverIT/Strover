import React from "react";
import InitText from "../../components/InitText";
import Image from "next/image";
import PageWrapper from "../../components/Animated/PageWrapper";


export const metadata = {
  title: "Разберете повече за нашата мисия и екип",
  description: "Добре дошли в Strover, иновативния доставчик на решения за електронна търговия. Като млади, амбициозни и креативни Интернет паяци, специализирани в създаването на успешни мрежи чрез нашата експертиза в уеб дизайн, онлайн маркетинг и SEO. С личен подход и безкомпромисно преданост към професионализма, ние даваме сила на бизнесите да процъфтяват в цифровото пространство. Открийте как страстта и ангажираността на Strover могат да преобразят вашето онлайн присъствие днес",
};

const Page = () => {
  return (
    <div className="">
        
      <InitText text="За нас" />

      <PageWrapper>
        <div className="flex flex-col gap-y-5">
            <div className="m-4 xl:m-28">
                <h1 className="mb-2 text-4xl">Strover Company</h1>
                <p className="text-lg">
                  Ние сме Strover. Млади, амбициозни и креативни интернет паяци, които са
                  готови да се учат от всичко и всички. Плетем мрежата си около онлайн
                  търговията, уеб дизайна, онлайн маркетинга и SEO оптимизацията, насочени
                  към съществуващи и нови бизнеси.
                </p>
            </div>
            <div className="grid xl:grid-cols-[40%60%] m-4 xl:m-28">
                <div className="relative w-48 h-48 max-xl:flex-center max-xl:w-full"><Image  src="/aboutUsIcons/office.png" fill alt="Работна етика / принципи на работа" className="object-contain" /> </div>
                <div>
                    <h2 className="mb-2 text-2xl ">ПРИНЦИПИ НА РАБОТА</h2>
                    <p>
                      Ние от Strover влагаме лично отношение към всеки отделен проект. Винаги
                      завършваме работата си докрай и навреме. За нас това е израз на нашата
                      професионална етика и отговорност.
                    </p>
        
                </div>
            </div>
            <div className="grid xl:grid-cols-[40%60%] m-4 xl:m-28">
            <div className="relative w-48 h-48 max-xl:flex-center max-xl:w-full"><Image className="object-contain" src="/aboutUsIcons/teamwork.png" fill alt="Работна етика / принципи на работа" /> </div>
                <div>
                    <h2 className="mb-2 text-2xl">Екип, който намира решения за Вас</h2>
                    <p>
                      Винаги свежи, за работата да е приятна с нас, достатъчно креативни, за
                      да представим бизнеса Ви по един специален начин, ние сме постоянно
                      мотивирани, за да Ви предложим решения, от които имате нужда!
                    </p>
                </div>
            </div>
            <div className="grid xl:grid-cols-[40%60%] m-4 xl:m-28">
            <div className="relative w-48 h-48 max-xl:flex-center max-xl:w-full"><Image className="object-contain" src="/aboutUsIcons/growth.png" fill alt="Работна етика / принципи на работа" /> </div>
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
            <div className="grid xl:grid-cols-[40%60%] m-4 xl:m-28">
            <div className="relative w-48 h-48 max-xl:flex-center max-xl:w-full"><Image className="object-contain" src="/aboutUsIcons/business.png" fill alt="Работна етика / принципи на работа" /> </div>
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
      </PageWrapper>
    </div>
  );
};

export default Page;
