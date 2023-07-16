"use client";
import React from "react";
import GoogleInputs from "../Inputs/GoogleInputs";
import GlowBtn from "../Buttons/GlowBtn";
import { motion } from "framer-motion";
import Checkbox from "../Inputs/Checkbox";
import Container from "./Container";

const boxVariants = {
  initial: { x: "20vw", opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { staggerChildren: 0.4, ease: "easeInOut", duration: 1 },
  },
};
const SecondStep = ({
  inputs,
  setCurrStep,
  valueCheckerChanger,
  currProducts,
  setCurrentProducts,
  services,
  maintanceType
 
}) => {
  const productsHandler = (e) => {
    if(e.target.value <= 0 ) e.target.value = 1
    setCurrentProducts(Number.parseInt(e.target.value));
   
  };
  const specificProductHandler = (type) => {
    if(type == "minus"){
    
      setCurrentProducts(prevState => prevState - 1  <= 0 ? 1 : prevState - 1);
    }
    if(type == "plus"){
     
      setCurrentProducts(prevState => prevState + 1);
    }
  };
  return (
    <>
      <div className=" border-b border-[#d8d4dc]">
        <Container>
          <h2 className="text-2xl ">Информация</h2>
          <p className="mt-2">
            Изберете медота по който ще ви е най-удобно да комуникираме.
            <br />
            <span className="text-sm">
              * Не се тревожете от избора сега, в бъдеще ще имате възможността
              да промените избора си
            </span>
          </p>
          <motion.div
            className="grid mt-5 "
            variants={boxVariants}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={boxVariants}>
              <div className="mt-5">
               {maintanceType == "ecommerce" && <Checkbox name="customProducts" onChange={valueCheckerChanger} value={inputs.customProducts}>
                  <span className="text-lg cursor-pointer">
                    {inputs.typeService == "ecommerce" && "Желаете ли създадем определен брой продукти?"}
                      {inputs.typeService == "maintance" && "Имате ли определен брой продукти за поддръжка?"}
                  </span>
                </Checkbox>}
                {maintanceType == "website" && inputs.typeService != "ecommerce" && 
                 <Checkbox name="customProducts" onChange={valueCheckerChanger} value={inputs.customProducts}>
                 <span className="text-lg cursor-pointer">
                  Имате ли определен брой страници за поддръжка?
                 </span>
               </Checkbox>
                }
                {inputs.customProducts && (
                  <div className="flex items-center gap-x-5">
                    <div className="flex my-4 ml-2">
                    <button className="px-4 text-3xl text-white bg-red-100" onClick={() => specificProductHandler("minus")}>
                        -
                      </button>
                      
                      <GoogleInputs
                        placeholder={maintanceType == "website" ? "Брой страници" : "Брой продукти"}
                        name="businessSphere"
                        onChange={productsHandler}
                        value={currProducts}
                      />
                     <button
                        className="px-4 text-3xl text-white bg-green"
                        onClick={() => specificProductHandler("plus")}
                      >
                        +
                      </button>
                    </div>
                    {/* <div className="text-lg font-semibold">Цена: </div> */}
                  </div>
                )}
              </div>
             
             {services.map((service,index)=>{
              return  <div className="mt-1" key={index}>
              <Checkbox name={service.name} onChange={(e)=>valueCheckerChanger(e, service.price)} value={inputs[service.name]}>
                <span className="text-lg">
                  {service.text}
                </span>
              </Checkbox>
            </div>
             })}
             
            </motion.div>
          </motion.div>
          <div class="grid lg:grid-cols-2 gap-x-5 gap-y-2">
            <GlowBtn
              theme="red"
              text="Предишна стъпка"
              className="w-full py-2 mt-4"
              onClick={() => setCurrStep(1)}
            />
            <GlowBtn
              theme="green"
              text="Следваща стъпка"
              className="w-full py-2 mt-4"
              onClick={() => setCurrStep(3)}
            />
          </div>
        </Container>
      </div>
    </>
  );
};

export default SecondStep;
