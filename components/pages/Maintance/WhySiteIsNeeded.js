import React from "react";
import Image from "next/image"

const data = [
  {
    headline: `Оптимизация на търсачките
    `,
    paragraph: 
      `С постоянната поддръжка се подобрява видимостта на вашия уебсайт в търсачките. Оптимизацията за търсачки (SEO) включва актуализиране на ключови думи, мета данни и връзки, което увеличава трафика и помага на потенциалните клиенти да ви намерят по-лесно.`,
    
    imageUrl: `/websitePage/icons/freeThings/seo-search-symbol.png`,
  },
  {
    headline: `Актуалност и перфектна функционалност
    `,
    paragraph: 
      `Редовната поддръжка гарантира, че вашият уебсайт е винаги актуален и работи безупречно. Потребителите получават свежа информация и имат гладко и приятно потребителско изживяване.`,
    
    imageUrl: `/websitePage/maintance/icons/actual.png`,
  },
  {
    headline: `Защита и сигурност
    `,
    paragraph: 
      `Поддръжката на уебсайта включва мерки за сигурност, които предпазват от злонамерени атаки и запазват вашата информация и данни в безопасност. Редовните актуализации и контрол осигуряват надеждна защита на вашето онлайн присъствие.`,
    
    imageUrl: `/websitePage/maintance/icons/security.png`,
  },
 
  {
    headline: `Разширение и функционалност
    `,
    paragraph: 
      `Поддръжката ви дава възможност да разширите и подобрите функционалността на уебсайта си. Интегрирането на нови функции и разширения може да подобри ефективността и да отговори на променящите се нужди на вашето бизнес пространство.`,
    
      imageUrl: `/websitePage/maintance/icons/extension.png`,

  },
];
const WhySiteIsNeeded = () => {
  return (
    <section className="container py-16">
      <h2 className="text-xl font-bold text-center xl:text-5xl">
        <span className="tracking-wide ">Защо ви е 
</span>
        <span className="mx-2 text-primary-100">необходима поддръжка?</span>
      </h2>
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
      <section class="flex-center">
          <p className="bg-[#d8ecfc] text-[#00a1fe] font-bold balance text-center  p-14">
          Редовната поддръжка на уебсайта ви осигурява актуалност, сигурност и успех в онлайн пространството. Това е инвестиция във вашия бизнес, която поддържа връзката с клиентите и ви дава конкурентно предимство в дигиталната среда.

          </p>
      </section>
    </section>
  );
};

export default WhySiteIsNeeded;

const Container = ({ headline, paragraph, imageUrl }) => {
  return (
    <section className="">
        <div class="">
          <div className={`relative h-20 w-20 change-to-blue`}>
          <Image src={imageUrl} alt={headline} fill className="object-contain" />
                </div>
        </div>
      <h3 className="mt-4 text-2xl font-bold">{headline}</h3>
      <p className="mt-2 balance">{paragraph}</p>
    </section>
  );
};
