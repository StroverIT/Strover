import React from "react";

import Container from "./ServiceComp/Container";
import HeaderSpider from "../HeaderSpider";
import Image from "next/image";

export default function Services() {
  return (
    <section
      className="relative w-full bg-blue-300 bg-no-repeat py-28 box no-repeat"
      id="services"
    >
      <div className="text-white flex-center">
        <HeaderSpider title="Брандове" size="text-5xl" />
      </div>
      <section className="flex flex-col mt-10 text-white gap-y-10 md:gap-y-64 md:pb-56 zeroToXl:text-center zeroToXl:gap-y-10">
        {/* Web container */}

        <Container
          title="Web"
          link="/brands/web"
          titleColor="text-primaryBlue-200"
          btnColor="btn-web-bg-color"
          imageUrl="test-removebg.png"
        >
          <section className="container flex-col mt-2 text-left md:max-w-lg flex-center max-md:px-10">
            {/* Нямате сайт? Не се тревожете! Ние ще създадем един за вас! */}
            {/* Анализираме, създаваме, поддържаме и развиваме всякакъв вид
            уебсайтове. */}
            <section className="mt-2">
              <h2 className="text-lg font-semibold ">Изработка на сайт</h2>
              <p className="">
                Изработка на сайт е основната дейност на Strover Company. Ние
                сме специализирани в разработването и поддържането на сайтове,
                които са професионално изработени и оптимизирани за да се
                достигне до по-голям брой клиенти.
              </p>
            </section>
            <section className="mt-2">
              <h2 className="text-lg font-semibold ">
                Технологиите за изработка на сайт
              </h2>
              <p className="">
                Ние използваме най-новите технологии и инструменти за да
                предложим уникално и качествено опит за посетителите на Вашия
                сайт.
              </p>
            </section>

            <section className="mt-2">
              <h2 className="text-lg font-semibold ">Препоръчителни услуги</h2>
              <p className="">
                Ние също така предлагаме SEO оптимизация, за да подобрим
                видимостта на Вашия сайт в търсачките и да достигнем до повече
                клиенти. Доверете на Strover Company да изработи сайт, който да
                отговаря на Вашите нужди и да помогне за растежа на Вашия
                бизнес.
              </p>
            </section>
          </section>
        </Container>
        {/* Digital container */}
        <Container
          title="Digital"
          link="/brands/digital"
          titleColor="text-pink"
          btnColor="btn-digital-bg-color"
          imageUrl="test-social.png"
          delay={0.2}
        >
          <section className="container flex-col mt-4 text-left md:max-w-lg flex-center max-md:px-10">
            <p>
              Дигиталният маркетинг е важен аспект за успешното развитие на
              вашия бизнес.
            </p>
            <p className="mt-2">
              Strover Company предлага комплексни услуги в областта на
              дигиталния маркетинг, като SEO, социални медии, брандиране и
              ребрандиране.
            </p>
            <p className="mt-2">
              Използвайки най-новите технологии и инструменти, помагаме на вашия
              бизнес да се развива и да се достига до по-голям брой клиенти.
            </p>{" "}
            <p className="mt-2">
              Работим с вас за да разберем вашите нужди и цели и да създадем
              стратегия, която да отговаря на тях.
            </p>
            <p>
              Предлагаме индивидуално подходящи решения и да подобрим вашето
              онлайн присъствие.
            </p>
            <p className="mt-2">
              Доверете се на Strover Company за вашия дигитален маркетинг и
              наблюдайте как вашия бизнес се развива и достига до повече
              клиенти.
            </p>
            <p className="mt-2">
              С нашия знание и опит в дигиталния маркетинг, ще помогнем на вашия
              бизнес да се покаже на интернет и да достигне до своята целева
              аудитория с правилната маркетинг стратегия.
            </p>
          </section>
        </Container>

        {/* Logistics container */}
        {/* \n */}
        {/* <Container
          title="Academy"
          link="/brands/academy"
          btnColor="btn-academy-bg-color"
          moreClasses="md:flex md:justify-end md:items-end md:text-end md:flex-col text-center"
          delay={0.4}
        >
          <p className="xl:max-w-[18rem] mt-2 whitespace-pre-line">
            Развиваме/създаваме вашите програмни умения и предлагаме кариерен
            старт от избраната от вас специалност.
          </p>
        </Container> */}
      </section>
    </section>
  );
}
