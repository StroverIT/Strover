"use client"
import Image from 'next/image';


import React, {useEffect, useRef} from "react";

import { useAnimate, useInView, stagger  } from "framer-motion";

const QuestionImage = () => {

    const [container, animate] = useAnimate()
  const isInView = useInView(container)
  
  useEffect(()=>{
        
    if(isInView){


      animate(container.current, {x: ["-4vw", "0vw"],opacity: ["0%", "100%"], },  { duration: 0.5, delay: stagger(0.2),  ease: [.32, .23, .4, .9]  })


    }

// eslint-disable-next-line react-hooks/exhaustive-deps
}, [isInView])

    return (
        <div className='xl:absolute max-xl:-ml-2 -left-2 top-10' ref={container}>
        <div className='relative rotate-90 w-44 h-44'>
          <Image src="/ecommerceIcons/problem.png" alt="justTesting" fill className='object-contain'/>
        </div>
      </div>
    );
}

export default QuestionImage;
