import React from 'react';

const Basics = () => {

    let nombre: string = 'Lucas';
    const edad: number = 35;
    let isActive :boolean = true;

    const poderes: string[] = ['impak trueno', 'rayo'];

    return (
        <>
            <h3>Basics</h3>
            { nombre }, { edad }, { isActive ? 'Active' : 'Not Active' }
            <br />
            { poderes.join(', ') }
        </>
    );
};

export default Basics;