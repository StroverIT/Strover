import React, { useEffect, useState } from "react";

import Footer from "./Footer";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import ChristmasLights from "../Banners/ChristmasLights";
import newsLetterSend from "../../fetches/newsletterSend";
import { HiX } from "react-icons/hi";
import ChirstmasPromotion from "../Banners/ChirstmasPromotion";
import { ToastContainer } from "react-toastify";
import Cookie from "../Banners/Cookie";

export default function Layout({ children, useTranslation }) {
  const router = useRouter();
  const [christmasCookie, setChristmasCookie] = useState(false);
  const [isCookie, setIsCookie] = useState(false);

  useEffect(() => {
    const isFound = localStorage.getItem("iknowyou");

    if (!isFound) {
      setTimeout(() => {
        setIsCookie(true);
      }, 5000);
    }
  }, []);
  const cookieHandler = () => {
    localStorage.setItem("iknowyou", "true");
    setIsCookie(false);
  };
  // const christmasHandler = (type) => {
  //   if (type == false) {
  //     setChristmasCookie(false);
  //     localStorage.setItem("christmasPromotion", "true");
  //   }
  // };
  useEffect(() => {
    const body = document.querySelector("body");
    const html = document.querySelector("html");

    body.removeAttribute("class");
    html.style.scrollBehavior = "auto";
    html.classList.remove("index", "web", "digital");

    if (
      router.pathname == "/" ||
      router.pathname == "/company/aboutUs" ||
      router.pathname == "/company/contactUs"
    ) {
      body.classList.add("index-bg");
      html.classList.add("index");
    } else if (router.pathname == "/brands/digital") {
      body.classList.add("digital-bg");
      html.classList.add("digital");
    } else if (router.pathname == "/brands/web") {
      body.classList.add("web-bg");
      html.classList.add("web");
    }
    if (router.pathname.includes("/legal")) {
      html.classList.add("index");
    } else if (router.pathname == "/brands/academy") {
      body.classList.add("bg-academy");
    }

    if (router.pathname.includes("/web")) {
      html.classList.add("web");
    }
  }, [router]);
  useEffect(() => {
    const html = document.querySelector("html");
    html.style.scrollBehavior = "smooth";

    const isFound = localStorage.getItem("christmasPromotion");

    if (!isFound && router.pathname != "/web/promotions") {
      setTimeout(() => {
        setChristmasCookie(true);
      }, 8000);
    }
  }, []);
  return (
    <>
      {/* <ChirstmasPromotion isOpen={christmasCookie} setOpen={christmasHandler} /> */}
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
          {router.pathname != "/web/promotions" &&
            router.pathname != "/web/thanks-christmas" && (
              <Footer useTranslation={useTranslation} />
            )}
        </motion.div>
      </AnimatePresence>
      <ToastContainer />
      <Cookie
        setIsCookie={cookieHandler}
        isCookie={isCookie}
        useTranslation={useTranslation}
      />
    </>
  );
}
