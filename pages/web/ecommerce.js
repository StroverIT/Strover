import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import Image from "next/legacy/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ContactUsTodayComp from "../../components/Banners/ContactUsTodayComp";
import FixedForm from "../../components/form/FixedForm";
import HeaderSpider from "../../components/HeaderSpider";
import Navigation from "../../components/web/pricingComp/Navigation";

const Ecommerce = () => {
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
      <Head></Head>
      <Navigation />
      <main className="pt-48 pb-20 bg-gray-200 ">
        <div className="mb-10">
          <section className="container">
            <div className="flex-col flex-center">
              <HeaderSpider
                title="Изработка на онлайн магазин - e-commerce"
                size="text-4xl"
              />
            </div>
            <section className="flex-col pt-6 flex-center">
              <section className="max-w-2xl">
                <p className="">
                  Доста често хората си мислят, че просто трябва да има сайт
                  където да са показани продуктите и клиентите да имат
                  възможността да си ги поръчат, но това не е напълно вярно. Зад
                  успешен онлайн магазин (e-commerce), стоят много фактори,
                  като:
                </p>
                <ul className="ml-5 list-disc">
                  <li>Маркетингова страгетия</li>
                  <li>Професионални снимки</li>
                  <li>Добре обяснено описание</li>
                  <li>Добре направени &quot;Call to auction&quot; бутони</li>
                </ul>
                <p className="pt-2">
                  При нас не само ще Ви изработим уникален дизайн, но сайт,
                  който може да продавам сам по себе си.
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
                  Лесен и бърз старт в Интернет. Подходящ за малки магазини с до
                  50 продукта
                </Paragraph>
                <Price className="pt-2 ">
                  1500 <span className="text-gray-100">лв.</span>
                </Price>
                <Button
                  bgColor="bg-green"
                  onClick={() => formHandler("BASIC packet - e-commerce - web")}
                />

                <Ul>
                  <li className="">50 продукта</li>

                  <li>Уникален дизайн</li>

                  <li>SEO филтри</li>
                  <li>Facebook чат</li>
                  <li>3 и-мейл акаунта</li>
                  <li>Мобилна Версия</li>
                  <li>Админ Панел</li>

                  {/* <li>Безплатен GDPR</li> */}
                  <li>Безплатен Facebook conversion API</li>
                  <li>Безплатни юридически текстове</li>
                </Ul>
              </Container>
              <Container>
                <Title>
                  <span className="text-red-200">PRO</span> Пакет
                </Title>
                <Paragraph>
                  Развивайте своя бизнес. Подходящ за магазини с от 50 до 500
                  продукта
                </Paragraph>
                <Price className="pt-2 ">
                  4000 <span className="text-gray-100">лв.</span>
                </Price>
                <Button
                  bgColor="bg-red-200"
                  onClick={() => formHandler("PRO packet - e-commerce - web")}
                />

                <Ul>
                  <li>500 продукта</li>

                  <li>Уникален дизайн</li>
                  <li>Мобилна Версия</li>
                  <li>Онлайн плащания</li>

                  <li>5 и-мейл акаунта</li>
                  <li>Админ Панел</li>
                  <li>Възможност за многоезичност</li>

                  <li>SEO филтри</li>
                  <li>Facebook чат</li>

                  <li>Безплатен хост за 6 месеца</li>
                  <li>Следене на трафика от потребители</li>
                  <li>Индексиране във всички търсачки</li>
                  <li>Безплатен GDPR</li>
                  <li>Безплатен Facebook conversion API</li>
                  <li>Безплатни юридически текстове</li>
                </Ul>
              </Container>
              <Container>
                <Title>
                  <span className="text-primaryBlue">SPIDER</span> Пакет
                </Title>
                <Paragraph>
                  Получавате всичко! Подходящ за магазини с голям брой продукти
                  и трафик
                </Paragraph>
                <Price className="pt-2 ">
                  6250 <span className="text-gray-100">лв.</span>
                </Price>
                <Button
                  bgColor="bg-primaryBlue"
                  onClick={() =>
                    formHandler("SPIDER packet - e-commerce - web")
                  }
                />

                <Ul>
                  <li>1000 продукта</li>
                  <li>Уникален дизайн</li>

                  <li>Интеграция с ЕКОНТ / СПИДИ</li>
                  <li>Онлайн плащания</li>

                  <li>Мобилна Версия</li>
                  <li>10 и-мейл акаунта</li>
                  <li>Възможност за многоезичност</li>

                  <li>SEO филтри</li>
                  <li>Facebook чат</li>

                  <li>Админ Панел</li>

                  <li>Следене и отчинате на продажбите</li>
                  <li>имплементираме възможност за събиране на email адреси</li>
                  <li>Следене на трафика от потребители</li>
                  <li>Индексиране във всички търсачки</li>
                  <li>Безплатен хост за 1 година</li>
                  <li>Безплатен SSL Сертификат</li>
                  <li>Безплатен GDPR</li>
                  <li>Безплатен Facebook conversion API</li>
                  <li>Безплатни юридически текстове</li>
                </Ul>
              </Container>
            </section>
          </section>
          <section className="mt-10 max-lg:container lg:px-40">
            <p>
              * По-горе са изброени най-честите ни комбинации от услуги. Разбира
              се, работим и спрямо нужните Ви и можем да Ви създадем
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
              number="+359 87 623 7725"
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

export default Ecommerce;

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