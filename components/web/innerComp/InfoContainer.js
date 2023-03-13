import Image from "next/image";
import React from "react";
import HeaderSpider from "../../HeaderSpider";
export default function InfoContainer({
  title,
  t1,
  p1,
  image,
  border,
  isNext,
  children,
  trans,
}) {
  return (
    <section
      className={` ${
        border ? "lg:border-y" : "lg:border-t"
      } border-primaryBlue-300`}
    >
      <section className="grid w-full h-full lg:grid-cols-2">
        <div className="flex-col pt-5 pb-10 shadow-xl lg:py-10 flex-center max-lg:order-1">
          <section className=" flex-center">
            <div className="">
              <HeaderSpider title={title} size="text-2xl" trans={trans} />
            </div>
          </section>
          <section className="max-w-xl px-10 pt-2">{children}</section>
        </div>
        <div
          className={` w-full h-full   max-lg:justify-center flex items-center ${
            isNext ? "bg-primaryBlue-850" : "bg-primaryBlue-300"
          }`}
        >
          <div className="py-5 lg:pl-28">
            <div className="relative w-20 h-20 lg:h-60 lg:w-60">
              <Image
                src={`/webIcons/pricing/${image}`}
                alt="growth for you and your company"
                fill
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
