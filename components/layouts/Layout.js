import React, { useEffect, useState } from "react";

import Navigation from "../indexPage/Navigation";

import Footer from "./Footer";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  const [bgColor, setBgColor] = useState();

  useEffect(() => {
    const body = document.querySelector("body");
    body.removeAttribute("class");

    if (router.pathname == "/") {
      body.classList.add("index-bg");
    } else if (router.pathname == "/digital") {
      body.classList.add("digital-bg");
    } else if (router.pathname == "/web") {
      body.classList.add("web-bg");
    }
  }, [router]);
  return (
    <div
      className={`flex flex-col justify-between min-h-screen h-full ${bgColor}`}
    >
      {children}
      <Footer />
    </div>
  );
}
