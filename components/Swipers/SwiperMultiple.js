"use client"
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Autoplay } from "swiper";

import GoogleWidget from "../GoogleWidget";

export default function SwiperMultiple({data}) {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{ delay: 1000}}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {data.map(widgetData=>{

            return  <SwiperSlide key={widgetData.time}><GoogleWidget  data={widgetData}/> </SwiperSlide>
        })}
      </Swiper>
    </>
  );
}


