import Image from "next/image";
import React from "react";
import GlowBtn from "../../Buttons/GlowBtn";

const data = [
  {
    headline: `Изработка на уебсайт`,
    list: [
      `Осигурете си онлайн присъствие, което впечатлява и привлича клиенти.`,
      `Индивидуален дизайн, функционалност и безупречно потребителско изживяване.`,
      `Професионална разработка на уебсайтове.`,

    ],
    imageUrl: "/websitePage/development.png",
    imageSize: `lg:w-96 w-48 h-48 lg:h-96`

  },
  {
    headline: `Редизайн на вашият уебсайт`,
    paragraph: `Освежете вашия уебсайт с нашата услуга за редизайн. Модерен и привлекателен дизайн, подобрена функционалност и оптимизирано потребителско изживяване. Вдъхнете нов живот във вашето онлайн присъствие.`,
    imageUrl: "/websitePage/redesign.png",
    imageSize: `lg:w-96 w-48 h-48 lg:h-96`,
  },
];
const WhatWeAreSelling = () => {
  return (
    <section className="bg-[#f1fbff] ">
      <div className="container grid py-10 gap-y-4 lg:gap-y-16">
        {data.map((data, index) => {
          return (
            <Container
              headline={data.headline}
              paragraph={data.paragraph}
              key={index}
              imageUrl={data.imageUrl}
              list={data.list}
              imageSize={data.imageSize}
            />
          );
        })}
      </div>
    </section>
  );
};

export default WhatWeAreSelling;

const Container = ({ headline, paragraph, imageUrl, list, imageSize, isFlipped}) => {
  return (
    <section className={`grid lg:grid-cols-[70%10%]  `}>
      {/* <div class="flex-center"> */}
    
      {/* </div> */}
      <div className="flex flex-col justify-center ">
          <div>
              <h2 className="text-xl lg:text-4xl font-bold">{headline}</h2>
              {paragraph && <p className="mt-2 text-sm lg:text-lg balance">{paragraph}</p>}
              {list && (
                <ul className="mt-2 pl-4 text-sm lg:text-lg list-disc">
                  {list.map((data, key) => {
                    return <li className="balance" key={key}>{data}</li>;
                  })}
                </ul>
              )}
          <GlowBtn text="Започни сега!" className="px-8 py-2 mt-4"/>

          </div>
      </div>
      {/* <div></div> */}
      <div className={`relative ${imageSize} ${isFlipped && "order-1"}`}>
        <Image src={imageUrl} alt={headline} fill className="object-contain" />
      </div>
    </section>
  );
};
