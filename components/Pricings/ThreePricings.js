import React from 'react';
import ThreePlans from './ThreePlans';



const PricingList = ({type}) => {
    return (
        <div className="flex items-center justify-center min-h-screen max-xl:container max-xl:py-10">
        <div className="">
            <div className="font-semibold text-center">
                <h1 className="text-3xl xl:text-5xl">
                    <span className="tracking-wide text-primary-100">Гъвкави </span>
                    <span className='text-white'>Планове</span>
                </h1>
                <p className="w-full px-8 font-normal text-white xl:pt-6 xl:text-xl md:w-full">
                Изберете план, който работи най-добре за вас и<br/> вашия екип.
                </p>
            </div>
            <ThreePlans type={type}/>
        </div>
    </div>
    );
}

export default PricingList;
