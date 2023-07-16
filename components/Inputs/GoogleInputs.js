import React from "react";

const GoogleInputs = ({placeholder,name,value,onChange}) => {
  return (
    <div className="">
      <label className="relative cursor-pointer">
        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className=" w-full  px-6 py-2 xl:text-lg text-black placeholder-opacity-0 transition duration-200 border-2 border-opacity-50 rounded-lg outline-none placeholder-blue-50 border-[#dadce0] focus:border-blue-50"
          id="inputGoogle"
        />
        <span className="absolute px-1 transition duration-200 bg-white xl:text-lg -top-1 text-dark text-opacity-80 left-5 input-text">
          {placeholder}
        </span>
      </label>
    </div>
  );
};

export default GoogleInputs;