import React from "react";
import InitText from "../../components/InitText";

import Inputs from "./Inputs"
const Page = () => {
  return (
    <section className="min-h-screen flex-center">
      <InitText text="Контакти" />

      <div className="container lg:px-24">
          <h1 className="mb-2 text-5xl">Имате въпроси?</h1>
          <h2 className="text-[#a7a7a7] text-5xl mb-16">Оставете ни съобщение</h2>
          <Inputs/>
      </div>

    </section>
  );
};

export default Page;
