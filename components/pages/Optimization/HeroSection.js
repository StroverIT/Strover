"use client"
import React, { useState } from 'react';
import { InView } from 'react-intersection-observer';
import dynamic from 'next/dynamic'

const DynamicParticles = dynamic(() => import("../../../app/Particles"), )

const HeroSection = () => {

  const [isVisible, setIsVisible] = useState(true)

    return (
        <section class="  relative overflow-hidden">
      <DynamicParticles isVisible={isVisible}/>

      <div class="container pt-64 pb-36">
          <InView as="div" onChange={(inView, entry)=> inView ? setIsVisible(true) : setIsVisible(false)}>
            <h1 className='text-4xl font-bold'>Оптимизация на уебсайт </h1>
            <p className='text-xl mt-2 font-medium'>Изтъкнете се с мрежата на Strover - Изкуството да уловите перфектния уебсайт</p>
          </InView>
      </div>

    </section>
    );
}

export default HeroSection;
