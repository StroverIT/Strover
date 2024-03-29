import Link from "next/link";
import React from "react";
import HeaderSpider from "../HeaderSpider";
import InfoContainer from "./innerComp/InfoContainer";
import { useTranslation } from "next-i18next";
import TransText from "../layouts/TransText";
export default function Pricing() {
  const trans = "web";
  const { t } = useTranslation(trans);

  return (
    <section
      className="w-full py-32 mt-10 lg:mt-20 bg-primaryBlue-650 box-top"
      id="pricing"
    >
      <section className="flex-center">
        <HeaderSpider
          title="Нашите цени"
          size="text-4xl lg:text-5xl"
          trans="web"
        />
      </section>
      <section className="mt-10 ">
        <InfoContainer
          image="shopping.png"
          title="Онлайн магазин / e-commerce"
          trans={trans}
        >
          <h2 className="text-xl font-semibold">{t("Предназначение")}</h2>

          <p className="pt-1">
            <TransText trans={trans}>
              Да продава артикули онлайн с конвенционален метод за продажба на
              дребно/едро.
            </TransText>
          </p>
          <h2 className="pt-2 text-xl font-semibold">{t("Характеристика")}</h2>
          <ul className="pt-1 ml-4 list-disc">
            <li>
              {t("Производствена галерия с висококачествени изображения")}
            </li>
            <li>{t("продуктови страници")}</li>
            <li>
              {t(
                "Възможности за сигурно плащане/транзакция (със SSL сертификат)"
              )}
            </li>
            <li>
              {t(
                "Опции за персонализиране на акаунта (списъци с желания, запазени поръчки, профилни страници и др.)"
              )}
            </li>
          </ul>
          <p className="pt-4 text-lg font-semibold text-center">
            {t("Цена от")} 600 {t("лв.")}
          </p>
          <SeeMore link="ecommerce" />
        </InfoContainer>
        <InfoContainer
          image="investment.png"
          title="Бизнес сайт"
          isNext={true}
          trans={trans}
        >
          <h2 className="text-xl font-semibold">{t("Предназначение")}</h2>
          <p className="pt-1">
            <TransText trans={trans}>
              Да информирате потенциални клиенти и потребители за вашия бизнес и
              да ги примамите да работят с вас
            </TransText>
          </p>
          <h2 className="pt-2 text-xl font-semibold">{t("Характеристика")}</h2>
          <ul className="pt-1 ml-4 list-disc">
            <li>{t("обяснение на услугите")}</li>
            <li>
              <TransText trans={trans}>
                фирмена биография (обикновено страницата &quot;за нас&quot;)
              </TransText>
            </li>
            <li>
              {t(
                "основни данни за компанията (адрес, телефонен номер, имейл и др.)"
              )}
            </li>
            <li>{t("изявление на мисията")}</li>
            <li>
              {t(
                "справяне с болезнените точки и изявление за настояща стойност"
              )}
            </li>
            <li>{t("призив за действие за съвместна работа")}</li>
          </ul>
          <p className="pt-4 text-lg font-semibold text-center">
            {t("Цена от")} 300 {t("лв.")}
          </p>
          <SeeMore link="business" />
        </InfoContainer>
        <InfoContainer
          image="portfolio_v2.png"
          p="Винаги свежи, за работата да е приятна с нас, достатъчно креативни, за да представим бизнеса 
            Ви по един специален начин, ние сме постоянно мотивирани, за да Ви предложим решения, от които имате нужда!"
          title="Персонален"
          trans={trans}
        >
          <h2 className="text-xl font-semibold">{t("Предназначение")}</h2>
          <p className="pt-1">
            {t(
              "Да показва мостри от работа за определени професионалисти и да привлича повече клиенти"
            )}
          </p>
          <h2 className="pt-2 text-xl font-semibold">{t("Характеристика")}</h2>
          <ul className="pt-1 ml-4 list-disc">
            <li>
              {t("Галерия от висококачествени изображения и работни образци")}
            </li>
            <li>{t("Информация за специалиста или агенцията")}</li>
            <li>{t("Обяснение на услугите")}</li>
            <li>{t("Призив за действие за съвместна работа")}</li>
          </ul>
          <p className="pt-4 text-lg font-semibold text-center">
            {t("Цена от")} 300 {t("лв.")}
          </p>
          <SeeMore link="portfolio" />
        </InfoContainer>
        {/* <InfoContainer
          image="blog.png"
          p="Винаги свежи, за работата да е приятна с нас, достатъчно креативни, за да представим бизнеса 
            Ви по един специален начин, ние сме постоянно мотивирани, за да Ви предложим решения, от които имате нужда!"
          title="Блог / уебсайт за новини "
          isNext={true}
        >
          <h2 className="text-xl font-semibold">Предназначение</h2>
          <p className="pt-1">
            За да образоваме или информираме посетителя за текущи събития или
            специализирани знания.
          </p>
          <h2 className="pt-2 text-xl font-semibold">Характеристики</h2>
          <ul className="pt-1 ml-4 list-disc">
            <li>каталози със статии</li>
            <li>специални страници за всяка статия</li>
            <li>категоризация или тагове за удобно сърфиране</li>
            <li>шлюзове за плащане и възможности за сметка, ако е приложимо</li>
          </ul>
          <p className="pt-4 text-lg font-semibold text-center">
            Цена: 1 500 - 12 000 лв..
          </p>
          <SeeMore link="blog" />
        </InfoContainer> */}

        {/* <InfoContainer
          image="chat.png"
          isNext={true}
          title="Форум"
          trans={trans}
        >
          <h2 className="text-xl font-semibold">{t("Предназначение")}</h2>
          <p className="pt-1">
            <TransText trans={trans}>
              Да позволи на потребителите да обсъждат помежду си и да споделят
              информация и връзки помежду си, обикновено посветени на конкретни
              теми.
            </TransText>
          </p>
          <h2 className="pt-2 text-xl font-semibold">{t("Характеристика")}</h2>
          <ul className="pt-1 ml-4 list-disc">
            <li>{t("организирани дискусионни табла по теми")}</li>
            <li>
              {t(
                "генериране на потребителско съдържание (потребителите могат да качват свое собствено съдържание независимо)"
              )}
            </li>
            <li>{t("модератори")}</li>
            <li>
              {t(
                "персонализиране на акаунта (любими, известия за отговори, биографии на профили и др.)"
              )}
            </li>
          </ul>
          <p className="pt-4 text-lg font-semibold text-center">
            Цена от 1 000 лв..
          </p>
          <SeeMore link="forum" />
        </InfoContainer> */}

        <section className="container mt-10">
          <section>{t("Снимане на продукти - по договаряне")}</section>
          <section>
            <TransText trans={trans}>
              Вкарване на продукти - 0.80 стотинки на продукт. При повече от 1
              000 продукта, е по договаряне
            </TransText>
          </section>
          <section>
            {t("SEO оптимизация - спрямо големината на сайта и типът на сайта")}
          </section>
          <section>
            {t("Поддръжка и развитие на сайта")}: 100 - 1000 {t("лв..")}/
            {t("месец")}
          </section>
        </section>
      </section>
    </section>
  );
}

function SeeMore({ link }) {
  const trans = "web";
  const { t } = useTranslation(trans);

  return (
    <div className="mt-5 flex-center">
      <Link href={`/web/${link}`} scroll={false}>
        <button className="px-10 py-2 text-sm transition-all border rounded-md bg-blue hover:scale-105 hover:bg-transparent ">
          {t("Виж повече")}
        </button>
      </Link>
    </div>
  );
}
