import Image from "next/legacy/image";
import React from "react";

const questionData = [
  {
    title: "КОЛКО ПАРИ ЩЕ МИ СТРУВА",
    text: `Всеки наш проект има индивидуален дизайн и бизнес логика. Офертата, която ще Ви предложим за изработката на уеб сайт или онлайн магазин ще бъде специално създадена за вас като съотношение цена-качество  и ще е съобразена спрямо целите, които гоните, функционалностите и мащаба на сайта`,
    _id: "1231231212",
  },
  {
    title: "КАКВО ОЧАКВАТЕ ОТ МЕН",
    text: `От Вас очакваме да ни предоставите информацията, с която ще искате да представите бизнеса си, дейността си, продуктите и/или услугите си. Разбира се, нашият екип ще Ви съдейства с предложения, препоръки и подробни насоки. Ако нямате времето за тази подготовка, то ще може да Ви съдействаме и с този етап.`,
    _id: "1231311",
  },
  {
    title: "ИМАМ ПО-ИЗГОДНИ ПРЕДЛОЖЕНИЯ",
    text: `Добре разработеният сайт генерира приходи от онлайн пространството Ви години наред. Професионалният ни съвет е да не се фокусирате върху разлики в рамките на няколкостотин лева, които се възвръщат моментално като инвестиция, а да съпоставяте предложенията по това какво ще донесат за бизнеса Ви.`,
    _id: "21312323112",
  },
  {
    title: "КОЛКО ВАРИАНТА НА ВИЗИИ ЩЕ МИ ДАДЕТЕ",
    text: `Ние не работим по готови темплейти, затова Ви предоставяме индивидуални дизайни, които са съобразени с вашите предпочитания за визия. Те се съчетаваст с успешни работещи практити, за да Ви предоставим  най-добрите решения. Разбира се първо минава през Вашето одобрение и корекции при необходимост. `,
    _id: "sadc2sa",
  },
  {
    title: "КАК КЛИЕНТИТЕ ЩЕ ДОСТИГАТ ДО МЕН",
    text: `Въжмосностите са безкрайни затова избираме най-оптималният начин, спрямо вашият бизнес и технологии за изграждането на сайта.`,
    isBorder: false,
    _id: "1231312",
  },
];
export default function Questions() {
  return (
    <section>
      <div className="-mb-[350px]">
        <div className="relative w-full h-96  z-10">
          <Image src="/web/questions/upperLayer.svg" layout="fill" alt="Adad" />
        </div>
        <div className="relative w-full h-96 -mb-[300px] -mt-[320px] z-10">
          <Image
            src="/web/questions/upperDownLayer.svg"
            layout="fill"
            alt="Adad"
          />
        </div>
      </div>
      <section className="mt-28 relative bg-blue-200 w-full pb-36">
        <section className="container pt-28">
          <div className="flex-center flex-col">
            <h1 className="text-4xl font-semibold  text-blue-50">
              ЧЕСТО ЗАДАВАНИ ВЪПРОСИ
            </h1>
            <p className="max-w-lg text-center mt-1">
              Какви са най-често задаваните въпроси, които вълнуват нашите
              клиенти преди да започнем съвместната си работа
            </p>
          </div>
        </section>

        {/* Questions */}
        <section className=" mt-10  px-48 max-w-7xl flex flex-col mx-auto">
          <div className="flex-center">
            <div className="bg-blue-250 w-4 h-4 rounded-full"></div>
            <div className="bg-blue-250 w-full h-1"></div>
            <div className="bg-blue-250 w-4 h-4 rounded-full"></div>
          </div>
          {questionData.map((question) => {
            return (
              <Question
                key={question._id}
                title={question.title}
                text={question.text}
                isBorder={question.isBorder}
              />
            );
          })}
          <div className="flex-center">
            <div className="bg-blue-250 w-4 h-4 rounded-full"></div>
            <div className="bg-blue-250 w-full h-1"></div>
            <div className="bg-blue-250 w-4 h-4 rounded-full"></div>
          </div>
        </section>
      </section>
      <div className="-mt-[14rem]">
        <div className="relative w-full h-96  z-10">
          <Image src="/web/questions/upperLayer.svg" layout="fill" alt="Adad" />
        </div>
        <div className="relative w-full h-96 -mb-[300px] -mt-[320px] z-10">
          <Image
            src="/web/questions/upperDownLayer.svg"
            layout="fill"
            alt="Adad"
          />
        </div>
      </div>
    </section>
  );
}

function Question({ title, text, isBorder = true }) {
  return (
    <section className={`p-4 ${isBorder ? "border-b-2 border-blue-250" : ""}`}>
      <div>
        <h4 className="uppercase font-semibold text-lg">{title}</h4>
        <p className="mt-1">{text}</p>
      </div>
    </section>
  );
}
