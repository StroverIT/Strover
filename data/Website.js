export const smallFull = {
  oldPrice: 800,
  newPrice: 400,
  pages: 4,
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
  pages: 6 + smallFull.pages,
  includes: smallFull.includes.concat([
    "Безплатен Домейн",
    "Интегриран чат на живо",
    "Възможност за плащане онлайн",
  ]),
  isPromo: false,
};
export const corporateFull = {
  oldPrice: 1400,
  newPrice: 900,
  pages: 5 + middleFull.pages,
  includes: middleFull.includes.concat([
    "SEO оптимизран / По-голям ранк в търсачките",
    "Facebook Магазин",
    "Промо кодове",
  ]),
  isPromo: false,
};

const smallIncludes = ["Изработка до 3 работни дни", "GDPR, Политика за лични данни и Cookies ", "Мобилна версия"];
const middleInlcudes = [
  `Услугите от "Малък бизнес"`,
  "Домейн",
  // "Чат на живо",
  "Уникален дизайн",

  //
];
const corpIncludes = [
  `Услугите от "Среден бизнес"`,
  "Блог",
  "Галерия",
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
  // { name: "uniqueDesign", price: 200, text: "Уникален дизайн?" },
  { name: "domain", price: 50, text: "Желаете ли домейн?" },
  { name: "uniqueDesign", price: 140, text: "Желаете ли уникален дизайн?" },

  // { name: "seo", price: 125, text: "Желаете ли да оптимизараме търсачките за вашият сайт?" },
  { name: "blog", price: 100, text: "Блог" },
  { name: "gallery", price: 100, text: "Галерия" },
  { name: "calendar", price: 110, text: "Календар на събития" },
  { name: "reservation", price: 110, text: "Система за резервация" },
];

//   Уникална визия по дизайна на уебсайта
// До 4 страници - Начало, услуги, за нас, контакти
// Изработка до 3 работни дни
