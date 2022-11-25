import React from "react";

import Container from "./ServiceComp/Container";
import TextAnimation from "../../libs/TextAnimation";
import HeaderSpider from "../HeaderSpider";

export default function Services() {
  return (
    <section
      className="relative w-full py-20 bg-blue-300 bg-no-repeat box no-repeat"
      id="services"
    >
      <div className="text-white flex-center">
        <HeaderSpider title="Брандове" size="text-5xl" />
      </div>
      <section className="container grid items-center justify-center mt-10 text-white zeroToXl:text-center grid-cols xl:grid-cols-3 zeroToXl:gap-y-10">
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
          p={`Развиваме/създаваме вашите програмни и дигитални умения`}
          link="/academy"
          btnColor="btn-academy-bg-color"
          moreClasses="md:flex md:justify-end md:items-end md:text-end md:flex-col text-center"
          delay={0.4}
        />
      </section>
    </section>
  );
}
