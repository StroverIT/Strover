import React from 'react';
import Plans from "../../components/pages/Ecommerce/Plans"
import PageWrapper from '../../components/Animated/PageWrapper';

export const metadata = {
    title: "Планове за електронна търговия от Strover | Изберете перфектното решение за вашия онлайн бизнес",
    description: "Разгледайте обширния ни набор от планове за електронна търговия, създадени специално за отговаряне на специфичните нужди на вашия онлайн бизнес. От гъвкави опции за стартиращи фирми до надеждни решения за утвърдени предприятия, ние разполагаме с перфектния план, за да дадем сила на вашия успех в електронната търговия. Открийте идеалното решение за вашето бизнес днес.",
  };

const Page = () => {
    return (
        <PageWrapper>
            <div className='max-xl:pt-20'>
                   <Plans/>
            
            </div>
        </PageWrapper>
    );
}

export default Page;
