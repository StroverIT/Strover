import React from "react";

import Image from "next/legacy/image";
import Link from "next/link";
import FadeIn from "../layouts/animations/onView/FadeIn";

export default function Brand({
  altImage,
  imageLink,
  textColor,
  link,
  borderColor,
  title,
  p,
  maxW = "max-w-[22rem]",
  delay,
  mt = "mt-8",
}) {
  return (
    <FadeIn delay={delay}>
      <div className="relative flex flex-col w-32 h-32">
        <Image alt={altImage} src={imageLink} layout="fill" />
      </div>
      <h4 className={`text-4xl font-bold ${textColor} `}>{title}</h4>
      <p className={`${maxW} mt-2 text-white`}>{p}</p>
      <div className={`${mt} `}>
        <Link href={link} scroll={false}>
          <button
            className={`py-2 text-sm text-white ${borderColor} px-7 rounded-xl`}
          >
            Виж повече
          </button>
        </Link>
      </div>
    </FadeIn>
  );
}
