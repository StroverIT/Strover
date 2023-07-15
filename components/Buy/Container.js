import React from 'react';

const Container = ({children}) => {
    return (
        <section className='container px-20 my-8'>
            {children}
        </section>
    );
}

export default Container;
