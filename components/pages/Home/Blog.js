import React from "react";

import Image from "next/image";
const FreeAnalyze = () => {
  return (
    <>

      <section className="relative w-screen  bg-[#d0ebfd]">
      <div className=""><SvgCompV2 fill="#ffffff"/></div>
      
        <section className="container relative z-20 flex-col py-10 flex-center">
          <h1 className="text-3xl font-bold text-center xl:text-5xl">
            <span className="tracking-wide ">Интересно </span>
            <span className="text-primary-100">от блога</span>
          </h1>
          <div className="grid lg:grid-cols-3 gap-10 mt-10">
              <Container title="Как да създадете успешен онлайн магазин: Най-добрите практики и стратегии" createdDate="25/6/2023" imageUrl="/blog/sucessful-ecomerce.webp"/>
              <Container title="Интеграция на социалните медии в електронната търговия: Как да използвате платформите за по-голям успех" createdDate="25/6/2023" imageUrl="/blog/sucessful-ecomerce.webp"/>
              <Container title="Изграждане на успешен онлайн бранд: Как да развиете уникална идентичност за вашия магазин" createdDate="25/6/2023" imageUrl="/blog/sucessful-ecomerce.webp"/>

          </div>
        </section>
      
      </section>
      <div className="-mb-28"><SvgCompV2/></div>
    </>
  );
};

export default FreeAnalyze;

function Container({ title,imageUrl, createdDate}) {
  return (
    <div className=" rounded-xl">
      <div class="flex-center">
        <div className={`relative h-56 w-72`}>
          <Image src={imageUrl} alt={title} fill className="object-contain"/>
        </div>
      </div>
      <h2 className="max-w-xs text-lg font-bold">{title}</h2>

      <div className="">
        <p className="mt-2 xl:max-w-md">{createdDate}</p>
      </div>
    </div>
  );
}

const SvgCompV2 = ({fill = "#d0ebfd"}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-screen">
        <path
      fill={fill}
      d="m0 74 30-4.5C60 65 120 56 180 59.2c60 3.1 120 18.5 180 22.8 60 4.3 120-2.3 180-8.2 60-5.8 120-10.8 180 2 60 12.9 120 43.5 180 59.5s120 17.4 180 6c60-11.3 120-35.3 180-36.6 60-1.4 120 20 180 20.5s120-19.9 180-31.5c60-11.7 120-14.7 180-18.9 60-4.1 120-9.5 150-12.1l30-2.7V0H0Z"
    />
    </svg>
  );
};
