import React from 'react';

import Price from "./Price"

const PromoPricing = ({oldPrice, newPrice, promoTheme="gray"}) => {

    let bgPromo, textPromo
    switch(promoTheme){
        case "gray":
            bgPromo = "bg-[#8d8f92]"
            textPromo = "text-[#8d8f92]"
            break
        case "gray-100":
             bgPromo = "bg-[#6b7280]"
            textPromo = "text-[#6b7280]"
            break
    }
    return (
        <div className='flex-center gap-x-2'>
            <div className={`${textPromo}`}>
                <Price price={oldPrice} isPromo={true} bgPromo={bgPromo}/>
            </div>
            <Price price={newPrice}/>

        </div>
    );
}

export default PromoPricing;
