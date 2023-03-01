import { useTranslation } from "next-i18next";
import Head from "next/head";
import React, { useState } from "react";
import Layout from "../../components/layouts/Layout";

import Navigation from "../../components/otherPagesNav/OffersNav";
import newsLetterSend from "../../fetches/newsletterSend";
import { toastError, toastSuccess } from "../../libs/Notifications";

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
      <Head>
        <title>Strover - Оферти - Вижте най-актуалните ни предложения!</title>
        <meta
          name="description"
          content="Strover Company оферти. Предлагаме възжмоно най-доброто на възможно най-евтината цена. Запишете се да не изпускате нашите оферти."
        />
      </Head>

      {/* Main */}
      <Navigation />

      <section className="container my-36">
        <section>
          <h1 className="text-3xl">ПРЕДЛОЖЕНИЯ И ОФЕРТИ</h1>
          <h2 className="text-2xl text-gray-150">
            Възползвайте се от нашите сезонни кампании и активности за бизнеса
            Ви
          </h2>
        </section>
        <section className="p-10 mt-10 bg-gray">
          <h1 className="mb-3 text-xl">
            Абонирай се за последните ни новини и промоции
          </h1>
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
            <h2 className="text-lg text-center">Няма създадени оферти!</h2>
          </div>
        </section>
      </section>
    </>
  );
}

Offers.getLayout = (page) => (
  <Layout useTranslation={useTranslation}>{page}</Layout>
);
