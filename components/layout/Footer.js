import React from "react";
import Image from "next/image";
import Container from "../pages/ContactUs/Container";
import FooterBottom from "./FooterBottom"

const Footer = () => {
  return (
    <>
      <footer className="bg-[#f1fbff] pt-56">
        <div class="container grid lg:grid-cols-[30%70%] gap-x-44 gap-y-10">
          {/* First text */}
          <div>
            <h4 className="text-[#00a1fe] font-bold text-4xl leading-9">
              <div>БЕЗПЛАТНА </div>
              <div>КОНСУЛТАЦИЯ</div>
            </h4>
            <p className="max-w-sm mt-4 ">
              Свържи се с нас, за да те консултираме по най-удобния за теб
              начин.
            </p>
            <div className="flex p-10 mt-8 bg-white rounded-3xl gap-x-5">
              <div className="flex-center">
                <div className="relative w-12 h-12 ">
                  <Image
                    src="/homeIcons/phone-message.png"
                    fill
                    alt="Безплатна консултация"
                  />
                </div>
              </div>
              <div className="leading-6 lg:text-2xl">
                <div>0876237725</div>
                <div className="text-[#00a1fe]">stroverbg@gmail.com</div>
              </div>
            </div>
          </div>

          <Container />
        </div>
      </footer>
      <SvgCompV2/>

     <FooterBottom/>
    </>
  );
};

export default Footer;

const SvgComponent = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 282">
    <path
      className="glasmorphism-bg-fill"
      // className="fill-gray-200"
      d="m0 32 60 26.7C120 85 240 139 360 144s240-37 360-26.7C840 128 960 192 1080 192s240-64 300-96l60-32v256H0Z"
    />
  </svg>
);
const SvgCompV2 = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-screen" {...props}>
        <path
      fill="#f1fbff"
      d="m0 74 30-4.5C60 65 120 56 180 59.2c60 3.1 120 18.5 180 22.8 60 4.3 120-2.3 180-8.2 60-5.8 120-10.8 180 2 60 12.9 120 43.5 180 59.5s120 17.4 180 6c60-11.3 120-35.3 180-36.6 60-1.4 120 20 180 20.5s120-19.9 180-31.5c60-11.7 120-14.7 180-18.9 60-4.1 120-9.5 150-12.1l30-2.7V0H0Z"
    />
    </svg>
  );
};
