import React from "react";

import { motion } from "framer-motion";

import Line from "./Line";
import FadeFromBottom from "../layouts/animations/onView/FadeFromBottom";
import { useTranslation } from "next-i18next";
import TransText from "../layouts/TransText";

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
  const { t } = useTranslation("home");

  // const [windowWidth, setWindowWidth] = useState(0);
  // const [secondCont, setSecondCont] = useState(false || windowWidth < 1280);

  // const [thirdCont, setThirdCont] = useState(false || windowWidth < 1280);
  // useEffect(() => {
  //   const w = window.innerWidth;
  //   setWindowWidth(w);
  // }, []);
  return (
    <section
      className="container relative flex flex-col min-h-screen my-16 text-center md:my-56 "
      id="aboutUs"
    >
      <div className="hidden xl:flex">
        {/* setSecondCont={setSecondCont} setThirdCont={setThirdCont} */}
        <Line />
      </div>

      <section className="zeroToXl:flex-col zeroToXl:flex-center zeroToXl:gap-y-10">
        <div className="xl:flex-center flex-col xl:mr-10 xl:absolute xl:-top-28 xl:left-[350px]">
          <FadeFromBottom duration={0.5}>
            <h3 className="mb-2 text-xl font-medium md:text-3xl text-primaryBlue-450">
              {t("КОИ СМЕ НИЕ?")}
            </h3>
          </FadeFromBottom>
          <FadeFromBottom duration={0.5} delay={0.1}>
            <p className="max-w-xl text-lg leading-8 text-white max-md:container max-md:text-justify hypens-auto ">
              <TransText>
                Ние сме Strover. Млади, амбициозни и креативни интернет паяци,
                които са готови да се учат от всичко и всички. Плетем мрежата си
                около онлайн търговията, уеб дизайна, онлайн маркетинга и SEO
                оптимизацията, насочени към съществуващи и нови бизнеси.
              </TransText>
            </p>
          </FadeFromBottom>
        </div>

        <motion.div
          variants={divVariant}
          initial="hidden"
          animate="visible"
          className="xl:flex-center flex-col xl:absolute xl:top-[400px] xl:left-[250px]"
        >
          <FadeFromBottom duration={0.5}>
            <h3 className="mb-2 text-xl font-medium md:text-3xl text-primaryBlue-450">
              {t("КАКВО ЩЕ ПОЛУЧИТЕ?")}
            </h3>
          </FadeFromBottom>
          <FadeFromBottom duration={0.5} delay={0.1}>
            <p className="max-w-xl text-lg leading-8 text-white max-md:container hypens-auto max-md:text-justify">
              <TransText>
                Комплексна услуга от хора, които са специалисти в съответните
                сфери&#8282; дигиталния маркетинг, компютърните науки и онлайн
                продажбите. Ние ще Ви предоставим цялостни дигитални решения за
                развитието на бранда Ви и достигането му до ИДЕАЛНИТЕ КЛИЕНТИ.
              </TransText>
            </p>
          </FadeFromBottom>
        </motion.div>
        <motion.div
          variants={divVariant}
          initial="hidden"
          animate="visible"
          className="xl:flex-center flex-col xl:absolute xl:-bottom-14 xl:left-[470px]"
        >
          <FadeFromBottom duration={0.5}>
            <h3 className="mb-2 text-xl font-medium md:text-3xl text-primaryBlue-450">
              {t("ЗАЩО СМЕ РАЗЛИЧНИ?")}
            </h3>
          </FadeFromBottom>
          <FadeFromBottom duration={0.5} delay={0.1}>
            <p className="max-w-xl text-lg leading-8 text-white max-md:container max-md:text-justify hypens-auto">
              <TransText>
                Защото държим на индивидуалния подход към клиента, както и на
                добрата комуникация по всеки един проект. Когато за него няма
                нужда от сложни технически термини - просто не ги използваме. За
                нас визията в интернет пространството е изключително важна.
              </TransText>
            </p>
          </FadeFromBottom>
        </motion.div>
      </section>
    </section>
  );
}
