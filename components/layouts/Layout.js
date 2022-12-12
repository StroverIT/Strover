import React, { useEffect } from "react";

import Footer from "./Footer";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

export default function Layout({ children }) {
  const router = useRouter();

  useEffect(() => {
    const body = document.querySelector("body");
    const html = document.querySelector("html");

    body.removeAttribute("class");
    html.style.scrollBehavior = "auto";
    html.classList.remove("index", "web", "digital");

    if (
      router.pathname == "/" ||
      router.pathname == "/aboutUs" ||
      router.pathname == "/contactUs"
    ) {
      body.classList.add("index-bg");
      html.classList.add("index");
    } else if (router.pathname == "/digital") {
      body.classList.add("digital-bg");
      html.classList.add("digital");
    } else if (router.pathname == "/web") {
      body.classList.add("web-bg");
      html.classList.add("web");
    }
    if (
      router.pathname == "/privacy-policy" ||
      router.pathname == "/terms-and-conditions"
    ) {
      html.classList.add("index");
    } else if (router.pathname == "/academy") {
      body.classList.add("bg-academy");
    }

    if (router.pathname.includes("/web")) {
      html.classList.add("web");
    }
  }, [router]);
  useEffect(() => {
    const html = document.querySelector("html");
    html.style.scrollBehavior = "smooth";
  }, []);
  return (
    <>
      <AnimatePresence
        mode="wait"
        onExitComplete={() => {
          if (typeof window !== "undefined") {
            const html = document.querySelector("html");
            html.style.scrollBehavior = "smooth";
            window.scrollTo({ top: 0 });
          }
        }}
      >
        <motion.div
          key={router.route}
          initial="initialState"
          animate="animateState"
          exit="exitState"
          transition={{
            duration: 0.75,
          }}
          variants={{
            initialState: {
              opacity: 0,
              clipPath: "polygon(0 0,100% 0,100% 100%, 0% 100%)",
            },
            animateState: {
              opacity: 1,
              clipPath: "polygon(0 0,100% 0,100% 100%, 0% 100%)",
            },
            exitState: {
              opacity: 0,
              clipPath: "polygon(50% 0,50% 0,50% 100%, 50% 100%)",
            },
          }}
          className="base-page-size flex flex-col justify-between min-h-screen h-full ${bgColor}"
        >
          {children}
          <Footer />
        </motion.div>
      </AnimatePresence>
    </>
  );
}
