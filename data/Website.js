export const smallFull = {
    oldPrice: 800,
    newPrice: 400,
    pages: 20,
    includes: [
      "Техническа възможност за неограничен брой страници",
      "Мобилна версия",
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
  };
  export const middleFull = {
    oldPrice: 950,
    newPrice: 650,
    pages: 30 + smallFull.pages,
    includes: smallFull.includes.concat([
      "Безплатен Домейн",
      "Интегриран чат на живо",
      "Възможност за плащане онлайн",
    ]),
    isPromo: false,
  };
  export const corporateFull = {
    oldPrice: 1400,
    newPrice: 980,
    pages: 80 + middleFull.pages,
    includes: middleFull.includes.concat([
      "SEO оптимизран / По-голям ранк в търсачките",
      "Facebook Магазин",
      "Промо кодове",
    ]),
    isPromo: false,
  };
  
  const smallIncludes = ["Статус на поръчки", "Нива на достъп", "Мобилна версия"];
  const middleInlcudes = [
    `Услугите от "Малък бизнес"`,
    "Домейн",
    // "Чат на живо",
    "Уникален дизайн",
  
    //
  ];
  const corpIncludes = [
    `Услугите от "Среден бизнес"`,
    "Facebook магазин",
    "Плащане онлайн",
  ];
  export const small = {
    oldPrice: smallFull.oldPrice,
    newPrice: smallFull.newPrice,
    pages: smallFull.pages,
    includes: smallIncludes,
    isPromo: false,
  };
  
  export const middle = {
    oldPrice: middleFull.oldPrice,
    newPrice: middleFull.newPrice,
    pages: middleFull.pages,

    includes: middleInlcudes,
  
    includesWithPrevPlan: small.includes.concat(middleInlcudes.slice(1)),
    isPromo: false,
  };
  export const corp = {
    oldPrice: corporateFull.oldPrice,
    newPrice: corporateFull.newPrice,
    pages: corporateFull.pages,

    includes: corpIncludes,
    includesWithPrevPlan: middle.includesWithPrevPlan.concat(
      corpIncludes.slice(1)
    ),
  
    isPromo: false,
  };
  
  // "SEO оптимизация", - Допълнително
  // "Промо кодове", - Допълнително
  
  export const services = [
    { name: "uniqueDesign", price: 200, text: "Уникален дизайн?" },
    { name: "domain", price: 50, text: "Желаете ли домейн?" },
    { name: "seo", price: 125, text: "Желаете ли да оптимизараме търсачките за вашият сайт?" },
    { name: "chat", price: 20, text: "Желаете ли чат на живо с клиентите?" },
    { name: "onlinePayment", price: 60, text: "Желаете ли онлайн плащания?" },
    { name: "promoCodes", price: 20, text: "Промо кодове?" },
    { name: "specialPromo", price: 40, text: "Лични промоции за спефицични клиентите?" },
    { name: "facebookShop", price: 206, text: "Желаете ли Facebook Магазин?" },
  ];
  

//   Уникална визия по дизайна на уебсайта
// До 4 страници - Начало, услуги, за нас, контакти
// Изработка до 3 работни дни