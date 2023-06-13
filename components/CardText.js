import Image from "next/image";
import React from "react";

const CardText = ({ title, paragraph, index, imgSrc }) => {
  return (
    <section className="relative px-12 py-6 text-center bg-white shadow-card rounded-xl">
      <div className="mb-2 text-lg font-bold">{title}</div>
      <div>{paragraph}</div>
      {index && (
        <div
          className={`absolute ${
            index != 1 ? "px-4 py-2" : "px-5 py-2"
          } text-2xl text-white border-2 rounded-full shadow-xl -top-4 -left-4 border-primary-white nav-bg-color-gradient`}
        >
          {index}
        </div>
      )}
      {imgSrc && (
        <div
          className={`absolute text-2xl  border-2 rounded-full shadow-xl -bottom-4 -right-4 border-primary-white nav-bg-color-gradient shadow-xl`}
        >
          <div className="relative w-12 h-12 ">
            <Image src={`/homeIcons/${imgSrc}`} alt={imgSrc} fill />
          </div>
        </div>
      )}
    </section>
  );
};

export default CardText;
