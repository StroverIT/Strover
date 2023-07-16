"use client";
import React from "react";
import GoogleInputs from "../Inputs/GoogleInputs";
import GlowBtn from "../Buttons/GlowBtn";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { orderPlan } from "../../API/orderPlan";
import { toastError } from "../../libs/notifications";
import { useRouter } from "next/navigation";
import Container from "./Container";
import { useGlolContext } from "../../app/Context/text";

const SecondStep = ({ valueChanger, inputs, setInputs,inputsInit,setCurrStep,currMoney,productsMoney }) => {
  const [modalIsOpen, modalSetOpen]= useState(false)
  return (
    <>
      <Container>
        <h2 className="mt-4 text-2xl">Лични данни</h2>
        <p className="mt-2">
          За да имаме възможност да се свържем с вас, ще ни трябват вашите две
          имена
        </p>
        <div className="mt-5">
          <GoogleInputs
            onChange={valueChanger}
            value={inputs.fullName}
            placeholder="Две имена"
            name="fullName"
          />
          <div className="mt-5">
            <GoogleInputs
              placeholder="И-мейл"
              name="email"
              onChange={valueChanger}
              value={inputs.email}
            />
          </div>
          <div className="mt-5">
            <GoogleInputs
              placeholder="Телефон"
              name="phoneNumber"
              onChange={valueChanger}
              value={inputs.phoneNumber}
            />
          </div>
        </div>
        <div class="grid lg:grid-cols-2 gap-x-5 gap-y-2">
          <GlowBtn
                theme="red"
                text="Предишна стъпка"
                className="w-full py-2 mt-4"
                onClick={() => setCurrStep(2)}
              />
              <GlowBtn
                theme="green"
                text="Потвърди поръчката"
                className="w-full py-2 mt-4"
                onClick={() => modalSetOpen(true)}
              />
        </div>
      </Container>
      <Modal modalIsOpen={modalIsOpen} setInputs={setInputs} inputsInit={inputsInit} modalSetOpen={modalSetOpen} inputs={inputs} currMoney={currMoney} productsMoney={productsMoney}/>
    </>
  );
};

export default SecondStep;
function Modal({  modalIsOpen,  modalSetOpen, inputs,setInputs, inputsInit, currMoney, productsMoney}) {
  console.log(inputs);
  const { setOpen } = useGlolContext();

  const [isLoading, setLoading] = useState(false);

  const { push } = useRouter();

  function closeModal() {
    modalSetOpen(false);
  }
  const orderPlanCall = () => {
    setLoading(true);

    orderPlan({ inputs, currMoney, productsMoney}).then((res) => {
      if (res.message){
        push(
          `/checkout-thanks?name=${inputs.fullName}${
            inputs.email && `&email=${inputs.email}&telephone=${inputs.phoneNumber}`
          }`
        );
        modalSetOpen(false)
        setOpen(false)
        setInputs(inputsInit)
      }
        
      if (res.error) toastError(res.error);
      setLoading(false);
    });
  };
  return (
    <>
      <Transition appear show={modalIsOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[999]" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-medium leading-6"
                  >
                    Съвпадат ли данните?
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      За по-голяма сигурност и прецизност, проверете дали всички
                      данни са написани правилно.
                    </p>
                  </div>
                  <div className="mt-5">
                    <ul>
                      <li>Две имена: {inputs.fullName}</li>
                       <li>И-мейл: {inputs.email}</li>
                     <li>Телефон: {inputs.phoneNumber}</li>
                     <li>Крайна сума: {currMoney + productsMoney} лв.</li>

                    </ul>
                  </div>

                  <div className="mt-8 text-sm ">
                    <GlowBtn
                      theme="green"
                      text="Всичко е наред! Потвърждавам поръчката."
                      className="w-full py-2 mt-4"
                      isLoading={isLoading}
                      onClick={orderPlanCall}
                    />
                    <GlowBtn
                      theme="red"
                      text="Грешни са! Ще ги променя."
                      className="w-full py-2 mt-4"
                      onClick={closeModal}
                    />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
