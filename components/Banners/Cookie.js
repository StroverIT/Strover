import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { BsCheckLg } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";

const Cookie = ({ setIsCookie, isCookie }) => {
  const router = useRouter();
  const [styles, setStyles] = useState("");

  useEffect(() => {
    if (
      router.pathname == "/" ||
      router.pathname == "/aboutUs" ||
      router.pathname == "/contactUs"
    ) {
      setStyles("bg-primaryBlue");
    } else if (router.pathname == "/digital") {
    } else if (router.pathname == "/web") {
    }
    if (
      router.pathname == "/privacy-policy" ||
      router.pathname == "/terms-and-conditions"
    ) {
    } else if (router.pathname == "/academy") {
    }
  }, [router]);
  return (
    <AnimatePresence mode="wait">
      {isCookie && (
        <motion.section
          initial="initialState"
          animate="animateState"
          exit="exitState"
          transition={{
            duration: 1.5,
          }}
          variants={{
            initialState: {
              opacity: 0,
              y: "100vh",
            },
            animateState: {
              opacity: 1,
              y: "0",
            },
            exitState: {
              opacity: 0,
              y: "100vh",
            },
          }}
          className={` ${styles} fixed bottom-0 w-full`}
        >
          <section className="flex items-center justify-between px-5 py-10 lg:container max-lg:flex-col md:px-14">
            <section>
              <h1 className="text-xl font-semibold text-white">
                Вашата поверителност
              </h1>
              <p className="text-white">
                Ние използваме бисквитки, за да подобрим изживяването ви на
                нашия сайт и да ви покажем подходящи реклами.
              </p>
              <p className="text-white">
                За да научите повече, прочетете нашата{" "}
                <Link href="/privacy-policy" className="pr-1 underline">
                  политика за поверителност
                </Link>
                <Link href="/cookies-policy" className="underline">
                  и политика за бисквитки
                </Link>
              </p>
            </section>
            <section className="font-sans text-lightGreen max-lg:pt-5">
              <button
                aria-label="Приемане на бисквитките"
                type="button"
                onClick={() => setIsCookie(false)}
                className="text-xl flex-center"
              >
                <span>
                  <BsCheckLg />
                </span>
                <span className="pl-1">Добре</span>
              </button>
            </section>
          </section>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Cookie;
