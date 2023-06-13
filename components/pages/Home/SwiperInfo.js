import React from 'react';
import SwiperPerOne from "../../Swipers/SwiperPerOne";
import SwiperHomeData from "../../../data/SwiperHomeData";
const SwiperInfo = () => {
    return (
        <section className="relative z-10 min-h-screen  ml-24 break-words  min-w-screen bg-[#f6f9fc] flex justify-center flex-col pb-10" id="swiperInfo">
        <div className="pt-10 text-center">
          <h2 className="text-5xl font-medium">
            Нова ера в електронната търговия
          </h2>
          <p className="mt-3 text-xl">
            Всичко нужно да продаваш онлайн на едно място
          </p>
        </div>

        <div className="mt-10">
          <SwiperPerOne data={SwiperHomeData} navSize="text-3xl" />
        </div>
      </section>
    );
}

export default SwiperInfo;
