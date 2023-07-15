import Image from 'next/image';
import React from 'react';

const path = `/websitePage/icons/freeThings`
const data =[{
    headline: `Стандартна форма за обратна връзка`,
    imageUrl: `${path}/exam.png`
}, {
    headline: `Бутон за бързо набиране`,
    imageUrl: `${path}/phone-call-button.png`,
    imageSize: "h-14 w-14"
},
{
    headline: `SEO оптимизация`,
    imageUrl: `${path}/seo-search-symbol.png`

},
{
    headline: `Чат в реално време`,
    imageUrl: `${path}/chat.png`

}
]
const FreeThings = () => {
    return (
      <section className='bg-[#d8ecfc]'>
          <section className="container py-16">
            <h2 className="text-xl font-bold text-center xl:text-5xl">
              <span className="tracking-wide ">Получавате</span>
              <span className="mx-2 text-[#08a4fc]">БЕЗПЛАТНО</span>
            </h2>
            <div className="grid lg:grid-cols-4 gap-10 py-10 mt-6">
              {data.map((data, index) => {
                return (
                  <Container
                    headline={data.headline}
                    paragraph={data.paragraph}
                    imageUrl={data.imageUrl}
                    imageSize={data.imageSize}
                    key={index}
                  />
                );
              })}
            </div>
 
          </section>
      </section>
    );
  };
  
  export default FreeThings;
  
  const Container = ({ headline, paragraph, imageUrl, imageSize = "h-20 w-20" }) => {
    return (
      <section className="flex-col flex-center">
          <div className={`relative ${imageSize}`}>
          <Image src={imageUrl} alt={headline} fill className=" change-to-blue" />
        </div>
        <h3 className="mt-4 text-lg font-bold text-center">{headline}</h3>
        <p>{paragraph}</p>
      </section>
    );
  };
  