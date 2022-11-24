import React from "react";

import Container from "./ServiceComp/Container";
import TextAnimation from "../../libs/TextAnimation";

export default function Services() {
  return (
    <section
      className="xl:bg-[url('/indexForms/background.svg')] no-repeat w-full zeroToXl:bg-blue-300 zeroToXl:py-10 xl:h-[420px] bg-no-repeat relative"
      id="services"
    >
      <div className=" xl:ml-10 text-4xl md:text-5xl font-semibold text-center text-white md:flex-center leading-[4rem] ">
        <TextAnimation
          placeholderText={[
            {
              type: "heading1",
              text: "Брандове",
              paddingBottom: "10px",
            },
          ]}
        />
      </div>
      <section className="container grid items-center justify-center text-white md:t-20 zeroToXl:text-center grid-cols xl:grid-cols-3 xl:space-x-10 xl:mt-24 zeroToXl:gap-y-10">
        {/* Web container */}

        <Container
          title="Web"
          p="Нямате сайт? Не се тревожете! Ние ще създадем един за вас!"
          link="/web"
          btnColor="btn-web-bg-color"
        />
        {/* Digital container */}
        <Container
          title="Digital"
          p="Имате малко клиенти? Може да ви помогнем, чрез нашите дигитални маркетинг умения."
          link="/digital"
          btnColor="btn-digital-bg-color"
          moreClasses="flex-center flex-col text-center"
          delay={0.2}
        />

        {/* Logistics container */}
        {/* \n */}
        <Container
          title="Academy"
          p={`В нашата академия ще ви помогнем да научите програмине и/или digital marketing`}
          link="/academy"
          btnColor="btn-academy-bg-color"
          moreClasses="md:flex md:justify-end md:items-end md:text-end md:flex-col text-center"
          delay={0.4}
        />
      </section>
    </section>
  );
}
