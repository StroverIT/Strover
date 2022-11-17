import React from "react";

export default function MoreInfo() {
  return (
    <section className="w-full py-5 bg-blue">
      <h3 className="text-2xl text-center">В Strover Company създаваме...</h3>
      <div className="container grid grid-cols-3">
        <div className="flex">
          <div>ICON</div>
          <div className="pl-1">
            <h3>Уебсайтове</h3>
            <p></p>
          </div>
        </div>
        <div className="flex ">
          <div>ICON</div>
          <div className="pl-1">
            <h3>Социални мрежи и/или реклами</h3>
            <p></p>
          </div>
        </div>
        <div className="flex">
          <div>ICON</div>
          <div className="pl-1">
            <h3>Знания</h3>
            <p></p>
          </div>
        </div>
      </div>
    </section>
  );
}
