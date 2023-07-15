import React from 'react';
import PricingList from '../../Pricings/ThreePricings';

const Plans = () => {
    return (
        <section className="relative z-10 min-h-screen xl:px-48 break-words bg-[hsl(220,46%,50%)] min-w-screen">
        {/* <DynamicPromoCountDown/> */}
      <PricingList type="maintance"/>
      <p className="pb-10 text-lg font-semibold text-center text-white">
        * Създаваме и индивидуални планове спрямо вашите нужди и цели.
      </p>
    </section>
    );
}

export default Plans;
