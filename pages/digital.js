import Head from "next/head";
import Image from "next/legacy/image";
import React from "react";
import Brands from "../components/Brands/ListBrands";
import ContactUs from "../components/ContactUs";
import HeroSection from "../components/digital/HeroSection";
import MoreServices from "../components/digital/MoreServices";
import MyMission from "../components/digital/MyMission";
import Navigation from "../components/digital/Navigation";
import Services from "../components/digital/Services";

export default function Digital() {
  return (
    <>
      <Head></Head>
      <main className="text-white ">
        <section id="bg">
          <div className="top"></div>
          <div className="bottom"></div>
        </section>
        <Navigation />
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
              number="+359 89 631 
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
            bg="bg-pink-200"
            py="py-24 md:mt-56"
          />
        </section>
      </main>
    </>
  );
}
