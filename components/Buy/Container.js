import React from 'react';

const Container = ({children}) => {
    return (
        <section className='container my-8 lg:px-20'>
            {children}
        </section>
    );
}

export default Container;
