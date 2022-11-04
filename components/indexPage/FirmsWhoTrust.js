import React from "react";

import Image from "next/legacy/image";
import { BsArrowRight } from "react-icons/bs";

export default function FirmsWhoTrust() {
  return (
    <section>
      <h5 className="text-4xl font-semibold text-center text-white">
        Фирми, които ни се довериха
      </h5>
      <section className="container">
        <section className="relative flex mt-10 ">
          <div className="relative w-full h-96">
            <Image
              src="/firms/softoffice.png"
              alt="Софт офис е компания, създадена през 2008,  занимаваща се със стоки и услуги,  и по-конкретно с материали и консумативи."
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="w-full rounded-[11rem] -ml-96 -mt-8 bg-primaryBlue-650 h-[26rem]">
            <div className="grid grid-cols-[40%60%] h-full">
              <div></div>
              <div className="flex flex-col justify-center">
                <h5 className="text-2xl font-bold text-primaryBlue-100">
                  SoftOffice
                </h5>
                <p className="max-w-md mt-1 text-white">
                  Софт офис е компания, създадена през 2008, занимаваща се със
                  стоки и услуги, и по-конкретно с материали и консумативи.
                </p>
                <div className="z-10 inline-flex items-center mt-4 text-primaryBlue-100 grow-0">
                  <div className="peer">
                    <button className="z-10 font-bold cursor-pointer">
                      Виж сайта
                    </button>
                  </div>
                  <div className="pl-1 my-auto transition-all opacity-0 peer-hover:opacity-100 peer-hover:translate-x-2 ">
                    <BsArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative flex mx-auto mt-10 ">
          <div className="w-full rounded-[11rem] ml-28 -mt-8 bg-primaryBlue-650 h-[26rem]">
            <div className="grid grid-cols-[10%90%] h-full">
              <div></div>
              <div className="flex flex-col justify-center">
                <h5 className="text-2xl font-bold text-primaryBlue-100">
                  IvdaGeo
                </h5>
                <p className="max-w-sm mt-1 text-white">
                  Строителен супермаркет Ивда Гео e фирма с дългогодишен опит в
                  сферата на търговията със строителни материали, инструменти,
                  крепежни елементи и други.
                </p>
                <div className="z-10 inline-flex items-center mt-4 text-primaryBlue-100 grow-0">
                  <div className="peer">
                    <button className="z-10 font-bold cursor-pointer">
                      Виж сайта
                    </button>
                  </div>
                  <div className="pl-1 my-auto transition-all opacity-0 peer-hover:opacity-100 peer-hover:translate-x-2 ">
                    <BsArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full h-96 -ml-44">
            <Image
              src="/firms/ivdageo.png"
              alt="Софт офис е компания, създадена през 2008,  занимаваща се със стоки и услуги,  и по-конкретно с материали и консумативи."
              layout="fill"
              objectFit="contain"
            />
          </div>
        </section>
      </section>
    </section>
  );
}
