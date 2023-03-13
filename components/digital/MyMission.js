import React from "react";
import HeaderSpider from "../HeaderSpider";
import Container from "./MyMissionComps/Container";

const data = [
  {
    text: "Нашата цел е да накараме бизнеса Ви да се открои в онлайн пространството. Ние сме хора на изкуството и ценители на естетиката. Във визуалните платформи, като Instagram и Facebook, тя е много важна.",
  },
  {
    text: "Освен добрият външен вид, голяма роля в мрежите играе и маркетингът. За нас е привилегия да изберем най-подходящата маркетинг стратегия за всеки бизнес.",
    isRev: true,
  },
  {
    text: "Комуникацията с клиенти и индивидуалният подход са на първо място сред нашите приоритети.",
  },
  {
    text: "Социалните мрежи са сложна материя, особено с постоянно сменящите се алгоритми, затова се стараем винаги да сме в крак с тенденциите  и промените в тях, чрез различни онлайн източници.",
    isRev: true,
  },
];
export default function MyMission() {
  const trans = "digital";

  return (
    <section className="mt-24" id="mission">
      <div>
        <div className="flex-col flex-center">
          <HeaderSpider
            title="Нашата мисия и виждане"
            size="text-4xl max-lg:container lg:text-5xl"
            lineColor="bg-pink-200"
            trans={trans}
          />
        </div>
      </div>
      {/* First */}
      <section className="flex flex-col mt-20 gap-y-20">
        {data.map((data, index) => {
          return (
            <Container
              imageUrl={`socialMediaV${index + 1}`}
              text={data.text}
              isRev={data.isRev}
              trans={trans}
              key={index}
            />
          );
        })}
      </section>
    </section>
  );
}
