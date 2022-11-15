import React from "react";
import { FaSpider } from "react-icons/fa";

export default function HeaderSpider({
  title,
  size,

  lineColor = "bg-primaryBlue-200",
}) {
  return (
    <div className="">
      <h3 className={`${size} text-center font-medium`}>{title}</h3>

      <div className=" flex-center mt-2">
        <div className={`h-1 w-full ${lineColor}`}></div>
        <div className="px-3 text-xl">
          <FaSpider />
        </div>
        <div className={`h-1 w-full ${lineColor}`}></div>
      </div>
    </div>
  );
}
