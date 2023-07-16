export const smallFull = {
    oldPrice: 800,
    newPrice: 90,
    products: 30,
    pages: 6    ,
    includes: [
        "Техническа възможност за неограничен брой страници",
        "Мобилна версия",
        "Дизайн за бързо зареждане с мобилни телефони",
        "Дизайн за бързо зареждане с мобилни телефони",
        "Съвместимост с Google Maps и социалните мрежи",
        "Съвместимост с Google Анализ",
        "Онлайн форма за контакти",
        "Статус на поръчката",
        "Нива на достъп. Например Клиент, Служител, Администратор и т.н.",
        "Уникален дизайн.",
        "Функция за бързо обаждане от мобилен телефон",
    ],

    isPromo: false,
}
export const middleFull = {
    oldPrice: 950,
    newPrice: 234,
    pages: 8,

    products: 40 + smallFull.products,
    includes: smallFull.includes.concat([
        "Безплатен Домейн",
        "Интегриран чат на живо",
        "Възможност за плащане онлайн",
    ]),
    isPromo: false,
  
}
export const corporateFull = {
    oldPrice: 1400,
    newPrice: 350,
    pages: 15,

    products: 60 + middleFull.products,
    includes: middleFull.includes.concat([
        "SEO оптимизран / По-голям ранк в търсачките",
        "Facebook Магазин",
        "Промо кодове",
    ]),
    isPromo: false,
  
}

const smallIncludes = [
    "До 24 часа време за реакция при заявка в работни дни",

    "Техническа поддръжка на функционалностти",
    "Поддръжка и конфигурация на SSL сертификат",
]
const middleInlcudes = [
    `Услугите от "Малък бизнес"`,
    "Периодичен анализ и препоръки за подобрение",
    "До 12 часа време за реакция при заявка в работни дни",

]
const corpIncludes =  [
    `Услугите от "Среден бизнес"`,
    "Оптимизация на скоростта на сайта",
    "Разрешаване на спешни проблеми",

]
export const small = {
    oldPrice: smallFull.oldPrice,
    newPrice: smallFull.newPrice,
    products: smallFull.products,
    pages: smallFull.pages,
    includes: smallIncludes,
    isPromo: false,
}

export const middle = {
    oldPrice: middleFull.oldPrice,
    newPrice: middleFull.newPrice,
    products: middleFull.products,
    pages: middleFull.pages,
    includes: middleInlcudes,
    includesWithPrevPlan: small.includes.slice(1).concat(middleInlcudes.slice(1)),

    isPromo: false,
}
export const corp = {
    oldPrice: corporateFull.oldPrice,
    newPrice: corporateFull.newPrice,
    products: corporateFull.products,
    pages: corporateFull.pages,
    includes: corpIncludes,
    includesWithPrevPlan: middle.includesWithPrevPlan.concat(
        corpIncludes.slice(1)
      ),
    isPromo: false,
}

export const services = [
    { name: "seo", price: 125, text: "Желаете ли да оптимизараме търсачките за вашият сайт?" },
    { name: "analyze", price: 52, text: "Периодичен анализ и препоръки за подобрение" },

    { name: "twelveHours", price: 52, text: "До 12 часа време за реакция при заявка в работни дни." },
    { name: "speed", price: 20, text: "Оптимизация на скоростта на сайта" },

    { name: "urgent", price: 36, text: "Разрешаване на спешни проблеми" },
  ];
