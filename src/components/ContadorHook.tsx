import { useCounter } from "./hooks/useCounter";


export const ContadorHook = () => {

    const { count, reset, counter } = useCounter();   

    return (
        <>
            <h3>Contador <small> { counter } </small></h3>
            <button
                className='btn btn-success'
                onClick={ () => count(+1) }
            >
                +1
            </button>
            &nbsp;
            <button
                className='btn btn-danger'
                onClick={ () => count(-1) }
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
