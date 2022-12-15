import React from "react";

import style from "./christmasGifts.module.css";
const ChristmasGifts = () => {
  return (
    <div className={`${style.cont} `}>
      <div className={style.greengift}>
        <div className={style.tape1}>
          <div className={style.line1} />
          <div className={style.line2} />
          <div className={style.line3} />
          <div className={style.line4} />
        </div>
        <div className={style.tape2}>
          <div className={style.line5} />
          <div className={style.line6} />
          <div className={style.line7} />
        </div>
        <div className={style.cover} />
        <div className={style.tape3} />
        <div className={style.circle} />
        <div className={style.ribbon1} />
        <div className={style.ribbon2} />
      </div>
      <div className={style.stripedgift}>
        <div className={style.circle2} />
        <div className={style.circle3} />
        <div className={style.circle4} />
      </div>
      <div className={style.dottedgift} />
      <div className={style.redgift}>
        <div className={style.tape4} />
        <div className={style.line10} />
        <div className={style.tape5}>
          <div className={style.line11} />
          <div className={style.line12} />
        </div>
        <div className={style.circle5} />
        <div className={style.circle6} />
        <div className={style.circle7} />
      </div>
      <div className={style.ball}>
        <div className={style.smolball1} />
        <div className={style.smolball2} />
        <div className={style.smolball3} />
        <div className={style.dot} />
        <div className={style.topv}>.</div>
        <div className={style.toph} />
      </div>
      <div className={style.de1} />
      <div className={style.de2} />
      <div className={style.de3} />
      <div className={style.de4} />
      <div className={style.de5} />
      <div className={style.de6} />
    </div>
  );
};

export default ChristmasGifts;
