"use client"

import React, {useEffect} from "react";

import BenefitsHomeData from '../data/BenefitsHomeData';
import Card from './Card';


import { useAnimate, useInView, stagger  } from "framer-motion";


const Benefits = () => {
    
  const [container, animate] = useAnimate()
  const isInView = useInView(container)
  
  useEffect(()=>{
        
    if(isInView){


      animate("section", {y: ["10vw", "0vw"],opacity: ["0%", "100%"], },  { duration: 0.3, delay: stagger(0.1),  ease: [.32, .23, .4, .9]  })


    }

}, [isInView])
    return (
        <div className='container grid grid-cols-2 gap-10 mt-10' ref={container}>
            {BenefitsHomeData.map(item=>{
                return <Card title={item.title} paragraph={item.paragraph} key={item.title} icon={item.icon} imageUrl={item.imageUrl}/>
            })}
        </div>
    );
}

export default Benefits;


