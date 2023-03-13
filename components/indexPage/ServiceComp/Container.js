import React from "react";
import Link from "next/link";

import FadeIn from "../../layouts/animations/onView/FadeIn";
import Image from "next/image";

import { useTranslation } from "next-i18next";

export default function Container({
  title,
  children,
  link,
  btnColor,
  delay,
  titleColor,
  imageUrl,
}) {
  const { t } = useTranslation("common");

  return (
    <FadeIn delay={delay} duration={0.8}>
      <div className=" grid md:grid-cols-2 relative md:h-96  ">
        <section className="flex-center flex-col">
          <h2 className={`text-5xl font-semibold ${titleColor}  `}>{title}</h2>
          {children}
          <div className="mt-5 md:mt-5 ">
            <Link href={link} scroll={false}>
              <button className={`px-10 py-2  rounded-lg ${btnColor}`}>
                {t("Научи повече")}
              </button>
            </Link>
          </div>
        </section>
        <div className="md:h-0 md:w-0 2xl:-mr-96 max-md:flex-center">
          <div className="relative h-96 w-96 md:h-[500px] md:w-[850px]">
            <Image
              src={`/${imageUrl}`}
              alt="test"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
