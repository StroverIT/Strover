import React from 'react';
import HeroSection from './HeroSection';
import WhatWeAreSelling from './WhatWeAreSelling';
import WhyChooseUs from './WhyChooseUs';
import FreeThings from './FreeThings';
import PayedThings from './PayedThings';
import WhySiteIsNeeded from './WhySiteIsNeeded';
import WhatIsIncluded from './WhatIsIncluded';


const Website = () => {
    return (
        <section className=''>
            
            <HeroSection/>
            <WhatWeAreSelling/>
            <WhySiteIsNeeded/>
            <WhyChooseUs/>
            <WhatIsIncluded/>
            <FreeThings/>
            <PayedThings/>
        </section>  
    );
}

export default Website;
