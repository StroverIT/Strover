import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ChristmasLights from "../../components/Banners/ChristmasLights";
import Layout from "../../components/layouts/Layout";
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
  const router = useRouter();

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
      localStorage.setItem("christmasPromotion", "true");

      router.push("/web/thanks-christmas");
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
      <main className="relative h-screen ">
        <section className="h-screen border-b-8 bg-primaryBlue border-primaryBlue-500"></section>
        <SnowingBg />

        <section className="absolute z-10 w-screen h-screen -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 shadow-inne">
          {/* bg-blue-300  */}
          {/* bg-primaryBlue-650 */}
          {/* bg-primaryBlue-750 */}
          {/* bg-primaryBlue-800 */}
          <div className="relative flex-col  w-full  h-full   lg:rounded-[20px] one-edge-shadow r">
            <ChristmasLights />
            <section className="absolute bottom-[7.6rem] left-40 hidden md:block">
              <ChristmasTree />
            </section>

            <section className="absolute top-0 -right-28">
              <div className="w-[800px] h-[580px] relative opacity-30 ">
                <Image src="/testing.svg" alt="inner-polygon" fill />
              </div>
              {/* Spider */}
              <div className="absolute top-0 md:top-48 md:right-40 right-0  bottom-10 -rotate-[135deg] md:-rotate-[40deg] lg:-rotate-[135deg] w-96 h-40 md:h-56 opacity-20 md:opacity-90">
                <Image
                  src="/logos/white-spider.svg"
                  alt="white spider logo"
                  fill
                />
              </div>
            </section>
            <section className="absolute bottom-0 z-20 -right-16 opacity-80 md:opacity-100">
              <ChristmasGifts />
            </section>
            <section className="absolute hidden -top-60 left-14 md:block">
              <ChristmasProshtakylnik />
            </section>

            <section className="relative z-30 flex-col h-full flex-center ">
              <section className="container flex-col p-2 text-white border shadow-2xl flex-center bg-white-transparent-15 md:p-10 rounded-3xl">
                <section className="mt-6 font-semibold text-center ">
                  <h2 className="text-xl md:text-5xl">НОВОГОДИШНА ПРОМОЦИЯ!</h2>
                </section>
                <p className="max-w-4xl mt-2 text-sm text-center md:text-2xl">
                  На 01.01.2023 ще има 50% промоция на услугите в
                  <span className=""> WEB</span> бранда. Офертата е лимитирана и
                  ще продължи една седмица.
                </p>
                <section className="flex-col mt-4 text-xl md:mt-10 flex-center max-md:text-sm ">
                  <section className=" flex-center">
                    <div className="relative hidden h-7 w-7 md:block">
                      <Image src="/icons/giftbox.png" fill alt="giftBox" />
                    </div>
                    <p className="px-3 text-center md:text-2xl">
                      Запишете се за офертата, преди ПАЯКА да я открадне!
                      {/* Ако желаете да бъдете известени може да се запишете за нашият
                      бюлетин */}
                      {/* Ако желаете да получите известие и най-новите ни оферти, може
                      да се запишете за нашият бюлетин. */}
                    </p>
                    <div className="relative hidden h-7 w-7 md:block">
                      <Image src="/icons/giftbox.png" fill alt="giftBox" />
                    </div>
                  </section>
                  <section className="grid  md:grid-cols-[73%40%] w-full mt-2   py-2">
                    <div className="mt-1 -mr-2">
                      <input
                        type="text"
                        className="w-full py-5 pl-5 text-sm text-black border-none md:text-2xl rounded-bl-xl h-7 md:h-16 placeholder:text-black"
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
Promotions.getLayout = (page) => (
  <Layout useTranslation={useTranslation}>{page}</Layout>
);
