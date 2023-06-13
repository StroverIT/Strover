import React from 'react';
import PricingList from "../../Pricings/ThreePricings";

const Plans = () => {
    return (
        <section className="relative z-10 min-h-screen px-48 break-words bg-[hsl(220,46%,50%)] min-w-screen">
        <PricingList />
        <div className="pb-10 text-lg font-semibold text-center text-white">
          * Изготвяме и индивидуални планове спрямо вашите нужди и бизнес
          структура
        </div>
      </section>
    );
}

export default Plans;
