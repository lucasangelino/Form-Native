import React from 'react';

const Basics = () => {

    let nombre: string | number = 'Lucas';
    nombre = 1234;

    return (
        <>
            <h3>Basics</h3>
            { nombre }
        </>
    );
};

export default Basics;