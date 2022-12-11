import Head from "next/head";
import React from "react";
import IdeasInWebsite from "../components/Banners/IdeasInWebsite";
import Brands from "../components/Brands/ListBrands";
import ContactUs from "../components/ContactUs";
import HeroSection from "../components/web/HeroSection";
import Background from "../components/web/HeroSectionComp/Background";
import WaveSvg from "../components/web/HeroSectionComp/WaveSvg";
import WaveSvgDown from "../components/web/HeroSectionComp/WaveSvgDown";
import HowToProfit from "../components/web/HowToProfit";
import MoreServices from "../components/web/MoreServices";
import Navigation from "../components/layouts/brands/Navigation";
import Pricing from "../components/web/Pricing";
import ProcessAndServices from "../components/web/ProcessAndServices";
import Questions from "../components/web/Questions";

import { web as links } from "../data/links";

export default function Web() {
  return (
    <>
      <Head>
        <title>Strover Web - изработка на сайтове</title>
        <meta
          name="description"
          content="Поддръжка, създаване и оптимизиране на сайтове. Всичко което Ви е нужно за развитието на бизнеса Ви, онлайн."
        />
      </Head>
      <main className="relative text-white ">
        <section className="bg-[url('/web/bgheroV3.svg')] bg-no-repeat w-full h-full  absolute -z-10  top-[-550px] lg:top-[-150px] left-0"></section>
        <Navigation
          navColor="nav-bg-color"
          bgColor="bg-blue"
          pageLinks={links}
        />
        <section className="">
          <HeroSection />
        </section>
        <section className=" lg:mt-96  w-full  bg-no-repeat relative z-20  -top-[155px] lg:-top-[100px] left-0">
          <WaveSvg />
          <WaveSvgDown />
          {/* <Background /> */}
        </section>

        <HowToProfit />
        <ProcessAndServices />
        <MoreServices />
        <Pricing />
        <section className="-mt-16">
          <IdeasInWebsite />
        </section>
        <Questions />
        {/* Here must be the pricing or packages to choose */}
        <section className=" lg:my-20">
          <ContactUs
            color="border-blue-50"
            btnColor="bg-blue-50"
            bgColor="bg-blue-200"
            number="+359 87 623 7725"
            scrollBarThumb="scrollbar-thumb-primaryBlue-150"
            scrollBarTrack="scrollbar-track-primaryBlue-500"
            typePage="Web"
          />
        </section>
        <section className="w-full">
          <Brands
            digital={true}
            logistics={true}
            py="py-20 lg:pt-20 pb-36"
            bg="bg-blue-250"
          />
        </section>
      </main>
    </>
  );
}
