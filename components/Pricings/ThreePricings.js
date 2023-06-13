import React from 'react';
import ThreePlans from './ThreePlans';



const PricingList = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
        <div className="">
            <div className="font-semibold text-center">
                <h1 className="text-5xl">
                    <span className="tracking-wide text-primary-100">Гъвкави </span>
                    <span className='text-white'>Планове</span>
                </h1>
                <p className="w-full px-8 pt-6 text-xl font-normal text-white md:w-full">
                Изберете план, който работи най-добре за вас и<br/> вашия екип.
                </p>
            </div>
            <ThreePlans/>
        </div>
    </div>
    );
}

export default PricingList;
