import Head from "next/head";
import React, { useState } from "react";

import Navigation from "../components/otherPagesNav/OffersNav";
import ContactUs from "../components/ContactUs";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import InputIcons from "../components/form/Icons";
import Input from "../components/form/Input";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import Image from "next/legacy/image";
import { FaSpider } from "react-icons/fa";
import HeaderSpider from "../components/HeaderSpider";
import InfoContainer from "../components/otherPagesNav/AboutUs/InfoContainer";
import Link from "next/link";
import FixedForm from "../components/form/FixedForm";
import { AnimatePresence } from "framer-motion";

export default function AboutUs() {
  const [form, openForm] = useState(false);

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handler = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      <Head></Head>
      <Navigation />

      <main className="pb-10 bg-gray-200 pt-36">
        <section className="container flex-col flex-center">
          <HeaderSpider title="Strover Company" size="text-5xl" />
          <p className="max-w-2xl mt-2 text-center">
            Ние сме Strover. Млади, амбициозни и креативни интернет паяци, които
            са готови да се учат от всичко и всички. Плетем мрежата си около
            онлайн търговията, уеб дизайна, онлайн маркетинга и SEO
            оптимизацията, насочени към съществуващи и нови бизнеси.
          </p>
        </section>
        <section className="lg:pt-10">
          <div className="container grid items-center justify-center mt-10 lg:grid-cols-2">
            <div className="container">
              <section className="">
                <div className="flex-center">
                  <HeaderSpider title="ПРИНЦИПИ НА РАБОТА" size="text-3xl" />
                </div>
              </section>

              <p className="mt-4 max-lg:px-10">
                Ние от Strover влагаме лично отношение към всеки отделен проект.
                Винаги завършваме работата си докрай и навреме. За нас това е
                израз на нашата професионална етика и отговорност.
              </p>
            </div>
            <div className="flex-center">
              <div className="relative h-96 w-96 ">
                <Image
                  src="/principles.svg"
                  alt="growth for you and your company"
                  layout="fill"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col lg:mt-28 ">
          {/* FIrst sectionis */}

          <InfoContainer
            image="solution.png"
            p="Винаги свежи, за работата да е приятна с нас, достатъчно креативни, за да представим бизнеса 
            Ви по един специален начин, ние сме постоянно мотивирани, за да Ви предложим решения, от които имате нужда!"
            title="Екип, който намира решения за Вас"
          />
          {/* Seconds section */}
          <InfoContainer
            image="growth.png"
            p="Кога една услуга е успешна? Когато е изградена върху най-новите тенденции и актуални практики, когато е под постоянна анализация, когато се напасва перфектно от ползвателите ѝ. Ние работим непрестанно върху услугите си, за да Ви гарантираме успех!"
            title="Услуги, които Ви гарантират успех"
            isNext={true}
          />

          {/* Third section */}
          <InfoContainer
            image="results.png"
            p="През годинитие научихме много неща за успеха и едно от нещата е че не се създава самостоятелно. 
            Нашият успех е пряко обвързан с този на нашите клиенти. Затова всеки наш проект, ние се фокусираме върху резултатите, към които се стремите!"
            title="Резултати, които винаги сте искали"
            border={true}
          />
        </section>
        <section className="flex-col py-48 flex-center">
          <div className="flex-center">
            <HeaderSpider title="ЕКИПЪТ" size="text-4xl" />
          </div>

          <section className="mt-16 flex-center gap-x-20">
            <div className="flex-col flex-center">
              <div className="relative w-56 h-56 transition-all border-2 rounded-full cursor-pointer hover:scale-110 border-primaryBlue-100 ">
                <Image
                  src="/djulia.jpg"
                  alt="growth for you and your company"
                  layout="fill"
                  className="object-contain rounded-full "
                />
              </div>
              <h3 className="text-xl text-center">Джулия Пеева</h3>
              <p>Дигитален Маркетинг</p>
            </div>
            <div className="flex-col flex-center">
              <div className="relative w-56 h-56 transition-all border-2 rounded-full cursor-pointer hover:scale-110 border-primaryBlue-100 ">
                <Image
                  src="/hrisi2_durt_crop.jpg"
                  alt="growth for you and your company"
                  layout="fill"
                  className="rounded-full bg-blend"
                />
              </div>
              <h3 className="text-xl text-center">Християн Александров</h3>
              <p>Копирайтър</p>
            </div>
          </section>
        </section>
        <section>
          <section className="">
            <div className="flex-center">
              <HeaderSpider title="СВЪРЖИ СЕ С НАС ОЩЕ ДНЕС" size="text-3xl" />
            </div>
          </section>
          <section className="grid mt-10 text-white md:px-10 md:grid-cols-2 xl:grid-cols-4 gap-y-10 gap-x-10">
            {/* first */}
            <Link href="/contactUs" scroll={false}>
              <div className="flex-col h-full py-10 cursor-pointer flex-center bg-primaryBlue-400 rounded-xl">
                <div className="relative w-20 h-20">
                  <Image
                    src="/icons/phone-call.png"
                    alt="phone calling"
                    layout="fill"
                  />
                </div>
                <h3 className="container mt-5 text-lg text-center">
                  ОБАДИ НИ СЕ ЗА КОНСУЛТАЦИЯ
                </h3>
                <hr className="w-10 bg-white " />
                <p className="max-w-sm mt-5 text-sm text-center">
                  Ние от Strover винаги сме готови да ти предоставим
                  професионална консултация.
                </p>
              </div>
            </Link>
            {/* second */}
            <div
              className="flex-col py-10 cursor-pointer flex-center bg-green rounded-xl"
              onClick={() => openForm(true)}
            >
              <div className="relative w-20 h-20">
                <Image
                  src="/icons/mail.png"
                  alt="phone calling"
                  layout="fill"
                />
              </div>
              <h3 className="container mt-5 text-lg text-center">
                Направи запитване по e-mail{" "}
              </h3>
              <hr className="w-10 bg-white " />

              <p className="max-w-xs mt-5 text-sm text-center">
                По-добър си в писането? Прекрасно и ние пишем бързо! Очакваме
                запитването ти с нетърпение.
              </p>
            </div>
            {/* third */}
            <Link href="/offers" scroll={false}>
              <div className="flex-col py-10 flex-center bg-pink-250 rounded-xl">
                <div className="relative w-20 h-20">
                  <Image
                    src="/icons/business-proposal.png"
                    alt="phone calling"
                    layout="fill"
                  />
                </div>
                <h3 className="container mt-5 text-lg text-center">
                  Разгледай актуалните ни предложения
                </h3>
                <hr className="w-10 bg-white " />
                <p className="max-w-sm mt-5 text-sm text-center ">
                  Винаги гледаме да предложим най-доброто на възможно
                  най-евтината цена.
                </p>
              </div>
            </Link>
            {/* Fourth */}
            <div className="flex-col py-10 flex-center bg-orange rounded-xl">
              <div className="relative w-20 h-20">
                <Image src="/icons/job.png" alt="phone calling" layout="fill" />
              </div>
              <h3 className="container mt-5 text-lg text-center">
                Кандидатствай за работа{" "}
              </h3>
              <hr className="w-10 bg-white " />

              <p className="max-w-xs mt-5 text-sm text-center">
                Ти си интересен, мотивиран и креативен човек? Значи си на
                правилното място!
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
              number="+359 87 623 7725"
              scrollBarThumb="scrollbar-thumb-primaryBlue-150"
              scrollBarTrack="scrollbar-track-primaryBlue-500"
            />
          )}
        </AnimatePresence>
      </main>
    </>
  );
}
