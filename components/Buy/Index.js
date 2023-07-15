"use client";
import React, { useEffect, useState } from "react";

import { useGlolContext } from "../../app/Context/text";
import PageWrapper from "../Animated/PageWrapper";
import Steps from "../Steps";
import GlowBtn from "../Buttons/GlowBtn";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import { HiX } from "react-icons/hi";
const Index = () => {
    const { isOpen, setOpen, data } = useGlolContext();


  const [currStep, setCurrStep] = useState(1);
  const [currMoney, setCurrMoney] = useState(0);
  const [inputs, setInputs] = useState({
    typeWebsite: data.typeService,
    typePlan: data.typePlan,

    businessSphere: "",
    isImages: false,
    isFullDescription: false,

    customProducts: false,
    currentProducts: 50, //Must be getting from the plan
    uniqueDesign: false,
    domain: false,
    seo: false,
    chat: false,
    onlinePayment: false,
    promoCodes: false,
    specialPromo: false,
    facebookShop: false,
  });
  const valueChanger = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const valueCheckerChanger = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.checked,
    }));
  };
  const setIsOpen = () => {
    setOpen(!isOpen);
  };
  useEffect(()=>{
    const planData = data.planData
    console.log(data);
setCurrMoney(planData.newPrice)
  },[data?.planData])
  return (
    isOpen && (
      <div className="fixed top-0 left-0 w-screen h-screen z-[99999] ">
        <div class="relative w-full h-full">
          <div className="absolute top-0 left-0 z-10 w-full h-full bg-black opacity-20 blur-3xl"></div>
          <PageWrapper className="h-full flex-center">
            <section className="container relative z-20 bg-white ">
              <div>
                {/* Steps display */}
                <Steps currStep={currStep} setCurrStep={setCurrStep} />
                <div className="  border-b border-[#d8d4dc] py-3">
                  <div class="container pl-20 flex items-center  text-xl">
                    <div className="font-semibold">Сегашна сума:</div>
                    <div className="pl-2">{currMoney} лв.</div>
                  </div>
                </div>
                {currStep == "1" && (
                  <FirstStep
                    valueChanger={valueChanger}
                    inputs={inputs}
                    setCurrStep={setCurrStep}
                    valueCheckerChanger={valueCheckerChanger}
                  />
                )}
                {currStep == "2" && (
                  <SecondStep
                    valueChanger={valueChanger}
                    inputs={inputs}
                    setCurrStep={setCurrStep}
                    valueCheckerChanger={valueCheckerChanger}
                  />
                )}

                {/* Types of steps */}

                {currStep == "3" && (
                  <ThirdStep
                    setInputs={setInputs}
                    inputs={inputs}
                   
                    setCurrStep={setCurrStep}
                  />
                )}
                {/* Buttons */}
              </div>
              <div className="absolute top-0 right-0 text-3xl cursor-pointer text-red" onClick={()=> setOpen(false)}>
            <HiX/>
            </div>
            </section>
          
          </PageWrapper>
         
        </div>
      </div>
    )
  );
};

export default Index;
