import React from 'react';

import Price from "../Price";

import { BsArrowRight } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";

const Small = ({smallBusiness, data, menuController, type}) => {
    return (
        <div id="small" ref={smallBusiness} className="p-8 text-center bg-white shadow-xl xl:pl-16 w-96 rounded-3xl max-xl:container">
        <h2 className="mb-2 text-2xl font-semibold text-black">Малък бизнес</h2>
        <Price price={data.small.newPrice} type={type}/>
    
        <hr className="mt-4 border-1" />
        <div className="pt-8">
          <p className="flex items-center font-semibold text-left text-gray-400">
            <span className="align-middle">
              <AiOutlineCheck />
            </span>
            <span className="pl-2">
            {data.small.products && <><span className="text-black">{data.small.products}</span> продукта</> } {data.small.products && data.small.pages && "/"} {data.small.pages && ` ${data.small.pages} странци`}
            </span>
          </p>
         {data.small.includes.map((include,index)=>{
            return <p className="flex items-center pt-5 font-semibold text-left text-gray-400" key={index}>
            <span className="align-middle">
              <AiOutlineCheck />
            </span>
            <span className="pl-2">
              <span className="text-black">{include}</span>
            </span>
          </p>
         }) }
    
          {/* <Link href="/plan/smallBusiness"  className=""> */}
            <p className="w-full py-4 mt-8 text-white cursor-pointer flex-center bg-blue rounded-xl" onClick={()=> menuController(true, "smallBusiness")}>
              <span className="font-medium">Избери плана</span>
              <span className="pl-2 text-lg align-middle">
                <BsArrowRight />
              </span>
            </p>
          {/* </Link> */}
        </div>
      </div>
    );
}

export default Small;
