import React from "react";
import Brand from "./Brand";
import TextAnimation from "../../libs/TextAnimation";

import FadeIn from "../layouts/animations/onView/FadeIn";
import HeaderSpider from "../HeaderSpider";
import { useTranslation } from "next-i18next";

export default function ListBrands({
  digital,
  web,
  logistics,
  py,
  bg,
  totalLen = 2,
  rounded,
}) {
  const duration = 1.5;

  return (
    <section className={`${py} ${bg} box  relative z-20 -mb-16`}>
      <section className="mb-10 text-white">
        <FadeIn duration={0.8}>
          <div className="flex-center">
            <HeaderSpider title="Брандове" size="text-5xl" />
          </div>
        </FadeIn>
        <div className="mt-2 text-center">
          <TextAnimation
            placeholderText={[
              {
                type: "paragraph",
                text: "И повече информация за тях",
              },
            ]}
          />
        </div>
      </section>
      <section
        className={`container flex zeroToXl:flex-col xl:items-center xl:justify-center ${
          totalLen == 3 ? "gap-x-24" : "gap-x-48"
        } zeroToXl:gap-y-10`}
      >
        {/* Web */}
        {web && (
          <Brand
            altImage="Tech spider logo for strovers' brands"
            imageLink="/logos/web-spider.svg"
            title="Web"
            p="Изработка на онлайн магазини, блогове, персонализирана платформи, уеб базиран софтуер и информативни динамични уеб сайтове"
            link="/brands/web"
            borderColor="bg-primaryBlue-200"
            textColor="text-primaryBlue-200"
            duration={duration}
            mt="mt-4"
          />
        )}
        {/* Digital */}
        {digital && (
          <Brand
            altImage="Tech spider logo for strovers' brands"
            imageLink="/logos/digital_spider.svg"
            title="Digital"
            p={
              "Помагаме да достигнете до повече потенциални клиенти, увеличаване на прихода и разширяване на аудиторията Ви"
            }
            link="/brands/digital"
            borderColor="bg-pink-50"
            textColor="text-pink-50"
            maxW="max-w-sm"
            mt="mt-8"
            delay={0.2}
            duration={duration}
          />
        )}
        {/* Logictisc */}
        {logistics && (
          <Brand
            altImage="Tech spider logo for strovers' brands"
            imageLink="/logos/academy_spider.svg"
            title="Academy"
            p="Предлагаме онлайн обучение в сферата на Дигиталният маркетинг, Уеб изработката и Уеб дизайна"
            link="/brands/academy"
            borderColor="bg-red-100"
            textColor="text-red-100"
            mt="mt-8"
            delay={0.4}
            duration={duration}
          />
        )}
      </section>
    </section>
  );
}
