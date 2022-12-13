import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { HiX } from "react-icons/hi";
import newsLetterSend from "../../fetches/newsletterSend";
import { toastError, toastSuccess } from "../../libs/Notifications";
import ChristmasLights from "./ChristmasLights";

const ChirstmasPromotion = ({ isOpen, setOpen }) => {
  const [input, setInputs] = useState("");
  const [isLoading, setLoading] = useState(false);

  const handler = (e) => {
    setInputs(e.target.value);
  };
  const newsLetterHandler = async () => {
    setLoading(true);

    const data = await newsLetterSend({ email: input });
    if (data.message) {
      setInputs("");
      toastSuccess(data.message);
      setOpen(false);
    }
    if (data.error) {
      toastError(data.error);
    }
    setLoading(false);
  };
  return (
    <AnimatePresence mode="wait" initial={false}>
      {isOpen && (
        <motion.section
          key="modal"
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
          className="fixed top-0 left-0 h-screen w-screen z-[60] text-center"
        >
          <div
            className="absolute top-0 left-0 z-10 w-screen h-screen blury-noProps"
            onClick={() => setOpen(false)}
          ></div>
          <motion.section
            transition={{
              type: "spring",

              duration: 0.75,
              bounce: 0.3,
            }}
            variants={{
              initialState: {
                top: "-100vh",
              },
              animateState: {
                top: "0%",
              },
              exitState: {
                bottom: 0,
              },
            }}
            className="relative z-40 w-screen h-screen flex-center"
          >
            <div className="relative flex-col w-full bg-white-50 md:w-3/6 max-lg:h-[90vh] md:h-[40%] md:rounded-3xl">
              <ChristmasLights />
              <button
                type="button"
                aria-label="Затвори прозореца"
                className="absolute top-0 z-10 p-2 text-2xl bg-white rounded-full cursor-pointer right-5 lg:-right-2 lg:-top-2 text-red"
                onClick={() => setOpen(false)}
              >
                <HiX />
              </button>

              <section className="container flex-col h-full max-md:pt-10 max-md:pb-10 flex-center ">
                <section className="mt-6 font-semibold text-center text-primaryBlue-750">
                  <h2 className="text-3xl md:text-4xl">
                    НОВОГОДИШНА ПРОМОЦИЯ!
                  </h2>
                </section>
                <p className="mt-4 text-lg md:text-xl">
                  На 01.01.2023 ще има 50% промоция на услугите в
                  <span className=""> WEB</span> бранда
                </p>
                <section className="flex-col flex-center max-md:text-sm">
                  <p className="mt-4 ">
                    Ако желаете да бъдете известени може да се запишете за
                    нашият бюлетин
                  </p>
                  <section className="flex w-full mt-2 ">
                    <input
                      type="text"
                      className="w-full py-5 pl-5 text-sm text-black border-none rounded-bl-xl h-7 placeholder:text-black"
                      placeholder="Email"
                      value={input}
                      onChange={handler}
                    />
                    <div className="w-full flex-center">
                      <button
                        className={`bg-primaryBlue-400 w-full py-2 rounded-sm flex-center text-white rounded-br-xl `}
                        onClick={newsLetterHandler}
                      >
                        {isLoading ? (
                          <div className="loader"></div>
                        ) : (
                          "Абонирай ме!"
                        )}
                      </button>
                    </div>
                  </section>
                </section>
              </section>
            </div>
          </motion.section>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default ChirstmasPromotion;
