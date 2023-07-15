import React from 'react';

import HeroSection from "./HeroSection"

import Plans from "./Plans"
import NeedsOfWebsite from "./NeedsOfWebsite"
import AllFunctions from "./AllFunctions"
import Questions from "./Questions"
import Banner from "../../Animated/Banner"
import SellMore from "./SellMore";
// corporate
// middleBusiness
//smallBusiness
const Ecommerce = () => {
    return (
        <section className=''>
            <HeroSection/>
               <SellMore/>
         <Plans/>
         <NeedsOfWebsite/>
        <Banner title="Продавай повече онлайн!" btnText="Започни сега" bigImg="ecommerce.png" bigImgClassName="w-32 h-32 xl:w-80 xl:h-80" bigImgPos="bottom-0 right-10"/>
        <AllFunctions/>
        <Banner title="Превърнете идеите си в сайт!" btnText="ИЗБЕРИ ПЛАН" bigImg="ideaSticker.png" bigImgClassName="w-32 h-32 xl:w-80 xl:h-80" bigImgPos="-bottom-5 right-10"/>
        <Questions/>
        </section>
    );
}

export default Ecommerce;
