import Image from "next/legacy/image";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

export default function HowToProfit() {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const { ref: header, inView: headerView } = useInView({
    threshold: 0.2,
  });

  const headerAnim = useAnimation();
  const paraAnim = useAnimation();

  const textAnim1 = useAnimation();
  const textAnim2 = useAnimation();
  const textAnim3 = useAnimation();

  useEffect(() => {
    if (inView) {
      textAnim1.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
          delay: 0.3,
        },
      });
      textAnim2.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
          delay: 0.5,
        },
      });
      textAnim3.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
          delay: 0.8,
        },
      });
    }
    if (!inView) {
      textAnim1.start({
        x: "-100vw",
      });
      textAnim2.start({
        x: "-100vw",
      });
      textAnim3.start({
        x: "-100vw",
      });
    }
  }, [inView]);

  useEffect(() => {
    if (headerView) {
      headerAnim.start({
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
      paraAnim.start({
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
          delay: 0.3,
        },
      });
    }
    if (!headerView) {
      headerAnim.start({
        opacity: 0,
      });
      paraAnim.start({
        opacity: 0,
      });
    }
  }, [headerView]);
  return (
    <section className="mt-96 pt-14 container text-center">
      <div className="flex-center flex-col" ref={header}>
        <motion.h2
          animate={headerAnim}
          className="text-blue-50 text-4xl uppercase font-semibold"
        >
          как сайтът ви ще печели за вас
        </motion.h2>
        <motion.p animate={paraAnim} className="text-lg max-w-xl mt-2">
          В днешни дни не е достатъчно да притежавате просто сайт, трябва Ви Уеб
          сайт, който развива бизнеса Ви онлайн.
        </motion.p>
      </div>
      {/* gap-x-28 */}
      <section className="grid grid-cols-3 mt-14 gap-x-10" ref={ref}>
        <motion.div animate={textAnim1} className="">
          <div className="flex-center">
            <div className="relative h-28 w-28">
              <Image
                src="/icons/24-hours.png"
                layout="fill"
                alt="24 hours icon"
              />{" "}
            </div>
          </div>
          <h5 className="text-xl font-semibold mt-5">
            Денонощно сайта работи за вас
          </h5>
          <p className="mt-2 ">
            За разлика от Вас, сайтът Ви няма нужда от почивка. Сайтът ще
            представя бизнеса Ви денонощно, за да може до Вас винаги да достигат
            повече потребители и потенциални клиенти, които се интересуват от
            това, което предлагате.
          </p>
        </motion.div>
        <motion.div animate={textAnim2}>
          <div className="flex-center">
            <div className="relative h-28 w-28">
              <Image src="/icons/trust.png" layout="fill" alt="24 hours icon" />{" "}
            </div>
          </div>
          <h5 className="text-lg font-semibold mt-5">
            Изграждане на доверието в клиентите Ви
          </h5>
          <p className="mt-2">
            Всеки ваш потенциален клиент, ще желае да види вашата “дигитална
            следа”, това ще рече социални мрежи и Уеб сайт. Защо ли? Вече никой
            не се доверява “на сляпо”, всеки иска да провери с кого ще работи.
          </p>
        </motion.div>
        <motion.div animate={textAnim3}>
          <div className="flex-center">
            <div className="relative h-28 w-28">
              <Image
                src="/icons/expansion.png"
                layout="fill"
                alt="24 hours icon"
              />{" "}
            </div>
          </div>
          <h5 className="text-lg font-semibold mt-5">
            Разширяване обхвата на бизнеса Ви
          </h5>
          <p className="mt-2">
            Забравете вече за териториалните ограничения, вие разполагате с
            целият интернет. Сайтът Ви има възможноста да се срещне с
            неограничен брой хора и да достигнете до повече клиенти.
          </p>
        </motion.div>
      </section>
    </section>
  );
}
