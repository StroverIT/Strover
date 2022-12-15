import React from "react";
import style from "./christmasTree.module.css";

const ChristmasTree = () => {
  return (
    <div className={`${style.christmas} `}>
      <div className={style.tree}>
        <div className={style.chain} />
        <div className={style.chain2} />
      </div>
      <div className={style.lights}>
        <div className={style.light1} />
        <div className={style.light2} />
        <div className={style.light3} />
        <div className={style.light4} />
        <div className={style.light5} />
        <div className={style.light6} />
        <div className={style.light7} />
        <div className={style.light8} />
        <div className={style.light9} />
        <div className={style.light10} />
      </div>
      <div className={style.balls}>
        <div className={style.ball1} />
      </div>
      <div className={style.star} />
      <div className={style.gift} />
      <div className={style.ribbon} />
      <div className={style.gift2} />
      <div className={style.ribbon2} />
      <div className={style.gift3} />
      <div className={style.ribbon3} />
      <div className={style.shadow} />
    </div>
  );
};

export default ChristmasTree;
