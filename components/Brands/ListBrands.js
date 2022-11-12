import React from "react";
import Brand from "./Brand";
import TextAnimation from "../../libs/TextAnimation";
import FadeIn from "../layouts/animations/onView/fadeIn";

export default function ListBrands({ digital, web, logistics, py, bg }) {
  const duration = 1.5;
  return (
    <section className={`${py} ${bg}  mt-10`}>
      <section className="mb-10 text-white">
        <FadeIn duration={0.8}>
          <h5 className="text-5xl font-semibold text-center">Брандове</h5>
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
        className={`container flex zeroToXl:flex-col xl:items-center xl:justify-center gap-x-14 zeroToXl:gap-y-10`}
      >
        {/* Web */}
        {web && (
          <Brand
            altImage="Tech spider logo for strovers' brands"
            imageLink="/logos/web-spider.svg"
            title="Web"
            p="Разработваме онлайн магазин-и, блогове, персонализирана платформи, уеб базиран софтуер и информативни динамични уеб сайтове"
            link="/web"
            borderColor="bg-primaryBlue-200"
            textColor="text-primaryBlue-200"
            duration={duration}
          />
        )}
        {/* Digital */}
        {digital && (
          <Brand
            altImage="Tech spider logo for strovers' brands"
            imageLink="/logos/digital-spider.svg"
            title="Digital"
            p="Помагаме да достигнете до повече потенциални клиенти, увеличаване на прихода и разширяване на аудиторията Ви"
            link="/digital"
            borderColor="bg-pink"
            textColor="text-pink"
            maxW="max-w-sm"
            mt="mt-10"
            delay={0.2}
            duration={duration}
          />
        )}
        {/* Logictisc */}
        {logistics && (
          <Brand
            altImage="Tech spider logo for strovers' brands"
            imageLink="/logos/transport-spider.svg"
            title="Transport"
            p="Както транспортни услуги, предлагаме също и хамалски услуги от опитни и сръчни професионалисти"
            link="/digital"
            borderColor="bg-orange"
            textColor="text-orange"
            mt="mt-10"
            delay={0.4}
            duration={duration}
          />
        )}
      </section>
    </section>
  );
}
