import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <section className="grid grid-cols-2 container">
      <div className=" text-white flex  justify-center flex-col">
        <div className=" text-7xl font-bold">Strovers&apos;</div>
        <div className="text-primaryBlue-700 text-5xl font-bold">Brands</div>
        <p className="mt-5 max-w-sm">
          Ние ще развием бизнеса Ви в онлайн пространството в желаната за вас
          ниша.
        </p>
        <div className="mt-4">
          <button className="btn-bg-color py-3 px-8 text-lg rounded-lg font-semibold">
            Научи повече
          </button>
        </div>
      </div>
      {/* Outer polygon */}
      <div className=" w-full h-[400px] xl:h-[600px] 2xl:ml-28 relative">
        <Image
          src="/spider-cobweb-index.svg"
          alt="inner-polygon"
          layout="fill"
        />
        <div className="death-center w-16 h-16 ml-[15px] -mt-[10px]">
          <Image
            src="/logos/white-spider.svg"
            alt="white spider logo"
            layout="fill"
          />
        </div>
        {/* Web */}
        <div className="  absolute left-[280px] top-[50px] text-white  ">
          <div className="relative flex-col flex items-center justify-center gap-y-10">
            <div className="w-20 h-20 ">
              <Image
                src="/forms/Polygon 3.svg"
                alt="white spider logo"
                layout="fill"
              />
            </div>
            <div className="text-xl font-semibold absolute w-16 h-16">
              <Image src="/icons/coding.png" layout="fill" alt="acadamey hat" />
            </div>
            <div className="text-xl font-semibold absolute top-20 mt-2 ">
              Web
            </div>
          </div>
        </div>
        {/* Transport */}
        <div className="  absolute left-[500px] top-[200px] text-white  ">
          <div className="relative flex-col flex items-center justify-center gap-y-10">
            <div className="w-20 h-20 ">
              <Image
                src="/forms/Polygon 4.svg"
                alt="white spider logo"
                layout="fill"
              />
            </div>
            <div className="text-xl font-semibold absolute w-16 h-16">
              <Image
                src="/icons/delivery-truck.png"
                layout="fill"
                alt="acadamey hat"
              />
            </div>
            <div className="text-xl font-semibold absolute top-20 mt-2 ml-1">
              Transport
            </div>
          </div>
        </div>
        {/* Academy */}
        <div className="  absolute left-[400px] top-[400px] text-white  ">
          <div className="relative flex-col flex items-center justify-center gap-y-10">
            <div className="w-20 h-20 ">
              <Image
                src="/forms/Polygon 2.svg"
                alt="white spider logo"
                layout="fill"
              />
            </div>
            <div className="text-xl font-semibold absolute w-16 h-16 top-4">
              <Image
                src="/icons/mortarboard.png"
                layout="fill"
                alt="acadamey hat"
              />
            </div>
            <div className="text-xl font-semibold absolute top-20 mt-2 ml-1">
              Academy
            </div>
          </div>
        </div>
        {/* Digital */}
        <div className="  absolute left-[100px] top-[290px] text-white  ">
          <div className="relative flex-col flex items-center justify-center gap-y-10">
            <div className="w-20 h-20 ">
              <Image
                src="/forms/Polygon 1.svg"
                alt="white spider logo"
                layout="fill"
              />
            </div>
            <div className="text-xl font-semibold absolute w-16 h-16 top-2">
              <Image
                src="/icons/social-media.png"
                layout="fill"
                alt="acadamey hat"
              />
            </div>
            <div className="text-xl font-semibold absolute top-20 mt-2 ml-1">
              Digital
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
