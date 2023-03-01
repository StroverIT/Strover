import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import ChristmasLights from "../../components/Banners/ChristmasLights";
import Layout from "../../components/layouts/Layout";
import ChristmasGifts from "../../components/promotions/newYear/ChristmasGifts";
import ChristmasProshtakylnik from "../../components/promotions/newYear/ChristmasProshtakylnik";
import ChristmasTree from "../../components/promotions/newYear/ChristmasTree";
import SnowingBg from "../../components/promotions/newYear/SnowingBg";
import Check from "../../components/svg-anim-comp/Check";

export default function Promotions() {
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
              <section className="container flex-col p-2 py-10 text-white border shadow-2xl flex-center bg-white-transparent-15 md:p-10 rounded-3xl">
                <div className="flex-center">
                  <section className="w-14 h-14 md:w-20 md:h-20">
                    <Check />
                  </section>
                </div>
                <section className="mt-6 font-semibold text-center ">
                  <h2 className="text-xl md:text-5xl">УСПЕШНО СЕ ЗАПИСАХТЕ!</h2>
                </section>
                <p className="max-w-4xl mt-2 text-sm text-center md:text-2xl">
                  Благодарим Ви, че ни гласувахте доверие! Ако желаете може да
                  разгледате сайта -{" "}
                  <Link href="/" className="underline">
                    Начална страница
                  </Link>
                </p>
                <h3 className="my-4 text-center md:text-2xl">Или</h3>
                <section className="flex-col text-center flex-center md:text-2xl">
                  <p>Да посетите един от брандовете ни</p>
                  <ul className="flex mt-2 text-start gap-y-5 gap-x-5">
                    <li className="underline">
                      <Link href="/brands/web">WEB</Link>
                    </li>
                    <li className="underline">
                      <Link href="/brands/digital">DIGITAL</Link>
                    </li>
                  </ul>
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
// <section className="relative z-30 flex-col h-full flex-center ">
//             <section className="p-10 text-white border shadow-2xl bg-white-transparent-15 rounded-3xl">
//               <div className="flex-center">
//                 <section className="w-20 h-20">
//                   <Check />
//                 </section>
//               </div>
//               <section className="mt-6 font-semibold text-center ">
//                 <h2 className="text-3xl md:text-5xl">
//
//                 </h2>
//               </section>
//               <p className="max-w-4xl mt-2 text-lg text-center md:text-2xl">
//                 {/* На 01.01.2023 ще Ви бъде изпратен линк към страницата, където ще бъдат показани всички услуги на промоция */}
//
//               </p>

//             </section>
//           </section>
