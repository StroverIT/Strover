import Image from "next/legacy/image";
import React from "react";

export default function HowToProfit() {
  return (
    <section className="mt-96 pt-14 container text-center">
      <div className="flex-center flex-col">
        <h2 className="text-blue-50 text-4xl uppercase font-semibold">
          как сайтът ви ще печели за вас
        </h2>
        <p className="text-lg max-w-xl mt-2">
          В днешни дни не е достатъчно да притежавате просто сайт, трябва Ви Уеб
          сайт, който развива бизнеса Ви онлайн.
        </p>
      </div>
      {/* gap-x-28 */}
      <section className="grid grid-cols-3 mt-14 gap-x-10">
        <div className="">
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
        </div>
        <div>
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
        </div>
        <div>
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
        </div>
      </section>
    </section>
  );
}
