import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

// ICONS

import LogoName from "../logos/LogoNameWhite";
import WhiteSpiderLogoMain from "../logos/WhiteSpiderLogoMain";
import DiffThanHome from "./DiffThanHome";
const HomeNavLinks = () => {
  const router = usePathname();

  return (
    <nav
      className={`
         w-[99.3vw] fixed justify-between top-4
       z-50  text-white `}
    >
      <div className="container relative ">
        <div className="absolute top-0 left-0 w-full h-full rounded-full glasmorphism-bg"></div>
        <div className="relative z-20 flex justify-between mx-10 break-words ">
          <div className="break-words">
            <Link href="/" className="flex-center">
              <WhiteSpiderLogoMain className="w-24" />
              <LogoName
                logoColor="fill-white"
                className="-mt-4 -ml-10"
                viewBox="260"
              />
            </Link>
          </div>
          {/* <div className="text-3xl cursor-pointer">
              <div className="">
                <RiGlobalFill />
              </div>
            </div> */}
          <ul className="flex items-center justify-center gap-x-7">
          <li className="cursor-pointer ">
              <Link href={`/`}>Начало</Link>
            </li>
            <li className="cursor-pointer ">
              <Link href={`/projects`}>Проекти</Link>
            </li>
            <li className="cursor-pointer ">
              <Link href={`/contactUs`}>Контакти</Link>
            </li>
            <li className="cursor-pointer ">
              <Link href={`/aboutUs`} className="">
                За Нас
              </Link>
            </li>
            <li className="cursor-pointer ">
              <Link href="/brands">Брандове</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HomeNavLinks;
