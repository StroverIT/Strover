"use client";
import React, { useEffect, useState } from "react";
import InitText from "../../InitText";
import Steps from "../../Steps";
import GlowBtn from "../../Buttons/GlowBtn";
import FirstStep from "../FirstStep";
import SecondStep from "../SecondStep";
import ThirdStep from "../ThirdStep";
import PageWrapper from "../../Animated/PageWrapper";

let text,step;



const Page = ({ params }) => {
  const { planId } = params;

  const [currStep, setCurrStep] = useState(1);
  const [inputs, setInputs] = useState({
    fullName: "",
    email: "",
    telephone: "",
    typeOfPayment: "",
    typeContact: "",
    typePlan: planId
  });
  const valueChanger = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  switch (planId) {
    case "smallBusiness": {
      text = "Малък Бизнес";
      break;
    }
    case "middleBusiness": {
      text = "Среден Бизнес";
      break;
    }
    case "corporate": {
      text = "Голям Бизнес";
      break;
    }
    default: {
      text = "Грешка при зареждане";
      break;
    }
  }
  useEffect(()=>{
    step = currStep
  },[currStep])
  return (
    <section>
      <InitText text={text} />
      <PageWrapper>
        <section className="container lg:px-20 xl:mt-28 max-xl:pb-14">
          <div>
            {/* Steps display */}
            <Steps currStep={currStep} setCurrStep={setCurrStep} />
            {currStep == "1" && (
              <FirstStep valueChanger={valueChanger} inputs={inputs} />
            )}
            {/* Types of steps */}
            {currStep == "2" && (
              <SecondStep
              setInputs={setInputs}
                setCurrStep={setCurrStep}
              />
            )}
            {currStep == "3" && <ThirdStep setInputs={setInputs} inputs={inputs} />}
            {/* Buttons */}
            <div className="flex justify-between mt-5 gap-x-4 xl:gap-x-28">
            
              {currStep > 1 && (
                <GlowBtn
                  text="Предишна стъпка"
                  theme="red"
                  className="w-full py-2 mt-4"
                  onClick={() => {
                    if (currStep == 2) setInputs(prevState=>({...prevState, typeContact: ""}))
                    setCurrStep(currStep - 1);
                  }}
                />
              )}
              {(currStep == 1 || (currStep == 2 && inputs.typeContact)) && (
                <GlowBtn
                  text="Следваща стъпка"
                  className="w-full py-2 mt-4"
                  onClick={() => {
                    if (currStep == 2) setInputs(prevState=>({...prevState, typeContact: ""}));
                    setCurrStep(currStep + 1);
                  }}
                />
              )}
        
            </div>
          </div>
        </section>
      </PageWrapper>
    </section>
  );
};

export default Page;
