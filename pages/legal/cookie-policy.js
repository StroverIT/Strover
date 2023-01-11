import Head from "next/head";
import React from "react";
import Navigation from "../../components/otherPagesNav/Navigation";

import { links } from "../../components/otherPagesNav/cookiePolicy";
import Link from "next/link";
import { BsBoxArrowInLeft } from "react-icons/bs";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
        <title>Политика за бисквитките</title>
      </Head>
      <Navigation links={links} />
      <section className="container text-black mt-36">
        <div>
          <div className="text-sm mb-10 flex items-center">
            <div className="mr-1 text-lg">
              <BsBoxArrowInLeft />
            </div>
            <Link href="/">Към началната страница</Link>
          </div>

          <h2 className="text-2xl font-semibold">Политика за поверителност</h2>

          <p className="font-medium">
            Последна актуализация на 8 декември 2022 г
          </p>
          <p className="mt-1 font-medium">
            Дата на влизане в сила 08 декември 2022 г
          </p>
        </div>
        <section className="mt-10 mb-20">
          <p>
            Тази Политика за поверителност описва политиките на Strover,
            дружество 2, София 1582, България, имейл: stroverbg@gmail.com,
            телефон: +359 87 6237725 относно събирането, използването и
            разкриването на вашата информация, която събираме, когато използвате
            нашия уебсайт ( https://strover.bg ). (услугата). Чрез достъпа до
            или използването на Услугата вие се съгласявате със събирането,
            използването и разкриването на вашата информация в съответствие с
            тази Политика за поверителност. Ако не сте съгласни със същото,
            моля, не влизайте и не използвайте Услугата.
          </p>
          <p className="mt-4">
            Можем да променим тази Политика за поверителност по всяко време без
            предизвестие до Вас и ще публикуваме преработената Политика за
            поверителност в Услугата. Ревизираната Политика ще влезе в сила 180
            дни след публикуването на ревизираната Политика в Услугата и вашият
            продължаващ достъп или използване на Услугата след този период ще
            означава приемане от Ваша страна на ревизираната Политика за
            поверителност. Затова ви препоръчваме периодично да преглеждате тази
            страница.
          </p>
          <h3 className="mt-6 ml-4 font-semibold" id="pointOne">
            ИНФОРМАЦИЯ, КОЯТО СЪБИРАМЕ:
          </h3>
          <p className="mt-4 ml-10">
            Ще събираме и обработваме следната лична информация за Вас:
          </p>
          <ul className="mt-4 ml-20 list-disc">
            <li>Име</li>
            <li>И-мейл</li>
            <li>Телефон</li>
            <li>Пол</li>
          </ul>
          <h3 className="mt-6 ml-4 font-semibold" id="pointTwo">
            КАК СЪБИРАМЕ ВАШАТА ИНФОРМАЦИЯ:
          </h3>
          <p className="mt-4 ml-10">
            Ние събираме/получаваме информация за Вас по следния начин:
          </p>
          <ul className="mt-4 ml-20 list-disc">
            <li>
              Когато потребителят попълни регистрационния формуляр или по друг
              начин изпрати лична информация
            </li>
            <li>Взаимодейства с уебсайта</li>
            <li>От публични източници</li>
          </ul>

          <h3 className="mt-6 ml-4 font-semibold" id="pointThree">
            КАК ИЗПОЛЗВАМЕ ВАШАТА ИНФОРМАЦИЯ:
          </h3>
          <p className="mt-4 ml-10">
            Ние ще използваме информацията, която събираме за вас за следните
            цели:
          </p>
          <ul className="mt-4 ml-20 list-disc">
            <li>Маркетинг/ Промоционални</li>
            <li>Създаване на потребителски акаунт</li>
            <li>Препоръки</li>
            <li>Плащането се обработва</li>
            <li>поддържа</li>
            <li>Информация за администрацията</li>
            <li>Целенасочена реклама</li>
            <li>Защита на сайта</li>
            <li>Управление на потребителския акаунт</li>
          </ul>
          <p className="mt-4 ml-10">
            Ако искаме да използваме вашата информация за някаква друга цел, ние
            ще ви поискаме съгласие и ще използваме вашата информация само след
            като получим вашето съгласие и след това само за целта(ите), за
            която(ите) даваме съгласието, освен ако от нас не се изисква да
            направим друго закон.
          </p>
          <h3 className="mt-6 ml-4 font-semibold" id="pointFour">
            КАК СПОДЕЛЯМЕ ВАШАТА ИНФОРМАЦИЯ:
          </h3>
          <p className="mt-4 ml-10">
            Ние няма да прехвърлим вашата лична информация на трета страна, без
            да поискаме вашето съгласие, освен при ограничени обстоятелства,
            както е описано по-долу:
          </p>
          <ul className="mt-4 ml-20 list-disc">
            <li>Рекламна услуга</li>
            <li>Анализ</li>
          </ul>
          <p className="mt-4 ml-10">
            Ние изискваме от тези трети страни да използват личната информация,
            която им предаваме, само за целта, за която е била прехвърлена, и да
            не я задържат по-дълго, отколкото е необходимо за изпълнение на
            споменатата цел.
          </p>

          <p className="mt-4 ml-10">
            Може също така да разкрием вашата лична информация за следното: (1)
            за спазване на приложим закон, наредба, съдебно разпореждане или
            друг правен процес; (2) за прилагане на вашите споразумения с нас,
            включително тази Политика за поверителност; или (3) за да отговорим
            на твърдения, че използването на Услугата от ваша страна нарушава
            права на трети страни. Ако Услугата или нашата компания се слеят или
            придобият с друга компания, вашата информация ще бъде един от
            активите, които се прехвърлят на новия собственик.
          </p>
          <h3 className="mt-6 ml-4 font-semibold" id="pointFive">
            ЗАПАЗВАНЕ НА ВАШАТА ИНФОРМАЦИЯ:
          </h3>
          <p className="mt-4 ml-10">
            Ние ще запазим вашата лична информация при нас от 90 дни до 2
            години, след като потребителските акаунти останат неактивни, или
            толкова дълго, колкото ни е необходима, за да изпълним целите, за
            които е събрана, както е описано подробно в тази Политика за
            поверителност. Може да се наложи да запазим определена информация за
            по-дълги периоди, като водене на записи/отчитане в съответствие с
            приложимото законодателство или по други законни причини като
            прилагане на законни права, предотвратяване на измами и т.н.
            Остатъчна анонимна информация и обобщена информация, нито една от
            които не ви идентифицира (пряко или косвено), могат да се съхраняват
            за неопределено време.
          </p>
          <h3 className="mt-6 ml-4 font-semibold" id="pointFive">
            ВАШИТЕ ПРАВА:
          </h3>
          <p className="mt-4 ml-10">
            В зависимост от приложимия закон може да имате право на достъп и
            коригиране или изтриване на вашите лични данни или да получите копие
            от вашите лични данни, да ограничите или да възразите срещу
            активното обработване на вашите данни, да поискате от нас да
            споделим (пренесем) вашите лични данни информация на друг субект,
            оттегляне на всяко съгласие, което сте ни предоставили за обработка
            на вашите данни, право на подаване на жалба до законов орган и
            такива други права, които могат да бъдат приложими съгласно
            приложимите закони. За да упражните тези права, можете да ни пишете
            на stroverbg@gmail.com. Ние ще отговорим на вашето искане в
            съответствие с приложимото законодателство.
          </p>

          <p className="mt-4 ml-10">
            Можете да се откажете от директните маркетингови комуникации или
            профилирането, което извършваме за маркетингови цели, като ни пишете
            на stroverbg@gmail.com.
          </p>
          <p className="mt-4 ml-10">
            Имайте предвид, че ако не ни позволите да събираме или обработваме
            необходимата лична информация или оттеглите съгласието за обработка
            на същата за изискваните цели, може да нямате достъп до или да
            използвате услугите, за които е била търсена вашата информация.
          </p>
          <h3 className="mt-6 ml-4 font-semibold" id="pointSix">
            СИГУРНОСТ:
          </h3>
          <p className="mt-4 ml-10">
            Сигурността на вашата информация е важна за нас и ние ще използваме
            разумни мерки за сигурност, за да предотвратим загуба, злоупотреба
            или неразрешена промяна на вашата информация под наш контрол.
            Въпреки това, предвид присъщите рискове, не можем да гарантираме
            абсолютна сигурност и следователно не можем да гарантираме или
            гарантираме сигурността на каквато и да е информация, която ни
            предавате, и вие го правите на свой собствен риск.
          </p>
          <h3 className="mt-6 ml-4 font-semibold" id="pointSeven">
            ВРЪЗКИ НА ТРЕТИ СТРАНИ И ИЗПОЛЗВАНЕ НА ВАШАТА ИНФОРМАЦИЯ:
          </h3>
          <p className="mt-4 ml-10">
            Нашата услуга може да съдържа връзки към други уебсайтове, които не
            се управляват от нас. Тази Политика за поверителност не се отнася до
            политиката за поверителност и други практики на трети страни,
            включително трета страна, управляваща уебсайт или услуга, които
            могат да бъдат достъпни чрез връзка в Услугата. Горещо ви съветваме
            да прегледате политиката за поверителност на всеки сайт, който
            посещавате. Ние нямаме контрол и не поемаме отговорност за
            съдържанието, политиките за поверителност или практиките на сайтове
            или услуги на трети страни.
          </p>
          <h3 className="mt-6 ml-4 font-semibold" id="pointEight">
            ЖАЛБА / ДЛЪЖНОСТНО ЛИЦЕ ПО ЗАЩИТА НА ДАННИТЕ:
          </h3>
          <p className="mt-4 ml-10">
            Ако имате някакви въпроси или притеснения относно обработката на
            вашата информация, която е достъпна при нас, можете да изпратите
            имейл до нашия служител по жалбите на Strover, drujba 2, имейл:
            stroverbg@gmail.com. Ние ще отговорим на вашите опасения в
            съответствие с приложимото законодателство.
          </p>
        </section>
      </section>
    </>
  );
}
