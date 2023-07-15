import React from "react";
import Image from "next/image"
const data = [
  {
    headline: `Крием вълшебство във вашите уебсайтове`,
    paragraph: `Нашите експерти в уеб разработката владеят магията да създават изключителни и впечатляващи уебсайтове. Съчетавайки креативност, техническо майсторство и иновативни идеи, ние откриваме пътеки, които водят до уникални онлайн преживявания.`,
    imageUrl: `/websitePage/icons/choosingUs/magic.png`,

  },
  {
    headline: `Плетем мрежата на успеха`,
    paragraph: `Както паякът изкусно плете мрежата си, ние плетем мрежа на успеха около вашите бизнес цели. Нашите уебсайтови решения се фокусират върху подобряване на вашата онлайн видимост, привличане на трафик и превръщането на посетители в клиенти.`,
    imageUrl: `/websitePage/icons/choosingUs/success.png`,

  },
  {
    headline: `Разнообразни услуги за всяка потребност`,
    paragraph: `Независимо дали търсите създаване на нов уебсайт или редизайн на съществуващия, ние предлагаме широка гама от услуги, които отговарят на вашите изисквания. От изграждането на уебсайт до намирането на клиенти, ние сме ваш партньор през всеки етап от пътя.`,
    imageUrl: `/websitePage/icons/choosingUs/learning.png`,

  },
  {
    headline: `Персонализиран подход`,
    paragraph: `Ние ценим уникалността на всеки клиент и бизнес. Затова винаги се стремим да предоставим персонализирано внимание и индивидуални решения, които отразяват вашите ценности и изисквания.`,
    imageUrl: `/websitePage/icons/choosingUs/approach.png`,

  },
];

const WhySiteIsNeeded = () => {
  return (
    <section class="bg-[#d0ebfd]">
      <section className="container py-16">
        <h1 className="text-2xl font-bold text-center xl:text-5xl">
          <span className="tracking-wide ">Защо да</span>
          <span className="mx-2 text-[#00a1fe]">изберете нас</span>
        </h1>
        <div className="grid lg:grid-cols-2 gap-10 py-10 mt-6">
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
 
      </section>
    </section>
  );
};

export default WhySiteIsNeeded;

const Container = ({ headline, paragraph, imageUrl }) => {
  return (
    <section className="flex-center max-lg:flex-col gap-x-4">
        <div class="">
          <div className={`relative h-20 w-20`}>
          <Image src={imageUrl} alt={headline} fill className="object-contain" />
                </div>
        </div>
      <div>
        <h3 className="mt-4 lg:text-xl font-bold">{headline}</h3>
        <p className="balance max-lg:text-sm ">{paragraph}</p>
      </div>
    </section>
  );
};