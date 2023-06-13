"use client"
import React, {useEffect, useRef} from "react";

import { useAnimate, useInView, stagger  } from "framer-motion";

import CardText from "../../CardText";

const NeedsOfWebsite = () => {




  const [container, animate] = useAnimate()
  const isInView = useInView(container)
  
  useEffect(()=>{
        
    if(isInView){


      animate("section", {y: ["10vw", "0vw"],opacity: ["0%", "100%"], },  { duration: 0.5, delay: stagger(0.2),  ease: [.32, .23, .4, .9]  })


    }

}, [isInView])

  return (
    <section className="relative z-10 min-h-screen px-48 ml-24 break-words py-28 min-w-screen bg-primary-390">
<h2 className="text-3xl font-bold text-center uppercase text-dark">
  Как вашият онлайн магазин печели за вас
</h2>
<div ref={container} className="grid grid-cols-3 gap-20 mt-20">
  <CardText
    index={1}
    title="Увеличен обхват"
    paragraph="Онлайн магазина Ви позволява да разширите клиентската си база извън местния район и да достигнете до потенциални клиенти от цял ​​свят."
    imgSrc="worldwide.png"
  />
  <CardText
    index={2}
    // imgSrc={"/icons/24-hours.png"}
    title="Наличност 24/7"
    paragraph="Вашият бизнес е отворен и достъпен за клиентите 24 часа в денонощието, 7 дни в седмицата, което им позволява да пазаруват, когато им е удобно."
    imgSrc={"24-hours.png"}

  />
  <CardText
    index={3}
    title="Намалени разходи"
    paragraph="В сравнение с традиционните физически магазини, онлайн магазините имат по-ниски режийни разходи, като наем, комунални услуги и персонал, което може да доведе до по-високи маржове на печалба."
    imgSrc="money-growth.png"
  />
  <CardText
    index={4}
    title="Персонализирано изживяване на клиентите"
    paragraph="С използването на клиентски данни и анализи уебсайтовете за електронна търговия могат да предложат персонализирани изживявания при пазаруване, като например препоръки за продукти, въз основа на минали покупки и история на сърфиране на клиента."
    imgSrc="video-call.png"
  />
  <CardText
    index={5}
    title="Повишена ефективност"
    paragraph="Онлайн магазините рационализират процеса на закупуване, като намаляват времето и усилията, необходими на клиентите да направят покупка, а също така автоматизират много аспекти на обработката на поръчки, намалявайки натоварването на вашият екип."
    imgSrc="chatbot.png"
  />
  <CardText
    index={6}
    title="Достъп до ценни данни"
    paragraph="Онлайн магазините генерират множество данни, като демографски данни на клиентите, модели на покупка и тенденции в продажбите, които могат да се използват за информиране на маркетингови стратегии и подобряване на бизнес операциите."
    imgSrc="attached-file.png"
  />
</div>
</section>
  );
}

export default NeedsOfWebsite;
