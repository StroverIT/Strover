"use client";
import React, { useEffect, useRef, useState } from "react";

import { useGlolContext } from "../../app/Context/text";
import PageWrapper from "../Animated/PageWrapper";
import Steps from "../Steps";
import GlowBtn from "../Buttons/GlowBtn";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import { HiX } from "react-icons/hi";

const inputsInit = {
  businessSphere: "",
  isImages: false,
  isFullDescription: false,

  customProducts: false,
  uniqueDesign: false,
  domain: false,
  seo: false,
  chat: false,
  onlinePayment: false,
  promoCodes: false,
  specialPromo: false,
  facebookShop: false,

  analyze: false,
  twelveHours: false,
  speed: false,
  urgent: false,

  blog: false,
  gallery: false,
  calendar: false,
  reservation: false,
  
  fullName: "",
  email: "",
  phoneNumber: "",
};
const Home = () => {
  const { isOpen, setOpen, data } = useGlolContext();
  const container = useRef(null)

  const [currStep, setCurrStep] = useState(1);
  const [currMoney, setCurrMoney] = useState(0);
  const [currProducts, setCurrentProducts] = useState(0);
  const [productsMoney, setProductsMoney] = useState(0);


  const [maintanceType, setMaintanceType] = useState(data.typeService == "ecommerce" || data.typeService == "maintance" ? "ecommerce" : "website" )
  
  const [inputs, setInputs] = useState(null);
  const valueChanger = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const valueCheckerChanger = (e, price) => {
    price = e.target.checked ? Math.abs(price) : -Math.abs(price);
    if (price) {
      setCurrMoney((x) => x + Number.parseFloat(price.toFixed(2)));
    }
    if (e.target.name == "customProducts") {
      if (!e.target.checked) {
        const pagesOrProducts = maintanceType == "website" ? data.planData.pages : data.planData.products
        setCurrentProducts(pagesOrProducts)
      };
    }
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.checked,
    }));
  };

  useEffect(() => {
    const planData = data.planData,
      includes = planData.includesWithPrevPlan
      

    setCurrMoney(planData.newPrice);
    setCurrentProducts(planData.products);
    setInputs({
      ...inputsInit,
      uniqueDesign: includes?.some((e) => e === "Уникален дизайн"),
      domain: includes?.some((e) => e === "Домейн"),
      facebookShop: includes?.some((e) => e === "Facebook магазин"),
      onlinePayment: includes?.some((e) => e === "Плащане онлайн"),

        analyze: includes?.some((e) => e === "Периодичен анализ и препоръки за подобрение"),
        twelveHours: includes?.some((e) => e === "До 12 часа време за реакция при заявка в работни дни"),
        speed: includes?.some((e) => e === "Оптимизация на скоростта на сайта"),
        urgent: includes?.some((e) => e === "Разрешаване на спешни проблеми"),


      typeService: data.typeService,
      typePlan: data.typePlan,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.planData]);

  useEffect(() => {
    let count, price

    if(maintanceType == "website"){
        if(data.typeService == "website"){
            price = 10
        }
        if(data.typeService == "maintance"){
            price = 3.2
        }
      count = data.planData.pages
    }
    if(maintanceType == "ecommerce"){
        if(data.typeService == "ecommerce" ){
            price = 0.80

        }
        if(data.typeService == "maintance"){
            price = 1
        }
      count = data.planData.products
    }
    maintanceType == "website" ? data.planData.pages : data.planData.products
    setProductsMoney(currProducts * price - count * price);
    
  }, [currProducts]);

  useEffect(()=>{
    let count = maintanceType == "website" ? data.planData.pages : data.planData.products
    setCurrentProducts(count);
  },[maintanceType])
  useEffect(()=>{
    container?.current?.scrollTo({top:0})
  },[currStep])

  return (
    isOpen && inputs && (
      <div className="fixed top-0 left-0 w-screen h-screen z-[60] " key={data?.typePlan}>
        <div class="relative w-full h-full">
          <div className="absolute top-0 left-0 z-10 w-full h-full bg-black opacity-20 blur-3xl"></div>
          <PageWrapper className="h-full lg:flex-center">
            <section className="lg:container relative z-20 overflow-y-auto overflow-x-hidden bg-white h-screen lg:h-[600px]" ref={container}>
            <div
                className="sticky top-0 right-0 z-20 text-3xl cursor-pointer text-red"
                onClick={() => setOpen(false)}
              >
                <div class="absolute top-0 right-0">
                  <HiX />
                </div>
              </div>
              <div>
                {/* Steps display */}
                <Steps currStep={currStep} setCurrStep={setCurrStep} />
                <div className="  border-b border-[#d8d4dc] py-3 sticky top-0 bg-white z-10">
                  <div class="container lg:pl-20 flex items-center  text-xl ">
                    <div className="font-semibold">Сегашна сума:</div>
                    <div className="pl-2">{(currMoney + productsMoney).toFixed(2)} лв.</div>
                  </div>
                </div>

                {currStep == "1" && (
                  <FirstStep
                    valueChanger={valueChanger}
                    inputs={inputs}
                    setCurrStep={setCurrStep}
                    valueCheckerChanger={valueCheckerChanger}
                    data={data?.planData}
                    maintanceType={maintanceType} setMaintanceType={setMaintanceType}
                  />
                )}
                {currStep == "2" && (
                  <SecondStep
                    valueChanger={valueChanger}
                    inputs={inputs}
                    setCurrStep={setCurrStep}
                    valueCheckerChanger={valueCheckerChanger}
                    currProducts={currProducts}
                    setCurrentProducts={setCurrentProducts}
                    services={data.planData.services}
                    maintanceType={maintanceType}
                  />
                )}

                {/* Types of steps */}

                {currStep == "3" && (
                  <ThirdStep
                    setInputs={setInputs}
                    inputs={inputs}
                    setCurrStep={setCurrStep}
                    currMoney={currMoney}
                    productsMoney={productsMoney}
                    valueChanger={valueChanger}
                    inputsInit={inputsInit}
                  />
                )}
                {/* Buttons */}
              </div>
             
            </section>
          </PageWrapper>
        </div>
      </div>
    )
  );
};

export default Home;
