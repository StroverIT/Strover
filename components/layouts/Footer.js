import React, { useEffect, useState } from "react";

// Icons
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineCopyright } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { RiGlobalLine } from "react-icons/ri";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Footer() {
  const router = useRouter();
  const [input, setInputs] = useState("");
  const [colors, setColors] = useState({
    bgColor: "",
    button: "",
    markers: "",
    copyRight: "",
  });
  const [border, setBorder] = useState("");
  const handler = (e) => {
    setInputs(e.target.value);
  };
  useEffect(() => {
    if (
      router.pathname == "/" ||
      router.pathname == "/contactUs" ||
      router.pathname == "/aboutUs"
    ) {
      setColors({
        bgColor: "bg-primaryBlue-650",
        button: "bg-primaryBlue-400",
        markers: "marker:text-primaryBlue-550",
        copyRight: "bg-primaryBlue-850",
      });
    } else if (router.pathname == "/digital") {
      setColors({
        bgColor: "bg-pink-200",
        button: "bg-pink-100",
        markers: "marker:text-pink-150",
        copyRight: "bg-pink-250",
      });
      setBorder("border-t pt-5 border-pink");
    } else if (router.pathname == "/web") {
      setColors({
        bgColor: "bg-blue-100",
        button: "bg-blue-50",
        markers: "marker:text-blue-50",
        copyRight: "bg-blue-150",
      });
    }
  }, [router]);
  return (
    <footer className={`${colors.bgColor} ${border}  pt-2 z-10 w-full`}>
      <section className={` pb-10`}>
        <section className="flex flex-col-reverse xl:grid xl:grid-cols-[30%70%]  container text-white gap-x-16">
          <section>
            <h5 className="mt-5 mb-3 font-semibold uppercase ">
              Абонирай се за нашите оферти
            </h5>
            <input
              type="text"
              className="w-full px-2 py-5 text-sm text-black border-none rounded-sm h-7 placeholder:text-black"
              placeholder="Email"
              value={input}
              onChange={handler}
            />
            <div className="mt-2 flex-center">
              <button className={`${colors.button} w-full py-1 rounded-sm`}>
                Абонирай ме!
              </button>
            </div>
            <h5 className="mt-8 font-semibold uppercase">Социални мрежи</h5>
            <div className="flex mt-2 gap-x-5">
              <div className="transition-transform cursor-pointer flex-center hover:scale-125 hover:text-primaryBlue-450">
                <div className="text-2xl">
                  <BsFacebook />
                </div>
                {/* <div className="pl-2">Facebook</div> */}
              </div>
              <div className="transition-all cursor-pointer flex-center hover:scale-125 hover:text-primaryBlue-450">
                <div className="text-2xl">
                  <BsInstagram />
                </div>
                {/* <div className="pl-2">Instagram</div> */}
              </div>
            </div>
          </section>

          <section className="grid-cols-3 xl:grid ">
            <section>
              <h5 className="mt-5 text-lg font-semibold">Брандове</h5>
              <ul className={`list-disc  ${colors.markers} leading-8 ml-4`}>
                <li className="cursor-default">
                  <Link href="/web" scroll={false}>
                    <span className="pb-1 border-b cursor-pointer border-border">
                      Web
                    </span>
                  </Link>
                </li>
                <li className="cursor-default">
                  <Link href="/digital" scroll={false}>
                    <span className="pb-1 border-b cursor-pointer border-border">
                      Digital
                    </span>
                  </Link>
                </li>
                <li className="cursor-default">
                  <span className="pb-1 border-b cursor-pointer border-border">
                    Transport
                  </span>
                </li>
                <li className="cursor-default">
                  <span className="pb-1 border-b cursor-pointer border-border">
                    Academy
                  </span>
                </li>
              </ul>
            </section>
            <section>
              <h5 className="mt-5 text-lg font-semibold">За STROVER</h5>
              <ul className={`list-disc ${colors.markers} pb-1 leading-8 ml-4`}>
                <li className="cursor-default">
                  <span className="pb-1 border-b cursor-pointer border-border">
                    Екипа ни
                  </span>
                </li>
                <li className="cursor-default">
                  <span className="pb-1 border-b cursor-pointer border-border">
                    Оферти
                  </span>
                </li>
                <li className="cursor-default">
                  <span className="pb-1 border-b cursor-pointer border-border">
                    Условия за ползване
                  </span>
                </li>
                {/* <li>Защита на лични данни</li> */}
              </ul>
            </section>
            <section>
              <h5 className="mt-5 text-lg font-semibold">Контакти</h5>
              <div className="ml-1 border-l border-border">
                <ul className="pl-4 leading-8">
                  <li className="flex items-center">
                    <FiPhoneCall />
                    <span className="pl-1">+359 87 623 7725</span>
                  </li>
                  <li className="flex items-center">
                    <HiOutlineMail />
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
      <section
        className={`${colors.copyRight} flex-center py-5 text-white flex-wrap max-sm:flex-col`}
      >
        <div className="flex-center">
          <AiOutlineCopyright />
          2022 Stover
        </div>
        <div className="sm:pl-1">Всички права запазени.</div>
      </section>
    </footer>
  );
}
