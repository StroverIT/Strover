import React from 'react';
import Benefits from "../../../app/Benefits";

const AllFunctions = () => {
    return (
        <section className="relative z-10 min-h-screen  ml-24 break-words  min-w-screen bg-[#f6f9fc] pb-10">
        <div className="py-10 text-center">
          <div className='py-10'>
            <h2 className="text-3xl font-medium">
              Всички функции, от които се нуждаете
            </h2>
            <p className="mt-3">
              Вижте какво служителите от STROVER могат да направят за Вас
            </p>
          </div>
          <Benefits />
        </div>
      </section>
    );
}

export default AllFunctions;
