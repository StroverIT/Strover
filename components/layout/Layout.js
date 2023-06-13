"use client";

import React from "react";
import HomeNavigation from "./HomeNavigation";
import HomeNavLinks from "./HomeNavLinks";
import Footer from "./Footer"

import { usePathname } from "next/navigation";
import { TextContextProvider } from "../../app/Context/text";

const Layout = ({ children, route }) => {
  const router = usePathname();

  return (
    <TextContextProvider>
      <main className="relative z-50">
        {router != "/brands" && (
          <>
            <HomeNavLinks />
            <div
              className={`grid  items-start  ${
                router != "/" || router != "/brands"
                  ? "grid-cols-2 "
                  : "md:grid-cols-[8%92%] lg:grid-cols-[5%95%]"
              }`}
            >
              <HomeNavigation />
              {(router != "/" && router != "/brands") ? <div className={`${router != "/contactUs" && "mt-36"}`}>{children} </div> : children  }
            </div>
          </>
        )}
        {router == "/brands" && children}
      <Footer/>

      </main>
    </TextContextProvider>
  );
};

export default Layout;
