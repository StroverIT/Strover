import React from "react";

import style from "./christmasButton.module.css";

const ChristmasButton = ({ onClick, isLoading }) => {
  return (
    <div className={style.centerer} onClick={onClick}>
      <a href="#" className={style.button}>
        {isLoading ? <div className="loader"></div> : "Абонирай ме!"}
      </a>
    </div>
  );
};

export default ChristmasButton;
