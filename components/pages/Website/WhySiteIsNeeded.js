import React from "react";
import Image from "next/image"

const data = [
  {
    headline: `Онлайн присъствие и видимост`,
    list: [
      `Уебсайтът е необходим за вашето бизнес присъствие в онлайн пространството.`,
      `Той ви осигурява видимост и достъпност за милиони потенциални клиенти.`,
    ],
    imageUrl: `/websitePage/icons/needOfWebsite/visibility.png`,
  },
  {
    headline: `Привличане на клиенти`,
    list: [
      `Уебсайтът ви помага да привлечете нови клиенти.`,
      `Чрез ефективен маркетинг и оптимизация за търсачки, можете да привлечете посетители и да ги превърнете в клиенти.`,
    ],
    imageUrl: `/websitePage/icons/needOfWebsite/client.png`,

  },
  {
    headline: `Доверие и професионализъм`,
    list: [
      `Уебсайтът изгражда доверие и утвърждава професионализма на вашия бизнес.`,
      `Потребителите често търсят онлайн информация преди да вземат решение за покупка или сътрудничество. Уебсайтът ви показва кой сте и какво предлагате.`,
    ],
    imageUrl: `/websitePage/icons/needOfWebsite/trust.png`,

  },
  {
    headline: `Комуникация и свързаност

    `,
    list: [
      `Уебсайтът ви предоставя канал за комуникация и свързаност с клиентите.`,
      `Чрез форми за контакт, чат системи и блогове можете да се свържете с клиентите и да споделяте полезна информация.`,
    ],
    imageUrl: `/websitePage/icons/needOfWebsite/network.png`,

  },
  {
    headline: `Конкурентна предимство`,
    list: [
      `Уебсайтът ви предоставя конкурентно предимство пред другите бизнеси във вашата ниша.`,
      `Ако конкуренцията все още не присъства онлайн, вие имате възможността да бъдете първите и да градите лоялност сред клиентите.`,
    ],
    imageUrl: `/websitePage/icons/needOfWebsite/advantage.png`,

  },
  {
    headline: `Продажби и растеж`,
    list: [
      `Уебсайтът е мощен инструмент за увеличаване на продажбите и стимулиране на бизнес растежа.`,
      `Чрез електронна търговия, онлайн плащания и ефективни стратегии за продажби, можете да разширите клиентската база и да генерирате приходи.`,
    ],
    imageUrl: `/websitePage/icons/needOfWebsite/payment.png`,

  },
];
const WhySiteIsNeeded = () => {
  return (
    <section className="container py-16">
      <h2 className="text-2xl font-bold text-center lg:text-5xl">
        <span className="tracking-wide ">Защо</span>
        <span className="mx-2 text-primary-100">сайтът</span>
        <span className="tracking-wide ">е нужен</span>
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
      <section class="flex-center">
          <p className="bg-[#d8ecfc] text-[#00a1fe] font-bold balance text-center p-8 lg:p-14">
            Независимо от размера и типа на вашия бизнес, уебсайтът е от съществено
            значение за неговия успех и развитие.
          </p>
      </section>
    </section>
  );
};

export default WhySiteIsNeeded;

const Container = ({ headline, paragraph, imageUrl }) => {
  return (
    <section className="flex-col flex-center">
        <div className={`relative h-20 w-20`}>
        <Image src={imageUrl} alt={headline} fill className="object-contain" />
      </div>
      <h3 className="mt-4 text-lg font-bold">{headline}</h3>
      <p>{paragraph}</p>
    </section>
  );
};
