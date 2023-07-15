import React from 'react';
import Inputs from "../../../app/contactUs/Inputs"


const Container = ({className}) => {
    return (
        <section className={className}>
        <h1 className="mb-2 text-2xl xl:text-5xl">Имате въпроси?</h1>
        <h2 className="text-[#a7a7a7] text-2xl text-xl:text-5xl mb-16">Оставете ни съобщение</h2>
        <Inputs/>
        </section>
    );
}

export default Container;
