import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import FixedForm from "../form/FixedForm";
import HeaderSpider from "../HeaderSpider";
import { useTranslation } from "next-i18next";
const ContactUsTodayComp = ({ typePage = "contact us page" }) => {
  const trans = "common";
  const { t } = useTranslation(trans);

  const [form, openForm] = useState(false);

  return (
    <>
      <section>
        <section className="">
          <div className="flex-center">
            <HeaderSpider
              title="СВЪРЖИ СЕ С НАС ОЩЕ ДНЕС"
              size="text-3xl"
              trans={trans}
            />
          </div>
        </section>
        <section className="grid mt-10 text-white md:px-10 md:grid-cols-2 xl:grid-cols-4 gap-y-10 gap-x-10">
          {/* first */}
          <Link href="/company/contactUs" scroll={false}>
            <div className="flex-col h-full py-10 cursor-pointer flex-center bg-primaryBlue-400 rounded-xl">
              <div className="relative w-20 h-20">
                <Image src="/icons/phone-call.png" alt="phone calling" fill />
              </div>
              <h3 className="container mt-5 text-lg text-center">
                {t("ОБАДИ НИ СЕ ЗА КОНСУЛТАЦИЯ")}
              </h3>
              <hr className="w-10 bg-white " />
              <p className="max-w-sm mt-5 text-sm text-center">
                {t(
                  "Ние от Strover винаги сме готови да ти предоставим професионална консултация."
                )}
              </p>
            </div>
          </Link>
          {/* second */}
          <div
            className="flex-col py-10 cursor-pointer flex-center bg-green rounded-xl"
            onClick={() => openForm(true)}
          >
            <div className="relative w-20 h-20">
              <Image src="/icons/mail.png" alt="phone calling" fill />
            </div>
            <h3 className="container mt-5 text-lg text-center">
              {t("Направи запитване по e-mail")}
            </h3>
            <hr className="w-10 bg-white " />

            <p className="max-w-xs mt-5 text-sm text-center">
              {t(
                "По-добър си в писането? Прекрасно и ние пишем бързо! Очакваме запитването ти с нетърпение."
              )}
            </p>
          </div>
          {/* third */}
          <Link href="/deals/offers" scroll={false}>
            <div className="flex-col py-10 flex-center bg-pink-250 rounded-xl">
              <div className="relative w-20 h-20">
                <Image
                  src="/icons/business-proposal.png"
                  alt="phone calling"
                  fill
                />
              </div>
              <h3 className="container mt-5 text-lg text-center">
                {t("Разгледай актуалните ни предложения")}
              </h3>
              <hr className="w-10 bg-white " />
              <p className="max-w-sm mt-5 text-sm text-center ">
                {t(
                  "Винаги гледаме да предложим най-доброто на възможно най-евтината цена."
                )}
              </p>
            </div>
          </Link>
          {/* Fourth */}
          <div className="flex-col py-10 flex-center bg-orange rounded-xl">
            <div className="relative w-20 h-20">
              <Image src="/icons/job.png" alt="phone calling" fill />
            </div>
            <h3 className="container mt-5 text-lg text-center">
              {t("Кандидатствай за работа")}
            </h3>
            <hr className="w-10 bg-white " />

            <p className="max-w-xs mt-5 text-sm text-center">
              {t(
                "Ти си интересен, мотивиран и креативен човек? Значи си на правилното място!"
              )}
            </p>
          </div>
        </section>
      </section>
      <AnimatePresence mode="wait" initial={false}>
        {form && (
          <FixedForm
            isOpen={form}
            setOpen={openForm}
            color="border-blue-50"
            btnColor="bg-blue-50"
            bgColor="bg-blue-200"
            scrollBarThumb="scrollbar-thumb-primaryBlue-150"
            scrollBarTrack="scrollbar-track-primaryBlue-500"
            typePage={typePage}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactUsTodayComp;
