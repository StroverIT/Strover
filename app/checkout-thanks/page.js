"use client"
import React, { useEffect, useState } from "react";
import Check from "../../components/Animated/Check";
import Link from "next/link";
import style from "./fireWorks.module.css";
import GlowBtn from "../../components/Buttons/GlowBtn";
import PageWrapper from "../../components/Animated/PageWrapper";



export default function DeliveryThanks({searchParams}) {
    const {name, email, telephone} = searchParams;

  const [fireWorks, setFireWorks] = useState({
    second: false,
    third: false,
  });
  useEffect(() => {
    setTimeout(() => {
      setFireWorks((prevState) => ({ ...prevState, second: true }));
    }, 1000);
    setTimeout(() => {
      setFireWorks((prevState) => ({ ...prevState, third: true }));
    }, 2500);
  }, []);
  return (
    <>
     
    
        <section className={`relative  ${style.bg_gradient}`}>
        <PageWrapper>
          <section className="relative z-20 flex items-center justify-center min-h-screen">
            <section className="flex flex-col items-center justify-center py-10 shadow-2xl bg-white-50 md:px-10 rounded-xl ">
              <div className="w-16 h-16 ">
                <Check />
              </div>
              <section className="container flex-col mt-5 text-center font-roboto flex-center">
                <h1 className="text-xl xl:text-4xl text-green">
                  Успешно направена поръчка
                </h1>
                <h2 className="mt-4 text-lg xl:text-2xl text-primary-50">
                  Благодарим Ви <span className="ml-1 font-medium">{name}</span>!
                </h2>
                <p className="mt-2">
                  Очаквайте обратна връзка до <span className="underline">1 работен час.</span>
                </p>
              </section>
              <Link href="/">
                <GlowBtn className="px-10 py-2 mt-10 " text="Към начална страница"/>
              </Link>
            </section>
          </section>
      </PageWrapper>

          <section className="">
            <section className="absolute bottom-20 md:bottom-0 left-1/4 ">
              <div className={`${style.firework}`}></div>
              <div className={`${style.firework}`}></div>
              <div className={`${style.firework}`}></div>
            </section>
            {fireWorks.second && (
              <section className="absolute bottom-20 md:bottom-0 left-1/2">
                <div className={`${style.firework}`}></div>
                <div className={`${style.firework}`}></div>
                <div className={`${style.firework}`}></div>
              </section>
            )}
            {fireWorks.third && (
              <section className="absolute bottom-20 md:bottom-0 left-3/4">
                <div className={`${style.firework}`}></div>
                <div className={`${style.firework}`}></div>
                <div className={`${style.firework}`}></div>
              </section>
            )}
          </section>
        </section>
    </>
  );
}


