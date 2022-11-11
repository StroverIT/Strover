import React from "react";
import TextAnimation from "../../libs/TextAnimation";

export default function MoreServices() {
  return (
    <section className="my-56 max-lg:container">
      <section className="items-center text-4xl font-semibold text-center">
        <TextAnimation
          placeholderText={[{ type: "heading1", text: "Допълнителни услуги" }]}
        />
      </section>
      <section className="flex lg:px-80">
        <section className=""></section>
        <section className="pt-16">
          <h5 className="text-3xl font-semibold">SEO оптимизация</h5>
          <p className="pt-2">
            Когато е завършен уейбсайта, се пристъпва към намирането на
            потребители и потенциални клиенти. Това се извършва, чрез търсачките
            или т.н. SEO (Search Engine Optimization)
          </p>
          <button className="py-2 mt-10 transition-all bg-pink-100 rounded-full px-9 hover:drop-shadow-lg hover:-translate-y-1">
            Виж повече
          </button>
        </section>
      </section>
    </section>
  );
}
