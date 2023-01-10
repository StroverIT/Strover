import React from "react";
import TextAnimation from "../../libs/TextAnimation";
import HeaderSpider from "../HeaderSpider";

export default function MoreServices() {
  return (
    <section className="my-24 lg:my-56 max-lg:container">
      <section className="items-center text-2xl font-semibold text-center lg:text-4xl">
        <div className="flex-col flex-center">
          <HeaderSpider
            title="Допълнителни услуги"
            size="max-lg:container text-3xl lg:text-5xl"
            lineColor="bg-pink-200"
          />
        </div>
        {/* <TextAnimation
          placeholderText={[{ type: "heading1", text: "Допълнителни услуги" }]}
        /> */}
      </section>
      <section className="flex lg:px-80">
        <section className=""></section>
        <section className="pt-5 lg:pt-16">
          <h2 className="text-lg font-semibold lg:text-3xl">SEO оптимизация</h2>
          <p className="max-w-md pt-2 max-lg:text-sm">
            Когато е завършен уейбсайта, се пристъпва към намирането на
            потребители и потенциални клиенти. Това се извършва, чрез търсачките
            или т.н. SEO (Search Engine Optimization)
          </p>
          {/* <button className="py-2 mt-10 transition-all bg-pink-100 rounded-full max-lg:text-sm px-9 hover:drop-shadow-lg hover:-translate-y-1">
            Виж повече
          </button> */}
        </section>
      </section>
    </section>
  );
}
