import Head from "next/head";
import Image from "next/legacy/image";
import React from "react";
import Brands from "../components/Brands/ListBrands";
import ContactUs from "../components/ContactUs";
import HeroSection from "../components/digital/HeroSection";
import MoreServices from "../components/digital/MoreServices";
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
          <Services />
          <MoreServices />
          <ContactUs
            color="border-pink"
            btnColor="bg-pink"
            bgColor="bg-pink-50"
            number="+359 89 631 5555"
          />
          <Brands
            web={true}
            logistics={true}
            bg="bg-pink-200"
            py="pb-24 pt-16"
          />
        </section>
      </main>
    </>
  );
}
