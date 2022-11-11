import Head from "next/head";
import Image from "next/legacy/image";
import React, { useEffect, useState } from "react";
import Brands from "../components/Brands/ListBrands";
import ContactUs from "../components/ContactUs";
import HeroSection from "../components/web/HeroSection";
import Background from "../components/web/HeroSectionComp/Background";
import WaveSvg from "../components/web/HeroSectionComp/WaveSvg";
import WaveSvgDown from "../components/web/HeroSectionComp/WaveSvgDown";
import HowToProfit from "../components/web/HowToProfit";
import MoreServices from "../components/web/MoreServices";
import Navigation from "../components/web/Navigation";
import ProcessAndServices from "../components/web/ProcessAndServices";
import Questions from "../components/web/Questions";

export default function Web() {
  return (
    <>
      <Head></Head>
      <main className="relative text-white ">
        <section className="bg-[url('/web/bgheroV3.svg')] bg-no-repeat w-full h-full  absolute -z-10  top-[-550px] lg:top-[-150px] left-0"></section>
        <Navigation />
        <section className="">
          <HeroSection />
        </section>
        <section className=" lg:mt-96 md:mt-80 w-full  bg-no-repeat relative z-20 -top-[100px] left-0">
          <WaveSvg />
          <WaveSvgDown />
          {/* <Background /> */}
        </section>

        <HowToProfit />
        <ProcessAndServices />
        <MoreServices />
        <Questions />
        <section className=" lg:mt-56">
          <ContactUs
            color="border-blue-50"
            btnColor="bg-blue-50"
            bgColor="bg-blue-200"
            number="+359 87 623 7725"
          />
        </section>
        <section className="w-full">
          <Brands
            digital={true}
            logistics={true}
            py="py-20 lg:py-56"
            bg="bg-brands-index-color"
          />
        </section>
      </main>
    </>
  );
}
