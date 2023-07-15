"use client"
import React, { useEffect, useMemo, useRef, useState } from "react";
import { InView } from 'react-intersection-observer';
import BlueSpiderLogoMain from "../../logos/BlueSpiderLogoMain";
import LogoName from "../../logos/LogoNameWhite";
import dynamic from 'next/dynamic'
const DynamicParticles = dynamic(() => import("../../../app/Particles"), )


const HeroSection = () => {

  
  const [isVisible, setIsVisible] = useState(true)
  // const { container, inView, entry } = useInView();

  // useEffect(()=>{
  //   console.log(inView, entry);
 

  // },[inView, entry])
   
  const scrollToInfo = ()=>{
    
    const swiperInfo = document.querySelector("#swiperInfo")
    swiperInfo.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  return (
    <>
      <DynamicParticles isVisible={isVisible}/>
      <InView as="div" onChange={(inView, entry)=> inView ? setIsVisible(true) : setIsVisible(false)}>
        <div className="relative z-10 min-h-screen" >
          <div className="flex-col min-h-screen min-w-screen flex-center">
            <BlueSpiderLogoMain className="w-48 xl:w-80" />
            <LogoName
              viewBox="195"
              className="xl:-mt-10 h-14 xl:h-28"
              logoColor="fill-primary-100"
            />
            <h1 className="mt-2 text-xl font-semibold text-center xl:text-3xl text-primary-100">
              Вашият успех е нашата цел
            </h1>
            <div className="absolute bottom-10 ">

              <div className="cursor-pointer scroll border-2 border-[#8ddfe8]  before:border-[#8ddfe8]" onClick={scrollToInfo}></div>
            </div>
          </div>
        </div>
      </InView>
    </>
  );
};

export default HeroSection;
