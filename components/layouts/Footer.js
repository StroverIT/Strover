import React, { useEffect, useState } from "react";

// Icons
import { BsFacebook, BsInstagram, BsTelephone } from "react-icons/bs";
import { AiOutlineCopyright, AiOutlineMail } from "react-icons/ai";
import { RiGlobalLine } from "react-icons/ri";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();
  const [input, setInputs] = useState("");
  const [colors, setColors] = useState({
    bgColor: "",
    button: "",
    markers: "",
    copyRight: "",
  });
  const handler = (e) => {
    setInputs(e.target.value);
  };
  useEffect(() => {
    console.log(router);
    if (router.pathname == "/") {
      setColors({
        bgColor: "bg-primaryBlue-650",
        button: "bg-primaryBlue-400",
        markers: "marker:text-primaryBlue-550",
        copyRight: "bg-primaryBlue-850",
      });
    } else if (router.pathname == "/digital") {
      setColors({
        bgColor: "bg-pink-100",
        button: "bg-pink-150",
        markers: "marker:text-pink-200",
        copyRight: "bg-pink-250",
      });
    }
  }, [router]);
  return (
    <footer className="w-full z-50">
      <section className={`${colors.bgColor}`}>
        <section className="grid grid-cols-[30%70%]  container text-white gap-x-16">
          <section>
            <h5 className="uppercase font-semibold mt-5 mb-8  ">
              Абонирай се за нашите оферти
            </h5>
            <input
              type="text"
              className="w-full h-7 text-black placeholder:text-dark p-2 border-none "
              placeholder="Вашият и-мейл"
              value={input}
              onChange={handler}
            />
            <div className="flex-center mt-2">
              <button className={`${colors.button} w-full py-1`}>
                Абонирай ме
              </button>
            </div>
            <h5 className="uppercase font-semibold mt-10">Социални мрежи</h5>
            <div className="flex gap-x-5 ">
              <div className="flex-center">
                <div>
                  <BsFacebook />
                </div>
                <div className="pl-1">Facebook</div>
              </div>
              <div className="flex-center">
                <div>
                  <BsInstagram />
                </div>
                <div className="pl-1">Instagram</div>
              </div>
            </div>
          </section>
          <section className="grid grid-cols-3 ">
            <section>
              <h5 className="mt-5 font-semibold text-lg">Брандове</h5>
              <ul className={`list-disc  ${colors.markers} leading-8 ml-4`}>
                <li className="cursor-default">
                  <span className="border-b border-border pb-1 cursor-pointer">
                    Web
                  </span>
                </li>
                <li className="cursor-default">
                  <span className="border-b border-border pb-1 cursor-pointer">
                    Digital
                  </span>
                </li>
                <li className="cursor-default">
                  <span className="border-b border-border pb-1 cursor-pointer">
                    Transport
                  </span>
                </li>
                <li className="cursor-default">
                  <span className="border-b border-border pb-1 cursor-pointer">
                    Academy
                  </span>
                </li>
              </ul>
            </section>
            <section>
              <h5 className="mt-5 font-semibold text-lg">За STROVER</h5>
              <ul className={`list-disc ${colors.markers} pb-1 leading-8 ml-4`}>
                <li className="cursor-default">
                  <span className="border-b border-border pb-1 cursor-pointer">
                    Екипа ни
                  </span>
                </li>
                <li className="cursor-default">
                  <span className="border-b border-border pb-1 cursor-pointer">
                    Оферти
                  </span>
                </li>
                <li className="cursor-default">
                  <span className="border-b border-border pb-1 cursor-pointer">
                    Условия за ползване
                  </span>
                </li>
                {/* <li>Защита на лични данни</li> */}
              </ul>
            </section>
            <section>
              <h5 className="mt-5 font-semibold text-lg">Контакти</h5>
              <div className="border-l border-border ml-1">
                <ul className="leading-8 pl-4">
                  <li className="flex items-center">
                    <BsTelephone />
                    <span className="pl-1">+359 87 623 7725</span>
                  </li>
                  <li className="flex items-center">
                    <AiOutlineMail />
                    <span className="pl-1">contact@strover.bg</span>
                  </li>
                  <li className="flex items-center">
                    <RiGlobalLine /> <span className="pl-1">strover.bg</span>
                  </li>
                </ul>
              </div>
            </section>
          </section>
        </section>
      </section>
      <section className={`${colors.copyRight} flex-center py-5 text-white`}>
        <AiOutlineCopyright />
        2022 Stover Всички права запазени.
      </section>
    </footer>
  );
}
