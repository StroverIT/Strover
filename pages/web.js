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
import Navigation from "../components/web/Navigation";
import Pricing from "../components/web/Pricing";
import ProcessAndServices from "../components/web/ProcessAndServices";
import Questions from "../components/web/Questions";

export default function Web() {
  return (
    <>
      <Head>
        <title>StroverWeb</title>
        <meta
          name="description"
          content="Поддръжка, създаване и оптимизиране на уебсайтове"
        />
      </Head>
      <main className="relative text-white ">
        <section className="bg-[url('/web/bgheroV3.svg')] bg-no-repeat w-full h-full  absolute -z-10  top-[-550px] lg:top-[-150px] left-0"></section>
        <Navigation />
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
        <section className=" lg:mt-10">
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
            bg="bg-brands-index-color"
          />
        </section>
      </main>
    </>
  );
}
