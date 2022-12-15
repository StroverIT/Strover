import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import ChristmasLights from "../../components/Banners/ChristmasLights";
import ChristmasButton from "../../components/promotions/newYear/ChristmasButton";
import ChristmasGifts from "../../components/promotions/newYear/ChristmasGifts";
import ChristmasProshtakylnik from "../../components/promotions/newYear/ChristmasProshtakylnik";
import ChristmasTree from "../../components/promotions/newYear/ChristmasTree";
import SnowingBg from "../../components/promotions/newYear/SnowingBg";
import Navigation from "../../components/web/pricingComp/Navigation";

import { web as links } from "../../data/links";
import newsLetterSend from "../../fetches/newsletterSend";
import { toastSuccess, toastError } from "../../libs/Notifications";

export default function Promotions() {
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
    <>
      <Head>
        <title>Новогодишна промоция</title>

        <meta name="robots" content="noindex, nofollow" />
        <meta charset="UTF-8" />
      </Head>
      <main className="relative  h-screen shadow-inne">
        <section className="bg-primaryBlue h-screen"></section>
        <SnowingBg />

        <section className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-screen w-screen z-10 shadow-inne">
          {/* bg-blue-300  */}
          {/* bg-primaryBlue-650 */}
          {/* bg-primaryBlue-750 */}
          {/* bg-primaryBlue-800 */}
          <div className="relative flex-col  w-full  h-full   lg:rounded-[20px] one-edge-shadow r">
            <ChristmasLights />
            <section className="absolute bottom-[7.6rem] left-40">
              <ChristmasTree />
            </section>

            <section className="absolute top-0 -right-24">
              <div className="w-[800px] h-[580px] relative opacity-30 ">
                <Image src="/testing.svg" alt="inner-polygon" fill />
              </div>
              <div className="absolute lg:top-48 lg:right-40 right-0  bottom-10 -rotate-[40deg] lg:-rotate-[135deg] w-96 h-56 opacity-90">
                <Image
                  src="/logos/white-spider.svg"
                  alt="white spider logo"
                  fill
                />
              </div>
            </section>
            <section className="absolute  -bottom-[0.4rem] z-20 -right-16 ">
              <ChristmasGifts />
            </section>
            <section className="absolute -top-60 left-14">
              <ChristmasProshtakylnik />
            </section>

            <section className="flex-center h-full flex-col  relative z-30  ">
              <section className=" border   shadow-2xl bg-white-transparent-15 p-10 rounded-3xl text-white">
                <section className="mt-6 font-semibold text-center ">
                  <h2 className="text-3xl md:text-5xl">
                    НОВОГОДИШНА ПРОМОЦИЯ!
                  </h2>
                </section>
                <p className="mt-2 text-lg  max-w-4xl text-center md:text-2xl">
                  На 01.01.2023 ще има 50% промоция на услугите в
                  <span className=""> WEB</span> бранда. Офертата е лимитирана и
                  ще продължи една седмица.
                </p>
                <section className="mt-10 flex-col flex-center text-xl max-md:text-sm ">
                  <section className=" flex-center">
                    <div className="relative h-7 w-7">
                      <Image src="/icons/giftbox.png" fill alt="giftBox" />
                    </div>
                    <p className=" text-2xl text-center px-3">
                      Запишете се за офертата, преди ПАЯКА да я открадне!
                      {/* Ако желаете да бъдете известени може да се запишете за нашият
                      бюлетин */}
                      {/* Ако желаете да получите известие и най-новите ни оферти, може
                      да се запишете за нашият бюлетин. */}
                    </p>
                    <div className="relative h-7 w-7">
                      <Image src="/icons/giftbox.png" fill alt="giftBox" />
                    </div>
                  </section>
                  <section className="grid grid-cols-[73%40%] w-full mt-2   py-2">
                    <div className="mt-1 -mr-2">
                      <input
                        type="text"
                        className="w-full py-5 pl-5 text-sm md:text-2xl text-black border-none rounded-bl-xl h-7 md:h-16 placeholder:text-black"
                        placeholder="Email"
                        value={input}
                        onChange={handler}
                      />
                    </div>
                    <ChristmasButton
                      onClick={newsLetterHandler}
                      isLoading={isLoading}
                    />
                  </section>
                </section>
              </section>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}
