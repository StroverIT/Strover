import { AnimatePresence } from "framer-motion";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import Image from "next/image";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ContactUsTodayComp from "../../components/Banners/ContactUsTodayComp";
import FixedForm from "../../components/form/FixedForm";
import HeaderSpider from "../../components/HeaderSpider";
import Layout from "../../components/layouts/Layout";
import TransText from "../../components/layouts/TransText";
import Navigation from "../../components/web/pricingComp/Navigation";
const Ecommerce = () => {
  const trans = "ecommerce";
  const { t } = useTranslation(trans);

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
        <title>Разработка на онлайн магазин за вашия онлайн бизнес</title>
        <meta
          name="description"
          content="
          Искате ли да започнете да продавате онлайн? Нашите услуги за разработка на уебсайтове за електронна търговия предоставят перфектната платформа за вашия онлайн бизнес. Свържете се с нас днес за безплатна оферта "
        />
      </Head>
      <span className="text-white">
        <Navigation />
      </span>
      <main className="pt-48 pb-20 bg-gray-200 ">
        <div className="mb-10">
          <section className="container">
            <section className="flex-center">
              <section className="grid max-w-3xl gap-x-5 gap-y-5">
                <section>
                  <div className="flex-col flex-center mb-4">
                    <HeaderSpider
                      title="Изработка на онлайн магазин"
                      size="text-4xl"
                      trans={trans}
                    />
                  </div>
                  <div className="relative float-left mt-5 -ml-10 h-72 w-96 image-circle ">
                    <Image
                      src="/web/services/ecommerce/firstPhoto.webp"
                      alt="Изработка на онлайн магазин от Strover Company - създаване и поддържане на качествени интернет магазини с висока функционалност и добър дизайн"
                      className="object-contain image-cicle filterGray"
                      fill
                    />
                  </div>
                  <p>
                    <div className="pb-2">
                      <TransText trans={trans}>
                        Strover Company е надеждна фирма за изработка на онлайн
                        магазини, която предлага качествени услуги и
                        индивидуално отношение към всеки клиент. Ние сме
                        специализирани в създаването и поддържането на интернет
                        магазини, които отговарят на всички ваши нужди и
                        изисквания.
                      </TransText>
                    </div>
                    <div className="pb-2">
                      <TransText trans={trans}>
                        Ние използваме само последната технология и иновативни
                        дизайн принципи, за да създадем онлайн магазини с висока
                        функционалност и добър дизайн.
                      </TransText>
                    </div>
                    <div className="pb-2">
                      <TransText trans={trans}>
                        Нашият екип от експерти е в състояние да създаде
                        интернет магазин, който е перфектно подходящ за вашия
                        бизнес и потребители.
                      </TransText>
                    </div>
                    <div>
                      <TransText trans={trans}>
                        Ние имаме голям опит в сферата на изработката на онлайн
                        магазини и сме се занимавали с различни видове продукти
                        и услуги. Може да се доверите на нас, че ще предоставим
                        качествен интернет магазин, който ще помогне за
                        увеличаване на вашия бизнес. Ние ще ви подкрепим през
                        цялото процеса на разработка и поддържане на вашия
                        онлайн магазин, за да може да се фокусирате на
                        развитието на вашия бизнес. Свържете се с нас днес и
                        започнете да създавате своя онлайн магазин с Изработка
                        на онлайн магазин от Strover Company.
                      </TransText>
                    </div>
                  </p>
                </section>

                <section className="">
                  <div className="flex-center">
                    <HeaderSpider
                      title="Повече информация за изработката"
                      size="text-3xl"
                      typeHead="h2"
                      trans={trans}
                    />
                  </div>
                  <div className="mt-2">
                    <p className="">
                      <TransText trans={trans}>
                        Често хората си мислят, че просто трябва да имат сайт
                        където да са показани продуктите и клиентите да имат
                        възможността да си ги поръчат, но това не е напълно
                        вярно. Зад успешен онлайн магазин (e-commerce), стоят
                        много фактори, като:
                      </TransText>
                    </p>
                    <ul className="ml-5 list-disc">
                      <li>{t("Маркетингова стратегия")}</li>
                      <li>{t("Професионални снимки")}</li>
                      <li>{t("Добре обяснено описание")}</li>
                      <li>
                        <TransText trans={trans}>
                          Добре направени &quot;Call to auction&quot; бутони
                        </TransText>
                      </li>
                    </ul>
                    <p className="pt-2">
                      {t(
                        "При нас не само ще Ви изработим уникален дизайн, а сайт който може да продава сам по себе си."
                      )}
                    </p>
                  </div>
                </section>
              </section>
            </section>
          </section>
          <section className="mt-10 max-lg:container lg:px-40">
            <div className="flex-col flex-center">
              <HeaderSpider
                title="Пакетни услуги"
                size="text-4xl"
                trans={trans}
              />
            </div>
            <section className="grid mt-10 xl:grid-cols-2 2xl:grid-cols-3 gap-x-7 gap-y-7">
              <Container>
                <Title>
                  <span className="text-green">BASIC</span> {t("Пакет")}
                </Title>
                <Paragraph>
                  {t(
                    "Лесен и бърз старт в Интернет. Подходящ за малки магазини с до 150 продукта"
                  )}
                </Paragraph>
                <Price className="pt-2 ">
                  600 <span className="text-gray-100">лв.</span>
                </Price>
                <Button
                  bgColor="bg-green"
                  onClick={() => formHandler("BASIC packet - e-commerce - web")}
                />

                <Ul>
                  <li className="">{t("50 продукта")}</li>

                  <li>{t("Уникален дизайн")}</li>

                  <li>{t("SEO филтри")}</li>
                  <li>{t("Facebook чат")}</li>
                  <li>{t("3 и-мейл акаунта")}</li>
                  <li>{t("Мобилна Версия")}</li>
                  <li>{t("Админ Панел")}</li>

                  {/* <li>Безплатен GDPR</li> */}
                  <li>{t("Безплатен Facebook conversion API")}</li>
                  <li>{t("Безплатни юридически текстове")}</li>
                </Ul>
              </Container>
              <Container>
                <Title>
                  <span className="text-red-200">PRO</span> {t("Пакет")}
                </Title>
                <Paragraph>
                  {t(
                    "Развивайте своя бизнес. Подходящ за магазини с от 50 до 500 продукта"
                  )}
                </Paragraph>
                <Price className="pt-2 ">
                  1000 <span className="text-gray-100">лв.</span>
                </Price>
                <Button
                  bgColor="bg-red-200"
                  onClick={() => formHandler("PRO packet - e-commerce - web")}
                />

                <Ul>
                  <li className="">
                    <span className="text-green-200">500</span> {t("продукта")}
                  </li>
                  <li>{t("Уникален дизайн")}</li>
                  <li>{t("Мобилна Версия")}</li>
                  <li>{t("SEO филтри")}</li>
                  <li>{t("Facebook чат")}</li>
                  <li>
                    <span className="text-green-200">5</span>{" "}
                    {t("и-мейл акаунта")}
                  </li>
                  <li>{t("Админ Панел")}</li>
                  <li>{t("Безплатен Facebook conversion API")}</li>
                  <li>{t("Безплатни юридически текстове")}</li>
                </Ul>
                <ul className="ml-5">
                  <li>
                    <span className="pr-2 text-green-200">+ </span>
                    {t("Онлайн плащания")}
                  </li>
                  <li>
                    <span className="pr-2 text-green-200">+ </span>
                    {t("Възможност за многоезичност")}
                  </li>
                  <li>
                    <span className="pr-2 text-green-200">+ </span>
                    {t("Безплатен хост за 6 месеца")}
                  </li>
                  <li>
                    <span className="pr-2 text-green-200">+ </span>
                    {t("Следене на трафика от потребители")}
                  </li>
                  <li>
                    <span className="pr-2 text-green-200">+ </span>
                    {t("Индексиране във всички търсачки")}
                  </li>
                  <li>
                    <span className="pr-2 text-green-200">+ </span>
                    {t("Безплатен GDPR")}
                  </li>
                  <li>
                    <span className="pr-2 text-green-200">+ </span>
                    {t("Безплатен Facebook conversion API")}
                  </li>
                  <li>
                    <span className="pr-2 text-green-200">+ </span>
                    {t("Безплатни юридически текстове")}
                  </li>
                </ul>
              </Container>
              <Container>
                <Title>
                  <span className="text-primaryBlue">SPIDER</span> {t("Пакет")}
                </Title>
                <Paragraph>
                  {t(
                    "Получавате всичко! Подходящ за магазини с голям брой продукти и трафик"
                  )}
                </Paragraph>
                <Price className="pt-2 ">
                  1500 <span className="text-gray-100">лв.</span>
                </Price>
                <Button
                  bgColor="bg-primaryBlue"
                  onClick={() =>
                    formHandler("SPIDER packet - e-commerce - web")
                  }
                />

                <Ul>
                  <li className="">
                    <span className="text-green-200">1000</span> {t("продукта")}
                  </li>
                  <li>{t("Уникален дизайн")}</li>
                  <li>{t("Мобилна Версия")}</li>
                  <li>{t("SEO филтри")}</li>
                  <li>{t("Facebook чат")}</li>
                  <li>
                    <span className="text-green-200">10</span>{" "}
                    {t("и-мейл акаунта")}
                  </li>
                  <li>{t("Админ Панел")}</li>
                  <li>{t("Безплатен Facebook conversion API")}</li>
                  <li>{t("Безплатни юридически текстове")}</li>

                  <li>{t("Онлайн плащания")}</li>
                  <li>{t("Възможност за многоезичност")}</li>
                  <li>
                    {t("Безплатен хост за")}{" "}
                    <span className="text-green-200">1 {t("година")}</span>
                  </li>
                  <li>{t("Следене на трафика от потребители")}</li>
                  <li>{t("Индексиране във всички търсачки")}</li>
                  <li>{t("Безплатен GDPR")}</li>
                  <li>{t("Безплатен Facebook conversion API")}</li>
                  <li>{t("Безплатни юридически текстове")}</li>
                </Ul>
                <ul className="ml-5 ">
                  <li>
                    <span className="pr-2 text-green-200">+ </span>
                    {t("Интеграция с ЕКОНТ и/или СПИДИ")}
                  </li>
                  <li>
                    <span className="pr-2 text-green-200">+ </span>
                    {t("Следене и отчитане на продажбите")}
                  </li>
                  <li>
                    <span className="pr-2 text-green-200">+ </span>
                    {t(
                      "Възможност за събиране на email адреси с цел email marketing"
                    )}
                  </li>
                  <li>
                    <span className="pr-2 text-green-200">+ </span>
                    {t("Безплатен SSL Сертификат")}
                  </li>
                </ul>
              </Container>
            </section>
          </section>
          <section className="mt-10 max-lg:container lg:px-40">
            <p>
              *{" "}
              <TransText trans={trans}>
                По-горе са изброени най-честите ни комбинации от услуги. Разбира
                се, работим и спрямо нуждите Ви и можем да Ви създадем
                индивидуални цени и услуги.
              </TransText>
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

export default Ecommerce;
Ecommerce.getLayout = (page) => (
  <Layout useTranslation={useTranslation}>{page}</Layout>
);

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
  const trans = "ecommerce";
  const { t } = useTranslation(trans);

  return (
    <div className="pt-2 flex-center">
      <button
        className={`px-20 py-3 text-white rounded-full text-xl font-semibold ${bgColor} `}
        onClick={onClick}
      >
        {t("ПОРЪЧАЙ")}
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

export const getServerSideProps = async ({ locale }) => {
  // Wrapping in Promis.all is not necessary, I use it simply so that if there are any other asynchronous operations, then not to use them through await and not to block each other's work
  const [translations] = await Promise.all([
    serverSideTranslations(locale, ["common", "footer", "ecommerce"]),
  ]);

  return {
    props: {
      ...translations,
    },
  };
};
