import React from 'react';
import GlowBtn from '../../Buttons/GlowBtn';

const WhatIsIncluded = () => {
    return (
        <div className='container flex-col flex-center py-14'>
               <h1 className="text-xl font-bold text-center xl:text-5xl">
        <span className="tracking-wide ">Какво</span>
        <span className="mx-2 text-primary-100">включва услугата?</span>
      </h1>

            <div className='flex-center bg-[#f1fbff] mt-12 flex-col p-10 shadow-xl'>
                <h3 className='text-4xl font-bold'>БАЗОВ ПАКЕТ</h3>
                <p className='text-lg font-bold'>за изработка на уебсайт</p>

                <div className='my-2 text-xl font-medium'>Цена: 300 лв.</div>

                 <div className='my-4'>
                     <ul className='ml-4 list-disc'>
                         <li>Уникална визия по дизайна на уебсайта</li>
                         <li>До 4 страници - Начало, услуги, за нас, контакти</li>
                         <li>Изработка до 3 работни дни</li>
                     </ul>
                 </div>
                <GlowBtn text="Започни сега!" className="w-full"/>
            </div>
        </div>
    );
}

export default WhatIsIncluded;
