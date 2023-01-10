import React from "react";
import Link from "next/link";

import FadeIn from "../../layouts/animations/onView/FadeIn";

export default function Container({ title, children, link, btnColor, delay }) {
  return (
    <FadeIn delay={delay} duration={0.8}>
      <div className="">
        <h2 className="text-4xl">{title}</h2>
        {children}
        <div className="mt-5 md:mt-5 ">
          <Link href={link} scroll={false}>
            <button className={`px-10 py-2 text-sm rounded-lg ${btnColor}`}>
              Научи повече
            </button>
          </Link>
        </div>
      </div>
    </FadeIn>
  );
}
