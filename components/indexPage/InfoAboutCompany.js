import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";

export default function IdeasInWebsite({ isBox = true }) {
  const { t } = useTranslation("home");

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
            {t("В Strover ще разберете за...")}
          </h1>
        </div>
        <section className="grid pt-10 lg:grid-cols-3 lg:px-20 gap-x-5 max-lg:container gap-y-10">
          <div className="mx-auto">
            <div className="flex items-center">
              <div className="relative w-10 h-10 text-xl font-semibold lg:w-12 lg:h-12">
                <Image
                  src="/icons/globe_1.png"
                  alt="acadamey hat"
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="ml-4 text-xl font-semibold">{t("Сайтовете")}</h2>
            </div>
            <ul className="mt-2 ml-5 list-disc">
              <li>{t("Защо е нужен сайт")}</li>
              <li>{t("Как той ще печели за вас")}</li>
              <li>{t("Как създаваме успешно печеливш сайт")}</li>
            </ul>
            <div className="mt-5 md:mt-10 ">
              <Link href="/brands/web" scroll={false}>
                <button
                  className={`px-10 py-2 text-xs sm:text-sm rounded-lg btn-web-bg-color`}
                >
                  {t("Научи повече")}
                </button>
              </Link>
            </div>
          </div>
          <div className="mx-auto">
            <div className="flex items-center">
              <div className="relative w-12 h-12 text-xl font-semibold">
                <Image
                  src="/icons/bullhorn.png"
                  alt="acadamey hat"
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="ml-4 text-xl font-semibold">
                {t("Дигиталният маркетинг")}
              </h2>
            </div>
            <ul className="mt-2 ml-5 list-disc">
              <li>{t("Нашата мисия и виждане")}</li>
              <li>{t("Процеса и услугите ни")}</li>
              <li>
                {t("Как бизнеса Ви, ще расте от гледна точка на продажби")}
              </li>
            </ul>
            <div className="mt-5 md:mt-10 ">
              <Link href="/brands/digital" scroll={false}>
                <button
                  className={`px-10 py-2 text-xs sm:text-sm rounded-lg btn-digital-bg-color`}
                >
                  {t("Научи повече")}
                </button>
              </Link>
            </div>
          </div>
          <div className="mx-auto">
            <div className="flex items-center">
              <div className="relative w-10 h-10 text-xl font-semibold">
                <Image
                  src="/icons/badge (1).png"
                  alt="acadamey hat"
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="ml-4 text-xl font-semibold">
                {t("Академията ни")}
              </h2>
            </div>
            <h2 className="mt-2">
              {t("Ние ще ви помогнем да стартирате кариера като")}
            </h2>
            <ul className="mt-2 ml-5 list-disc columns-2">
              <li>{"Програмист"}</li>
              <li>{"Дизайнер"}</li>
              <li>{t("Копирайтър")}</li>
              <li>{t("Маркетолог")}</li>
            </ul>
            <div className="mt-5 md:mt-10 ">
              <Link href="/brands/academy" scroll={false}>
                <button
                  className={`px-10 py-2 text-xs sm:text-sm rounded-lg btn-academy-bg-color`}
                >
                  {t("Научи повече")}
                </button>
              </Link>
            </div>
          </div>
        </section>
      </motion.section>
    </section>
  );
}
