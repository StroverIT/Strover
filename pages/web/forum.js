import { AnimatePresence } from "framer-motion";
import Head from "next/head";

import { useEffect, useState } from "react";
import ContactUsTodayComp from "../../components/Banners/ContactUsTodayComp";
import FixedForm from "../../components/form/FixedForm";
import HeaderSpider from "../../components/HeaderSpider";
import Navigation from "../../components/web/pricingComp/Navigation";

const Forum = () => {
  const [form, openForm] = useState(false);
  const [typeForm, setTypeForm] = useState(null);

  const formHandler = (type) => {
    setTypeForm(type);
    openForm(true);
  };
  useEffect(() => {
    console.log(typeForm);
  }, [typeForm]);
  return (
    <>
      <Head>
        <title>Създаване на професионален форум</title>
        <meta
          name="description"
          content="Strover Company форум. Ще създадем платформа, чрез която потребителите ще имат възможност да обсъждат теми, качват съдържание независимо. Най-хубавото е че Вие имате пълен контрол."
        />
      </Head>
      <Navigation />
      <main className="pt-48 pb-20 bg-gray-200 ">
        <div className="mb-10">
          <section className="container">
            <div className="flex-col flex-center">
              <HeaderSpider title="Изработка на Форум" size="text-4xl" />
            </div>
            <section className="flex-col pt-6 flex-center">
              <section className="max-w-2xl">
                <p className="">
                  Нашите интернет паяци, ще създават платформа, чрез която
                  потребителите ще имат възможността да:
                </p>
                <ul className="list-disc ml-5">
                  <li>Обсъждат теми </li>
                  <li>Качват съдържание независимо</li>
                  <li>
                    Създадат персонализиран акаунт (любими, известия за
                    отговори, биографии на профили и др.)
                  </li>
                </ul>
                <p className="mt-1">
                  Като Вие и Вашите модератори ще имате пълен контрол, над това
                  какво се пише, какво се качва и какви са правилата в
                  платформата.
                </p>
                <section className="mt-5">
                  Цената за стандартна изработка на Форум е по договаряне. При
                  уточняване на всички параметри и постигане на съгласие се
                  подписва договор за изработка. Възможността за добавяне на
                  функции е без ограничения.
                </section>
                <section>
                  За повече информация се свържете с нас, като можете да ни
                  изпратите запитване или директно да ни се обадите по телефона
                  за оферта.
                  <p className="text-center">
                    * Обадете се на &quot;Web&quot; телефона за връзка!
                  </p>
                </section>
              </section>
            </section>
          </section>

          <section className="mt-10 max-lg:container lg:px-40"></section>
        </div>
        <ContactUsTodayComp typePage="e-commerce web" />
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
              typePage={typeForm}
              redirect="/web/thanks"
            />
          )}
        </AnimatePresence>
      </main>
    </>
  );
};

export default Forum;

function Container({ children }) {
  return (
    <div className="flex flex-col h-full p-10 pt-5 bg-white shadow-xl rounded-xl">
      {children}
    </div>
  );
}
function Title({ children }) {
  return <h3 className="mb-2 text-xl text-center">{children}</h3>;
}
function Button({ bgColor, onClick }) {
  return (
    <div className="pt-2 flex-center">
      <button
        className={`px-20 py-4 text-white rounded-full ${bgColor} `}
        onClick={onClick}
      >
        Изберете
      </button>
    </div>
  );
}
function Paragraph({ children }) {
  return (
    <div className="flex-center">
      <p className="max-w-sm text-sm text-center ">{children}</p>
    </div>
  );
}
function Price({ children }) {
  return <h5 className="py-5 text-4xl text-center">{children}</h5>;
}
function Ul({ children }) {
  return <ul className="mt-5 ml-10 list-disc ">{children}</ul>;
}
