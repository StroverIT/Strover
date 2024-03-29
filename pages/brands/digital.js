import Head from "next/head";

import React from "react";
import Brands from "../../components/Brands/ListBrands";
import ContactUs from "../../components/ContactUs";
import HeroSection from "../../components/digital/HeroSection";
import MoreServices from "../../components/digital/MoreServices";
import MyMission from "../../components/digital/MyMission";
import Navigation from "../../components/layouts/brands/Navigation";
import Services from "../../components/digital/Services";

import { digital as links } from "../../data/links";
import Layout from "../../components/layouts/Layout";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Digital() {
  return (
    <>
      <Head>
        <title>Дигитален маркетинг в социалните мрежи и SEO</title>
        <meta
          name="description"
          content="Създаване на социални мрежи, за по-голямо разпространение и популяризиране в онлайн пространството."
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <main className="text-white ">
        <section id="bg">
          <div className="top"></div>
          <div className="bottom"></div>
        </section>
        <Navigation
          bgColor="bg-pink-200"
          pageLinks={links}
          navColor="bg-pink-def-transparent"
        />
        <section className="relative digital-font">
          <HeroSection />
          <MyMission />

          <Services />
          <MoreServices />
          <section className="lg:pb-10">
            <ContactUs
              color="border-pink"
              btnColor="bg-pink"
              bgColor="bg-pink-50"
              number="+359 87 623 7725
              "
              scrollBarThumb="scrollbar-thumb-pink-100 "
              scrollBarTrack="scrollbar-track-pink-200"
              typePage="Digital"
            />
          </section>
          {/* Добави: "Объркани сте или не сте сигурно? Няма проблем. Пишете ни в контактната форма или звъннете още сега!" */}
          <Brands
            web={true}
            logistics={true}
            bg="bg-pink-300"
            py="py-24 md:mt-56"
          />
        </section>
      </main>
    </>
  );
}

Digital.getLayout = (page) => (
  <Layout useTranslation={useTranslation}>{page}</Layout>
);
export const getServerSideProps = async ({ locale }) => {
  // Wrapping in Promis.all is not necessary, I use it simply so that if there are any other asynchronous operations, then not to use them through await and not to block each other's work
  const [translations] = await Promise.all([
    serverSideTranslations(locale, [
      "common",
      "digital",
      "footer",
      "brands",
      "contactForm",
    ]),
  ]);

  return {
    props: {
      ...translations,
    },
  };
};
