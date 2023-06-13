"use client";
import React, {useEffect, useRef} from "react";

import { useAnimate, useInView } from "framer-motion";

import { AiOutlineCheck } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

const ThreePlans = () => {


    const container = useRef(null)
    const middle = useRef(null)
    const smallBusiness = useRef(null)


    const isInView = useInView(container)

    const [corporate, corpAnimate] = useAnimate()
    
    useEffect(()=>{
        
        if(isInView){


            corpAnimate(corporate.current, {x: ["20vw", "0vw"],opacity: ["0%", "100%"], },  { duration: 0.5, delay: 0.5,  ease: [.32, .23, .4, .9]  })
            corpAnimate(smallBusiness.current, {x: ["-20vw", "0vw"],opacity: ["0%", "100%"], },  { duration: 0.5, delay: 0.5,  ease: [.32, .23, .4, .9]  })


        }

    }, [isInView])
  return (
    <div className="flex flex-row pt-24" ref={container }>
      {/* <!-- Corporate Card --> */}
      <div
        ref={corporate}
        className="p-8 pr-16 text-center bg-white shadow-xl w-96 rounded-3xl"
       
      >
        <h1 className="text-2xl font-semibold text-black">Голям бизнес</h1>
        <p className="pt-2 tracking-wide">
          <span className="text-3xl font-semibold">1200</span>
          <span className="text-gray-400 align-bottom ">лв </span>

          {/* <span className="font-medium text-gray-400">/ user</span> */}
        </p>
        <hr className="mt-4 border-1" />
        <div className="pt-8">
          <p className="flex items-center font-semibold text-left text-gray-400">
            <span className="align-middle">
              <AiOutlineCheck />
            </span>
            <span className="pl-2">
              <span className="text-black">Услугите</span> от{" "}
              <span className="text-sm">&quot;Среден бизнес&quot;</span>
            </span>
          </p>
          <p className="flex items-center pt-5 font-semibold text-left text-gray-400">
            <span className="align-middle">
              <AiOutlineCheck />
            </span>
            <span className="pl-2">
              <span className="text-black">150 + 300</span> продукта
            </span>
          </p>
          <p className="flex items-center pt-5 font-semibold text-left text-gray-400">
            <span className="align-middle">
              <AiOutlineCheck />
            </span>
            <span className="pl-2">
              <span className="text-black">SEO</span> оптимизация
            </span>
          </p>
          <p className="flex items-center pt-5 font-semibold text-left text-gray-400">
            <span className="align-middle">
              <AiOutlineCheck />
            </span>
            <span className="pl-2">
              <span className="text-black">Facebook</span> магазин
            </span>
          </p>
          <p className="flex items-center pt-5 font-semibold text-left text-gray-400">
            <span className="align-middle">
              <AiOutlineCheck />
            </span>
            <span className="pl-2">
              <span className="text-black">Клиентски </span> карти
            </span>
          </p>

          <Link href="/plan/test" className="">
            <p className="w-full py-4 mt-8 text-white flex-center bg-blue rounded-xl ">
              <span className="font-medium">Избери плана</span>
              <span className="pl-2 text-lg align-middle">
                <BsArrowRight />
              </span>
            </p>
          </Link>
        </div>
      </div>
      {/* <!-- Middle Card --> */}
      <div id="middle" ref={middle} className="relative z-10 p-8 text-center text-white transform scale-125 border-4 border-white shadow-xl w-80 nav-bg-color-gradient rounded-3xl">
        <h1 className="text-2xl font-semibold text-white">Среден бизнес</h1>
        <p className="pt-2 tracking-wide">
          {/* <span className="text-gray-400 align-top">BGN </span> */}
          <span className="text-3xl font-semibold">850</span>
          <span className="text-gray-400 ">лв </span>

          {/* <span className="font-medium text-gray-400">/ user</span> */}
        </p>
        <hr className="mt-4 border-gray-600 border-1" />
        <div className="pt-8">
          <p className="flex items-center font-semibold text-left text-gray-400">
            <span className="align-middle">
              <AiOutlineCheck />
            </span>
            <span className="pl-2">
              <span className="text-white">Услугите</span> от{" "}
              <span className="text-sm">&quot;Малък бизнес&quot;</span>
            </span>
          </p>
          <p className="flex items-center pt-5 font-semibold text-left text-gray-400">
            <span className="align-middle">
              <AiOutlineCheck />
            </span>
            <span className="pl-2">
              <span className="text-white">50 + 100</span> продукта
            </span>
          </p>
          <p className="flex items-center pt-5 font-semibold text-left text-gray-400">
            <span className="align-middle">
              <AiOutlineCheck />
            </span>
            <span className="pl-2">
              <span className="text-white">Домейн</span>
            </span>
          </p>
          <p className="flex items-center pt-5 font-semibold text-left text-gray-400">
            <span className="align-middle">
              <AiOutlineCheck />
            </span>
            <span className="pl-2">
              <span className="text-white">Чат</span> на живо
            </span>
          </p>
          <p className="flex items-center pt-5 font-semibold text-left text-gray-400">
            <span className="align-middle">
              <AiOutlineCheck />
            </span>
            <span className="pl-2">
              <span className="text-white">Плащане</span> онлайн
            </span>
          </p>

          <Link href="/plan/test" className="">
            <p className="w-full py-4 mt-8 text-white flex-center bg-blue rounded-xl ">
              <span className="font-medium">Избери плана</span>
              <span className="pl-2 text-lg align-middle">
                <BsArrowRight />
              </span>
            </p>
          </Link>
        </div>
        <div className="absolute -top-1 -right-4">
          <p className="px-4 py-1 text-xs font-semibold uppercase rounded-full bg-primary-400 ">
            Най-избиран
          </p>
        </div>
      </div>
      {/* <!-- Small business card --> */}
      <div id="small" ref={smallBusiness} className="p-8 pl-16 text-center bg-white shadow-xl w-96 rounded-3xl">
        <h1 className="text-2xl font-semibold text-black">Малък бизнес</h1>
        <p className="pt-2 tracking-wide">
          {/* <span className="text-gray-400 align-top">BGN </span> */}
          <span className="text-3xl font-semibold">600</span>
          <span className="text-gray-400 ">лв </span>

          {/* <span className="font-medium text-gray-400">/ user</span> */}
        </p>
        <hr className="mt-4 border-1" />
        <div className="pt-8">
          <p className="flex items-center font-semibold text-left text-gray-400">
            <span className="align-middle">
              <AiOutlineCheck />
            </span>
            <span className="pl-2">
              <span className="text-black">50</span> продукта
            </span>
          </p>
          <p className="flex items-center pt-5 font-semibold text-left text-gray-400">
            <span className="align-middle">
              <AiOutlineCheck />
            </span>
            <span className="pl-2">
              <span className="text-black">Статус</span> на поръчки
            </span>
          </p>
          <p className="flex items-center pt-5 font-semibold text-left text-gray-400">
            <span className="align-middle">
              <AiOutlineCheck />
            </span>
            <span className="pl-2">
              <span className="text-black">Нива</span> на достъп
            </span>
          </p>
          <p className="flex items-center pt-5 font-semibold text-left text-gray-400">
            <span className="align-middle">
              <AiOutlineCheck />
            </span>
            <span className="pl-2">
              <span className="text-black">Мобилна</span> версия
            </span>
          </p>
          <p className="flex items-center pt-5 font-semibold text-left text-gray-400">
            <span className="align-middle">
              <AiOutlineCheck />
            </span>
            <span className="pl-2">
              <span className="text-black">Уникален</span> дизайн
            </span>
          </p>
          <Link href="/plan/test"  className="">
            <p className="w-full py-4 mt-8 text-white flex-center bg-blue rounded-xl ">
              <span className="font-medium">Избери плана</span>
              <span className="pl-2 text-lg align-middle">
                <BsArrowRight />
              </span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThreePlans;
