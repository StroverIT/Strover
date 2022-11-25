import Image from "next/legacy/image";
import React from "react";
import HeaderSpider from "../HeaderSpider";
import Container from "./MyMissionComps/Container";

export default function MyMission() {
  return (
    <section className="mt-24" id="mission">
      <div>
        <div className="flex-col flex-center">
          <HeaderSpider
            title="Нашата мисия и виждане "
            size="text-4xl max-lg:container lg:text-5xl"
            lineColor="bg-pink-200"
          />
        </div>
      </div>
      {/* First */}
      <section className="flex flex-col mt-20 gap-y-20">
        <Container
          imageUrl="socialMediaV1"
          text="
            Нашата цел е да накараме бизнеса Ви да се открои в онлайн
            пространството. Ние сме хора на изкуството и ценители на естетиката.
            Във визуалните платформи, като Instagram и Facebook, тя е много важна."
        />
        {/* Second */}
        <Container
          imageUrl="socialMediaV2"
          text="
          Освен добрият външен вид, голяма роля в мрежите играе и
          маркетингът. За нас е привилегия да изберем най-подходящата маркетинг
          стратегия за всеки бизнес."
          isRev={true}
        />
        {/* Third */}
        <Container
          imageUrl="socialMediaV3"
          text="
          Комуникацията с клиенти и индивидуалният подход са на първо място
          сред нашите приоритети."
        />
        {/* Fourth */}
        <Container
          imageUrl="socialMediaV4"
          text="
          Социалните мрежи са сложна материя, особено с постоянно сменищите се
              алгоритми, затова се старем винаги да сме в крак с тенденциите  и
              промените в тях, чрез различни онлайн източници."
          isRev={true}
        />
      </section>
    </section>
  );
}
