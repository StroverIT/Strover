import React from "react";

export default function MoreServices() {
  return (
    <section className="my-56">
      <h2 className="text-center text-4xl font-semibold ">
        Допълнителни услуги
      </h2>
      <section className="flex px-80">
        <section className="  "></section>
        <section className="pt-16">
          <h5 className="font-semibold text-3xl">
            Search Engine Optimization (SEO)
          </h5>
          <p className="pt-">
            Each work strategy related to SEO must be long-term and carefully
            thought through, and the website should contain valuable and unique
            content. We position the websites of both service businesses for
            selected keywords and online stores for several dozen or even
            several thousand of keywords.
          </p>
          <button className="bg-pink-100 rounded-full py-2 px-9 hover:drop-shadow-lg transition-all hover:-translate-y-1 mt-10">
            Виж повече
          </button>
        </section>
      </section>
    </section>
  );
}
