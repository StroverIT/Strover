import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { HiX } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "next-i18next";
export default function Links({ data, hambSetOpen, hambOpen }) {
  const { t } = useTranslation("common");

  const router = useRouter();

  const [open, setOpen] = useState(false);
  const handleNav = (hash) => {
    setOpen(false);
    if (hambOpen) {
      hambSetOpen(false);
    }
    let timer;
    if (hash) {
      const item = document.querySelector(`#${hash}`);
      timer = setTimeout(() => {
        if (item) {
          const where = {
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          };
          item.scrollIntoView(where);
        }
      }, 500);
    }
    return () => clearTimeout(timer);
  };

  useEffect(() => {
    const html = document.querySelector("html");

    if (open) {
      html.style.overflowY = "hidden";
    }
    if (!open) {
      html.style.overflowY = "auto";
    }
  }, [open]);

  useEffect(() => {
    setOpen(false);

    const html = document.querySelector("html");

    html.style.overflowY = "auto";
  }, [router.pathname]);

  return (
    <li>
      <nav className="cursor-pointer" onClick={() => setOpen(true)}>
        {t("Съдържание")}
      </nav>
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
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
            className="absolute top-0 left-0 z-50 w-screen h-screen overflow-auto bg-primaryBlue-200"
          >
            <div className="relative lg:container max-lg:px-10 ">
              <div
                className="absolute right-0 hidden text-4xl cursor-pointer lg:block top-10"
                onClick={() => setOpen(false)}
              >
                <HiX />
              </div>
              <div className="h-full flex-center ">
                <ul className="flex flex-col py-28 gap-y-4">
                  {data.map((data, index) => {
                    return (
                      <li key={data.key} className="cursor-pointer">
                        <a onClick={() => handleNav(data.link)}>
                          {index + 1}. {t(data.text)}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
