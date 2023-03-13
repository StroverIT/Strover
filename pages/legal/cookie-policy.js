import Head from "next/head";
import React from "react";
import Navigation from "../../components/otherPagesNav/Navigation";

import { links } from "../../components/otherPagesNav/cookiePolicy";
import Link from "next/link";
import { BsBoxArrowInLeft } from "react-icons/bs";
import Layout from "../../components/layouts/Layout";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import TransText from "../../components/layouts/TransText";
const trans = "cookiePolicy";
export default function PrivacyPolicy() {
  const { t } = useTranslation(trans);

  return (
    <>
      <Head>
        <title>Strover - Политика за бисквитките</title>

        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Политика на бисквитките ни. Запознайте се как ние използваме и обработваме предоставени данните. За контакти - stroverbg@gmail.com"
        />
      </Head>
      <Navigation links={links} />
      <section className="container text-black mt-36">
        <div>
          <div className="flex items-center mb-10 text-sm">
            <div className="mr-1 text-lg">
              <BsBoxArrowInLeft />
            </div>
            <Link href="/">{t("Към началната страница")}</Link>
          </div>

          <h1 className="text-2xl font-semibold">
            {t("Политика за бисквити")}
          </h1>

          <p className="font-medium">
            {t("Последна актуализация на 8 декември 2022 г")}
          </p>
          <p className="mt-1 font-medium">
            {t("Дата на влизане в сила 08 декември 2022 г")}
          </p>
        </div>
        <section className="mt-10 mb-20">
          <p>
            <TransText trans={trans}>
              Тази Политика за поверителност описва политиките на Strover,
              дружество 2, София 1582, България, имейл: stroverbg@gmail.com,
              телефон: +359 87 6237725 относно събирането, използването и
              разкриването на вашата информация, която събираме, когато
              използвате нашия уебсайт ( https://strover.bg ). (услугата). Чрез
              достъпа до или използването на Услугата вие се съгласявате със
              събирането, използването и разкриването на вашата информация в
              съответствие с тази Политика за поверителност. Ако не сте съгласни
              със същото, моля, не влизайте и не използвайте Услугата.
            </TransText>
          </p>
          <p className="mt-4">
            <TransText trans={trans}>
              Можем да променим тази Политика за поверителност по всяко време
              без предизвестие до Вас и ще публикуваме преработената Политика за
              поверителност в Услугата. Ревизираната Политика ще влезе в сила
              180 дни след публикуването на ревизираната Политика в Услугата и
              вашият продължаващ достъп или използване на Услугата след този
              период ще означава приемане от Ваша страна на ревизираната
              Политика за поверителност. Затова ви препоръчваме периодично да
              преглеждате тази страница.
            </TransText>
          </p>
          <h2 className="mt-6 ml-4 font-semibold" id="pointOne">
            {t("ИНФОРМАЦИЯ, КОЯТО СЪБИРАМЕ:")}
          </h2>
          <p className="mt-4 ml-10">
            {t("Ще събираме и обработваме следната лична информация за Вас:")}
          </p>
          <ul className="mt-4 ml-20 list-disc">
            <li>{t("Име")}</li>
            <li>{t("И-мейл")}</li>
            <li>{t("Телефон")}</li>
            <li>{t("Пол")}</li>
          </ul>
          <h3 className="mt-6 ml-4 font-semibold" id="pointTwo">
            {t("КАК СЪБИРАМЕ ВАШАТА ИНФОРМАЦИЯ:")}
          </h3>
          <p className="mt-4 ml-10">
            {t("Ние събираме/получаваме информация за Вас по следния начин:")}
          </p>
          <ul className="mt-4 ml-20 list-disc">
            <li>
              <TransText trans={trans}>
                Когато потребителят попълни регистрационния формуляр или по друг
                начин изпрати лична информация
              </TransText>
            </li>
            <li>{t("Взаимодейства с уебсайта")}</li>
            <li>{t("От публични източници")}</li>
          </ul>

          <h3 className="mt-6 ml-4 font-semibold" id="pointThree">
            {t("КАК ИЗПОЛЗВАМЕ ВАШАТА ИНФОРМАЦИЯ:")}
          </h3>
          <p className="mt-4 ml-10">
            {t(
              "Ние ще използваме информацията, която събираме за вас за следните цели:"
            )}
          </p>
          <ul className="mt-4 ml-20 list-disc">
            <li>{t("Маркетинг/ Промоционални")}</li>
            <li>{t("Създаване на потребителски акаунт")}</li>
            <li>{t("Препоръки")}</li>
            <li>{t("Плащането се обработва")}</li>
            <li>{t("поддържа")}</li>
            <li>{t("Информация за администрацията")}</li>
            <li>{t("Целенасочена реклама")}</li>
            <li>{t("Защита на сайта")}</li>
            <li>{t("Управление на потребителския акаунт")}</li>
          </ul>
          <p className="mt-4 ml-10">
            <TransText trans={trans}>
              Ако искаме да използваме вашата информация за някаква друга цел,
              ние ще ви поискаме съгласие и ще използваме вашата информация само
              след като получим вашето съгласие и след това само за целта(ите),
              за която(ите) даваме съгласието, освен ако от нас не се изисква да
              направим друго закон.
            </TransText>
          </p>
          <h3 className="mt-6 ml-4 font-semibold" id="pointFour">
            {t("КАК СПОДЕЛЯМЕ ВАШАТА ИНФОРМАЦИЯ:")}
          </h3>
          <p className="mt-4 ml-10">
            <TransText trans={trans}>
              Ние няма да прехвърлим вашата лична информация на трета страна,
              без да поискаме вашето съгласие, освен при ограничени
              обстоятелства, както е описано по-долу:
            </TransText>
          </p>
          <ul className="mt-4 ml-20 list-disc">
            <li>{t("Рекламна услуга")}</li>
            <li>{t("Анализ")}</li>
          </ul>
          <p className="mt-4 ml-10">
            {t(
              "Ние изискваме от тези трети страни да използват личната информация, която им предаваме, само за целта, за която е била прехвърлена, и да не я задържат по-дълго, отколкото е необходимо за изпълнение на споменатата цел."
            )}
          </p>

          <p className="mt-4 ml-10">
            <TransText trans={trans}>
              Може също така да разкрием вашата лична информация за следното:
              (1) за спазване на приложим закон, наредба, съдебно разпореждане
              или друг правен процес; (2) за прилагане на вашите споразумения с
              нас, включително тази Политика за поверителност; или (3) за да
              отговорим на твърдения, че използването на Услугата от ваша страна
              нарушава права на трети страни. Ако Услугата или нашата компания
              се слеят или придобият с друга компания, вашата информация ще бъде
              един от активите, които се прехвърлят на новия собственик.
            </TransText>
          </p>
          <h3 className="mt-6 ml-4 font-semibold" id="pointFive">
            {t("ЗАПАЗВАНЕ НА ВАШАТА ИНФОРМАЦИЯ:")}
          </h3>
          <p className="mt-4 ml-10">
            <TransText trans={trans}>
              Ние ще запазим вашата лична информация при нас от 90 дни до 2
              години, след като потребителските акаунти останат неактивни, или
              толкова дълго, колкото ни е необходима, за да изпълним целите, за
              които е събрана, както е описано подробно в тази Политика за
              поверителност. Може да се наложи да запазим определена информация
              за по-дълги периоди, като водене на записи/отчитане в съответствие
              с приложимото законодателство или по други законни причини като
              прилагане на законни права, предотвратяване на измами и т.н.
              Остатъчна анонимна информация и обобщена информация, нито една от
              които не ви идентифицира (пряко или косвено), могат да се
              съхраняват за неопределено време.
            </TransText>
          </p>
          <h3 className="mt-6 ml-4 font-semibold" id="pointFive">
            {t("ВАШИТЕ ПРАВА:")}
          </h3>
          <p className="mt-4 ml-10">
            <TransText trans={trans}>
              В зависимост от приложимия закон може да имате право на достъп и
              коригиране или изтриване на вашите лични данни или да получите
              копие от вашите лични данни, да ограничите или да възразите срещу
              активното обработване на вашите данни, да поискате от нас да
              споделим (пренесем) вашите лични данни информация на друг субект,
              оттегляне на всяко съгласие, което сте ни предоставили за
              обработка на вашите данни, право на подаване на жалба до законов
              орган и такива други права, които могат да бъдат приложими
              съгласно приложимите закони. За да упражните тези права, можете да
              ни пишете на stroverbg@gmail.com. Ние ще отговорим на вашето
              искане в съответствие с приложимото законодателство.
            </TransText>
          </p>

          <p className="mt-4 ml-10">
            <TransText trans={trans}>
              Можете да се откажете от директните маркетингови комуникации или
              профилирането, което извършваме за маркетингови цели, като ни
              пишете на stroverbg@gmail.com.
            </TransText>
          </p>
          <p className="mt-4 ml-10">
            <TransText trans={trans}>
              Имайте предвид, че ако не ни позволите да събираме или обработваме
              необходимата лична информация или оттеглите съгласието за
              обработка на същата за изискваните цели, може да нямате достъп до
              или да използвате услугите, за които е била търсена вашата
              информация.
            </TransText>
          </p>
          <h3 className="mt-6 ml-4 font-semibold" id="pointSix">
            {t("СИГУРНОСТ:")}
          </h3>
          <p className="mt-4 ml-10">
            <TransText trans={trans}>
              Сигурността на вашата информация е важна за нас и ние ще
              използваме разумни мерки за сигурност, за да предотвратим загуба,
              злоупотреба или неразрешена промяна на вашата информация под наш
              контрол. Въпреки това, предвид присъщите рискове, не можем да
              гарантираме абсолютна сигурност и следователно не можем да
              гарантираме или гарантираме сигурността на каквато и да е
              информация, която ни предавате, и вие го правите на свой собствен
              риск.
            </TransText>
          </p>
          <h3 className="mt-6 ml-4 font-semibold" id="pointSeven">
            {t("ВРЪЗКИ НА ТРЕТИ СТРАНИ И ИЗПОЛЗВАНЕ НА ВАШАТА ИНФОРМАЦИЯ:")}
          </h3>
          <p className="mt-4 ml-10">
            <TransText trans={trans}>
              Нашата услуга може да съдържа връзки към други уебсайтове, които
              не се управляват от нас. Тази Политика за поверителност не се
              отнася до политиката за поверителност и други практики на трети
              страни, включително трета страна, управляваща уебсайт или услуга,
              които могат да бъдат достъпни чрез връзка в Услугата. Горещо ви
              съветваме да прегледате политиката за поверителност на всеки сайт,
              който посещавате. Ние нямаме контрол и не поемаме отговорност за
              съдържанието, политиките за поверителност или практиките на
              сайтове или услуги на трети страни.
            </TransText>
          </p>
          <h3 className="mt-6 ml-4 font-semibold" id="pointEight">
            {t("ЖАЛБА / ДЛЪЖНОСТНО ЛИЦЕ ПО ЗАЩИТА НА ДАННИТЕ:")}
          </h3>
          <p className="mt-4 ml-10">
            <TransText trans={trans}>
              Ако имате някакви въпроси или притеснения относно обработката на
              вашата информация, която е достъпна при нас, можете да изпратите
              имейл до нашия служител по жалбите на Strover, drujba 2, имейл:
              stroverbg@gmail.com. Ние ще отговорим на вашите опасения в
              съответствие с приложимото законодателство.
            </TransText>
          </p>
        </section>
      </section>
    </>
  );
}
PrivacyPolicy.getLayout = (page) => (
  <Layout useTranslation={useTranslation}>{page}</Layout>
);

export const getServerSideProps = async ({ locale }) => {
  // Wrapping in Promis.all is not necessary, I use it simply so that if there are any other asynchronous operations, then not to use them through await and not to block each other's work
  const [translations] = await Promise.all([
    serverSideTranslations(locale, ["cookiePolicy", "common", "footer"]),
  ]);

  return {
    props: {
      ...translations,
    },
  };
};
