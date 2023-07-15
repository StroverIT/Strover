"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Hamburger from "hamburger-react";

// ICONS

import LogoName from "../logos/LogoNameWhite";
import WhiteSpiderLogoMain from "../logos/WhiteSpiderLogoMain";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { IoIosArrowUp } from "react-icons/io";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const HomeNavLinks = ({ isMobile }) => {
  const router = usePathname();
  const [isMenuShow, setMenuShow] = useState(isMobile ? false : true);
  useEffect(() => {
    if (isMobile) setMenuShow(false);
    if (typeof window !== "undefined") {
      console.log("vliza");
      const html = document.querySelector("html");
      // html.style.scrollBehavior = "inherit";
      window.scrollTo({ top: 0, left: 0 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);
  return (
    <nav
      className={`
         w-[99.3vw] fixed justify-between 
       z-50  text-white ${isMobile ? " w-full top-0" : "top-4"}`}
    >
      <div
        className={`${!isMobile ? "container" : `glasmorphism-bg`} relative `}
      >
        {isMenuShow && (
          <div
            className={`absolute top-0 left-0 ${
              !isMobile
                ? "w-full h-full rounded-full glasmorphism-bg"
                : "w-screen h-screen"
            } `}
          ></div>
        )}
        <div
          className={`relative z-20 flex justify-between  break-words ${
            isMobile ? "" : "mx-10"
          }
        ${isMobile && isMenuShow && "w-screen h-screen flex-col"}`}
        >
          <div
            className={`break-words ${
              isMobile && "flex justify-between w-full items-center container"
            }`}
          >
            <Link href="/" className="flex-center">
              <WhiteSpiderLogoMain className="w-24" />
              <LogoName
                logoColor="fill-white"
                className="-mt-4 -ml-10"
                viewBox="260"
              />
            </Link>
            {isMobile && (
              <div className="rounded-full ">
                <Hamburger toggled={isMenuShow} toggle={setMenuShow} />
              </div>
            )}
          </div>
          {/* <div className="text-lg text-3xl cursor-pointer xl:text-sm">
              <div className="">
                <RiGlobalFill />
              </div>
            </div> */}
          {isMenuShow && (
            <ul
              className={`flex items-center justify-center gap-x-7 ${
                isMobile
                  ? "flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-y-7"
                  : ""
              }`}
            >
              <li className="cursor-pointer inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 xl:text-sm   font-semibold text-gray-900 shadow-sm hover:shadow-xl hover:scale-110 transition-transform ring-1 ring-inset ring-gray-300 hover:bg-gray-50 ">
                <Link href={`/`}>Начало</Link>
              </li>
              <li>
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="flex-center w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 xl:text-sm   font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 ">
                      Услуги
                      <div className="-mr-1 rotate-180" aria-hidden="true">
                        <IoIosArrowUp />
                      </div>
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute z-10 mt-2 text-center text-black origin-bottom-right -translate-x-1/2 bg-white divide-y divide-gray-100 rounded-md shadow-lg w-72 left-1/2 ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="/service/ecommerce"
                              className={classNames(
                                active
                                  ? "shadow-xl scale-110 transition-transform bg-blue-50 text-white"
                                  : "border-b border-gray-200",
                                "block px-4 py-2 xl:text-sm  "
                              )}
                            >
                              Изработка на онлайн магазин
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="/service/website"
                              className={classNames(
                                active
                                  ? "shadow-xl scale-110 transition-transform bg-blue-50 text-white"
                                  : "border-b border-gray-200",
                                "block px-4 py-2 xl:text-sm  "
                              )}
                            >
                              Изработка на уебсайт
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="/service/maintance"
                              className={classNames(
                                active
                                  ? "shadow-xl scale-110 transition-transform bg-blue-50 text-white"
                                  : "border-b border-gray-200",
                                "block px-4 py-2 xl:text-sm  "
                              )}
                            >
                              Поддръжка на уебсайт
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="/service/optimization"
                              className={classNames(
                                active
                                  ? "shadow-xl scale-110 transition-transform bg-blue-50 text-white"
                                  : "",
                                "block px-4 py-2 xl:text-sm  "
                              )}
                            >
                              Оптимизация на уебсайт
                            </Link>
                          )}
                        </Menu.Item>
                        {/* <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="/plan/smallBusiness"
                              className={classNames(
                                active
                                  ? "shadow-xl scale-110 transition-transform bg-blue-50"
                                  : "",
                                "block px-4 py-2 xl:text-sm  "
                              )}
                            >
                              Онлайн маркетинг
                            </Link>
                          )}
                        </Menu.Item> */}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </li>
              <li className="cursor-pointer inline-flex hover:shadow-xl hover:scale-110 transition-transform w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 xl:text-sm   font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 ">
                <Link href={`/projects`}>Проекти</Link>
              </li>
              <li className="cursor-pointer inline-flex hover:shadow-xl hover:scale-110 transition-transform w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 xl:text-sm   font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 ">
                <Link href={`/contactUs`}>Контакти</Link>
              </li>
              <li className="cursor-pointer inline-flex hover:shadow-xl hover:scale-110 transition-transform w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 xl:text-sm   font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 ">
                <Link href={`/aboutUs`} className="">
                  За Нас
                </Link>
              </li>
              {/* <li className="cursor-pointer inline-flex hover:shadow-xl hover:scale-110 transition-transform w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 xl:text-sm   font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 ">
                <Link href="/brands">Брандове</Link>
              </li> */}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default HomeNavLinks;
