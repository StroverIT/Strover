import Head from "next/head";
import React, { useState } from "react";

import Navigation from "../../components/otherPagesNav/OffersNav";
import ContactUs from "../../components/ContactUs";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import InputIcons from "../../components/form/Icons";
import Input from "../../components/form/Input";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import sendMesage from "../../fetches/sendingMessage";
import { toastError, toastSuccess } from "../../libs/Notifications";

const inputsInit = {
  name: "",
  email: "",
  message: "",
};
export default function ContactUsPage() {
  const [inputs, setInputs] = useState(inputsInit);
  const [isLoading, setLoading] = useState(false);

  const handler = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Valdiator
    if (!inputs.name || !inputs.email || !inputs.message) {
      setLoading(false);
      return toastError("Моля попълнете всички полета!");
    }

    const data = await sendMesage(inputs, "contact us page");
    if (data.message) {
      setInputs(inputsInit);
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
      <Navigation />

      <main className="bg-gray-200 py-36">
        <div className="container grid-cols-2 lg:grid gap-x-10">
          <section className="flex flex-col space-y-3 focus:border-transparent py-14 ">
            <h3 className="text-lg">Контактна Информация</h3>
            <div className="flex items-center">
              <div className="text-2xl ">
                <HiOutlineMail />
              </div>
              <a href="mailto:stroverbg@gmail.com" className="pl-1">
                stroverbg@gmail.com
              </a>
            </div>
            <div className="flex items-center pt-2">
              <div className="text-xl ">
                <FiPhoneCall />
              </div>
              <a href="tel:+359876237725" className="pl-1">
                Web - +359 87 623 7725
              </a>
            </div>
            <div className="flex items-center">
              <div className="text-xl ">
                <FiPhoneCall />
              </div>
              <a href="tel:+359876237725" className="pl-1">
                Digital - +359 87 623 7725
              </a>
            </div>
            <div className="flex items-center">
              <div className="text-xl ">
                <FiPhoneCall />
              </div>
              <a href="tel:+359876237725" className="pl-1">
                Academy - +359 87 623 7725
              </a>
            </div>

            <div className="pt-2">
              <h3 className="text-lg">Намерете ни в Социалните мрежи:</h3>
              <div className="flex mt-2 gap-x-5">
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
            </div>
          </section>
          <section className="text-white border-8 border-blue-50 rounded-xl">
            <section
              className={` py-14 lg:py-32 bg-blue-200 w-full px-5 lg:px-28 `}
            >
              <section className="">
                <h4>
                  <span
                    className={`border-b-4 border-blue-50 pb-1 text-2xl font-semibold rounded-sm `}
                  >
                    Свържи се с нас!
                  </span>
                </h4>
                <p className="pt-3 lg:max-w-[15rem]">
                  Очакваме с нетърпение нашите общи проекти!
                </p>
                <form
                  action=""
                  className="flex flex-col mt-12 "
                  onSubmit={submitHandler}
                >
                  <Input
                    placeholder="Вашето име"
                    id="name"
                    val={inputs.name}
                    onChange={handler}
                    iconType="name"
                  />
                  <Input
                    placeholder="Вашият и-мейл"
                    id="email"
                    val={inputs.email}
                    onChange={handler}
                    iconType="email"
                  />
                  <div className="relative lg:mb-5">
                    <div className="absolute left-0 z-10 top-2.5 text-lg">
                      <InputIcons iconType="message" />
                    </div>
                    {/* className="w-full h-2 px-4 pt-2 bg-transparent border-b border-white scrollbar scrollbar-thumb-pink-100 scrollbar-track-pink-200 focus:outline-none" */}

                    <textarea
                      className="w-full h-10 px-6 py-2 leading-tight placeholder-transparent bg-transparent border-b appearance-none placeholder:pl-10 peer text-gray-darker focus:outline-none focus:shadow-outline scrollbar scrollbar-thumb-primaryBlue-150 scrollbar-track-primaryBlue-500"
                      id="message"
                      placeholder="Вашият коментар"
                      name="message"
                      value={inputs.message}
                      onChange={handler}
                    />
                    <label
                      className="absolute   -top-3.5 left-0 block mb-2 text-sm  text-gray-darker peer-placeholder-shown:text-base peer-placeholder-shown:px-6  peer-placeholder-shown:top-1.5 transition-all duration-300"
                      htmlFor="comment"
                    >
                      Вашият коментар
                    </label>
                  </div>
                  <button
                    type="submit"
                    className={`flex-center bg-blue-50 px-10 py-1 mt-4`}
                  >
                    {isLoading ? <div className="loader"></div> : "Изпрати"}
                  </button>
                </form>
              </section>
            </section>
          </section>
        </div>
      </main>
    </>
  );
}
