import { useState } from 'react';

export const Contador = () => {

    const [counter, setCounter] = useState(0);

    const increment = (value:number) => {
        setCounter( counter + value );
    };

    const reset = () => {
        setCounter(0);
    };

    return (
        <>
            <h3>Contador <small> { counter } </small></h3>
            <button
                className='btn btn-success'
                onClick={ () => increment(+1) }
            >
                +1
            </button>
            &nbsp;
            <button
                className='btn btn-danger'
                onClick={ () => increment(-1) }
            >
                -1
            </button>
            &nbsp;
            <button
                className='btn btn-primary'
                onClick={reset}
            >
                reset
            </button>
        </>
    );
};
