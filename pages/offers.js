import Head from "next/head";
import React, { useState } from "react";

import Navigation from "../components/otherPagesNav/OffersNav";
import newsLetterSend from "../fetches/newsletterSend";
import { toastError, toastSuccess } from "../libs/Notifications";

export default function Offers() {
  const [emailVal, setEmailVal] = useState("");
  const [isLoading, setLoading] = useState(false);

  const newsLetterHandler = async () => {
    setLoading(true);

    const data = await newsLetterSend({ email: emailVal });
    if (data.message) {
      setEmailVal("");
      toastSuccess(data.message);
    }
    if (data.error) {
      toastError(data.error);
    }

    setLoading(false);
  };
  return (
    <>
      <Head></Head>

      {/* Main */}
      <Navigation />

      <section className="container my-36">
        <section>
          <h3 className="text-3xl">ПРЕДЛОЖЕНИЯ И ОФЕРТИ</h3>
          <h5 className="text-2xl text-gray-150">
            Възползвайте се от нашите сезонни кампании и активности за бизнеса
            Ви
          </h5>
        </section>
        <section className="p-10 mt-10 bg-gray">
          <h3 className="mb-3 text-xl">
            Абонирай се за последните ни новини и промоции
          </h3>
          <div className="lg:grid lg:grid-cols-[40%20%]">
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="w-full py-2 pl-5"
              value={emailVal}
              onChange={(e) => setEmailVal(e.target.value)}
            />
            <button
              className="w-full text-white bg-blue-50 max-lg:py-2 max-lg:mt-2 flex-center"
              onClick={newsLetterHandler}
            >
              {isLoading ? <div className="loader"></div> : "Абонирай ме!"}
            </button>
          </div>
        </section>
        <section className="mt-5">
          <div className="container">
            <h5 className="text-lg text-center">Няма създадени оферти!</h5>
          </div>
        </section>
      </section>
    </>
  );
}
