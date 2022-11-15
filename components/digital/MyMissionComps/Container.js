import Image from "next/legacy/image";
import React from "react";

export default function Container({ imageUrl, text, isRev = false }) {
  return (
    <div className={` grid gap-y-10 lg:grid-cols-2 container`}>
      <div
        className={`flex-center text-lg ${
          isRev ? "lg:order-2  lg:pr-56" : "lg:pl-56"
        }`}
      >
        <div>
          <p>{text}</p>
        </div>
      </div>
      <div className="flex-center">
        <div className="relative w-48 h-48 lg:h-96 lg:w-96 ">
          <Image
            src={`/digitalAssets/icons/${imageUrl}.png`}
            alt="this is image from flat icon"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
}
