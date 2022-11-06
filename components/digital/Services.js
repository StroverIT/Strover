import Image from "next/legacy/image";
import React from "react";

const dataServices = [
  {
    title: "Дизайн и брандинг",
    text: `Each work strategy related to SEO must be long-term and carefully thought through, and the website should contain valuable and unique content. We position the websites of both service businesses for selected keywords and online stores for several dozen or even several thousand of keywords.
`,
    lines: 4,
    link: "none",
    _id: "1sdfjkhdshjk18",
  },
  {
    title: "Дизайн и брандинг",
    text: `Each work strategy related to SEO must be long-term and carefully thought through, and the website should contain valuable and unique content. We position the websites of both service businesses for selected keywords and online stores for several dozen or even several thousand of keywords.
`,
    lines: 4,

    link: "none",
    _id: "asfasfa21",
  },
  {
    title: "Дизайн и брандинг",
    text: `Each work strategy related to SEO must be long-term and carefully thought through, and the website should contain valuable and unique content. We position the websites of both service businesses for selected keywords and online stores for several dozen or even several thousand of keywords.
`,
    lines: 0,

    link: "none",
    _id: "21sfaf1",
  },
];
function Service({ numb, lines, title, text, link }) {
  let arr = [];
  for (let i = 0; i < lines; i++) {
    arr.push(i);
  }
  return (
    <section className="flex px-80">
      <section className="relative  ">
        <div className="relative h-40 w-40">
          <Image
            src="/digitalForms/forNumber.svg"
            alt="this is background for digital numbers"
            layout="fill"
          />
          <div className="absolute death-center text-blue text-5xl days-one-font">
            {numb}
          </div>
          <div className="flex-center pt-32 flex-col">
            {arr.length > 0 && <div className="bg-pink-100 h-5 w-2 "></div>}
            {arr.map((line) => (
              <div className="bg-pink-100 h-7 w-2 mt-5" key={line}></div>
            ))}
          </div>
        </div>
      </section>
      <section className="pt-16">
        <h5 className="font-semibold text-3xl">{title}</h5>
        <p className="pt-3">{text}</p>
        <button className="bg-pink-100 rounded-full py-2 px-9 hover:drop-shadow-lg transition-all hover:-translate-y-1 mt-10">
          Виж повече
        </button>
      </section>
    </section>
  );
}

export default function Services() {
  return (
    <section>
      <h2 className="text-center text-4xl font-semibold ">
        Процеса и услугите ни
      </h2>
      {dataServices.map((service, index) => {
        return (
          <Service
            key={service._id}
            numb={index + 1}
            lines={service.lines}
            title={service.title}
            text={service.text}
          />
        );
      })}
    </section>
  );
}
