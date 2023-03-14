import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { BsCheckLg } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Cookie = ({ setIsCookie, isCookie }) => {
  const { t } = useTranslation("common");

  const router = useRouter();
  const [styles, setStyles] = useState("");
  const [btnStyle, setBtnStyle] = useState("bg-green-150");

  useEffect(() => {
    setStyles("bg-primaryBlue");
    if (
      router.pathname == "/" ||
      router.pathname == "/company/aboutUs" ||
      router.pathname == "/company/contactUs"
    ) {
      setStyles("bg-primaryBlue");
    } else if (router.pathname == "/brands/digital") {
      setStyles("bg-pink-200");
      setBtnStyle("bg-green-100");
    } else if (router.pathname == "/web") {
      setStyles("bg-primaryBlue");
    }
    if (
      router.pathname == "/legal/privacy-policy" ||
      router.pathname == "/legal/terms-and-conditions" ||
      router.pathname == "/legal/cookie-policy"
    ) {
      setStyles("bg-primaryBlue");
    } else if (router.pathname == "/brands/academy") {
      setStyles("bg-primaryBlue");
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
          className={` ${styles} fixed bottom-0 w-full z-[999999]`}
        >
          <section className="flex items-center justify-between px-5 py-10 lg:container max-lg:flex-col md:px-14 gap-y-10">
            <section>
              <h1 className="text-2xl font-semibold text-white">
                {t("Вашата поверителност")}
              </h1>
              <p className="text-white">
                {t(
                  "Ние използваме бисквитки, за да подобрим изживяването ви на нашия сайт и да ви покажем подходящи реклами."
                )}
              </p>
              <p className="text-white">
                {t("За да научите повече, прочетете нашата")}
                <Link href="/legal/privacy-policy" className="pl-1 underline">
                  {t("политика за поверителност")}
                </Link>
                <span className="px-1">{t("и")}</span>
                <Link href="/legal/cookie-policy" className="underline">
                  {t("политика за бисквитки")}
                </Link>
              </p>
            </section>
            <section
              className={`font-sans ${btnStyle} text-white rounded-full px-10 py-4 `}
            >
              <button
                aria-label="Приемане на бисквитките"
                type="button"
                onClick={() => setIsCookie(false)}
                className="flex-center"
              >
                <span>
                  <BsCheckLg />
                </span>
                <span className="pl-1 font-semibold">{t("Разбрах")}</span>
              </button>
            </section>
          </section>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Cookie;
