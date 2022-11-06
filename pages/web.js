import Head from "next/head";
import React from "react";
import Brands from "../components/Brands";
import ContactUs from "../components/ContactUs";
import HeroSection from "../components/web/HeroSection";
import HowToProfit from "../components/web/HowToProfit";
import MoreServices from "../components/web/MoreServices";
import Navigation from "../components/web/Navigation";
import ProcessAndServices from "../components/web/ProcessAndServices";
import Questions from "../components/web/Questions";

export default function Web() {
  return (
    <>
      <Head></Head>
      <main className="text-white relative ">
        <section className="bg-[url('/web/bghero.svg')] no-repeat w-full h-[1800px] bg-no-repeat absolute z-10 -top-[150px] left-0"></section>
        <section className="bg-[url('/web/herosection.svg')] no-repeat w-full h-[1800px] bg-no-repeat absolute z-20 -top-[100px] left-0"></section>

        <Navigation />
        <HeroSection />
        <HowToProfit />
        <ProcessAndServices />
        <MoreServices />
        <Questions />
        <section className="mt-56">
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
            py="py-56"
            bg="bg-brands-index-color"
          />
        </section>
      </main>
    </>
  );
}
