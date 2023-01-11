import React, { useEffect, useState } from "react";

// Icons
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineCopyright } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { RiGlobalLine } from "react-icons/ri";
import { useRouter } from "next/router";
import Link from "next/link";
import newsletterSend from "../../fetches/newsletterSend";
import { toastError, toastSuccess } from "../../libs/Notifications";

export default function Footer() {
  const router = useRouter();

  const [input, setInputs] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [colors, setColors] = useState({
    bgColor: "",
    button: "",
    markers: "",
    copyRight: "",
  });
  const [paddingNeed, setPaddingNeed] = useState(true);
  const handler = (e) => {
    setInputs(e.target.value);
  };
  const newsLetterHandler = async () => {
    setLoading(true);

    const data = await newsletterSend({ email: input });
    if (data.message) {
      setInputs("");
      toastSuccess(data.message);
    }
    if (data.error) {
      toastError(data.error);
    }

    setLoading(false);
  };

  useEffect(() => {
    if (
      router.pathname == "/" ||
      router.pathname == "/company/contactUs" ||
      router.pathname == "/company/aboutUs" ||
      router.pathname == "/legal/privacy-policy" ||
      router.pathname == "/legal/terms-and-conditions" ||
      router.pathname == "/deals/offers" ||
      router.pathname == "/legal/cookie-policy"
    ) {
      setColors({
        bgColor: "bg-primaryBlue-650",
        button: "bg-primaryBlue-400",
        markers: "marker:text-primaryBlue-550",
        copyRight: "bg-primaryBlue-850",
      });
    } else if (router.pathname == "/brands/digital") {
      setColors({
        bgColor: "bg-pink-200",
        button: "bg-pink-100",
        markers: "marker:text-pink-150",
        copyRight: "bg-pink-250",
      });
    } else if (
      router.pathname == "/brands/web" ||
      router.pathname.includes("/web")
    ) {
      setColors({
        bgColor: "bg-blue-100",
        button: "bg-blue-50",
        markers: "marker:text-blue-50",
        copyRight: "bg-blue-150",
      });
    } else if (router.pathname == "/brands/academy") {
      setColors({
        bgColor: "bg-red-300",
        button: "bg-red-150",
        markers: "marker:text-red-150",
        copyRight: "bg-red-350",
      });
    }
    console.log(router.pathname);
    if (
      router.pathname != "/brands/digital" &&
      router.pathname != "/brands/web" &&
      router.pathname != "/"
    ) {
      setPaddingNeed(false);
    }
  }, [router]);
  return (
    <footer
      className={`${colors.bgColor}   ${paddingNeed && "pt-16"} z-10 w-full`}
    >
      <div className={` pb-10`}>
        <div className="flex flex-col-reverse xl:grid xl:grid-cols-[30%70%]  container text-white gap-x-28">
          <section>
            <h3 className="mt-5 mb-3 font-semibold uppercase ">
              Абонирай се за нашите оферти
            </h3>
            <input
              type="text"
              className="w-full px-2 py-5 text-sm text-black border-none rounded-sm h-7 placeholder:text-black"
              placeholder="Email"
              value={input}
              onChange={handler}
            />
            <div className="mt-2 flex-center">
              <button
                className={`${colors.button} w-full py-1 rounded-sm flex-center`}
                onClick={newsLetterHandler}
              >
                {isLoading ? <div className="loader"></div> : "Абонирай ме!"}
              </button>
            </div>
            <h3 className="mt-8 font-semibold uppercase">Социални мрежи</h3>
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

          <div className="grid-cols-[20%40%40%] justify-center xl:grid ">
            <section>
              <h3 className="mt-5 text-lg font-semibold">Брандове</h3>
              <ul className={`list-disc  ${colors.markers} leading-8 ml-4`}>
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
                <li className="cursor-default">
                  <Link href="/brands/academy" scroll={false}>
                    <span className="pb-1 border-b cursor-pointer border-border">
                      Academy
                    </span>
                  </Link>
                </li>
              </ul>
            </section>
            <section>
              <h3 className="mt-5 text-lg font-semibold">За STROVER</h3>
              <ul className={`list-disc ${colors.markers} pb-1 leading-8 ml-4`}>
                <li className="cursor-default">
                  <Link href="/company/aboutUs#team" scroll={false}>
                    <span className="pb-1 border-b cursor-pointer border-border">
                      Екипа ни
                    </span>
                  </Link>
                </li>
                <li className="cursor-default">
                  <Link href="/deals/offers" scroll={false}>
                    <span className="pb-1 border-b cursor-pointer border-border">
                      Оферти
                    </span>
                  </Link>
                </li>
                <li className="cursor-default">
                  <Link href="/legal/terms-and-conditions" scroll={false}>
                    <span className="pb-1 border-b cursor-pointer border-border">
                      Условия за ползване
                    </span>
                  </Link>
                </li>
                <li className="cursor-default">
                  <Link href="/legal/privacy-policy" scroll={false}>
                    <span className="pb-1 border-b cursor-pointer border-border">
                      Защита на лични данни
                    </span>
                  </Link>
                </li>
                <li className="cursor-default">
                  <Link href="/legal/cookie-policy" scroll={false}>
                    <span className="pb-1 border-b cursor-pointer border-border">
                      Политика за бисквитките
                    </span>
                  </Link>
                </li>
              </ul>
            </section>
            <section className="">
              <div>
                <h3 className="mt-5 text-lg font-semibold text-left">
                  Контакти
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
