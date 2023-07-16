import React from "react";
import Check from "../components/Animated/Check"

const  Steps = ({ currStep, setCurrStep }) => {
  return (
    <section className="flex items-center justify-center max-xl:grid max-xl:grid-cols-2 max-xl:gap-4 max-lg:mt-4 max-lg:px-4">
      {/* First quadrant */}
      <div className="w-full max-xl:border  border-y border-l border-[#d8d4dc] h-full max-xl:py-3 xl:h-20 relative max-xl:text-sm flex max-xl:justify-center items-center max-xl:rounded-md rounded-l-md xl:pl-4">
        {currStep == "1" && <CurrentStep num="01" text="Малък бизнес" />}
        {currStep != "1" && <FinishedStep num={1} text="Малък бизнес" setCurrStep={setCurrStep} />}
      </div>
      {/* Second quadrants */}
      <div className="w-full max-xl:border border-y  border-[#d8d4dc] h-full max-xl:py-3 xl:h-20 relative max-xl:text-sm xl:pl-4 flex max-xl:justify-center  items-center max-xl:rounded-md">
        {currStep == "2" && <CurrentStep num="02" text="Услуги" />}

        {currStep != "2" && currStep < 2 && (
          <NextStep num="02" text="Услуги" />
        )}
        {currStep != "2" && currStep > 2 && (
          <FinishedStep num={2} text="Услуги" setCurrStep={setCurrStep} />
        )}
      </div>
      {/* Third quadrant */}
      <div className="w-full max-xl:border border-y border-r  border-[#d8d4dc] h-full max-xl:py-3  xl:h-20 relative max-xl:text-sm rounded-r-md max-xl:justify-center  max-xl:rounded-md flex items-center xl:pl-4">
        <NextStep num="03" text="Данни за контакт" isLast={true} />
      </div>
    </section>
  );
};

export default Steps;

const CurrentStep = ({ text, num, isLast = false }) => {
  return (
    <section className="flex items-center max-xl:flex-col max-xl:text-center ">
      <div className="relative w-8 h-8 border-2 rounded-full max-xl:absolute max-xl:-top-4 max-xl:-left-4 max-xl:text-sm xl:w-12 xl:h-12 border-blue-50 flex-center max-xl:bg-blue-50 max-xl:text-white xl:text-blue-50 ">
        <div className="">{num}</div>
      </div>
      <div className="xl:ml-3 max-xl:mt-2 text-blue-50">{text}</div>
      {!isLast && (
        <div className="block width-[1.25rem] h-full absolute top-0 right-0 max-xl:hidden">
          <svg
            className={`opacity-1 text-[#d1d5db] w-full h-full`}
            viewBox="0 0 22 80"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M0 -2L20 40L0 82"
              vector-effect="non-scaling-stroke"
              stroke="currentcolor"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
      )}
    </section>
  );
};
const NextStep = ({ text, num, isLast = false }) => {
  return (
    <section className="flex items-center max-xl:flex-col max-xl:text-center">
      <div className="relative max-xl:text-sm border-2 max-xl:absolute max-xl:-top-4 max-xl:-left-4  rounded-full border-[#d8d4dc] flex-center xl:h-12 xl:w-12 h-8 w-8 max-xl:bg-[#6b7280] text-[#6b7280]  max-xl:text-white">
        <div className="">{num}</div>
      </div>
      <div className="xl:ml-3 max-xl:mt-2 text-[#6b7280]">{text}</div>
      {!isLast && (
        <div className="block width-[1.25rem] h-full absolute top-0 right-0 max-xl:hidden">
          <svg
            className={`opacity-1 text-[#d1d5db] w-full h-full`}
            viewBox="0 0 22 80"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M0 -2L20 40L0 82"
              vector-effect="non-scaling-stroke"
              stroke="currentcolor"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
      )}
    </section>
  );
};

const FinishedStep = ({ text, num, isLast = false, setCurrStep}) => {
  return (
    <section className="flex items-center cursor-pointer max-xl:flex-col max-xl:text-center" onClick={()=> setCurrStep(num)}>
      <div className="relative w-8 h-8 text-white border-2 rounded-full max-xl:absolute max-xl:-top-4 max-xl:-left-4 max-xl:text-sm xl:w-12 xl:h-12 flex-center ">
        <Check/>
      </div>
      <div className="xl:ml-3 max-xl:mt-2 text-blue-50">{text}</div>

      {!isLast && (
        <div className="block width-[1.25rem] h-full absolute top-0 right-0 max-xl:hidden">
          <svg
            className={`opacity-1 text-[#d1d5db] w-full h-full`}
            viewBox="0 0 22 80"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M0 -2L20 40L0 82"
              vector-effect="non-scaling-stroke"
              stroke="currentcolor"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
      )}
    </section>
  );
};

// Furutre reference on check
{/* <motion.svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
aria-hidden="true"
className="w-[1.5rem] h-[1.5rem]"
>
<path
  fill-rule="evenodd"
  d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
  clip-rule="evenodd"
></path>
</motion.svg> */}