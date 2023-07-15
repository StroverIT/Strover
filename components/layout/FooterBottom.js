"use client";
import Link from "next/link";
import React, { useState } from "react";

// Icons
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineCopyright } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { RiGlobalLine } from "react-icons/ri";
import GlowBtn from "../Buttons/GlowBtn";
import GoogleInputs from "../Inputs/GoogleInputs";

const FooterBottom = () => {
  const [isLoading, setLoading] = useState(false);

  const t = (text) => {
    return text;
  };
  return (
    <footer className={`lg:pt-16 z-10 w-full `}>
      <div className={` pb-10`}>
        <div className="flex flex-col-reverse xl:grid xl:grid-cols-[25%75%]  container gap-x-28">
          <form>
            <h3 className="mt-5 mb-3 font-semibold text-black uppercase">
              {t("Абонирай се за нашите оферти")}
            </h3>
            <GoogleInputs placeholder="Е-майл" name="email"/>
            <GlowBtn text="Абонирай ме!" className="w-full mt-2" isLoading={isLoading}/>
          </form>

          <div className="grid-cols-[40%30%40%] justify-center xl:grid ">
            {/* <section>
                <h3 className="mt-5 text-lg font-semibold text-black">{t("Брандове")}</h3>
                <ul className={`list-disc   leading-8 ml-4`}>
                  <li className="cursor-default">
                    <Link href="/brands/web" scroll={false}>
                      <span className="pb-1 border-b cursor-pointer border-border">
                        Web
                      </span>
                    </Link>
                  </li>
                  <li className="cursor-default">
                    <Link href="/brands/digital" scroll={false}>
                      <span className="pb-1 border-b cursor-pointer border-border">
                        Digital
                      </span>
                    </Link>
                  </li>
                  {/* <li className="cursor-default">
                    <span className="pb-1 border-b cursor-pointer border-border">
                      Transport
                    </span>
                  </li> */}
            {/* <li className="cursor-default">
                    <Link href="/brands/academy" scroll={false}>
                      <span className="pb-1 border-b cursor-pointer border-border">
                        Academy
                      </span>
                    </Link>
                  </li>
                </ul> */}
            {/* </section>  */}
            <section className="mt-5 text-black ">
              <h3 className="font-semibold uppercase ">
                {t("Социални мрежи")}
              </h3>
              <div className="flex mt-2 gap-x-5">
                <a
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
                </a>
                <a
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
                </a>
              </div>
            </section>
            <section>
              <h3 className="mt-5 text-lg font-semibold text-black">
                {t("Услуги")}
              </h3>
              <ul className={`list-disc pb-1 leading-8 ml-4`}>
                <li className="cursor-default">
                  <Link href="/service/ecommerce" scroll={false}>
                    <span className="pb-1 border-b cursor-pointer border-border">
                     Изработка на онлайн магазин
                    </span>
                  </Link>
                </li>
                <li className="cursor-default">
                  <Link href="/service/website" scroll={false}>
                    <span className="pb-1 border-b cursor-pointer border-border">
                     Изработка на уебсайт
                    </span>
                  </Link>
                </li>
                <li className="cursor-default">
                  <Link href="/service/maintance" scroll={false}>
                    <span className="pb-1 border-b cursor-pointer border-border">
                      Поддръжка на уебсайт
                    </span>
                  </Link>
                </li>
                <li className="cursor-default">
                  <Link href="/service/optimization" scroll={false}>
                    <span className="pb-1 border-b cursor-pointer border-border">
                      Оптимизация на уебсайт
                    </span>
                  </Link>
                </li>
             
              </ul>
            </section>
            <section className="text-black">
              <div>
                <h3 className="mt-5 text-lg font-semibold text-left">
                  {t("Контакти")}
                </h3>
                <div className="ml-1 border-l border-border">
                  <ul className="pl-4 leading-8">
                    <li className="">
                      <a href="tel:0876237725">
                        <section className="flex items-center">
                          <FiPhoneCall />
                          <span className="pl-1">+359 87 623 7725</span>
                        </section>
                      </a>
                    </li>

                    <li className="">
                      <a href="mailto:stroverbg@gmail.com">
                        <section className="flex items-center">
                          <HiOutlineMail />
                          <span className="pl-1">stroverbg@gmail.com</span>
                        </section>
                      </a>
                    </li>
                    <li className="flex items-center">
                      <RiGlobalLine /> <span className="pl-1">strover.bg</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <section
        className={`flex-center py-5 text-black flex-wrap max-sm:flex-col`}
      >
        <div className="flex-center ">
          <AiOutlineCopyright />
          2022 Strover
        </div>
        <div className="sm:pl-1">{t("Всички права запазени.")}</div>
      </section>
    </footer>
  );
};

export default FooterBottom;
