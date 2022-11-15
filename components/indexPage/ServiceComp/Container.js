import React from "react";
import Link from "next/link";

import FadeIn from "../../layouts/animations/onView/FadeIn";

export default function Container({
  title,
  p,
  link,
  btnColor,
  moreClasses,
  delay,
}) {
  return (
    <FadeIn delay={delay} duration={0.8}>
      <h3 className="text-4xl">{title}</h3>
      <p className="xl:max-w-[18rem] mt-2 whitespace-pre-line">{p}</p>
      <div className="mt-5 md:mt-10 ">
        <Link href={link} scroll={false}>
          <button className={`px-10 py-2 text-sm rounded-lg ${btnColor}`}>
            Научи повече
          </button>
        </Link>
      </div>
    </FadeIn>
  );
}
