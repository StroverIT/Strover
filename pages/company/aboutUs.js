import Head from "next/head";
import React, { useEffect, useState, useRef } from "react";

import Navigation from "../../components/otherPagesNav/OffersNav";
import ContactUs from "../../components/ContactUs";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import InputIcons from "../../components/form/Icons";
import Input from "../../components/form/Input";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import Image from "next/image";
import { FaSpider } from "react-icons/fa";
import HeaderSpider from "../../components/HeaderSpider";
import InfoContainer from "../../components/otherPagesNav/AboutUs/InfoContainer";
import Link from "next/link";
import FixedForm from "../../components/form/FixedForm";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import ContactUsTodayComp from "../../components/Banners/ContactUsTodayComp";
import Layout from "../../components/layouts/Layout";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import TransText from "../../components/layouts/TransText";

const trans = "aboutUs";
export default function AboutUs() {
  const { t } = useTranslation(trans);

  const { asPath } = useRouter();

  const teamRef = useRef();
  const [form, openForm] = useState(false);

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handler = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  useEffect(() => {
    const hash = asPath.split("#")[1];
    console.log(hash);
    if (hash == "team") {
      teamRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  }, [asPath]);
  return (
    <>
      <Head>
        <title>Разберете повече за нашата компания</title>
        <meta
          name="description"
          content="Изработка и поддръжка на сайтове, създаване на социални мрежи, развитие на бизнеси в онлайн пространството"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navigation />

      <main className="pb-10 bg-gray-200 pt-36">
        <section className="container flex-col flex-center">
          <HeaderSpider title="Strover Company" size="text-5xl" />
          <p className="max-w-2xl mt-2 text-center">
            <TransText trans={trans}>
              Ние сме Strover. Млади, амбициозни и креативни интернет паяци,
              които са готови да се учат от всичко и всички. Плетем мрежата си
              около онлайн търговията, уеб дизайна, онлайн маркетинга и SEO
              оптимизацията, насочени към съществуващи и нови бизнеси.
            </TransText>
          </p>
        </section>
        <section className="lg:pt-10">
          <div className="container grid items-center justify-center mt-10 lg:grid-cols-2">
            <div className="container">
              <section className="">
                <div className="flex-center">
                  <HeaderSpider
                    title="ПРИНЦИПИ НА РАБОТА"
                    size="text-3xl"
                    trans={trans}
                  />
                </div>
              </section>

              <p className="mt-4 max-lg:px-10">
                <TransText trans={trans}>
                  Ние от Strover влагаме лично отношение към всеки отделен
                  проект. Винаги завършваме работата си докрай и навреме. За нас
                  това е израз на нашата професионална етика и отговорност.
                </TransText>
              </p>
            </div>
            <div className="flex-center">
              <div className="relative h-96 w-96 ">
                <Image
                  src="/principles.svg"
                  alt="growth for you and your company"
                  fill
                />
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col lg:mt-28">
          {/* FIrst sectionis */}

          <InfoContainer
            image="solution.png"
            p="Винаги свежи, за работата да е приятна с нас, достатъчно креативни, за да представим бизнеса Ви по един специален начин, ние сме постоянно мотивирани, за да Ви предложим решения, от които имате нужда!"
            title="Екип, който намира решения за Вас"
            trans={trans}
          />
          {/* Seconds section */}
          <InfoContainer
            image="growth.png"
            p="Кога една услуга е успешна? Когато е изградена върху най-новите тенденции и актуални практики, когато е под постоянна анализация, когато се напасва перфектно от ползвателите ѝ. Ние работим непрестанно върху услугите си, за да Ви гарантираме успех!"
            title="Услуги, които Ви гарантират успех"
            isNext={true}
            trans={trans}
          />

          {/* Third section */}
          <InfoContainer
            image="results.png"
            p="През годините научихме много неща за успеха и едно от нещата е че не се създава самостоятелно. Нашият успех е пряко обвързан с този на нашите клиенти. Затова всеки наш проект, ние се фокусираме върху резултатите, към които се стремите!"
            title="Резултати, които винаги сте искали"
            border={true}
            trans={trans}
          />
        </section>
        <section className="flex-col py-48 flex-center" ref={teamRef}>
          <div className="flex-center">
            <HeaderSpider title="ЕКИПЪТ" size="text-4xl" trans={trans} />
          </div>

          <section className="grid mt-16 gap-y-10 lg:grid-cols-2 gap-x-20">
            <div className="flex-col flex-center">
              <div className="relative w-56 h-56 transition-all border-2 rounded-full cursor-pointer hover:scale-110 border-primaryBlue-100 ">
                <Image
                  src="/hrisi2_durt_crop.jpg"
                  alt="growth for you and your company"
                  fill
                  className="rounded-full bg-blend"
                />
              </div>
              <h3 className="mt-2 text-xl text-center">
                {t("Християн Александров")}
              </h3>
              <p>{t("Копирайтър")}</p>
            </div>
          </section>
        </section>
        <ContactUsTodayComp />
      </main>
    </>
  );
}

AboutUs.getLayout = (page) => (
  <Layout useTranslation={useTranslation}>{page}</Layout>
);

export const getServerSideProps = async ({ locale }) => {
  // Wrapping in Promis.all is not necessary, I use it simply so that if there are any other asynchronous operations, then not to use them through await and not to block each other's work
  const [translations] = await Promise.all([
    serverSideTranslations(locale, ["aboutUs", "common", "footer"]),
  ]);

  return {
    props: {
      ...translations,
    },
  };
};
