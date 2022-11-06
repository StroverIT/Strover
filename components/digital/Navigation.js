import Image from "next/legacy/image";
import React from "react";

export default function Navigation() {
  return (
    <nav className="sticky top-0 flex justify-between items-center container z-50 ">
      <div className="py-8">
        <ul className="flex space-x-5">
          <li>Начало</li>
          <li>Ценоразпис</li>
          <li>Услуги</li>
        </ul>
      </div>
      <div className="w-2 h-2">
        <Image
          src="/logos/white-spider.svg"
          alt="white spider logo brand"
          layout="fill"
        />
      </div>
      <div>
        <ul className="flex space-x-5">
          <li>БРАНДОВЕ</li>
          <li>За нас</li>
          <li>Контакти</li>
        </ul>
      </div>
    </nav>
  );
}
