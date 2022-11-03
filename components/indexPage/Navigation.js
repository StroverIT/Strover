import React from "react";
import Image from "next/image";
export default function Navigation() {
  return (
    // THIS MUST BE ONLY FOR HOME ROUTE !!!!!
    <div className="w-screen  nav-bg-color text-white sticky top-0">
      <div className="container flex justify-between py-5">
        <div className="flex items-center justify-center">
          <div className="relative h-14 w-14">
            <Image
              src="/logos/white-spider.png"
              alt="white spider logo"
              layout="fill"
            />
          </div>
          <div className="font-bold text-xl pl-1">Strover</div>
        </div>
        {/* Links */}
        <div className="">
          <ul className="flex h-full items-center justify-center gap-x-10 ">
            <li>Начало</li>
            <li>За нас</li>
            <li>Услуги</li>
            <li>Контакти</li>
            <li className="text-primaryBlue-150 border border-primaryBlue-150 px-5 py-1">
              Брандове
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
