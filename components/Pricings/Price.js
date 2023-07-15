import React from 'react';

const Price = ({price, isPromo,bgPromo, type}) => {
    console.log(bgPromo);
    return (
        <div className="relative tracking-wide">
        <span className="text-3xl font-semibold">{price}</span>
        <span className="text-gray-400 align-bottom "> лв {type == "maintance" && " / месец"}</span>
        {isPromo &&  <div className={`absolute rotate-[16deg] top-1/2 -translate-y-1/2 left-0 w-full h-[2px] ${bgPromo}`}></div>}
        {/* <span className="font-medium text-gray-400">/ user</span> */}
      </div>
    );
}

export default Price;
