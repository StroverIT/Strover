import Image from "next/legacy/image";
import React from "react";
import TextAnimation from "../../libs/TextAnimation";

export default function MoreServices() {
  return (
    <section className="container mt-56">
      <div className="text-4xl font-semibold text-center uppercase text-blue-50">
        <TextAnimation
          placeholderText={[
            {
              type: "heading1",
              text: "Допълнителни услуги",
            },
          ]}
        />
      </div>
      <section className="grid items-center justify-center mt-20 max-lg:text-center lg:grid-cols-2 gap-y-36 lg:mt-36 max-lg:gap-y-28">
        <div className="flex-col flex-center ">
          <div className="relative h-28 w-28">
            <Image
              src="/icons/brochure.png"
              alt="Създаване на онлайн брошури"
              layout="fill"
            />
          </div>
          <h5 className="mt-3 text-2xl font-semibold">
            Създаване на онлайн брошури
          </h5>
          <p className="max-w-sm mt-1 text-center card-preview-text">
            Брошурите и листовките могат да бъдат, подобно на почти всички
            документи и хартиени композиции, без да харчите цяло състояние за
            правене на тестови разпечатки, малки количества флаери или за
            получаване на материал за стартиране на бизнес. Също така може да
            бъде използвана на вашият уебсайт.
          </p>
          <button className="px-10 py-2 mt-8 rounded-full bg-blue-50">
            Научи повече
          </button>
        </div>
        <div className="flex-col flex-center ">
          <div className="relative h-28 w-28">
            <Image src="/icons/brand.png" alt="Maintance" layout="fill" />
          </div>
          <h5 className="mt-3 text-2xl font-semibold">Ребрандиране</h5>
          <p className="max-w-sm mt-1 text-center">
            При “Ребрандирането”, ние ще променим вече съществуващите елементи с
            нови, като преди това проучим пазара и конкуренцията, за да разберем
            какво търси вашата аудитория.
          </p>
          <button className="px-10 py-2 mt-8 rounded-full bg-blue-50">
            Научи повече
          </button>
        </div>
        <div className="flex-col flex-center ">
          <div className="relative h-28 w-28">
            <Image src="/icons/photo.png" alt="Maintance" layout="fill" />
          </div>
          <h5 className="mt-3 text-2xl font-semibold">
            Създаване на снимки за уебсайт
          </h5>
          <p className="max-w-sm mt-1 text-center">
            Както всички знаем, красотата продават, затова е важно да имате
            професионално направени снимки.
          </p>
          <button className="px-10 py-2 mt-8 rounded-full bg-blue-50">
            Научи повече
          </button>
        </div>
        <div className="flex-col flex-center ">
          <div className="relative h-28 w-28">
            <Image
              src="/icons/graphic-design.png"
              alt="Maintance"
              layout="fill"
            />
          </div>
          <h5 className="mt-3 text-2xl font-semibold">Редизайн </h5>
          <p className="max-w-sm mt-1 text-center card-preview-text">
            Това е в същността си основен ремонт, правещ значителна промяна на
            елементи като кода, съдържанието, структурата и визуалните елементи
            на текущия уебсайт. Ревизирането и променянето на съставните
            елементи на дадения сайт имат за цел да подобрят визията, функциите,
            потребителския опит и всички други параметри, засягащи качественото
            представяне на сайта – пред потребителите и алгоритмите на онлайн
            търсачките.
          </p>
          <button className="px-10 py-2 mt-8 rounded-full bg-blue-50">
            Научи повече
          </button>
        </div>
      </section>
    </section>
  );
}
