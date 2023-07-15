import Image from 'next/image';
import React from 'react';
const path = `/websitePage/icons/payedThings`

const data =[{
    headline: `Блог`,
    imageUrl: `${path}/blog.png`

}, {
    headline: `Галерия`,
    imageUrl: `${path}/gallery.png`

},
{
    headline: `Календар на събития`,
    imageUrl: `${path}/calendar.png`

},
{
    headline: `Система за резервации`,
    imageUrl: `${path}/reserve.png`

}
]
const PayedThings  = () => {
    return (
      <section className=''>
          <section className="container py-16">
            <h2 className="text-xl font-bold text-center xl:text-5xl">
              <span className="tracking-wide ">Допълнителни</span>
              <span className="mx-2 text-[#08a4fc]">опции</span>
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
  
  export default PayedThings ;
  
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
  