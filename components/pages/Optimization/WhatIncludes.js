import React from "react";
import Image from "next/image"

const data = [
  {
    headline: `Настроен за SEO
    `,
   
    
    imageUrl: `/websitePage/icons/freeThings/seo-search-symbol.png`,
  },
  {
    headline: `Защитен от хакерски атаки
    `,
    
    imageUrl: `/websitePage/maintance/icons/security.png`,
  },
  {
    headline: `Без грешки в програмния код
    `,
    
    imageUrl: `/websitePage/optimization/icons/noCodeMistakes.png`,
  },
 
  {
    headline: `Привлекателен за нови клиенти
    `,
    
      imageUrl: `/websitePage/optimization/icons/attractive.png`,

  },
  {
    headline: `Адаптиран към всички правни норми
    `,
    
      imageUrl: `/websitePage/optimization/icons/gdpr.png`,

  },
  {
    headline: `По-бърз
    `,
    
      imageUrl: `/websitePage/optimization/icons/speed.png`,

  },
];
const WhatIncludes = () => {
  return (
    <section className="bg-[#f1fbff]">
        <section className="container py-16">
          <h2 className="text-xl font-bold text-center xl:text-5xl">
            <span className="tracking-wide ">Защо ви е 
        </span>
            <span className="mx-2 text-[#00a1fe]">необходима поддръжка?</span>
          </h2>
          <div className="grid lg:grid-cols-3 gap-10 py-10 mt-6">
            {data.map((data, index) => {
              return (
                <Container
                  headline={data.headline}
                  paragraph={data.paragraph}
                  imageUrl={data.imageUrl}
                  key={index}
                />
              );
            })}
          </div>
          {/* <section class="flex-center">
              <p className="bg-[#d8ecfc] text-[#00a1fe] font-bold balance text-center  p-14">
              Редовната поддръжка на уебсайта ви осигурява актуалност, сигурност и успех в онлайн пространството. Това е инвестиция във вашия бизнес, която поддържа връзката с клиентите и ви дава конкурентно предимство в дигиталната среда.
              </p>
          </section> */}
        </section>
    </section>
  );
};

export default WhatIncludes;

const Container = ({ headline, paragraph, imageUrl }) => {
  return (
    <section className="flex-center flex-col">
        <div class="">
          <div className={`relative h-20 w-20 change-to-blue`}>
          <Image src={imageUrl} alt={headline} fill className="object-contain" />
                </div>
        </div>
      <h3 className="mt-4 text-sm font-bold">{headline}</h3>
      <p className="mt-2 balance">{paragraph}</p>
    </section>
  );
};
