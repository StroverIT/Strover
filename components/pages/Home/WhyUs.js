import React from "react";
import BGv2 from "../../SVG/BGv2";

const WhyUs = () => {
  return (
    <section className="relative w-screen bg-[#f1f9fe] min-h-screen     mb-20">
     {/* <div className="absolute top-0 left-0 z-10">
        <BGv2 />
      </div> */}

      <section className="container relative z-20 flex-col min-h-screen flex-center">
        <h1 className="text-3xl font-bold text-center xl:text-5xl max-lg:pt-8"> 
          <span className="tracking-wide ">Защо да </span>
          <span className="text-primary-100">изберете нас?</span>
        </h1>
        <div className="grid lg:grid-cols-2 gap-10 mt-20">
          <Container
            title={"Уникален екип"}
            p={`Екипът ни се състои от уеб дизайнер, програмист, редактор на съдържание и фотограф.`}
            num={1}
            numColor="text-[#fc1e60]"
          />
          <Container
            title={"Кратки срокове"}
            p={`Нужни са ни само 3 дни за да продавате услугите си онлайн и 7 дни да продавате продуктите си`}
            num={2}
            numColor="text-[#6cca4e]"
          />
          <Container
            title={"Скорост и сигурност"}
            p={`Гарантираме, че вашия уебсайт ще бъде бърз и защитен. Всичко, което клиентите и онлайн търсачките харесват!`}
            num={3}
            numColor="text-[#ac46fc]"
          />
          <Container
            title={"Оставаме до вас"}
            p={`След като направим вашия уебсайт, ние предлагаме и поддръжка. По този начин ви обещаваме сигурност и качество!`}
            num={4}
            numColor="text-[#00a1ff]"
          />
        </div>
      </section>
    
    </section>
  );
};

export default WhyUs;

function Container({ title, p, num, numColor}) {
  return (
    <div className="p-6 text-center bg-white shadow-xl rounded-xl ">
      <div className={`text-5xl ${numColor}`}>
        {num}
      </div>
      <h2 className="mt-2 text-xl font-bold">{title}</h2>

      <div className=" flex-center">
        <p className="mt-2 xl:max-w-md">{p}</p>
      </div>
    </div>
  );
}
