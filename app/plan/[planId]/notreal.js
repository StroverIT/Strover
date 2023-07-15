// import React from "react";
// import InitText from "../../../components/InitText";

// import GlowBtn from "../../../components/Buttons/GlowBtn";
// import Link from "next/link";
// import PageWrapper from "../../../components/Animated/PageWrapper";
// import PromoPricing from "../../../components/Pricings/PromoPricing";
// import Price from "../../../components/Pricings/Price";



// import switchById from "./switchById"

// export async function generateMetadata(
//   { params, searchParams },
//   parent
// ){
//   // read route params
//     const {planId} = params

//   const {oldPrice, newPrice, includes, products, text, title} = switchById(planId)
//   // fetch data
 
//   // optionally access and extend (rather than replace) parent metadata
 
//   return {
//     title: `Планове за електронна търговия от Strover за ${title} `,
//     description: `Открийте плановете за електронна търговия на Strover, 
//     създадени специално за малките бизнеси. Отключете силата на онлайн успеха с 
//   нашите приемливи решения на цена от само ${newPrice} лева. От надеждни функции до подкрепа, 
//   нашите планове са създадени, за да помогнат на вашия бизнес да процъфтява в дигиталната среда.
//    `,
//   }
// }



// const Page = ({params}) => {
//   const {planId} = params
//   const {oldPrice, newPrice, includes, products, text, isPromo} = switchById(planId)
  
  
//   return (
//     <section className="">
//       <InitText text={text} />

//       <PageWrapper>

//         <div className="pb-20 xl:container lg:px-24">

//           <section className="max-xl:container">
//             <section className="flex mb-4 text-2xl gap-x-3">
//               <h2 className="">Цена: </h2>
//              {isPromo && <PromoPricing oldPrice={oldPrice} newPrice={newPrice}/>}
//              {!isPromo && <Price price={newPrice}/>}


//             </section>
//             <p>
//               <strong>Изработка на</strong> бизнес сайт от Стровър. Ще получите
//               вашия сайт напълно готов до<strong> 1 седмица</strong>. Нещо повече - ще имате ваш админ панел и ще
//               можете много лесно и без да са нужни никакви специални умения да
//               <strong className="pl-1">променяте, добавяте и премахвате продукти,</strong> ще имате имате възможността
//               да добавяте промоции не само на продуктите, но и да добавяте и лични
//               промоции на самите клиенти и служители. 
//               <br/>
//               <strong className="mr-1">Сайтът е съвместим със</strong>
//               социалните профили, локации в Гугъл карта и предлага бърз начин за
//               връзка с вас.
//               <br/>
//               <span className="mt-2">Освен функциите които са изброени по-горе, ще имате и възможността да <strong>достигнете до повече клиенти,</strong> което мигновено означава, че имате по-голям шанс за развитие. </span>
//             </p>
//             <h1 className="mt-8 mb-1 text-2xl font-medium">Изработка на сайт включва:</h1>
//             <ul className="ml-5 list-disc">
//               {includes?.map((data, i)=>{
//                   return <li key={i}>{data};</li>
//               })}
//               <li>Създаване до {products}. <strong className="text-sm">* Има възможност и за повече по договаряне</strong></li>
//               {/* <li>
//                 Поддръжка на 2 езикови версии с възможност да добавяне на
//                 допълнителни
//               </li> */}
//             </ul>
//             <h1 className="mt-8 mb-1 text-2xl font-medium">Допълнителни предимства:</h1>
//             <ul className="ml-5 list-disc">
//               <li>Възможност за зареждане от <strong>собствен домейн;</strong></li>
//               <li><strong>Безплатен хостинг;</strong></li>
//               <li><strong>SSL</strong> сертификат;</li>
//               <li>Готов за <strong>SEO</strong> оптимизация;</li>
//               {/* <li>Пълна техническа поддръжка.</li> */}
//             </ul>
//             <h2 className="mt-8 mb-1 text-2xl font-medium">
//               Покрива и юридическите изисквания:
//             </h2>
//             <ul className="ml-5 list-disc">
//               <li>
//                 Сайтът е <strong>GDPR съвместим</strong> с функция за автоматично попълване на
//                 декларация за разрешение за ползване на лични данни;
//               </li>
//               <li>Съобщение и <strong>съгласие за ползване на &quot;Cookies&quot;;</strong></li>
//               <li>Функция за съгласие с <strong>политика за поверителност.</strong></li>
//             </ul>
//             <h1 className="mt-8 mb-1 text-2xl font-medium">Гаранция:</h1>
//             <ul className="ml-5 list-disc">
//               <li><strong>Безплатни консултации</strong> при всякакви уеб въпроси.</li>
//               <li>
//                 Всеки сайт от Стровър е <strong>изцяло оптимизиран</strong>!{" "}
//               </li>
//               <li><strong>Тест и преглед</strong> преди пускане онлайн с възможност за редакции!</li>
//             </ul>
//           </section>
//             <Link href={`/plan/${planId}/choose`}>
//               <div className="max-xl:sticky max-xl:bottom-0 max-xl:w-full max-xl:left-0">
//                 <GlowBtn text="Купи сега!" className="w-full py-4 mt-8 text-2xl" />
//               </div>
//             </Link>
//         </div>
//       </PageWrapper>
//     </section>
//   );
// };

// export default Page;
