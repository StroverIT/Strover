import React from "react";

import style from "./christmasButton.module.css";

const ChristmasButton = ({ onClick, isLoading }) => {
  return (
    <div className={`${style.centerer} w-full mt-2 md:mt-0 cursor-pointer`}>
      <a
        className={`${style.button} max-md:w-full text-center py-2 md:px-12 text-lg md:py-5 md:text-2xl `}
        onClick={onClick}
      >
        {isLoading ? <div className="loader"></div> : "Абонирай ме!"}
      </a>
    </div>
  );
};

export default ChristmasButton;
