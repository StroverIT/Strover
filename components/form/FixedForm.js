import React, { useState } from "react";
import { HiX } from "react-icons/hi";
import HeaderSpider from "../HeaderSpider";
import InputIcons from "./Icons";
import Input from "./Input";
import { motion, AnimatePresence } from "framer-motion";

import { toastSuccess, toastError } from "../../libs/Notifications";
import sendMesage from "../../fetches/sendingMessage";
import { useRouter } from "next/router";

const inputsInit = {
  name: "",
  email: "",
  message: "",
};
export default function FixedForm({
  isOpen,
  setOpen,
  color,
  btnColor,
  bgColor,
  scrollBarThumb,
  scrollBarTrack,
  typePage,
  redirect = false,
}) {
  const router = useRouter();
  const [inputs, setInputs] = useState(inputsInit);
  const [isLoading, setLoading] = useState(false);

  const handler = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Valdiator
    if (!inputs.name || !inputs.email || !inputs.message) {
      setLoading(false);
      return toastError("Моля попълнете всички полета!");
    }

    const data = await sendMesage(inputs, typePage);
    if (data.message) {
      setInputs(inputsInit);
      toastSuccess(data.message);
      setTimeout(() => {
        setOpen(false);
        if (redirect) {
          router.push(redirect);
        }
      }, 1000);
    }
    if (data.error) {
      toastError(data.error);
    }

    setLoading(false);
    // redirect if is a must :D
  };

  return (
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
      className="fixed top-0 left-0 z-[9999] "
    >
      <section className="relative w-screen h-screen ">
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
              top: "50%",
            },
            exitState: {
              bottom: 0,
            },
          }}
          className="absolute z-40 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg lg:w-4/12 left-1/2 top-1/2 flex-center"
        >
          <section className="relative w-screen shadow-2xl lg:w-full">
            <section className="container py-10 lg:px-10 ">
              <HeaderSpider title="Свържи се с нас!" size="text-2xl" />

              <p className="pt-3 text-center">
                Очакваме с нетърпение нашите общи проекти!
              </p>
              <form
                action=""
                className="flex flex-col mt-12 "
                onSubmit={submitHandler}
              >
                <Input
                  placeholder="Вашето име"
                  id="name"
                  val={inputs.name}
                  onChange={handler}
                  iconType="name"
                />
                <Input
                  placeholder="Вашият и-мейл"
                  id="email"
                  val={inputs.email}
                  onChange={handler}
                  iconType="email"
                />
                <div className="relative lg:mb-5">
                  <div className="absolute left-0 z-10 top-2.5 text-lg">
                    <InputIcons iconType="message" />
                  </div>
                  {/* className="w-full h-2 px-4 pt-2 bg-transparent border-b border-white scrollbar scrollbar-thumb-pink-100 scrollbar-track-pink-200 focus:outline-none" */}
                  <textarea
                    className={`w-full h-10 px-6 py-2 leading-tight placeholder-transparent bg-transparent border-b appearance-none placeholder:pl-10 peer text-gray-darker focus:outline-none focus:shadow-outline scrollbar ${scrollBarThumb} ${scrollBarTrack}`}
                    id="message"
                    placeholder="Вашият коментар"
                    name="message"
                    value={inputs.message}
                    onChange={handler}
                  />
                  <label
                    className="absolute   -top-3.5 left-0 block mb-2 text-sm  text-gray-darker peer-placeholder-shown:text-base peer-placeholder-shown:px-6  peer-placeholder-shown:top-1.5 transition-all duration-300"
                    htmlFor="comment"
                  >
                    Вашият коментар
                  </label>
                </div>

                <button
                  className={`${btnColor} px-10 py-1 mt-4 text-white flex-center`}
                >
                  {isLoading ? <div className="loader"></div> : "Изпрати"}
                </button>
              </form>
            </section>
            <div
              className="absolute text-xl cursor-pointer top-2 right-2 text-dark"
              onClick={() => setOpen(false)}
            >
              <HiX />
            </div>
          </section>
        </motion.section>
        <section
          className="absolute top-0 left-0 w-screen h-screen cursor-pointer blury-noProps"
          onClick={() => setOpen(false)}
        ></section>
      </section>
    </motion.section>
  );
}
