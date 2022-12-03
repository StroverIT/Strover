import Head from "next/head";
import React from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import Check from "../../components/svg-anim-comp/Check";
import Navigation from "../../components/web/pricingComp/Navigation";

const Thanks = () => {
  return (
    <>
      <Head></Head>
      <Navigation />
      <main className=" lg:pt-20 lg:h-[80vh]">
        <section className=" h-full flex-center">
          <section className=" shadow-xl max-lg:pt-40 max-lg:pb-20 lg:rounded-md bg-primaryBlue  flex-center  px-10 lg:px-20  flex-col  lg:h-2/3 max-lgcontainer text-white">
            <section className="w-20 h-20">
              <Check />
            </section>
            <div className="mt-5">
              <h3 className="text-center text-2xl ">
                Благодарим Ви за вашата поръчка!
              </h3>
              <p className="mt-2 max-lg:text-center">
                Очаквайте обратна връзка до 2 работни часа. Хубав и успешен ден!
              </p>
              <h5 className="mt-5 text-sm">
                <span className=" mr-1 text-lg ">*</span>Нашето работно време:
                <ul>
                  <li> Понеделник до неделя - от 07:00 до 22:00.</li>
                </ul>
              </h5>
            </div>
            <section className="mt-10">
              <h3 className="max-lg:text-center">
                Последвайте ни в нашите социални мрежи
              </h3>
              <div className="flex-center mt-2 gap-x-5 ">
                <a
                  href="https://www.facebook.com/profile.php?id=100085497228053"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="transition-transform cursor-pointer flex-center hover:scale-125 hover:text-primaryBlue-450">
                    <div className="text-2xl">
                      <BsFacebook />
                    </div>
                    {/* <div className="pl-2">Facebook</div> */}
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/stroverbg/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="transition-all cursor-pointer flex-center hover:scale-125 hover:text-primaryBlue-450">
                    <div className="text-2xl">
                      <BsInstagram />
                    </div>
                    {/* <div className="pl-2">Instagram</div> */}
                  </div>
                </a>
              </div>
            </section>
          </section>
        </section>
      </main>
    </>
  );
};

export default Thanks;
