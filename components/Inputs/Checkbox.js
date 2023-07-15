"use client"
import React from "react";

const Checkbox = ({ children, name = "checkbox",onChange, value}) => {
  return (
         
          <div    className="cursor-pointer"  >
      <span className="">
        <input
          id={name}
          type="checkbox"
          name={name}
          className="w-5 h-5 -mb-1 border-[#c1c1c1] border checked:p-2  duration-300 rounded outline-none  transition-colors  appearance-none cursor-pointer text-primary-600 checked:border-blue-50  checked:bg-blue-50 "
          value={value}
          onChange={onChange}
        />
      </span>
      <label
        htmlFor={name}
        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {children}
      </label>
    </div>
  );
};

export default Checkbox;
