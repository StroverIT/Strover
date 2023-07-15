import React from "react";
import WhiteSpiderLogoMain from "../../components/logos/WhiteSpiderLogoMain";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import {IoArrowUndo} from "react-icons/io5"

import Link from "next/link";
import PageWrapper from "../../components/Animated/PageWrapper";


export const metadata = {
  title: "Експертни услуги за разработка на уебсайтове за вашия бизнес",
  description: "Търсите да създадете професионален уебсайт за вашия бизнес? Нашите услуги за разработка на уебсайтове предлагат уникален дизайн и функционалност, за да помогнат на вашия бизнес да се открои онлайн. Свържете се с нас днес за безплатна консултация",
};


const Page = () => {
  return (
      <main className="relative grid w-screen h-screen xl:grid-cols-2 ">
        {/* className="relative z-10 min-h-screen   break-words  min-w-screen bg-[#f6f9fc] flex justify-center flex-col pb-10" */}
        <section className="flex-col text-white bg-primary-400 flex-center">
          <WhiteSpiderLogoMain className="w-64" />
          <h1 className="text-6xl uppercase">Web</h1>
          <div className="mt-2 text-lg">
              <h2>Създаване и поддръжка на:
              </h2>
              <ul className="ml-5 list-disc">
                  <li>Онлайн магазини</li>
                  <li>Бизнес портфолиа</li>
                  <li>Лично портфолио</li>
              </ul>
      
          </div>
        </section>
        <section className="bg-[#fc4c50] flex-center text-white flex-col">
          <WhiteSpiderLogoMain className="w-64" />
          <h1 className="text-6xl uppercase">Digital</h1>
          <div className="mt-2 text-lg">
      
              <h2>Създаване и поддръжка на:
              </h2>
              <ul className="ml-5 list-disc">
                  <li>Facebook страници</li>
                  <li>Instagram страници</li>
                  <li>Google Ads кампании</li>
              </ul>
              </div>
        </section>
        <div className="fixed top-0 left-0 w-screen h-screen">
          <div className="absolute z-10 w-screen h-screen bg-black opacity-80 xl:opacity-50">
          </div>
          <div className="container">
            <div className="relative z-20 flex-col h-screen text-white flex-center">
            <Link href="/"><div className="flex-center"><span className="mr-1 text-xl"><IoArrowUndo/></span><span className="text-lg">Към начало</span></div></Link>
                <div className="">
                    <h3 className="text-3xl xl:text-5xl">Очаквайте Скоро!</h3>
                </div>
                <PageWrapper>
            <section className="w-full max-w-xl mt-4">
                {/* <h3 className="mt-5 mb-2 uppercase ">
                  Абонирай се за нашите новини
                </h3>
      
                <div className="grid grid-cols-[70%30%]">
                <input
                  type="text"
                  className="w-full px-2 py-5 text-sm text-black border-none rounded-sm h-7 placeholder:text-black"
                  placeholder="Email"
                />
                  <button
                    className={`bg-blue-50 w-full py-2 rounded-sm flex-center`}
                  >
                    Абонирай ме!
                  </button>
                </div> */}
                <h3 className="text-center uppercase ">
                  Социални мрежи
                </h3>
                <div className="mt-2 flex-center gap-x-5">
                  <Link
                    aria-label="Strover Facebook"
                    href="https://www.facebook.com/profile.php?id=100085497228053"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="transition-transform cursor-pointer flex-center hover:scale-125 hover:text-primaryBlue-450">
                      <div className="text-2xl">
                        <BsFacebook />
                      </div>
                      {/* <div className="pl-2">Facebook</div> */}
                    </div>
                  </Link>
                  <Link
                    aria-label="Strover Instagram"
                    href="https://www.instagram.com/stroverbg/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="transition-all cursor-pointer flex-center hover:scale-125 hover:text-primaryBlue-450">
                      <div className="text-2xl">
                        <BsInstagram />
                      </div>
                      {/* <div className="pl-2">Instagram</div> */}
                    </div>
                  </Link>
                </div>
              </section>
    </PageWrapper>
      
            </div>
          </div>
      
        </div>
      </main>
  );
};

export default Page;
