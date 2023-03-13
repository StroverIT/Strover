import Image from "next/image";
import React from "react";
import FadeFromBottom from "../../layouts/animations/onView/FadeFromBottom";
import { useTranslation } from "next-i18next";
export default function Container({ imageUrl, text, isRev = false, trans }) {
  const { t } = useTranslation(trans);

  return (
    <div className={` grid gap-y-10 lg:grid-cols-2 container`}>
      <div
        className={`flex-center text-lg ${
          isRev ? "lg:order-2  lg:pr-56" : "lg:pl-56"
        }`}
      >
        <FadeFromBottom duration={0.5}>
          <div>
            <p>{t(text)}</p>
          </div>
        </FadeFromBottom>
      </div>
      <FadeFromBottom duration={0.5}>
        <div className="flex-center">
          <div className="relative w-48 h-48 lg:h-80 lg:w-80 ">
            <Image
              src={`/digitalAssets/icons/${imageUrl}.png`}
              alt="this is image from flat icon"
              fill
            />
          </div>
        </div>
      </FadeFromBottom>
    </div>
  );
}
