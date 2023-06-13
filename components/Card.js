import Image from 'next/image';
import React from 'react';

const Card = ({title, paragraph, index, imgSrc} ) => {
    return (
        <div className='relative px-12 py-6 text-center bg-white shadow-2xl rounded-xl'>
            
            <div className='mb-2 text-lg font-bold'>{title}</div>
<div>{paragraph}</div>
{index && <div className='absolute px-4 py-2 text-2xl text-white border-2 rounded-full -top-4 -left-4 border-primary-white bg-primary-450 shadow-5xl'>{index}</div>}


        </div>
    );
}

export default Card;
