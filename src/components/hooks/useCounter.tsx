import { useState } from 'react';

export const useCounter = ( initialCount:number = 0 ) => {
    const [counter, setCounter] = useState(initialCount);

    const count = (value:number) => {
        setCounter( counter + value );
    };

    const reset = () => {
        setCounter(0);
    };

    return {
        count,
        reset,
        counter
    }
};
