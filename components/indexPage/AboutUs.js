import Image from "next/legacy/image";
import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";

import Line from "./Line";
const divVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",

      duration: 2,
    },
  },
};
export default function AboutUs() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [secondCont, setSecondCont] = useState(false || windowWidth < 1280);

  const [thirdCont, setThirdCont] = useState(false || windowWidth < 1280);
  useEffect(() => {
    const w = window.innerWidth;
    setWindowWidth(w);
  }, []);
  return (
    <section
      className="container relative flex flex-col min-h-screen my-16 text-center md:my-80"
      id="aboutUs"
    >
      <div className="hidden xl:flex">
        <Line setSecondCont={setSecondCont} setThirdCont={setThirdCont} />
      </div>

      <section className="zeroToXl:flex-col zeroToXl:flex-center zeroToXl:gap-y-10">
        <div className="xl:flex-center flex-col xl:mr-10 xl:absolute xl:-top-20 xl:left-[380px]">
          <h5 className="mb-2 text-xl md:text-3xl font-medium text-primaryBlue-450">
            КОИ СМЕ НИЕ?
          </h5>
          <p className="max-w-xl max-md:container text-lg leading-8 text-white max-md:text-justify hypens-auto ">
            Ние сме Strover, млади, амбициозни и креативни интернет паяци, които
            са готови да се учат от всичко и всички. Плетем мрежата си около
            онлайн търговията, уеб дизайна, онлайн маркетинга и SEO
            оптимизацията, насочени към съществуващи и нови бизнеси.
          </p>
        </div>
        {secondCont && (
          <motion.div
            variants={divVariant}
            initial="hidden"
            animate="visible"
            className="xl:flex-center flex-col xl:absolute xl:top-[400px] xl:left-[250px]"
          >
            <h5 className="mb-2 text-xl md:text-3xl font-medium text-primaryBlue-450">
              КАКВО ЩЕ ПОЛУЧИТЕ?
            </h5>
            <p className="max-w-xl max-md:container text-lg leading-8 text-white hypens-auto max-md:text-justify">
              Комплексна услуга от хора, които са специалисти в съответните
              сфери: дигиталния маркетинг, компютърните науки и онлайн
              продажбите. Ние ще Ви предоставим цялостни дигитални решения за
              развитието на бранда Ви и достигането му до ИДЕАЛНИТЕ КЛИЕНТИ.
            </p>
          </motion.div>
        )}
        {thirdCont && (
          <motion.div
            variants={divVariant}
            initial="hidden"
            animate="visible"
            className="xl:flex-center flex-col xl:absolute xl:-bottom-14 xl:left-[470px]"
          >
            <h5 className="mb-2 text-xl md:text-3xl font-medium text-primaryBlue-450">
              ЗАЩО СМЕ РАЗЛИЧНИ?
            </h5>
            <p className="max-w-xl text-lg  max-md:container leading-8 text-white max-md:text-justify hypens-auto">
              Защото държим на индивидуалния подход към клиента, както и на
              добрата комуникация по всеки един проект. Когато за него няма
              нужда от сложни технически термини - просто не ги използваме. За
              нас визията в интернет пространството е изключително важна.
            </p>
          </motion.div>
        )}
      </section>
    </section>
  );
}
