import Image from "next/legacy/image";
import React from "react";
import HeaderSpider from "../../HeaderSpider";

export default function InfoContainer({ title, p, image, border, isNext }) {
  return (
    <section
      className={` ${
        border ? "lg:border-y" : "lg:border-t"
      } border-primaryBlue-300`}
    >
      <section className=" grid lg:grid-cols-2 w-full h-full">
        <div
          className={` w-full h-full py-10 ${
            isNext ? "lg:bg-primaryBlue-850" : "lg:bg-primaryBlue-300"
          }`}
        >
          <div className="flex items-center justify-end pr-28  ">
            <div className="relative  w-20 h-20 lg:h-60 lg:w-60">
              <Image
                src={`/icons/${image}`}
                alt="growth for you and your company"
                layout="fill"
              />
            </div>
          </div>
        </div>
        <div className="flex-center flex-col ">
          <section className="flex-center ">
            <div className="">
              <HeaderSpider title={title} size="text-2xl" />
            </div>
          </section>
          <h3 className="text-center text-4xl font-medium"></h3>
          <p className="mt-4 lg:px-56 max-lg:container">{p}</p>
        </div>
      </section>
    </section>
  );
}
