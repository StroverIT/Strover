import React from 'react';
import { BsArrowRight } from "react-icons/bs";

const BlueBtn = ({text, onClick}) => {
    return (
        <div onClick={onClick} className='cursor-pointer'>
        <p className="w-full py-4 mt-8 text-white flex-center bg-blue rounded-xl ">
          <span className="font-medium">{text}</span>
          <span className="pl-2 text-lg align-middle">
            <BsArrowRight />
          </span>
        </p>
      </div>
    );
}

export default BlueBtn;
