import {BsFacebook, BsFillCloudHaze2Fill, BsFillCreditCardFill, } from "react-icons/bs"

import { IoIosPeople } from "react-icons/io"
import {CgFileDocument} from "react-icons/cg"
import {GrMoney} from "react-icons/gr"
import { MdOutlineSavedSearch } from "react-icons/md"
import {CiDiscount1} from "react-icons/ci"
import {BiNetworkChart} from "react-icons/bi"


const BenefitsHomeData = [
    {
        title: "Включен SSL сертификат",
        paragraph: "Подсигурена сигурност на потребителите",
        imageUrl: "/icons/ssl-certificate.png"
    },
    {
        title: "Включен хостинг",
        paragraph: "Не е необходимо да заплащате допълнително за хостинг и сървър.",
        imageUrl: "/icons/web-hosting.png"

    },
    {
        title: "Мобилна версия",
        paragraph: "Адаптивен дизайн спрямо устройството, от което се отваря вашият магазин.",
        imageUrl: "/icons/app-development.png"

    },
    {
        title: "Статуси на поръчки",
        paragraph: "нови, платени, обработени и др. статуси за поръчки за по-добра отчетност.",
        imageUrl: "/icons/delivery-status.png"

    },
    {
        title: "Нива на достъп",
        paragraph: "Цялостна система за управление на бизнеса с нива на достъп",
        icon: <IoIosPeople/>
    },
   
    {
        title: "Отстъпки и промо кодове",
        paragraph: "към определени продукти, категории или клиенти на магазина.",
        icon: <GrMoney/>


    },
    {
        title: "100% оптимизиран за търсачки",
        paragraph: "с включени модули за оптимизация за Google. ( sitemap.xml, robots.txt, meta data и други )",
        icon: <MdOutlineSavedSearch/>

    },
    {
        title: "Фиксирани търговски отстъпки",
        paragraph: "към определен клиент или продукт.",
        icon: <CiDiscount1/>

    },

    
    {
        title: "Чат на живо с клиентите",
        paragraph: "Продавайте повече с вграден Messenger или Weavy чат с посетителите си.",
        imageUrl: "/icons/chat.png"

    },
  
    {
        title: "Управлявай администратори",
        paragraph: "Дайте различни права на достъп на служителите в магазина.",
        icon: <BiNetworkChart/>

    },
    {
        title: "Плащане онлайн",
        paragraph: "Възможност клиентите Ви да плащат онлайн с карта.",
        imageUrl: "/icons/cashless-payment-black.png"
    },
    {
        title: "Facebook магазин",
        paragraph: "Със специално приложение, вашият онлайн магазин генерира Facebook магазин",
        icon: <BsFacebook/>
    },
    
//   {
//     title: "Модул доставка",
//     paragraph: "изберете минимална стойност на поръчката за безплатна доставка и др.",
//    imageUrl: "/icons/delivery.png"

// },
    // {
    //     title: "Собствен домейн",
    //     paragraph: "можете да закупите или да поставите собствен домейн адрес.",
    //     imageUrl: "/icons/domain-registration.png"
       

    // },
    // {
    //     title: "Издаване на документи",
    //     paragraph: "фактури и подробни отчети за продажби и наличности на продукти",
    //     icon: <CgFileDocument/>

    // },
    // {
    //     title: "Клиентски карти",
    //     paragraph: "Възможност за издаване на карти и ваучери с промо кодове",
    //     icon: <BsFillCreditCardFill/>
    // },
    // {
    //     title: "Избор на дизайни и цветове",
    //     paragraph: "Избор на дизайни и цветове",
    //     icon: <BsFillCreditCardFill/>

    // },
   
]

export default BenefitsHomeData