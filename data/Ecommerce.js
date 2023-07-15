export const smallFull = {
    oldPrice: 800,
    newPrice: 600,
    products: 50,
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
    newPrice: 750,
    products: 100 + smallFull.products,
    includes: smallFull.includes.concat([
        "Безплатен Домейн",
        "Интегриран чат на живо",
        "Възможност за плащане онлайн",
    ]),
    isPromo: false,
  
}
export const corporateFull = {
    oldPrice: 1400,
    newPrice: 1200,
    products: 300 + middleFull.products,
    includes: middleFull.includes.concat([
        "SEO оптимизран / По-голям ранк в търсачките",
        "Facebook Магазин",
        "Промо кодове",
    ]),
    isPromo: false,
  
}


export const small = {
    oldPrice: smallFull.oldPrice,
    newPrice: smallFull.newPrice,
    products: smallFull.products,
    includes: [
        "Статус на поръчки",
        "Нива на достъп",
        "Мобилна версия",
        "Уникален дизайн"
    ],
    isPromo: false,
}

export const middle = {
    oldPrice: middleFull.oldPrice,
    newPrice: middleFull.newPrice,
    products: middleFull.products,
    includes: [
        `Услугите от "Малък бизнес"`,
        "Домейн",
        "Чат на живо",
        "Плащане онлайн"
    ],
    isPromo: false,
}
export const corp = {
    oldPrice: corporateFull.oldPrice,
    newPrice: corporateFull.newPrice,
    products: corporateFull.products,
    includes: [
        `Услугите от "Среден бизнес"`,
        "SEO оптимизация",
        "Facebook магазин",
        "Промо кодове"
    ],
    isPromo: false,
}

