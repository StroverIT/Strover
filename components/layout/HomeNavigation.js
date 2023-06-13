import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

// ICONS

import LogoName from "../logos/LogoNameWhite";
import WhiteSpiderLogoMain from "../logos/WhiteSpiderLogoMain";
import DiffThanHome from "./DiffThanHome";

const HomeNavigation = () => {
  const router = usePathname();
  // transform: rotate(-90deg) translateX(-100%);
  return (
    <nav
      className={`${
        (router == "/" || router == "/brands") && "w-24 h-screen fixed"
      } z-50  text-white nav-bg-color-gradient`}
    >
      <div
        className={` ${
          router != "/" && router != "/brands" ? "grid-cols-[10%90%] grid" : ""
        }`}
      >
        <div className="flex-col mt-2 tracking-[0.1em] uppercase break-words flex-center gap-y-16 ">
          <div className="break-words">
            <Link href="/">
              <WhiteSpiderLogoMain className="w-24" />
              <LogoName
                logoColor="fill-white"
                className="w-20 -ml-2"
                viewBox="170"
              />
            </Link>
          </div>
          {/* <div className="text-3xl cursor-pointer">
            <div className="">
              <RiGlobalFill />
            </div>
          </div> */}
          <div className="rotate-180 cursor-pointer vertical">
            <Link href={`/projects`}>Проекти</Link>
          </div>

          <div className="rotate-180 cursor-pointer vertical">
            <Link href={`/contactUs`}>контакти</Link>
          </div>
        
          <div className="text-lg rotate-180 cursor-pointer vertical">
            <Link href={`/aboutUs`} className="">
              за нас
            </Link>
          </div>
          <div className="rotate-180 cursor-pointer vertical">
            <Link href="/brands">Брандове</Link>
          </div>

        </div>
        {(router != "/" && router != "/brands") && <DiffThanHome />}
      </div>
    </nav>
  );
};

export default HomeNavigation;
