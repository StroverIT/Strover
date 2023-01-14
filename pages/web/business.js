import { AnimatePresence } from "framer-motion";
import Head from "next/head";

import { useEffect, useState } from "react";
import ContactUsTodayComp from "../../components/Banners/ContactUsTodayComp";
import FixedForm from "../../components/form/FixedForm";
import HeaderSpider from "../../components/HeaderSpider";
import Navigation from "../../components/web/pricingComp/Navigation";

const Business = () => {
  const [form, openForm] = useState(false);
  const [typeForm, setTypeForm] = useState(null);

  const formHandler = (type) => {
    setTypeForm(type);
    openForm(true);
  };
  useEffect(() => {
    console.log(typeForm);
  }, [typeForm]);
  return (
    <>
      <Head>
        <title>Изработка на бизнес сайт</title>
        <meta
          name="description"
          content="Strover Company бизнес сайт. Ще създадем сайт който ще покаже бизнеса Ви във възможно най-добрата му светлина. С уникален дизайн и анимации, вашите клиенти с удоволстиве ще искат да поръчат от вашите услуги."
        />
      </Head>
      <span className="text-white">
        <Navigation />
      </span>
      <main className="pt-48 pb-20 bg-gray-200 ">
        <div className="mb-10">
          <section className="container">
            <div className="flex-col flex-center">
              <HeaderSpider title="Изработка на Бизнес сайт" size="text-4xl" />
            </div>
            <section className="flex-col pt-6 flex-center">
              <section className="max-w-2xl">
                <p className="">
                  Нашите интернет паяци, ще създават достатъчно кратко, точно и
                  ясно съдържание, за Вашите потенциални клиенти, не само да
                  знаят за Вашият бизнес, но и да желаят вашите услуги.
                  <br />
                </p>
              </section>
            </section>
          </section>
          <section className="mt-10 max-lg:container lg:px-40">
            <div className="flex-col flex-center">
              <HeaderSpider title="Пакетни услуги" size="text-4xl" />
            </div>
            <section className="grid mt-10 xl:grid-cols-2 2xl:grid-cols-3 gap-x-7 gap-y-7">
              <Container>
                <Title>
                  <span className="text-green">BASIC</span> Пакет
                </Title>
                <Paragraph>
                  Лесен и бърз старт в Интернет. Подходящ за малко съдържание.
                </Paragraph>
                <Price className="pt-2 ">
                  800 <span className="text-gray-100">лв.</span>
                </Price>
                <Button
                  bgColor="bg-green"
                  onClick={() => formHandler("BASIC packet - BUSINESS - web")}
                />

                <Ul>
                  <li>5 страници</li>

                  <li>Уникален дизайн</li>
                  <li>Мобилна Версия</li>

                  <li>1 и-мейл акаунта</li>

                  <li>Facebook чат</li>
                  <li>Контактна форма</li>
                </Ul>
              </Container>
              <Container>
                <Title>
                  <span className="text-red-200">PRO</span> Пакет
                </Title>
                <Paragraph>Подходящ за средно съдържание.</Paragraph>
                <Price className="pt-2 ">
                  1400 <span className="text-gray-100">лв.</span>
                </Price>
                <Button
                  bgColor="bg-red-200"
                  onClick={() => formHandler("PRO packet - BUSINESS - web")}
                />

                <Ul>
                  <li>
                    <span className="text-green-200">10 </span> страници
                  </li>
                  <li>Уникален дизайн</li>
                  <li>Мобилна Версия</li>
                  <li>
                    <span className="text-green-200">3 </span> и-мейл акаунта
                  </li>
                  <li>Facebook чат</li>
                  <li>Контактна форма</li>
                </Ul>
                <ul className="ml-5">
                  <li>
                    <span className="text-green-200 pr-2">+ </span> Онлайн
                    плащания
                  </li>
                  <li>
                    <span className="text-green-200 pr-2">+ </span> Админ Панел
                  </li>
                  <li>
                    <span className="text-green-200 pr-2">+ </span> SEO
                    оптимизация
                  </li>
                  <li>
                    <span className="text-green-200 pr-2">+ </span> Безплатен
                    хост за 6 месеца
                  </li>
                  <li>
                    <span className="text-green-200 pr-2">+ </span> Следене на
                    трафика от потребители
                  </li>
                  <li>
                    <span className="text-green-200 pr-2">+ </span> Индексиране
                    във всички търсачки
                  </li>
                </ul>
              </Container>
              <Container>
                <Title>
                  <span className="text-primaryBlue">SPIDER</span> Пакет
                </Title>
                <Paragraph>Подходящ за за голямо съдържание.</Paragraph>
                <Price className="pt-2 ">
                  1800 <span className="text-gray-100">лв.</span>
                </Price>
                <Button
                  bgColor="bg-primaryBlue"
                  onClick={() => formHandler("SPIDER packet - BUSINESS - web")}
                />

                <Ul>
                  <li>
                    <span className="text-green-200">15 </span> страници
                  </li>
                  <li>Уникален дизайн</li>
                  <li>Мобилна Версия</li>
                  <li>
                    <span className="text-green-200">5 </span> и-мейл акаунта
                  </li>
                  <li>Facebook чат</li>
                  <li>Контактна форма</li>

                  <li>Онлайн плащания</li>

                  <li>Админ Панел</li>
                  <li>SEO оптимизация</li>

                  <li>
                    Безплатен хост за
                    <span className="text-green-200"> 1 година</span>
                  </li>
                  <li>Следене на трафика от потребители</li>
                  <li>Индексиране във всички търсачки</li>
                </Ul>
                <ul className="ml-5">
                  <li>
                    <span className="text-green-200 pr-2">+ </span>Възможност за
                    многоезичност
                  </li>
                  <li>
                    <span className="text-green-200 pr-2">+ </span>Безплатен
                    GDPR
                  </li>
                  <li>
                    <span className="text-green-200 pr-2">+ </span>Безплатни
                    юридически текстове
                  </li>
                  <li>
                    <span className="text-green-200 pr-2">+ </span>Следене на
                    трафика от потребители
                  </li>
                  <li>
                    <span className="text-green-200 pr-2">+ </span>Индексиране
                    във всички търсачки
                  </li>
                  <li>
                    <span className="text-green-200 pr-2">+ </span> Безплатен
                    SSL Сертификат за 1 година
                  </li>
                </ul>
              </Container>
            </section>
          </section>
          <section className="mt-10 max-lg:container lg:px-40">
            <p>
              * По-горе са изброени най-честите ни комбинации от услуги. Разбира
              се, работим и спрямо нуждите Ви и можем да Ви създадем
              индивидуални цени и услуги.
            </p>
          </section>
        </div>
        <ContactUsTodayComp typePage="e-commerce web" />
        <AnimatePresence mode="wait" initial={false}>
          {form && (
            <FixedForm
              isOpen={form}
              setOpen={openForm}
              color="border-blue-50"
              btnColor="bg-blue-50"
              bgColor="bg-blue-200"
              scrollBarThumb="scrollbar-thumb-primaryBlue-150"
              scrollBarTrack="scrollbar-track-primaryBlue-500"
              typePage={typeForm}
              redirect="/web/thanks"
            />
          )}
        </AnimatePresence>
      </main>
    </>
  );
};

export default Business;

function Container({ children }) {
  return (
    <div className="flex flex-col h-full p-10 pt-5 bg-white shadow-xl rounded-xl">
      {children}
    </div>
  );
}
function Title({ children }) {
  return <h3 className="mb-2 text-xl text-center">{children}</h3>;
}
function Button({ bgColor, onClick }) {
  return (
    <div className="pt-2 flex-center">
      <button
        className={`px-20 py-4 text-white rounded-full ${bgColor} `}
        onClick={onClick}
      >
        Изберете
      </button>
    </div>
  );
}
function Paragraph({ children }) {
  return (
    <div className="flex-center">
      <p className="max-w-sm text-sm text-center ">{children}</p>
    </div>
  );
}
function Price({ children }) {
  return <h5 className="py-5 text-4xl text-center">{children}</h5>;
}
function Ul({ children }) {
  return <ul className="mt-5 ml-10 list-disc ">{children}</ul>;
}
