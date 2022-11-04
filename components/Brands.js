import React from "react";
import Image from "next/legacy/image";
import Link from "next/link";

export default function Brands() {
  return (
    <section className="bg-brands-index-color py-56 mt-10 ">
      <section className="mb-10 text-white">
        <h5 className="text-center text-5xl font-semibold">Брандове</h5>
        <p className="text-center mt-2">И повече информация за тях</p>
      </section>
      <section className={`container grid grid-cols-3 gap-x-14`}>
        {/* Web */}
        <section className="flex-center flex-col text-center">
          <div className="relative h-32 w-32">
            <Image
              alt="Tech spider logo for strovers' brands"
              src="/logos/web-spider.svg"
              layout="fill"
            />
          </div>
          <h4 className="text-primaryBlue-200 text-4xl font-bold ">Web</h4>
          <p className="text-white mt-2 max-w-md">
            Разработваме онлайн магазин-и, блогове, персонализирана платформи,
            уеб базиран софтуер и информативни динамични уеб сайтове
          </p>
          <div className="mt-8">
            <Link
              href="/web"
              className="bg-primaryBlue-200 text-white py-2 px-7 rounded-xl text-sm"
            >
              Виж повече
            </Link>
          </div>
        </section>
        {/* Digital */}
        <section className="flex-center flex-col text-center">
          <div className="relative h-32 w-32">
            <Image
              alt="Tech spider logo for strovers' brands"
              src="/logos/digital-spider.svg"
              layout="fill"
            />
          </div>
          <h4 className="text-pink text-4xl font-bold">Digital</h4>
          <p className="text-white pt-2 max-w-sm">
            Помагаме да достигнете до повече потенциални клиенти, увеличаване на
            прихода и разширяване на аудиторията Ви
          </p>
          <div className="mt-auto">
            <button className="bg-pink text-white py-2 px-7 rounded-xl text-sm">
              Виж повече
            </button>
          </div>
        </section>
        <section className="flex-center flex-col text-center">
          <div className="relative h-32 w-32">
            <Image
              alt="Tech spider logo for strovers' brands"
              src="/logos/transport-spider.svg"
              layout="fill"
            />
          </div>
          <h4 className="text-orange text-4xl font-bold">Transport</h4>
          <p className="text-white pt-2 max-w-sm">
            Както транспортни услуги, предлагаме също и хамалски услуги от
            опитни и сръчни професионалисти
          </p>
          <div className="mt-auto">
            <button className="bg-orange text-white py-2 px-7 rounded-xl text-sm">
              Виж повече
            </button>
          </div>
        </section>
      </section>
    </section>
  );
}
