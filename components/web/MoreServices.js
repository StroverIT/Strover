import Image from "next/legacy/image";
import React from "react";

export default function MoreServices() {
  return (
    <section className="mt-36 container">
      <h3 className="text-blue-50 text-4xl uppercase font-semibold text-center">
        Допълнителни услуги
      </h3>
      <section className="grid grid-cols-2 items-center justify-center gap-y-36 mt-36">
        <div className="flex-center flex-col  ">
          <div className="relative h-28 w-28">
            <Image
              src="/icons/brochure.png"
              alt="Създаване на онлайн брошури"
              layout="fill"
            />
          </div>
          <h5 className="font-semibold text-2xl mt-3">
            Създаване на онлайн брошури
          </h5>
          <p className="max-w-sm text-center mt-1">
            Брошурите и листовките могат да бъдат, подобно на почти всички
            документи и хартиени композиции, без да харчите цяло състояние за
            правене на тестови разпечатки, малки количества флаери или за
            получаване на материал за стартиране на бизнес. Също така може да
            бъде използвана на вашият уебсайт.
          </p>
          <button className="bg-blue-50 py-2 px-10 mt-8 rounded-full">
            Научи повече
          </button>
        </div>
        <div className="flex-center flex-col  ">
          <div className="relative h-28 w-28">
            <Image src="/icons/brand.png" alt="Maintance" layout="fill" />
          </div>
          <h5 className="font-semibold text-2xl mt-3">Ребрандиране</h5>
          <p className="max-w-sm text-center mt-1">
            При “Ребрандирането”, ние ще променим вече съществуващите елементи с
            нови, като преди това проучим пазара и конкуренцията, за да разберем
            какво търси вашата аудитория.
          </p>
          <button className="bg-blue-50 py-2 px-10 mt-8 rounded-full">
            Научи повече
          </button>
        </div>
        <div className="flex-center flex-col  ">
          <div className="relative h-28 w-28">
            <Image src="/icons/photo.png" alt="Maintance" layout="fill" />
          </div>
          <h5 className="font-semibold text-2xl mt-3">
            Създаване на снимки за уебсайт
          </h5>
          <p className="max-w-sm text-center mt-1">
            Както всички знаем, красотата продават, затова е важно да имате
            професионално направени снимки.
          </p>
          <button className="bg-blue-50 py-2 px-10 mt-8 rounded-full">
            Научи повече
          </button>
        </div>
        <div className="flex-center flex-col  ">
          <div className="relative h-28 w-28">
            <Image
              src="/icons/graphic-design.png"
              alt="Maintance"
              layout="fill"
            />
          </div>
          <h5 className="font-semibold text-2xl mt-3">Редизайн </h5>
          <p className="max-w-sm text-center mt-1">
            Това е в същността си основен ремонт, правещ значителна промяна на
            елементи като кода, съдържанието, структурата и визуалните елементи
            на текущия уебсайт. Ревизирането и променянето на съставните
            елементи на дадения сайт имат за цел да подобрят визията, функциите,
            потребителския опит и всички други параметри, засягащи качественото
            представяне на сайта – пред потребителите и алгоритмите на онлайн
            търсачките.
          </p>
          <button className="bg-blue-50 py-2 px-10 mt-8 rounded-full">
            Научи повече
          </button>
        </div>
      </section>
    </section>
  );
}
