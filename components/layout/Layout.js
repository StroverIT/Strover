"use client";

import React, { useEffect, useState } from "react";
import HomeNavigation from "./HomeNavigation";
import HomeNavLinks from "./HomeNavLinks";
import Footer from "./Footer";

import { usePathname } from "next/navigation";
import { TextContextProvider, } from "../../app/Context/text";

import BuyMenu from "../Buy/Index"

const Layout = ({ children, route }) => {
  
  const router = usePathname();
  const [isMobile, setMobile] = useState(null)

  const onePageCond =
    router != "/" &&
    router != "/brands" &&
    router != "/checkout-thanks" &&
    router != "/plan"
    
    &&
    !router.includes("/service");
    useEffect(()=>{ 
      const x = window.matchMedia("(min-width: 1250px)")
      if(!x.matches) setMobile(false)
      else setMobile(true)
    },[])
  return (
    <>
      <TextContextProvider>
      <BuyMenu/>
        {isMobile != null && <main className="relative z-50 w-screen">
          {isMobile && <div className="max-xl:hidden">
      
              <>
                <HomeNavLinks />
                <div
                  className={`grid  items-start  ${
                    onePageCond ? "xl:grid-cols-2 " : ""
                  }`}
                >
                  <HomeNavigation onePageCond={onePageCond} />
                  {onePageCond ? (
                    <div className={`${(!router.includes("/projects/") && router !="/contactUs") && "mt-36"} children` } id="children">
                      {children}
                    </div>
                  ) : (
                    <div id="children">{children}</div>
                  )}
                </div>
              </>
      
            {router == "/brands" && <div id="children">{children}</div>}
          </div>}
          {/* Telephone */}
        {!isMobile &&  <div className="">
      
              <>
                <HomeNavLinks isMobile={true}/>
      
                  <HomeNavigation onePageCond={onePageCond} />
                  {onePageCond ? (
                    <div className={`${(!router.includes("/projects/") && router !="/contactUs") && "mt-36"} children` } id="childrenMobile">
                      {children}
                    </div>
                  ) : (
                    <div id="childrenMobile">{children}</div>
                  )}
      
              </>
      
      
          </div>}
        </main>}
      </TextContextProvider>
    {router != "/contactUs" &&   <Footer />}
    </>
  );
};

export default Layout;
