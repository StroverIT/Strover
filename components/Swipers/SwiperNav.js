import React from "react";
// Icons
import { MdArrowForwardIos, MdOutlineArrowBackIosNew } from "react-icons/md";
import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
// Styles
import style from "../../styles/swiperJs/SwiperNav.module.css";
import Image from "next/image";

const SwiperNav = ({ size }) => {
  const animateArrow = (e) => {};
  return (
    <div className={`${style.swiperNav} z-10 ${size}  max-xl:hidden sm:inline`}>
      <div className={`${style.swiperPrev}  absolute z-10  `}>
        <div
          className="relative flex items-center justify-center cursor-pointer select-none text-primary"
          onMouseEnter={animateArrow}
        >
          <div className="relative flex rotate-180 w-14 h-14">
            {/* <div className="absolute left-4">
              <MdOutlineArrowBackIosNew />
            </div> */}
            <Image src="/icons/right-arrow.png" fill alt="right arrow" />
          </div>
        </div>
      </div>
      <div className={`${style.swiperNext}  absolute z-10  `}>
        <div
          className="relative flex items-center justify-center cursor-pointer select-none text-primary"
          onMouseEnter={animateArrow}
        >
          <div className="relative flex w-14 h-14">
            {/* <div className="absolute left-4">
              <MdArrowForwardIos />
            </div> */}
                        <Image src="/icons/right-arrow.png" fill alt="right arrow" />

          </div>
        </div>
      </div>
    </div>
  );
};

export default SwiperNav;
