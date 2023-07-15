import React from "react";
import InitText from "../../components/InitText";

import Container from "../../components/pages/ContactUs/Container"

import PageWrapper from "../../components/Animated/PageWrapper";
export const metadata = {
  title: "Конкати - Очакваме с нетърпение нашите общи проекти!",
  description: "Strover Company контактии. Винаги сме готови за нови проекти и съвместна работа. Предлагаме безплатна консултация. Изработка на сайт - контакти",
};

const Page = () => {
  return (
    <section className="xl:min-h-screen flex-center">
      <InitText text="Контакти" />

      <PageWrapper>
        
        <Container className="container lg:px-24 max-xl:mt-24"/>
      
            
      </PageWrapper>

    </section>
  );
};

export default Page;
