import React from "react";

import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

import TextAnimation from "../../libs/TextAnimation";
import FadeFromBottom from "../layouts/animations/onView/FadeFromBottom";
import HeaderSpider from "../HeaderSpider";

export default function FirmsWhoTrust() {
  return (
    <section className="mt-32 mb-20">
      <div className="font-semibold text-white flex-center md:text-4xl ">
        <HeaderSpider
          title="Част от проектите ни"
          size="text-2xl  md:text-4xl"
        />
      </div>
      <section className="flex flex-col mt-20 md:mt-32 xl:container xl:gap-y-20">
        <FirmsContainer
          imageUrl="/firms/softoffice.png"
          title="SoftOffice"
          description={` Компанията Софт офис е създадена през 2008 година и се занимава с продажба на стоки и услуги, като материали и консумативи`}
          siteLink="https://softoffice.bg"
        />{" "}
        <FirmsContainer
          imageUrl="/firms/ivdageo.png"
          title="Ivda Geo"
          description={`Фирмата Ивда Гео, строителен супермаркет, има дългогодишен опит в областта на търговията със строителни материали, инструменти, крепежни елементи и други продукти.`}
          siteLink="https://ivdageopaint.bg"
          isReverse={true}
        />
      </section>
    </section>
  );
}

const FirmsContainer = ({
  imageUrl,
  title,
  description,
  siteLink,
  isReverse,
}) => {
  return (
    <section
      className={`relative flex mt-10 rounded-full max-sm:flex-col max-md:container ${
        !isReverse && "max-sm:flex-col-reverse"
      } smToXl:bg-primaryBlue-650 `}
    >
      {!isReverse && (
        <div className="relative w-full max-sm:-mt-20 h-96 ">
          <Image
            src={imageUrl}
            alt={description}
            fill
            className="object-contain"
          />
        </div>
      )}
      <div
        className={`w-full rounded-[3rem] sm:rounded-[11rem] ${
          isReverse ? "xl:ml-28" : "xl:-ml-96"
        } -mt-8 max-sm:bg-primaryBlue-650 xl:bg-primaryBlue-650 h-[19rem] max-sm:pb-10 sm:h-[26rem]`}
      >
        <div
          className={`sm:grid sm:grid-cols-[0%90%] ${
            isReverse ? "xl:grid-cols-[12%90%]" : "xl:grid-cols-[40%60%]"
          } h-full flex-center`}
        >
          <div></div>
          <div className="flex flex-col justify-center max-sm:text-center max-sm:container">
            <div className="text-2xl font-bold text-primaryBlue-100">
              <TextAnimation
                placeholderText={[
                  {
                    type: "heading2",
                    text: title,
                  },
                ]}
              />
            </div>
            <FadeFromBottom duration={0.5}>
              <p className="max-w-sm mt-1 text-white max-sm:text-justify hypens-auto max-sm:container">
                {description}
              </p>
            </FadeFromBottom>
            <FadeFromBottom delay={0.1} duration={0.5}>
              <div className="z-10 inline-flex mt-4 zeroToXl:justify-center xl:items-center text-primaryBlue-100 grow-0">
                <div className="peer">
                  <button className="z-10 font-bold cursor-pointer">
                    <a
                      href={siteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Виж сайта
                    </a>
                  </button>
                </div>
                <div className="pl-1 my-auto transition-all opacity-0 peer-hover:opacity-100 peer-hover:translate-x-2 ">
                  <BsArrowRight />
                </div>
              </div>
            </FadeFromBottom>
          </div>
        </div>
      </div>
      {isReverse && (
        <div className="relative w-full h-96 xl:-ml-44 max-sm:-mt-20 ">
          <Image
            src={imageUrl}
            alt={description}
            fill
            className="object-contain"
          />
        </div>
      )}
    </section>
  );
};
