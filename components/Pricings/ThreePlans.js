"use client";
import React, {useEffect, useRef} from "react";

import { useAnimate, useInView } from "framer-motion";

// import PromoPricing from "./PromoPricing"
import getData from "../../data/Plans";

import {useGlolContext} from "../../app/Context/text"

// Plans
import Corporate from "./threePlansComps/Corporate"
import Middle from "./threePlansComps/Middle"
import Small from "./threePlansComps/Small"

const ThreePlans = ({type}) => {

  const {setOpen, setData} = useGlolContext()


  const data = getData({type})
  
  const menuController = (isOpen, plan)=>{

  const planData = getData({type, isFullData: true, plan})

   setOpen(isOpen)
    setData({
      typeService: type,
      typePlan: plan,
      planData
    })
  }
    const container = useRef(null)
    const middle = useRef(null)
    const smallBusiness = useRef(null)
  

    const isInView = useInView(container)

    const [corporate, corpAnimate] = useAnimate()
    
    useEffect(()=>{
        
        if(isInView){


            corpAnimate(corporate.current, {x: ["20vw", "0vw"],opacity: ["0%", "100%"], },  { duration: 0.5, delay: 0.5,  ease: [.32, .23, .4, .9]  })
            corpAnimate(smallBusiness.current, {x: ["-20vw", "0vw"],opacity: ["0%", "100%"], },  { duration: 0.5, delay: 0.5,  ease: [.32, .23, .4, .9]  })


        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isInView])
  return (
    <>
      <div className="flex-row pt-14 xl:pt-24 max-xl:grid max-xl:grid-cols-1 max-xl:gap-y-10 xl:flex" ref={container }>
        {/* <!-- Corporate Card --> */}
        <Corporate data={data} corporate={corporate} menuController={menuController} type={type}/>
        {/* <!-- Middle Card --> */}
        <Middle data={data} middle={middle} menuController={menuController} type={type}/>
        
        {/* <!-- Small business card --> */}
        <Small data={data} smallBusiness={smallBusiness} menuController={menuController} type={type}/>
       
      </div>
      
    </>
  );
};

export default ThreePlans;
