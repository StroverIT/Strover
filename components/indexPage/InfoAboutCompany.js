import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import Image from "next/legacy/image";
import WhiteSpider from "../svg-anim-comp/WhiteSpider";
import Link from "next/link";

export default function IdeasInWebsite({ isBox = true }) {
  const { scrollY } = useScroll();
  const [bgPos, setBgPos] = useState(0);
  useEffect(() => {
    return scrollY.onChange((latest) => {
      setBgPos(latest - 100);
    });
  }, []);
  return (
    <section className="text-white">
      <motion.section
        className={` ${
          isBox && "box"
        } bg-primaryBlue-500  py-32 bg-[url('/icons/banner.png')] `}
        style={{
          backgroundPositionX: bgPos,
        }}
      >
        <div className="container flex-center">
          <h1 className="text-xl font-bold lg:text-4xl text-shadow">
            В Strover ще разберете за...
          </h1>
        </div>
        <section className="grid pt-10 lg:grid-cols-3 lg:px-20 gap-x-5 max-lg:container gap-y-10">
          <div className="mx-auto">
            <div className="flex items-center">
              <div className="relative w-10 h-10 text-xl font-semibold lg:w-12 lg:h-12">
                <Image
                  src="/icons/globe_1.png"
                  layout="fill"
                  alt="acadamey hat"
                />
              </div>
              <h2 className="ml-4 text-xl font-semibold">Сайтовете</h2>
            </div>
            <ul className="mt-2 ml-5 list-disc">
              <li>Защо е нужен сайт</li>
              <li>Как той ще печели за вас</li>
              <li>Как създаваме упешно печеливш сайт</li>
            </ul>
            <div className="mt-5 md:mt-10 ">
              <Link href="/web" scroll={false}>
                <button
                  className={`px-10 py-2 text-xs sm:text-sm rounded-lg btn-web-bg-color`}
                >
                  Научи повече
                </button>
              </Link>
            </div>
          </div>
          <div className="mx-auto">
            <div className="flex items-center">
              <div className="relative w-12 h-12 text-xl font-semibold">
                <Image
                  src="/icons/bullhorn.png"
                  layout="fill"
                  alt="acadamey hat"
                />
              </div>
              <h2 className="ml-4 text-xl font-semibold">
                Дигиталният маркетинг
              </h2>
            </div>
            <ul className="mt-2 ml-5 list-disc">
              <li>Нашата мисия и виждане</li>
              <li>Процеса и услугите ни</li>
              <li>Как бизнеса Ви, ще расте от гледна точка на продажби</li>
            </ul>
            <div className="mt-5 md:mt-10 ">
              <Link href="/digital" scroll={false}>
                <button
                  className={`px-10 py-2 text-xs sm:text-sm rounded-lg btn-digital-bg-color`}
                >
                  Научи повече
                </button>
              </Link>
            </div>
          </div>
          <div className="mx-auto">
            <div className="flex items-center">
              <div className="relative w-10 h-10 text-xl font-semibold">
                <Image
                  src="/icons/badge (1).png"
                  layout="fill"
                  alt="acadamey hat"
                />
              </div>
              <h2 className="ml-4 text-xl font-semibold">Академията ни</h2>
            </div>
            <h2 className="mt-2">
              Ние ще ви помогнем да стартирате кариера като
            </h2>
            <ul className="mt-2 ml-5 list-disc columns-2">
              <li>Програмист</li>
              <li>Дизайнер</li>
              <li>Копирайтър</li>
              <li>Маркетолог</li>
            </ul>
            <div className="mt-5 md:mt-10 ">
              <Link href="/academy" scroll={false}>
                <button
                  className={`px-10 py-2 text-xs sm:text-sm rounded-lg btn-academy-bg-color`}
                >
                  Научи повече
                </button>
              </Link>
            </div>
          </div>
        </section>
      </motion.section>
    </section>
  );
}
