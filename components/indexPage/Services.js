import React from "react";

import Container from "./ServiceComp/Container";
import HeaderSpider from "../HeaderSpider";

export default function Services() {
  return (
    <section
      className="relative w-full bg-blue-300 bg-no-repeat py-28 box no-repeat"
      id="services"
    >
      <div className="text-white flex-center">
        <HeaderSpider title="Брандове" size="text-5xl" />
      </div>
      <section className="container grid items-center justify-center mt-10 text-white zeroToXl:text-center grid-cols xl:grid-cols-3 zeroToXl:gap-y-10">
        {/* Web container */}

        <Container title="Web" link="/web" btnColor="btn-web-bg-color">
          <p className="max-w-sm mt-2 whitespace-pre-line">
            {/* Нямате сайт? Не се тревожете! Ние ще създадем един за вас! */}
            {/* Анализираме, създаваме, поддържаме и развиваме всякакъв вид
            уебсайтове. */}
            Анализираме, създаваме, поддържаме и развиваме Вашият бизнес онлайн
            , в избраната за вас ниша.
          </p>
        </Container>
        {/* Digital container */}
        <Container
          title="Digital"
          link="/digital"
          btnColor="btn-digital-bg-color"
          delay={0.2}
        >
          <p className="xl:max-w-[18rem] mt-2 whitespace-pre-line">
            Ние създаваме ефективни маркетингови стратегии, за да популяризиране
            Вашият бизнес в социалните мрежи.
          </p>
        </Container>

        {/* Logistics container */}
        {/* \n */}
        <Container
          title="Academy"
          link="/academy"
          btnColor="btn-academy-bg-color"
          moreClasses="md:flex md:justify-end md:items-end md:text-end md:flex-col text-center"
          delay={0.4}
        >
          <p className="xl:max-w-[18rem] mt-2 whitespace-pre-line">
            Развиваме/създаваме вашите програмни умения и предлагаме кариерен
            старт от избраната от вас специалност.
          </p>
        </Container>
      </section>
    </section>
  );
}
