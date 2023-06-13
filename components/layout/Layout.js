"use client";

import React from "react";
import HomeNavigation from "./HomeNavigation";
import { usePathname } from "next/navigation";
import { TextContextProvider } from "../../app/Context/text";

const Layout = ({ children, route }) => {
  const router = usePathname();

  return (
    <TextContextProvider>
      {router != "/brands" && <div
        className={`grid h-screen  ${
          router != "/" || router != "/brands"
            ? "grid-cols-2 overlow-hidden"
            : "md:grid-cols-[8%92%] lg:grid-cols-[5%95%]"
        }`}
      >
        <HomeNavigation />
        {(router != "/" ) && <div className="overflow-auto">{children}</div>}
        {(router == "/" ) && children}
      </div>}
      {router == "/brands" && children}
    </TextContextProvider>
  );
};

export default Layout;
