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
      <section className="grid w-full h-full lg:grid-cols-2">
        <div
          className={` w-full h-full py-4 lg:py-10 ${
            isNext ? "bg-primaryBlue-850" : "bg-primaryBlue-300"
          }`}
        >
          <div className="flex items-center justify-center lg:justify-end lg:pr-28 ">
            <div className="relative w-20 h-20 lg:h-60 lg:w-60">
              <Image
                src={`/icons/${image}`}
                alt="growth for you and your company"
                layout="fill"
              />
            </div>
          </div>
        </div>
        <div className="flex-col pt-5 pb-10 max-lg:container flex-center">
          <section className="container flex-center ">
            <HeaderSpider title={title} size="text-2xl" />
          </section>
          <h3 className="text-4xl font-medium text-center"></h3>
          <p className="mt-4 lg:px-56 max-lg:container">{p}</p>
        </div>
      </section>
    </section>
  );
}
