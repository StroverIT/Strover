import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

// ICONS

import LogoName from "../logos/LogoNameWhite";
import WhiteSpiderLogoMain from "../logos/WhiteSpiderLogoMain";
import DiffThanHome from "./DiffThanHome";

const HomeNavigation = () => {
  const router = usePathname();
  // transform: rotate(-90deg) translateX(-100%);
  return (
   
          router != "/" && router != "/brands") && <DiffThanHome />

  
};

export default HomeNavigation;
