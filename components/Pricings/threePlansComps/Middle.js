import React from 'react';
import Price from "../Price";

import { BsArrowRight } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";


const Middle = ({middle, data, menuController, type}) => {
    return (
        <div id="middle" ref={middle} className="relative z-10 p-8 text-center text-white transform border-4 border-white shadow-xl xl:scale-125 w-80 nav-bg-color-gradient rounded-3xl max-xl:container">
          <h2 className="mb-2 text-2xl font-semibold text-white">Среден бизнес</h2>
          <Price price={data.middle.newPrice} type={type}/>
          <hr className="mt-4 border-gray-600 border-1" />
          <div className="pt-8">
            <p className="flex items-center font-semibold text-left text-gray-400">
              <span className="align-middle">
                <AiOutlineCheck />
              </span>
              <span className="pl-2">
              {data.middle.products && <><span className="">{data.middle.products}</span> продукта</> } {data.middle.products && data.middle.pages && "/"} {data.middle.pages && ` ${data.middle.pages} странци`}
              </span>
            </p>
           {data.middle.includes.map((include,index)=>{
            return  <p className="flex items-center pt-5 font-semibold text-left text-gray-400" key={index}>
            <span className="align-middle">
              <AiOutlineCheck />
            </span>
            <span className="pl-2">
              <span className="text-white">{include}</span>
            </span>
          </p>
           })}
      
            {/* <Link href="/plan/middleBusiness" className=""> */}
              <p className="w-full py-4 mt-8 text-white cursor-pointer flex-center bg-blue rounded-xl " onClick={()=> menuController(true, "middleBusiness")}>
                <span className="font-medium">Избери плана</span>
                <span className="pl-2 text-lg align-middle">
                  <BsArrowRight />
                </span>
              </p>
            {/* </Link> */}
          </div>
          <div className="absolute -top-1 -right-4">
            <p className="px-4 py-1 text-xs font-semibold uppercase rounded-full bg-primary-400 ">
              Най-избиран
            </p>
          </div>
        </div>
    );
}

export default Middle;
