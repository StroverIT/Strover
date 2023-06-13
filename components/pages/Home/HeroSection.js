"use client"
import React, { useEffect, useMemo, useRef, useState } from "react";
import { InView } from 'react-intersection-observer';
import BlueSpiderLogoMain from "../../logos/BlueSpiderLogoMain";
import LogoName from "../../logos/LogoNameWhite";
import Particles from "../../../app/Particles";

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
      <Particles isVisible={isVisible}/>
      <InView as="div" onChange={(inView, entry)=> inView ? setIsVisible(true) : setIsVisible(false)}>
        <div className="relative z-10 min-h-screen" >
          <div className="flex-col min-h-screen min-w-screen flex-center">
            <BlueSpiderLogoMain className=" w-80" />
            <LogoName
              viewBox="195"
              className="-mt-10 h-28"
              logoColor="fill-primary-100"
            />
            <div className="mt-2 text-3xl font-semibold text-primary-100">
              Вашият успех е нашата цел
            </div>
            <div className="absolute bottom-10 ">
              <div className="cursor-pointer scroll" onClick={scrollToInfo}></div>
            </div>
          </div>
        </div>
      </InView>
    </>
  );
};

export default HeroSection;
