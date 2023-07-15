import React from "react";
import MotionPerOneComps from "../../Swipers/MotionPerOneComps";

const SellMore = () => {
  const imgData = {
    title: "Отключете онлайн продажбите със Strover!",

    imgUrl: "/mockupPhoneAndLaptop.png",
  };
  const businessOnline =    {
   
    title: "Направете бизнеса си онлайн",
    paragraph: "Превърнете вашия магазин за търговия на дребно в онлайн магазин и приемайте повече поръчки всеки ден.",
    imgUrl: "/testing.png",

}
// {
//     title: "Унилано красив дизайн на твоя магазин",
//     paragraph: `За нас е от първостепенно значение са дизайна, сигурността и оптимизацията на онлайн магазините, котио създаваме 

//     В създадените от нас онлайн магазини залагаме на най-новите стандарти в SEO оптимизацията и превръщането на максимално повече посетители в клиенти 
//     `,
//     imgUrl: "/mockupPhoneAndLaptop.png",

// }, 
  return (
    <div id="swiperInfo" className="container">
        
      <section className="max-xl:mt-10">
          <MotionPerOneComps imgData={imgData}>
            Ние предлагаме комплексна услуга за електронна търговия, <strong>включваща:</strong>
            <ul className="ml-5 list-disc">
                <li>прекрасен дизайн на уебсайт</li>
                <li>автоматизирани поръчки и плащания</li>
                <li>логистика за
            доставка на продуктите до клиентите</li>
            </ul>
          </MotionPerOneComps>
      </section>
      <section className="my-10 xl:my-20">
          <MotionPerOneComps imgData={businessOnline} isReversed={true} />
       
            {/* <SwiperPerOne data={SwiperHomeData} navSize="text-3xl" /> */}
          </section>
    </div>
  );
};

export default SellMore;



{/* <section className="relative z-10 flex flex-col justify-center pb-10 break-words min-w-screen" >
<section className="max-xl:container">
 

</section>
</section> */}