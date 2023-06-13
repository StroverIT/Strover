"use client";

// Custom styles
import style from "../../styles/swiperJs/SwiperFreeMode.module.css";
import navStyle from "../../styles/swiperJs/SwiperNav.module.css";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

// Components
import SwiperNav from "./SwiperNav";
import MotionPerOneComps from "./MotionPerOneComps"

export default function SwiperPerOne({ data, navSize }) {
  
  return (
    <>
      <div className="flex flex-row items-stretch px-20">
        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 10000,  disableOnInteraction: false}}
          navigation={{
            nextEl: `.${navStyle.swiperNext}`,
            prevEl: `.${navStyle.swiperPrev}`,
            disabledClass: `${navStyle.swiperDisabled}`,
          }}
          pagination={{
            el: `.${style.pagination}`,
            clickable: true,
          }}
          modules={[Pagination, Navigation, Autoplay ]}
          className={`mySwiper relative  w-screen h-full`}
        >
          {data.map((imgData, index) => {
            return (
              <SwiperSlide
                className="overflow-hidden"
                key={imgData.imgUrl}
              >
                <MotionPerOneComps imgData={imgData}/>
              </SwiperSlide>
            );
          })}
          {/* Nav */}
          <SwiperNav size={navSize} />
          <div
            className={`${style.pagination}  relative z-50 flex justify-center gap-2 -mt-4 pt-10`}
          ></div>
        </Swiper>
      </div>
    </>
  );
}
